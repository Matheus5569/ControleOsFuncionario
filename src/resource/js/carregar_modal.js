
function CarregarDescarteInfo(data, nome, motivo) {
    $("#data_descarte_info").val(data);
    $("#nome_descarte_info").html(nome);
    $("#motivo_info").html(motivo);
}
function CarregarDescarte(id, nome) {
    $("#id_descarte").val(id);
    $("#nome_descarte").html(nome);
}
function CarregarExcluir(id, nome) {
    $("#id_excluir").val(id);
    $("#nome_excluir").html(nome);
}
function CarregarTipoEquipamento(id, nome) {
    $("#tipo_alterar").val(nome);

    $("#id_alterar").val(id);

}
function Carregarmodelo(id, nome) {
    $("#modelo_alterar").val(nome);

    $("#id_alterar").val(id);
}
function Carregarsetor(id, nome) {
    $("#setor_alterar").val(nome);

    $("#id_alterar").val(id);
}