function calcularIMC(){
    let  altura =  document.getElementById("altura").value;
    let  peso =  document.getElementById("peso").value;

 let imc = peso / (altura * altura)

    document.getElementById("resultadoIMC").innerHTML = imc;
}