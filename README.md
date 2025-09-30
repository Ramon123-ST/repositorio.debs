<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Carrossel Bootstrap</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

  <!-- CSS customizado -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicadores -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

  <!-- Slides -->
     <div class="carousel-inner">
      <div class="item active">
        <img src="https://source.unsplash.com/900x400/?city,night" alt="Cidade à noite">
      </div>
      <div class="item">
        <img src="https://source.unsplash.com/900x400/?nature,forest" alt="Natureza e Floresta">
      </div>
      <div class="item">
        <img src="https://source.unsplash.com/900x400/?beach,sunset" alt="Praia ao pôr do sol">
      </div>
    </div>

    <!-- Controles -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Próximo</span>
    </a>
  </div>

  <!-- jQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

  <!-- Bootstrap JS -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  <!-- JS customizado -->
  <script src="index.js"></script>
</body>
</html>

-----------css---------------

/* Reset simples */
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f9f9f9;
  color: #333;
}

/* Container do carrossel */
#myCarousel {
  max-width: 900px;
  margin: 50px auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* Ajuste das imagens */
#myCarousel img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Indicadores (bolinhas) */
.carousel-indicators li {
  background-color: #777;
  border: none;
}

.carousel-indicators .active {
  background-color: #222;
}

/* Botões de navegação */
.carousel-control.left,
.carousel-control.right {
  background-image: none; /* remove fundo cinza do Bootstrap */
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: #222;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.carousel-control.left:hover,
.carousel-control.right:hover {
  opacity: 1;
}

/* Responsivo */
@media (max-width: 768px) {
  #myCarousel {
    max-width: 100%;
    margin: 20px;
  }

  #myCarousel img {
    height: 250px;
  }
}

---------------java-------------

// Ativa o carrossel automaticamente
$(document).ready(function () {
  $('#myCarousel').carousel({
    interval: 3000, // troca a cada 3 segundos
    pause: "hover"  // pausa quando o mouse passa por cima
  });
});
