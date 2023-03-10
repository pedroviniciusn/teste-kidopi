<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/main.css" />
    <title>teste kidopi</title>
  </head>
  <body>
    <a href="compare.php">
      <div class="compare">
        <span>Compare Dados</span>
      </div>
    </a>
    <main class="container">
      <section class="container_content"></section>
    </main>
    <footer class="footer">
      <?php 
      include 'index.php';

      [$country, $date] = data("");

      echo "
        <div>
            <span><strong>Último accesso: </strong>$country </span> 
            <span><strong>Data: </strong>$date</span>
        </div>
      ";
      ?>
    </footer>
    <script src="./js/main.js"></script>
  </body>
</html>
