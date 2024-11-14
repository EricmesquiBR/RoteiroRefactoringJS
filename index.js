const { readFileSync } = require("fs");
const { get } = require("http");

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var {gerarFaturaStr, gerarFaturaHTML} = require("./apresentacao.js");


// main
const faturas = JSON.parse(readFileSync("./faturas.json"));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
const faturaHTML = gerarFaturaHTML(faturas, calc);
console.log(faturaStr);
console.log(faturaHTML);
