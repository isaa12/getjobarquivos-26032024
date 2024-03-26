<?php

// Conexão com o banco de dados (substitua as informações de acordo com o seu ambiente)

$servername = "localhost";
$username = "usuario";
$password = "senha";
$dbname = "meu_banco";

// Criar conexão

$conn = new mysqli($servername, $username, $password, $dbname);

// Obter dados do formulário

$username = $_POST['username'];
$biografia = $_POST['biografia'];
$area_emprego = $_POST['area_emprego'];

// Atualizar o perfil no banco de dados (substitua a query de acordo com a estrutura do seu banco)

$sql = "UPDATE usuarios SET username='$username', biografia='$biografia', area_emprego='$area_emprego' WHERE id=1";

$conn->query($sql);

// Redirecionar para a página de perfil

header("Location: perfil.php");

?>
