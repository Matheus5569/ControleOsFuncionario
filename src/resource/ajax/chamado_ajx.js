async function CarregarEquipamentoSetor() {
    const dadosEnviar = {
        endpoint: API_LISTAR_EQUIPAMENTO_SETOR,
        setor_id: CodigoSetorLogado()
    }
    try {
        Load();

        const response = await fetch(BASE_URL_API(),
            {
                method: "post",
                headers: HEADER_COM_AUTENTICACAO(),
                body: JSON.stringify(dadosEnviar)
            });
        if (!response.ok)
            throw new Error(MSG_ERRO_CALL_API);
        const objdados = await response.json();

        if (objdados.result == NAO_AUTORIZADO) {
            Sair();
            return;
        }
        const equipamentos = objdados.result;
        const combo_equipamento = document.getElementById("equipamento");
        combo_equipamento.innerHTML = "<option value=''>Selecione</option>";
        equipamentos.forEach((item) => {
            const opt = document.createElement('option');
            opt.value = item.alocar_id;
            opt.text = item.nome_tipo + " / " + item.nome_modelo + " / Identificação: " + item.identificacao;
            combo_equipamento.appendChild(opt);
        })

    } catch (erro) {
        Mensagem(erro.Mensagem, COR_MSG_ERRO);
    } finally {
        RemoverLoad();
    }
}
async function DetalharChamado(id_chamado) {
    if (id_chamado != "") {

        const dadosEnviar = {
            endpoint: API_DETALHAR_CHAMADO,
            id: id_chamado
        }
        try {
            Load();
            const response = await fetch(BASE_URL_API(), {
                method: "post",
                headers: HEADER_COM_AUTENTICACAO(),
                body: JSON.stringify(dadosEnviar)
            });
            if (!response.ok)
                throw new Error(MSG_ERRO_CALL_API);

            const objdados = await response.json();
            const chamado = objdados.result;
            if (objdados.result == NAO_AUTORIZADO) {
                Sair();
                return;
            }

            SetarCampoValor("equipamento", chamado.nome_tipo + " / " + chamado.nome_modelo + " / " + chamado.identificacao);
            SetarCampoValor("data_abertura", chamado.data_abertura);
            SetarCampoValor("problema", chamado.problema);
            //SetarCampoValor("id_chamado", chamado.id_chamado);
            SetarCampoValor("tec_iniciou", chamado.tecnico_atendimento);
            SetarCampoValor("data_iniciou", chamado.data_atendimento);
            //SetarCampoValor("id_alocar", chamado.alocar_id);
            SetarCampoValor("data_finalizou", chamado.data_encerramento);
            SetarCampoValor("tec_finalizou", chamado.tecnico_finalizado);
            SetarCampoValor("laudo", chamado.laudo);

        } catch (error) {
            Mensagem(error.message, COR_MSG_ERRO);
        }
        finally {
            RemoverLoad();
        }
    }
}
async function FiltrarChamado() {
    MostrarElemento("resultado", false);

    const dadosEnviar = {
        endpoint: API_FILTRAR_CHAMADO,
        situacao: PegarValor("situacao"),
        setor_id: CodigoSetorLogado()
    }
    try {
        Load();
        const response = await fetch(BASE_URL_API(), {
            method: "post",
            headers: HEADER_COM_AUTENTICACAO(),
            body: JSON.stringify(dadosEnviar)
        });
        if (!response.ok)
            throw new Error(MSG_ERRO_CALL_API);
        const objdados = await response.json();
        const chamados = objdados.result;

        if (objdados.result == NAO_AUTORIZADO) {
            Sair();
            return;
        }

        if (chamados.length === 0) {
            Mensagem(MSG_DADOS_NAO_ENCONTRADO, COR_MSG_INFORMACAO);
            return;
        }

        const tab_result = document.getElementById("table_result");
        let tab_content = ` <thead>
                                   <tr>
                                       <th></th>
                                       <th>Data Abertura</th>
                                       <th>Funcionário</th>
                                        <th>Situação</th>
                                       <th>Equipamento</th>
                                       <th>Problema</th>
                                   </tr>
                            </thead>
                                <tbody>`;
        let data_tr = '';
        let situacao = '';

        chamados.forEach((item) => {
            situacao = VerSituacao(item.data_atendimento, item.data_encerramento)

            data_tr += ` <tr>
                             <td>`;
            if (item.tecnico_atendimento != null)
                data_tr += `<a href="#" onclick="DetalharChamado(${item.chamado_id})" class="btn btn-warning btn-xs"   data-toggle="modal" data-target="#modal-detalhes">Ver detalhes</a>`
         
            data_tr += `</td>
                              <td>${item.data_abertura}</td>
                              <td>${item.funcionario}</td>
                               <th>${situacao}</th>
                               <td>${item.nome_tipo + " / " + item.nome_modelo + " / " + item.identificacao}</td>
                              <td>${item.problema}</td>
                        </tr>`
        });
        tab_content += data_tr;
        tab_content += " </tbody>";
        tab_result.innerHTML = tab_content;
        MostrarElemento("resultado", true);

    }
    catch (error) {
        Mensagem(error.message, COR_MSG_ERRO);
    } finally {
        RemoverLoad();
    }
}
async function AbrirChamado(formID) {
    if (await NotificarCampos(formID)) {
        const dadosEnviar = {
            endpoint: API_ABRIR_CHAMADO,
            alocar_id: PegarValor("equipamento"),
            funcionario_id: CodigoLogado(),
            problema: PegarValor("problema")
        };
        try {
            Load();
            const response = await fetch(BASE_URL_API(), {
                method: "post",
                headers: HEADER_COM_AUTENTICACAO(),
                body: JSON.stringify(dadosEnviar)
            });
            if (!response.ok)
                throw new Error(MSG_ERRO_CALL_API);

            const objdados = await response.json();
            if (objdados.result == NAO_AUTORIZADO) {
                Sair();
                return;
            }

            if (objdados.result === 1) {
                Mensagem(MSG_SUCESSO, COR_MSG_SUCESSO);
                await LimparNotificacoesAsync(formID);
                await CarregarEquipamentoSetor();
            } else
                Mensagem(MSG_ERRO, COR_MSG_ERRO);


        } catch (error) {
            Mensagem(error.message, COR_MSG_ERRO);
        }
        finally {
            RemoverLoad();
        }
    }
} function VerSituacao(data_atendimento, data_encerramento) {
    let situacao = "";

    if (data_atendimento == null)
        situacao = SITUACAO_AGUARDANDO
    else if (data_encerramento != null)
        situacao = SITUACAO_ENCERRADO
    else if (data_atendimento != null && data_encerramento == null)
        situacao = SITUACAO_EM_ANDAMENTO;

    return situacao;
}   