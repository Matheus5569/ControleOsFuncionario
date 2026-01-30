<?php
include_once dirname(__DIR__, 3) . '/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>

<head>
    <?php
    include_once PATH . 'template/_includes/_head.php';
    include_once PATH . 'template/_includes/_scripts.php';
    include_once PATH . 'template/_includes/_msg.php';
    ?>
    <script>
        Verify();
    </script>
</head>

<body class="hold-transition sidebar-mini sidebar-collapse">
    <!-- Site wrapper -->
    <div class="wrapper">
        <?php
        include_once PATH . 'template/_includes/_topo.php';
        include_once PATH . 'template/_includes/_menu.php';
        ?>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <!-- Ajudam a organizar o layout em colunas. Cria uma linha para organizar o layout em colunas e adiciona espaçamento inferior. -->
                        <div class="col-sm-6">
                            <!-- Para celulares: Altura acima do Alocar equipamento, nessa linha regula a altura do conteúdo em relação ao topo -->
                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </section>
            <!-- Main content -->
            <section class="content">
                <!-- Default box -->
                <div class="card">
                    <div class="card-header">
                        <h3>Chamados do Setor</h3>
                    </div>
                    <div class="card-body">
                        <form method="post" action="meus_chamados.php">
                            <div class="form-group">
                                <label>Escolha a situação</label>
                                <select class="form-control" name="situacao" id="situacao">
                                    <option value="<?= SITUACAO_CHAMADO_TODOS ?>">Todos</option>
                                    <option value="<?= SITUACAO_CHAMADO_AGUARDANDO_ATENDIMENTO ?>">Aguardando
                                        Atendimento</option>
                                    <option value="<?= SITUACAO_CHAMADO_EM_ATENDIMENTO ?>">Em Atendimento</option>
                                    <option value="<?= SITUACAO_CHAMADO_ENCERRADO ?>">Encerrado</option>
                                </select>
                            </div>
                            <button type="button" onclick="FiltrarChamado()" class="btn btn-success"
                                name="btn_gravar">Pesquisar</button>
                        </form>
                    </div>
                    <hr>
                    <div class="card d-none" id="resultado">
                        <div class="card">
                            <div class="card-header bg-light"><!-- Adiciona um tom de cinza claro -->
                                <h6 class="card-title">Chamados Encontrados.</h6>
                            </div>
                            <div class="card-body">
                                <!-- Organiza a tabela adicionando um espaço do título da tabela e o seu conteúdo -->
                                <div class="row"> <!-- Ainda não sei -->
                                    <div class="col-12"> <!-- Largura da tabela -->
                                        <div class="card"> <!-- Contornos da tabela? -->

                                            <div class="card-body table-responsive p-0">
                                                <table class="table table-hover" id="table_result">
                                                </table>
                                            </div>
                                            <!-- /.card-body -->
                                        </div>
                                        <?php include_once 'modal/detalhes_chamado.php' ?>
                                        <!-- /.card -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->


    <script src="../../resource/ajax/chamado_ajx.js"></script>

</body>

</html>