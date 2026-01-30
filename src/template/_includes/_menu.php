<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">


        <center><span class="brand-text font-weight-light"><b>Funcionário</b></span></center>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                  <img src="../../Template/_includes/icones/logo.png" width="100" height="100" alt="Logo Minimalista"
                    class="logo">
            </div>
            <div class="info">
                <a href="#" class="d-block" id="nome_logado"></a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

                <li class="nav-item">
                    <a href="meus_dados.php" class="nav-link">
                        <i class="far fa-user nav-icon"></i>
                        <p>Meus dados</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="chamados.php" class="nav-link">
                        <i class="far fa-keyboard nav-icon"></i>
                        <p>Chamados</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="novo_chamado.php" class="nav-link">
                        <i class="far fa-edit nav-icon"></i>
                        <p>Novo chamado</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="mudar_senha.php" class="nav-link">
                        <i class="far fa-edit nav-icon"></i>
                        <p>Mudar senha</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" onclick="Sair()">
                        <img src="../../Template/_includes/icones/sair.png" width="25" height="26">
                        <p> SAIR</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>

    <!-- /.sidebar -->
</aside>
<script>
    MostrarNomeLogin();
</script>