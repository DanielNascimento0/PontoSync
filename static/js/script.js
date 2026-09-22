    function atualizarRelogio(){
const agora = new Date();

const data = agora.getDate();
const mes = agora.getMonth()+1;
const ano = agora.getFullYear();

const dataCompleta = data + '/' + mes + '/' + ano
console.log(dataCompleta)
const elementoData = document.getElementById('data');
elementoData.textContent = dataCompleta

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

const elementoPonto = document.getElementById('ponto')

let pontoEtapa = 0

function baterPonto(){

pontoEtapa = pontoEtapa + 1

console.log(pontoEtapa)

const agora = new Date();

const horario = agora.getHours()
const minutos = agora.getMinutes()
const segundo = agora.getSeconds()

let minutoFormatados

if (minutos <10){
    minutoFormatados = '0' + minutos;
    console.log(minutoFormatados)
}
else {
    minutoFormatados = minutos;
    console.log(minutoFormatados);
}

let segundoFormatados

if (segundo <10){
    segundoFormatados = '0' + segundo;
    console.log(segundoFormatados)
}
else {
    segundoFormatados =  segundo;
    console.log(segundoFormatados)
}

const inicioPonto = 'Entrada registrada às' + ' ' + horario + ':' + minutoFormatados + ':' + segundoFormatados
console.log(inicioPonto)

const elementoInicio = document.getElementById('entrada')

const elementoIntervalo = document.getElementById('intervalo')

const elementoRetorno = document.getElementById('retorno')

const elementoSaida = document.getElementById('saida')

if (pontoEtapa == 1){
    elementoInicio.textContent = inicioPonto
}
else if (pontoEtapa == 2){
    const inicioIntervalo = 'Intervalo iniciado às' + ' ' + horario + ':' + minutoFormatados + ':' + segundoFormatados
    elementoIntervalo.textContent = inicioIntervalo
}
else if (pontoEtapa == 3){
    const retornoIntervalo = 'Retorno intervalo às' + ' ' + horario + ':' + minutoFormatados + ':' + segundoFormatados
    elementoRetorno.textContent = retornoIntervalo
}
else if (pontoEtapa == 4){
    const registroSaida = 'Saida registrada às' + ' ' + horario + ':' + minutoFormatados + ':' + segundoFormatados
    elementoSaida.textContent = registroSaida
}

}
elementoPonto.addEventListener('click', baterPonto)
