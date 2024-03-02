function avancar() {
var email = ipt_email.value;
var senha = ipt_senha.value;
    
var validacaoEspecial =
    senha.indexOf("!") >= 0 ||
    senha.indexOf("@") >= 0 ||
    senha.indexOf("#") >= 0 ||
    senha.indexOf("$") >= 0 ||
    senha.indexOf("%") >= 0 ||
    senha.indexOf("¨") >= 0 ||
    senha.indexOf("&") >= 0 ||
    senha.indexOf("*") >= 0 ||
    senha.indexOf("(") >= 0 ||
    senha.indexOf(")") >= 0 ||
    senha.indexOf("-") >= 0 ||
    senha.indexOf("_") >= 0 ||
    senha.indexOf("+") >= 0 ||
    senha.indexOf("=") >= 0 ||
    senha.indexOf("§") >= 0 ||
    senha.indexOf('"') >= 0 ||
    senha.indexOf("'") >= 0 ||
    senha.indexOf(",") >= 0 ||
    senha.indexOf("<") >= 0 ||
    senha.indexOf(".") >= 0 ||
    senha.indexOf(">") >= 0 ||
    senha.indexOf(":") >= 0 ||
    senha.indexOf(":") >= 0 ||
    senha.indexOf("/") >= 0 ||
    senha.indexOf("?") >= 0 ||
    senha.indexOf("°") >= 0 ||
    senha.indexOf("º") >= 0 ||
    senha.indexOf("]") >= 0 ||
    senha.indexOf("}") >= 0 ||
    senha.indexOf("ª") >= 0 ||
    senha.indexOf("[") >= 0 ||
    senha.indexOf("{") >= 0 ||
    senha.indexOf("%") >= 0;
    
var validacaoNumero =
    senha.indexOf(0) >= 0 ||
    senha.indexOf(1) >= 0 ||
    senha.indexOf(2) >= 0 ||
    senha.indexOf(3) >= 0 ||
    senha.indexOf(4) >= 0 ||
    senha.indexOf(5) >= 0 ||
    senha.indexOf(6) >= 0 ||
    senha.indexOf(7) >= 0 ||
    senha.indexOf(8) >= 0 ||
    senha.indexOf(9) >= 0;
    
var validacaoMaiusculaMinuscula = senha != senha.toLowerCase() && senha != senha.toUpperCase();
    
if (email.indexOf("@") >= 0) {
if(email.indexOf(".com") >= 0 || email.indexOf(".school") >= 0) {
if (senha.length >= 8) {
    if (validacaoMaiusculaMinuscula) {
     if (validacaoEspecial) {
        if (validacaoNumero) {
                // card1.style.display = 'none';
                // card2.style.display = 'block';
    
              } else erro.innerHTML = "A senha deve conter pelo menos um numero";
            } else  erro.innerHTML = "A senha deve conter ao menos um caractere especial";
          } else erro.innerHTML = "A senha deve conter ao menos uma letra maiuscula e uma minuscula";
        } else erro.innerHTML = "A senha deve ter pelo menos 8 caracteres";
      } else erro.innerHTML = "O email tem que conter .com"
      } else erro.innerHTML = "O email tem que conter um @"
}
    
function proximo() {
    // card2.style.display = 'none';
    // card3.style.display = 'block';
}
    
    
function cadastrar() {
var nome = (ipt_nome.value);
var estado = (ipt_estado.value);
var email = (ipt_email.value);
var senha = (ipt_senha.value);
    
fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
    nomeServer: nome,
    idadeServer: idade,
    generoServer: genero,
    estadoServer: estado,
    emailServer: email,
    senhaServer: senha
    }),
        })
        .then(function (resposta) {
        console.log("resposta: ", resposta);
            if (resposta.ok) {
              setTimeout(() => { window.location = "login.html"; }, "2000");
              } else {
                console.log("Houve um erro ao tentar realizar o cadastro!");
              }
            })
            .catch(function (resposta) {
              console.log(`#ERRO: ${resposta}`);
            });
}