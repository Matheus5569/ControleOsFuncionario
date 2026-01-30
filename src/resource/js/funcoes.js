

//#region FUNÇÕES API
function BASE_URL_API() {
    return "http://localhost/chamadas/src/Resource/api/funcionario_api.php";
}
function HEADER_SEM_AUTENTICACAO() {
    const header = {
        "Content-Type": "application/json"
    };

    return header;
}
function HEADER_COM_AUTENTICACAO() {
    const header = {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + GetTnk(),
    };

    return header;
}
function CodigoLogado() {
    const dados = GetTnkValue();
    return dados.cod_user;
    //return 9; //FIXO POR ENQUANTO
}
function CodigoSetorLogado() {
    const dados = GetTnkValue();
    return dados.cod_setor;
    //return 20; //FIXO POR ENQUANTO
}
//#endregion



//#region FUNÇÕES GENERICAS FORMULARIO

// function BASE_URL_DATAVIEW(dataview) {
//     return '../../Resource/dataview/' + dataview + '.php';
// }
function BASE_URL_INTRANET() {  
    return "http://localhost/ControleOsFuncionario/src/view/";
}
function RedirecionarPage(page) {
    window.location = BASE_URL_INTRANET() + page + '.php';
}

function MostrarElemento(id, mostrar) {
    if (mostrar) {
        document.getElementById(id).classList.remove("d-none");
    } else {
        document.getElementById(id).classList.add("d-none");
    }
}
function LimparNotificacoes(formID) {

    document.querySelectorAll(`#${formID} input, #${formID} textarea, #${formID} select`).forEach((elemento) => {

        elemento.value = "";
        elemento.classList.remove("is-invalid");
        elemento.classList.remove("is-valid");

    });
}
async function LimparNotificacoesAsync(formID) {

    document.querySelectorAll(`#${formID} input, #${formID} textarea, #${formID} select`).forEach((elemento) => {

        elemento.value = "";
        elemento.classList.remove("is-invalid");
        elemento.classList.remove("is-valid");

    });
}

function FecharModal(nome_modal) {
    $("#" + nome_modal).modal("hide");
}
function NotificarCampos(formID) {
    let ret = true;

    document.querySelectorAll(`#${formID} input, #${formID} textarea, #${formID} select`).forEach((elemento) => {
        if (elemento.classList.contains("obg")) {
            if (elemento.value === "") {
                ret = false;
                elemento.classList.add("is-invalid");
            } else {
                elemento.classList.remove("is-invalid");
                elemento.classList.add("is-valid");
            }
        }
    });

    if (!ret)
        Mensagem(MSG_CAMPOS_VAZIOS, COR_MSG_ATENCAO);

    return ret;
}
async function NotificarCamposAsync(formID) {
    let ret = true;

    document.querySelectorAll(`#${formID} input, #${formID} textarea, #${formID} select`).forEach((elemento) => {
        if (elemento.classList.contains("obg")) {
            if (elemento.value === "") {
                ret = false;
                elemento.classList.add("is-invalid");
            } else {
                elemento.classList.remove("is-invalid");
                elemento.classList.add("is-valid");
            }
        }
    });

    if (!ret)
        Mensagem(MSG_CAMPOS_VAZIOS, COR_MSG_ATENCAO);

    return ret;
}
// function NotificarCampos(formID) {
//     let ret = true;
//     $("#" + formID + " input, #" + formID + " textarea, #" + formID + " select").each(function () {

//         if ($(this).hasClass("obg")) {
//             if ($(this).val() == "") {
//                 ret = false
//                 $(this).addClass("is-invalid");

//             } else {
//                 $(this).removeClass("is-invalid").addClass("is-valid");
//             }
//         }
//     });
//     if (!ret)
//         MostrarMensagem(0);

//     return ret;
// }
// function FocarCampoTravar(e, next) {
//     if (e.keyCode === 13) {
//         e.preventDefault(); //Não irá para o servidor 
//         $("#" + next).focus();
//     }
// }
function Load() {
    $(".loader").addClass("is-active");
}
function RemoverLoad() {
    $(".loader").removeClass("is-active");
}
// function CarregarCamposUsuario(tipo) {

