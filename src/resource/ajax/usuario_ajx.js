async function GravarMeusDados(formID) {
    if (NotificarCampos(formID)) {

        const dados = {
            cod_usuario: CodigoLogado(),
            endpoint: API_GRAVAR_MEUSDADOS,
            setor: CodigoSetorLogado(),
            nome: PegarValor('nome'),
            email: PegarValor('email'),
            cpf: PegarValor('cpf'),
            telefone: PegarValor('telefone'),
            cod_endereco: PegarValor('cod_endereco'),
            rua: PegarValor('rua'),
            bairro: PegarValor('bairro'),
            cep: PegarValor('cep'),
            cidade: PegarValor('cidade'),
            estado: PegarValor('estado'),
            tipo: PegarValor('tipo_usuario'),
        };
        try {
            Load();
            const response = await fetch(BASE_URL_API(), {
                method: "POST",
                headers: HEADER_COM_AUTENTICACAO(),
                body: JSON.stringify(dados)
            })
            if (!response.ok)
                throw new Error(MSG_ERRO_CALL_API);

            const objdados = await response.json();

            if (objdados.result == NAO_AUTORIZADO) {
                Sair();
                return;
            }
            if (objdados.result == 1) {
                Mensagem(MSG_SUCESSO, COR_MSG_SUCESSO);
            } else {
                Mensagem(MSG_ERRO, COR_MSG_ERRO);
            }

            //  console.log(objdados);

        } catch (error) {
            Mensagem(error.message, COR_MSG_ERRO);
        } finally {
            RemoverLoad();
        }
    }
}

async function VerificarSenhaAtual(formID, formID2) {

    if (await NotificarCamposAsync(formID)) {

        try {
            const dados = {
                endpoint: API_VERIFICAR_SENHA_ATUAL,
                id_user: CodigoLogado(),
                senha_digitada: PegarValor("senha")
            };
            Load();

            const response = await fetch(BASE_URL_API(), {
                method: "post",
                headers: HEADER_COM_AUTENTICACAO(),
                body: JSON.stringify(dados)
            });

            if (!response.ok)
                throw new Error(MSG_ERRO_CALL_API);

            const objdados = await response.json();
            if (objdados.result == NAO_AUTORIZADO) {
                Sair();
                return;
            }

            //Senha correta
            if (objdados.result == 1) {
                //Ocultar o formulario
                document.getElementById(formID).classList.add("d-none");
                //Mostrar o formulario
                document.getElementById(formID2).classList.remove("d-none");
            }
            //Senha incorreta
            else if (objdados.result == -1) {
                Mensagem(MSG_SENHA_ERRADA, COR_MSG_ERRO);
            }

        } catch (error) {

        } finally {
            RemoverLoad();
        }
    }
}

async function DetalharMeusDados() {

    try {
        const dadosEnviar = {
            id_user: CodigoLogado(),
            endpoint: API_DETALHAR_USUARIO
        };
        Load();
        const response = await fetch(BASE_URL_API(), {
            method: "POST",
            headers: HEADER_COM_AUTENTICACAO(),
            body: JSON.stringify(dadosEnviar)
        });

        if (!response.ok)
            throw new Error(MSG_ERRO_CALL_API);

        //Recupera os dados transformando em obj JS
        const objdados = await response.json();
        const dadosUser = objdados.result;

        if (objdados.result == NAO_AUTORIZADO) {
            Sair();
            return;
        }

        SetarCampoValor("nome", dadosUser.nome_usuario);
        SetarCampoValor("telefone", dadosUser.tel_usuario);
        SetarCampoValor("cpf", dadosUser.cpf_usuario);
        SetarCampoValor("email", dadosUser.email_usuario);
        SetarCampoValor("rua", dadosUser.rua);
        SetarCampoValor("bairro", dadosUser.bairro);
        SetarCampoValor("cep", dadosUser.cep);
        SetarCampoValor("estado", dadosUser.sigla_estado);
        SetarCampoValor("cidade", dadosUser.nome_cidade);
        SetarCampoValor("setor", dadosUser.nome_setor);
        SetarCampoValor("cod_endereco", dadosUser.endereco_id);
        SetarCampoValor("tipo_usuario", dadosUser.tipo_usuario);
        //Continua

        console.log(dadosUser);

    }
    catch (error) {
        Mensagem(error.message, MSG_ERRO);

    }
    finally {
        RemoverLoad();
    }



    // const dadosUser = await response.json();


    // console.log(dadosUser);
}

