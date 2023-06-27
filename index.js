window.onload = function() {
  alert("Caro usuário Gostaríamos de informar que o site em que você está acessando é um site de teste em desenvolvimento. Ele foi criado com o objetivo de testar e avaliar todas as funcionalidades do website .");
}


const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission

  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const senha = document.querySelector('#senha').value.trim();
  // const Confirme-Senha = document.querySelector('#Confirme-Senha').value.trim();



//     // Seleciona o botão de envio do formulário
// var btnSubmit = document.getElementById('btn-submit');
    
// // Adiciona um ouvinte de evento de clique ao botão
// btnSubmit.addEventListener('click', function(event) {
//   // Previne que a página seja atualizada quando o botão for clicado
//   event.preventDefault();


//   Exibe uma mensagem de cadastro realizado
  alert('Cadastro realizado com sucesso!!');
  location.reload()
});
// document.querySelector('input[type="submit"]').addEventListener('click', function() {
//   location.reload();
// }); editado hj

// function validarSenha(event) {
//   event.preventDefault();

//   const senha = document.getElementById('senha').value;
//   const confirmeSenha = document.getElementById('confirmeSenha').value;
// }
// function validarSenha(event) {
//   event.preventDefault();

//   const senha = document.getElementById('senha').value;
//   const confirmarSenha = document.getElementById('confirmarSenha').value;

//   if(senha == confirmarSenha) {
//       alert('Senha nao se coincidem')
//   } else {
//       alert('senha esta igual')
//   }
// }
// function validarSenha(event) {
//   event.preventDefault();

//   const senha = document.getElementById('senha').value;
//   const confirmarSenha = document.getElementById('confirmarSenha').value;
//   const mensagemErro = document.getElementById('mensagemErro');

//   if(senha === confirmarSenha) {
//       mensagemErro.classList.add('esconder');
//       // senhas coincidem
//   } else {
//       mensagemErro.classList.remove('esconder');
//       // senhas não coincidem
//   }
// }
