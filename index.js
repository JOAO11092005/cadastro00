// Seleciona o botão de envio do formulário
var btnSubmit = document.getElementById('btn-submit');
    
// Adiciona um ouvinte de evento de clique ao botão
btnSubmit.addEventListener('click', function(event) {
  // Previne que a página seja atualizada quando o botão for clicado
  event.preventDefault();

  // Exibe uma mensagem de cadastro realizado
  alert('Cadastro realizado com sucesso!!');
});