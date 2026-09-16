function atualizarRelogio(){
const agora = new Date();

const data = agora.getDate();
const mes = agora.getMonth()+1;
const ano = agora.getFullYear();

const dataCompleta = data + '/' + mes + '/' + ano
console.log(dataCompleta)

const horario = agora.getHours();
console.log(horario)

const minuto = agora.getMinutes();
console.log(minuto)

let minutoFormatados

if (minuto <10){
    minutoFormatados = '0' + minuto;
    console.log(minutoFormatados);
}
else {
    minutoFormatados = minuto;
    console.log(minuto);
}

const segundo = agora.getSeconds();
console.log(segundo)

let segundoFormatados

if (segundo <10) {
    segundoFormatados = '0' + segundo;
    console.log(segundoFormatados);
}
else {
    segundoFormatados = segundo;
    console.log(segundo);
}
const horarioCompleto = horario + ':' + minutoFormatados + ':' + segundoFormatados
console.log(horarioCompleto)
const elementoRelogio = document.getElementById('relogio');
elementoRelogio.textContent = horarioCompleto;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