async function MudarSenha(formID, formID2) {

    if (await NotificarCamposAsync(formID)) {
        const nova_senha = PegarValor("nova_senha");
        const repetir_senha = PegarValor("repetir_senha");
        //cê ultrapassar a quantidade permitida
        if (nova_senha.length < TAMANHO_SENHA_PERMITIDA) {
            Mensagem(MSG_SENHA_MENOR, COR_MSG_ATENCAO);
        } //verificar senha que não está sendo repetida corretamente
        else if (nova_senha !== repetir_senha) {
            Mensagem(MSG_SENHA_REPETIR_NAO_CONFEREM, COR_MSG_ATENCAO);
        }//chamar a API
        else {
            const dadosEnviar = {
                endpoint: API_ALTERAR_SENHA_ATUAL,
                nova_senha: PegarValor("nova_senha"),
                cod_usuario: CodigoLogado()
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
                    await LimparNotificacoesAsync(formID2);
                    //Mostrar o formulario
                    MostrarElemento(formID2, true);
                    //Ocultar o formulario
                    MostrarElemento(formID, false);

                    //document.getElementById(formID2).classList.remove("d-none");
                    // document.getElementById(formID).classList.add("d-none");
                } else {
                    Mensagem(MSG_ERRO, COR_MSG_ERRO);
                }

            } catch (error) {
                Mensagem(error.message, COR_MSG_ERRO);
            }
            finally {
                RemoverLoad();
            }
        }

    }
}

async function Acessar(formID) {
    if (await NotificarCamposAsync(formID)) {

        const login = PegarValor("login_usuario");
        const senha = PegarValor("senha_usuario");


        const dadosEnviar = {
            endpoint: API_ACESSAR,
            login: login,
            senha: senha
        };
        try {
            Load();
            const response = await fetch(BASE_URL_API(), {
                method: "post",
                headers: HEADER_SEM_AUTENTICACAO(),
                body: JSON.stringify(dadosEnviar)
            });
            if (!response.ok)
                throw new Error(MSG_ERRO_CALL_API);

            const objdados = await response.json();

            //console.log(objdados);
            if (objdados.result === -8) {
                Mensagem(MSG_USUARIO_NAO_ENCONTRADO, COR_MSG_INFORMACAO)
                return;
            }
            //Add o token no localStorage
            AddTnk(objdados.result);
            const objdadosToken = GetTnkValue();
            setNomeLogado(objdadosToken.nome);
            RedirecionarPage('funcionario/meus_dados');
            // if (objdados.result === 1) {
            //     Mensagem(MSG_SUCESSO, COR_MSG_SUCESSO);
            //     await LimparNotificacoesAsync(formID);
            //     await LimparNotificacoesAsync(formID2);
            //     //Mostrar o formulario
            //     MostrarElemento(formID2, true);
            //     //Ocultar o formulario
            //     MostrarElemento(formID, false);

            //     //document.getElementById(formID2).classList.remove("d-none");
            //     // document.getElementById(formID).classList.add("d-none");
            // } else {
            //     Mensagem(MSG_ERRO, COR_MSG_ERRO);
            // }

        } catch (error) {
            Mensagem(error.message, COR_MSG_ERRO);
        }
        finally {
            RemoverLoad();
        }
    }


}