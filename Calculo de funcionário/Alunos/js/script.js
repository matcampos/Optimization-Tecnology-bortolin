
function getFields(){
    var name = document.getElementById('name').value;
    var qtHoras = document.getElementById('qtHoras').value;
    var dependentes = document.getElementById('dependentes').value;
    innerInformations(name,qtHoras,dependentes);
}

function innerInformations(name,qtHoras,dependentes){
    document.getElementById("alert").style.display  = "block"; 
var hora = 98;
var dp = 80;

var sal = qtHoras * hora;
var dpSal = dp * dependentes;

var salBruto = sal + dpSal;
var descontoIr = salBruto * 0.05;
var descontoINSS = salBruto * 0.085;
var salL = salBruto - descontoIr;
var salLiquido = salL  - descontoINSS;
    document.getElementById("alert").innerHTML  = "<div><p>Nome do funcionário: "+name+"</div></p><div><p>Salário bruto: "+salBruto+"</div></p><div><p>Desconto de IR: "+descontoIr+"</div></p><div><p>Desconto de INSS: "+descontoINSS+"</div></p><div><p>Salário liquido: "+salLiquido+"</div></p>";
}
// - Nome do funcion�rio 
// - Sal�rio bruto (sem descontos)
// - Desconto de IR (0.05)
// - Desconto de INSS (0.085)
// - Sal�rio Final
function somatorio(m){
    soma = 0;
    for(i = 0; soma <=m;i++){
        soma+= i;
    }
    return soma;
}