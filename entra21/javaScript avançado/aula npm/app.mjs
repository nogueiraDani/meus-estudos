import moment from "moment";

moment.locale("pt-BR");
let data = moment().format('D [de] MMMM [de] YYYY ');
let data1 = moment().format('DD[/]MM[/]YY');
let hora = moment().format("H:mm:s");

console.log(data);
console.log(hora);
console.log(data1);