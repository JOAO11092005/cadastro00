const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission

  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const senha = document.querySelector('#senha').value.trim();

  if (nome && email && senha) {
    alert('Cadastro realizado com sucesso!') ;
  } else if(senha){
   alert('Cadastro incompleto. Por favor, preencha todos os campos.');
  }
});



//     // Seleciona o botão de envio do formulário
// var btnSubmit = document.getElementById('btn-submit');
    
// // Adiciona um ouvinte de evento de clique ao botão
// btnSubmit.addEventListener('click', function(event) {
//   // Previne que a página seja atualizada quando o botão for clicado
//   event.preventDefault();


//   Exibe uma mensagem de cadastro realizado
//   alert('Cadastro realizado com sucesso!!');
// });

