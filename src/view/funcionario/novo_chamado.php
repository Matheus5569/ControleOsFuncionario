<?php
include_once dirname(__DIR__, 3) . '/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>

<head>
    <?php
    include_once PATH . 'template/_includes/_head.php';
    include_once PATH . 'template/_includes/_scripts.php';

    ?>
    <script>
        Verify();
    </script>
    <!-- <link rel="stylesheet" href="../../Template/dist/css/controleos.css"> -->
</head>

<body class="hold-transition sidebar-mini sidebar-collapse">
    <!-- Site wrapper -->
    <div class="wrapper">

        <?php
        include_once PATH . 'template/_includes/_topo.php';
        include_once PATH . 'template/_includes/_menu.php';
        ?>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper"> <!-- Envolve todo o conteúdo da página. -->
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <!-- Altura acima do Alocar equipamento, nessa linha regula a altura do conteúdo em relação ao topo -->
                <div class="container-fluid"> <!-- Ajusta a largura ao tamanho da tela.  -->
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
                        <h3>Novo chamado</h3>

                        <h6>Realize aberturas de chamados nesta página.</h6>


                    </div>
                    <div class="card-body">
                        <form id="formCAD" method="post" action="novo_chamado.php">
                            <div class="form-group">
                                <label>*Escolha o equipamento:</label>
                                <select class="form-control obg" name="equipamento" id="equipamento">

                                </select>
                                <br>
                                <label for="descricao">*Descreva o problema:</label>

                                <textarea maxlength="150" id="problema" name="problema" rows="4"
                                    class="form-control obg" placeholder="Digite aqui..."></textarea>
                                <div id="contador">150 caracteres restantes
                                </div>
                            </div>
                            <button type="button" class="btn btn-success" name="btn_gravar"
                                onclick="AbrirChamado('formCAD')">Gravar</button>
                        </form>
                    </div>
                </div>
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

    <?php
    include_once PATH . 'template/_includes/_msg.php';
    ?>
    <script src="../../resource/js/contador_caractere.js"></script>
    <script src="../../resource/ajax/chamado_ajx.js"></script>

    <script>CarregarEquipamentoSetor();</script>
</body>

</html>