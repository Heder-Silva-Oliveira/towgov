<?php
    if(isset($_POST['submit']))

    include_once('config.php');

    $cpf=$_POST['cpf'];
    $senha=$_POST['senha'];
    $celular=$_POST['celular'];
    $prefeitura=$_POST['prefeitura'];
    $departamento=$_POST['departamento'];
    $funcao=$_POST['funcao'];
    $email_dep=$_POST['email_dep'];
    $email_pes=$_POST['email_pes'];

    $result = mysqli_query($conexao, "INSERT INTO towgov(cpf,senha,celular,prefeitura,departamento,funcao,email_dep,email_pes)
     VALUE('$cpf','$senha','$celular','$prefeitura','$departamento','$funcao','$email_dep','$email_pes')");
?>  
