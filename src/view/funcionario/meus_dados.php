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
            <!-- Main content -->
            <section class="content">
                <br>
                <div class="card">
                    <div class="card-header">
                        <h3>Meus Dados</h3>
                        <h6>Altere seus dados nos campos que estão em aberto.</h6>
                    </div>
                    <div class="card-body">
                        <form method="post" id="formALT" action="meus_dados.php">
                            <input type="hidden" id="cod_endereco">
                            <input type="hidden" id="tipo_usuario">
                            <div class="form-group">

                                <div id="divDadosUsuario">

                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>Nome</label>
                                            <input disabled type="text" name="nome" id="nome" class="form-control"
                                                placeholder="Digite aqui o Nome...">
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label>Telefone*</label>
                                            <input type="text" name="telefone" id="telefone"
                                                class="form-control cel num obg"
                                                placeholder="Digite aqui o Telefone...">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label>CPF</label>
                                            <input disabled type="text" name="cpf" id="cpf" class="form-control"
                                                placeholder="Digite aqui o CPF...">
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label>E-mail</label>
                                            <input disabled type="text" name="email" id="email" class="form-control"
                                                placeholder="Digite aqui o E-mail...">
                                            <!-- onblur sempre vai disparar o evento quando tira o foco -->
                                            <!-- onchange é disparado quando o valor do elemento é alterado -->
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <label>Setor</label>
                                    <input disabled type="text" name="setor" id="setor" class="form-control">
                                </div>
                                <br>

                                <label>CEP*</label>
                                <input onblur="pesquisaCep(this.value)" name="cep" id="cep"
                                    class="form-control cep num obg" placeholder="Digite aqui o CEP...">
                                <br>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label>Rua*</label>
                                        <input type="text" name="rua" id="rua" class="form-control obg"
                                            placeholder="Digite aqui a Rua...">
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label>Bairro*</label>
                                        <input type="text" name="bairro" id="bairro" class="form-control obg"
                                            placeholder="Digite aqui o Bairro...">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label>Estado</label>
                                        <input type="text" disabled name="estado" id="estado" class="form-control obg"
                                            placeholder="Digite o CEP(preenchimento automático)">
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label>Cidade</label>
                                        <input type="text" disabled name="cidade" id="cidade" class="form-control obg"
                                            placeholder="Digite o CEP(preenchimento automático)">
                                    </div>
                                </div>
                                <!-- </div> -->
                            </div>

                            <button id="btn_alterar" type="button" class="btn btn-success" name="btn_alterar"
                                onclick="GravarMeusDados('formALT')">Alterar</button>

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
    <script src="../../resource/js/buscar_cep.js"></script>
    <script src="../../template/mask/jquery.mask.min.js"></script>
    <script src="../../template/mask/mask.js"></script>
    <script src="../../resource/ajax/usuario_ajx.js"></script>

    <script>
        DetalharMeusDados()
    </script>
</body>

</html>