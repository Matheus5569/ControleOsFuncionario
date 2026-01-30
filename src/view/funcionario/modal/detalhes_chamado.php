<div class="modal fade" id="modal-detalhes">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-secondary">
            <div class="modal-header">
                <h4 class="modal-title">Detalhes do chamado</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">

                <div class="form-group">
                    <label>Dados do equipamento:</label>
                    <input disabled class="form-control" id="equipamento">

                </div>
                <div class="form-group">
                    <label>Data de abertura</label>
                    <input disabled  class="form-control" id="data_abertura">
                </div>

                <div class="form-group">
                    <label>Problema</label>
                    <textarea readonly class="form-control obg" id="problema"></textarea>
                </div>
                <hr>
                <div class="form-group col-md-6">
                    <label>data atendimento</label>
                    <input disabled  class="form-control" id="data_iniciou">
                </div>
                <div class="form-group">
                    <label>Técnico iniciou atendimento</label>
                    <input disabled class="form-control" id="tec_iniciou">
                </div>
                <div class="form-group">
                    <label>Data de encerramento</label>
                    <input disabled  class="form-control" id="data_finalizou">
                </div>

                <div class="form-group">
                    <label>Técnico finalizou o atendimento</label>
                    <input disabled  class="form-control obg" id="tec_finalizou">
                </div>
                <div class="form-group">
                    <label>laudo</label>
                    <textarea readonly class="form-control obg" id="laudo" name="motivo_info"></textarea>
                </div>

            </div>
            <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Fechar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>