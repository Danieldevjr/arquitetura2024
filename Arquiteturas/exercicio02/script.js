const form = document.getElementById('userForm');
const mensagem = document.getElementById('mensagem');
let usuarios = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);

    if (idade >= 18) {
        const usuario = { nome, idade };
        usuarios.push(usuario);
        mensagem.textContent = 'Usuário cadastrado com sucesso!';
        form.reset();
    } else {
        mensagem.textContent = 'O usuário deve ter mais de 18 anos.';
    }
});