$(document).ready(function () {
  $("#btnNivel").click(function () {
    if ($(this).hasClass("iniciante")) {
      $(this)
        .removeClass("iniciante")
        .addClass("intermediario")
        .text("Intermediário");
    } else if ($(this).hasClass("intermediario")) {
      $(this)
        .removeClass("intermediario")
        .addClass("avancado")
        .text("Avançado");
    } else if ($(this).hasClass("avancado")) {
      $(this)
        .removeClass("avancado")
        .addClass("especialista")
        .text("Especialista");
    } else if ($(this).hasClass("especialista")) {
      $(this)
        .removeClass("especialista")
        .addClass("iniciante")
        .text("Iniciante");
    }
  });
});

$(document).ready(function () {
  $("#btnNivel2").click(function () {
    if ($(this).hasClass("iniciante")) {
      $(this)
        .removeClass("iniciante")
        .addClass("intermediario")
        .text("Intermediário");
    } else if ($(this).hasClass("intermediario")) {
      $(this)
        .removeClass("intermediario")
        .addClass("avancado")
        .text("Avançado");
    } else if ($(this).hasClass("avancado")) {
      $(this)
        .removeClass("avancado")
        .addClass("especialista")
        .text("Especialista");
    } else if ($(this).hasClass("especialista")) {
      $(this)
        .removeClass("especialista")
        .addClass("iniciante")
        .text("Iniciante");
    }
  });
});
$(document).ready(function () {
  $("#btnNivel3").click(function () {
    if ($(this).hasClass("iniciante")) {
      $(this)
        .removeClass("iniciante")
        .addClass("intermediario")
        .text("Intermediário");
    } else if ($(this).hasClass("intermediario")) {
      $(this)
        .removeClass("intermediario")
        .addClass("avancado")
        .text("Avançado");
    } else if ($(this).hasClass("avancado")) {
      $(this)
        .removeClass("avancado")
        .addClass("especialista")
        .text("Especialista");
    } else if ($(this).hasClass("especialista")) {
      $(this)
        .removeClass("especialista")
        .addClass("iniciante")
        .text("Iniciante");
    }
  });
});

$(document).ready(function () {
  $("#btnNivel4").click(function () {
    if ($(this).hasClass("iniciante")) {
      $(this)
        .removeClass("iniciante")
        .addClass("intermediario")
        .text("Intermediário");
    } else if ($(this).hasClass("intermediario")) {
      $(this)
        .removeClass("intermediario")
        .addClass("avancado")
        .text("Avançado");
    } else if ($(this).hasClass("avancado")) {
      $(this)
        .removeClass("avancado")
        .addClass("especialista")
        .text("Especialista");
    } else if ($(this).hasClass("especialista")) {
      $(this)
        .removeClass("especialista")
        .addClass("iniciante")
        .text("Iniciante");
    }
  });
});
