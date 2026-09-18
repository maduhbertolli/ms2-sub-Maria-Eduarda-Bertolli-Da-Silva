// Atualiza o ano no rodapé automaticamente
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// Validação simples do formulário de contato
const formContato = document.getElementById("formContato");
const feedbackForm = document.getElementById("feedbackForm");

formContato.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    feedbackForm.textContent = "Por favor, preencha todos os campos.";
    feedbackForm.classList.remove("text-success");
    feedbackForm.classList.add("text-danger");
    return;
  }

  feedbackForm.textContent = `Valeu, ${nome}! Sua mensagem foi enviada para a banda.`;
  feedbackForm.classList.remove("text-danger");
  feedbackForm.classList.add("text-success");

  formContato.reset();
});