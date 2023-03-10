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
    <link rel="stylesheet" href="./css/australia.css" />
    <title>teste kidopi</title>
  </head>
  <body>
    <main class="container">
      <header>
        <div class="header_content">
          <a href="main.php">Voltar</a>
          <h2>Austrália</h2>
          <span id="all_cases"><strong>Casos:</strong> </span>
          <span id="all_deaths"><strong>Mortes:</strong> </span>
        </div>
      </header>
      <section class="container_content">
        <div class="state"></div>
      </section>
    </main>
    <footer class="footer">
      <?php 
      include 'index.php';

      [$country, $date] = data("Austrália");

      echo "
        <div>
            <span><strong>Último acesso: </strong>$country </span> 
            <span><strong>Data: </strong>$date</span>
        </div>
      ";
      ?>
    </footer>
    <script src="./js/australia.js"></script>
  </body>
</html>