//     //Remover
//     $("#setor").removeClass("obg");
//     $("#empresa").removeClass("obg");
//     //Limpa os campos 
//     LimparNotificacoes("formCAD");
//     $("#tipo").val(tipo);
//     switch (tipo) {
//         case '1': //ADM
//             $("#divDadosUsuario").show();
//             $("#divDadosEndereco").show();
//             $("#btn_cadastrar").show();

//             $("#divUsuarioFuncionario").hide();
//             $("#divUsuarioTecnico").hide();
//             break;

//         case '2':  //FUNCIONARIO
//             $("#divDadosUsuario").show();
//             $("#divDadosEndereco").show();
//             $("#btn_cadastrar").show();

//             $("#divUsuarioFuncionario").show();
//             $("#divUsuarioTecnico").hide();

//             //Seta o obg
//             CarregarSetor();
//             $("#setor").addClass("obg");
//             break;
//         case '3': //TECNICO

//             $("#divDadosUsuario").show();
//             $("#divDadosEndereco").show();
//             $("#btn_cadastrar").show();

//             $("#divUsuarioFuncionario").hide();
//             $("#divUsuarioTecnico").show();
//             //Seta o obg
//             $("#empresa").addClass("obg");

//             break;

//         default:
//             $("#divDadosUsuario").hide();
//             $("#divDadosEndereco").hide();
//             $("#btn_cadastrar").hide();

//             $("#divUsuarioFuncionario").hide();
//             $("#divUsuarioTecnico").hide();

//             break;
//     }

// }

// function validarCpf(cpf) {
//     if (cpf != '') {
//         cpf = cpf.replace(/\D/g, '');
//         let result = true;
//         if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
//             result = false;
//         }

//         [9, 10].forEach(function (j) {
//             var soma = 0, r;
//             cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
//                 soma += parseInt(e) * ((j + 2) - (i + 1));
//             });
//             r = soma % 11;
//             r = (r < 2) ? 0 : 11 - r;
//             if (r != cpf.substring(j, j + 1)) {

//                 result = false;
//             }
//         });

//         if (!result) {
//             MostrarMensagem(-4);
//             $("#cpf").val('');
//         }
//     }

// }
// function validarEmail(email) {
//     let re = /\S+@\S+\.\S+/;
//     let retorno = true;

//     if (!re.test(email)) {
//         $("#email").val('');
//         MostrarMensagem(-5);
//         retorno = false;
//     }
//     return retorno;
// }
function RedirecionarPagina(url,) {
    // setTimeout(() => {
    window.location = url //BASE_PATH() +;
    //  }, segundos * 1000);
}

function SetarCampoValor(id, value) {
    document.getElementById(id).value = value;
}
function PegarValor(id) {
    return document.getElementById(id).value;
}
//#endregion

//#region  Funções 
function AddTnk(t) {
    localStorage.setItem('user_tkn', t);
}
function GetTnkValue() {
    var token = GetTnk();
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var j = decodeURIComponent(window.atob(base64).split('').map(function
        (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

    }).join(''));
    return JSON.parse(j);
}
function GetTnk() {
    if (localStorage.getItem('user_tkn') != null)
        return localStorage.getItem('user_tkn');
}
function setNomeLogado(nome) {
    localStorage.setItem("nome_logado", nome);
}
function getNomeLogado() {
    return localStorage.getItem("nome_logado");
}
function MostrarNomeLogin() {
    if (localStorage.getItem('nome_logado') != null)
        document.getElementById("nome_logado").innerHTML = getNomeLogado();
}
function ClearTnk() {
    localStorage.clear();
}
function Sair() {
    ClearTnk();
    RedirecionarPage('acesso/login')
}
function Verify() {
    if (localStorage.getItem('user_tkn') === null)
        Sair()
}
//#endregion    