//#region  VALORES FIXOS DA REGRA
const TAMANHO_SENHA_PERMITIDA = 6;
//#endregion

//#region ENDPOINTS
const API_DETALHAR_USUARIO = "DetalharUsuarioAPI";
const API_GRAVAR_MEUSDADOS = "AlterarMeusDadosAPI";
const API_VERIFICAR_SENHA_ATUAL = "VerificarSenhaAPI";
const API_ALTERAR_SENHA_ATUAL = "AlterarSenhaAPI";
const API_LISTAR_EQUIPAMENTO_SETOR = "ListarEquipamentoAlocadosSetorAPI";
const API_ABRIR_CHAMADO = "AbrirChamadoAPI";
const API_FILTRAR_CHAMADO = "FiltrarChamadoAPI";
const API_DETALHAR_CHAMADO = "DetalharChamadoAPI";
const API_ACESSAR = "ValidarLoginAPI";
//#endregion

//#region MENSAGENS DO AMBIENTE

const MSG_ERRO_CALL_API = "Erro ao chamar API";
const MSG_SENHA_ERRADA = "Senha incorreta";
const MSG_SUCESSO = "Ação realizada com sucesso";
const MSG_ERRO = "Ocorreu um erro na operação, tente mais tarde!";
const MSG_CAMPOS_VAZIOS = "Preencher todo(s) o(s) campo(s) obrigatório(s)";
const MSG_SENHA_MENOR = `Preencher a senha com no mínimo  ${TAMANHO_SENHA_PERMITIDA}`;
const MSG_SENHA_REPETIR_NAO_CONFEREM = "A SENHA e REPETIR SENHA não conferem!";
const MSG_DADOS_NAO_ENCONTRADO = "Não foi encontrado nenhum registro";
const MSG_CEP_INCORRETO = "Formato do CEP inválido";
const MSG_CEP_NAO_ENCONTRADO = "CEP não encontrado";
const MSG_USUARIO_NAO_ENCONTRADO = "Usuário não foi encontrado";

const COR_MSG_SUCESSO = 1;
const COR_MSG_ERRO = -1;
const COR_MSG_INFORMACAO = 2;
const COR_MSG_ATENCAO = 0;
const NAO_AUTORIZADO = -1000;
//#endregion
//#region MENSAGENS DO AMBIENTE
const SITUACAO_AGUARDANDO = "AGUARDANDO ATENDIMENTO";
const SITUACAO_EM_ANDAMENTO = "EM ATENDIMENTO";
const SITUACAO_ENCERRADO = "ENCERRADO";
//#endregion