function entrar() {
    var email = ipt_email.value;
    var senha = ipt_senha.value;

    if (email == "" || senha == "") {
        console.log("Mensagem de erro para todos os campos em branco");
    }
    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);
            
            setTimeout(() => { window.location = "perfil.html"; }, "2000");
            
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_USER = json.idUsuario;
                sessionStorage.NOME_USER = json.Nome;
                sessionStorage.EMAIL_USER = json.Email;
            });

        } else {
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}