// function MostrarMensagem(ret) {

//     if (ret == 2) {
//         toastr.info('Nenhum resultado encontrado.');
//     } else if (ret == 1) {
//         toastr.success('Ação realizada com sucesso.');
//     } else if (ret == 0) {
//         toastr.warning('Prencher os campos obrigatórios.');
//     } else if (ret == -1) {
//         toastr.error('Ocorreu um erro na operação.');
//     } else if (ret == -2) {
//         toastr.error('CEP não encontrado.');

//     } else if (ret == -3) {
//         toastr.error('Formato do CEP inválido.');
//     }
//     else if (ret == -4) {
//         toastr.error('CPF Inválido.');
//     }
//     else if (ret == -5) {
//         toastr.error('E-mail Inválido.');
//     }
//     else if (ret == -6) {
//         toastr.error('E-mail já cadastrado.');
//     }
//     else if (ret == -7) {
//         toastr.error('O registro não pode ser excluido pois está em uso');
//     }
//     else if (ret == -8) {
//         toastr.error('Usuário não encontrado!');
//     }

//}
function Mensagem(msg, cor) {

    switch (cor) {
        case COR_MSG_ERRO:
            toastr.error(msg);
            break;
        case COR_MSG_ATENCAO:
            toastr.warning(msg);
            break;
        case COR_MSG_SUCESSO:
            toastr.success(msg);
            break;
        case COR_MSG_INFORMACAO:
            toastr.info(msg);
            break;
    }
}
//  switch (ret) {
//      case '-2':
//          toastr.error('Não foi possível excluir o registro, pois o mesmo está em uso ')
//           break;
//       case '-1':
//          toastr.error('Ocorreu um erro na operação')
//           break;
//      case '0':
//           toastr.warning('Prencher os campos obrigatórios')
//          break;
//      case '1':
//          toastr.success('Ação realizada com sucesso')
//          break;

//   }