
function getFields(){
    var dia = document.getElementById('dia').value;
    var mes = document.getElementById('mes').value;
    var ano = document.getElementById('ano').value;
    calcSafadeza(dia,mes,ano);
}

function calcSafadeza(dia,mes,ano){
    document.getElementById("alert").style.display  = "block"; 
    var safadeza = somatorio(mes)+(ano / 100)*(50-dia);
    if(safadeza){
        var anjo = 100 - safadeza;
        document.getElementById("alert").innerHTML = anjo.toFixed(2) +"% anjo ,mas aquele "+safadeza.toFixed(2)+"% é vagabundo."; 
    }else{
        document.getElementById("alert").innerHTML = "Você esqueceu de preencher algum campo"; 
    }
}

function somatorio(m){
    soma = 0;
    for(i = 0; soma <=m;i++){
        soma+= i;
    }
    return soma;
}