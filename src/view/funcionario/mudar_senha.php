<?php
include_once dirname(__DIR__, 3) . '/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>

<head>
    <?php
    include_once PATH . 'Template/_includes/_head.php';
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
        include_once PATH . 'Template/_includes/_topo.php';
        include_once PATH . 'Template/_includes/_menu.php';
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
                        <h3>Mudar senha</h3>

                        <h6>Altere sua senha aqui</h6>


                    </div>
                    <div class="card-body">
                        <form method="post" id="formSenhaAtual">
                            <div class="form-group">

                                <label>Senha atual*</label>
                                <input type="password" name="senha" id="senha" class="form-control obg"
                                    placeholder="Digite aqui...">

                            </div>
                            <button type="button" onclick="VerificarSenhaAtual('formSenhaAtual', 'formNovaSenha')"
                                class="btn btn-success" name="btn_alterar">Verificar senha atual</button>

                        </form>
                        <form id="formNovaSenha" class="d-none">
                            <label>Nova senha*</label>
                            <input type="password" name="nova_senha" id="nova_senha" class="form-control obg"
                                placeholder="Digite aqui...">
                            <br>
                            <div class="form-group">
                                <label>Repetir senha*</label>
                                <input type="password" class="form-control obg" name="repetir_senha" id="repetir_senha"
                                    placeholder="Digite aqui...">
                            </div>

                            <button type="button" onclick="MudarSenha('formNovaSenha', 'formSenhaAtual')"
                                class="btn btn-success" name="btn_gravar">Gravar</button>

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
  
    include_once PATH . 'Template/_includes/_msg.php';
    ?>
    <script src="../../resource/ajax/usuario_ajx.js"></script>

</body>

</html>