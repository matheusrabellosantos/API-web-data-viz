var mysql = require("mysql2");

var mySqlConfig = {
    host: "localhost",
    database: "SEU_BANCO_DE_DADOS",
    user: "SEU_USUARIO",
    password: "SUA_SENHA",
};

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
          return new Promise(function (resolve, reject) {
              var conexao = mysql.createConnection(mySqlConfig);
              conexao.connect();
              conexao.query(instrucao, function (erro, resultados) {
                  conexao.end();
                  if (erro) {
                      reject(erro);
                  }
                  console.log(resultados);
                  resolve(resultados);
              });
              conexao.on('error', function (erro) {
                  return ("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
              });
          });
      } else {
          return new Promise(function (resolve, reject) {
              console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
              reject("AMBIENTE NÃO CONFIGURADO EM app.js")
          });
      }
  }
  
  module.exports = {
      executar
  }
