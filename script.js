// Espera até que o documento esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
  var textoElemento = document.getElementById('texto-dados'); // Seleciona o elemento h3
  var texto = "Sou um Analista de DADOS"; // Texto que queremos exibir com o efeito de digitação
  var html = texto;
  var i = 0;
  var deleting = false; // Variável para controlar se estamos apagando o texto
  
  // Função para adicionar letras ao texto gradualmente
  function adicionarLetra() {
      if (!deleting) {
          if (i < texto.length) {
              textoElemento.innerHTML = html.slice(0, i+1) + ''; // Exibe o texto até o índice i e adiciona um cursor piscando
              i++;
              setTimeout(adicionarLetra, 120); // Ajuste o tempo de digitação aqui (120ms para um efeito mais suave e lento)
          } else {
              deleting = true; // Inicia o processo de apagar o texto
              setTimeout(apagarLetra, 1500); // Aguarda 1.5 segundos antes de começar a apagar o texto
          }
      }
  }
  
  // Função para apagar letras do texto gradualmente
  function apagarLetra() {
      if (i > 0) {
          textoElemento.innerHTML = html.slice(0, i-1) + '...'; // Apaga o texto gradualmente
          i--;
          setTimeout(apagarLetra, 90); // Ajuste o tempo de apagar aqui (50ms para um efeito mais suave e lento)
      } else {
          deleting = false; // Reinicia o processo de adicionar texto
          setTimeout(adicionarLetra, 1000); // Aguarda 1 segundo antes de começar a adicionar o texto novamente
      }
  }
  
  // Inicia a função de digitação
  adicionarLetra();
});
