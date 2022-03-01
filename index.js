function _id(ident){
    return document.getElementById(ident);
}

function factorial(){
    let entradaFactorial = parseInt(_id("entradaFactorial").value);

    let resultatFactorial;
    let operacionsFactorial = "";

    if (entradaFactorial<0){
        resultatFactorial = "ERROR";
        alert("no es pot calcular el factorial d'un número negatiu");
    } else{
        resultatFactorial = 1;
        for (let i = entradaFactorial; i>0; i--){
            resultatFactorial = resultatFactorial*i;
            operacionsFactorial += i
            if (i>1) operacionsFactorial += "*";
        }
    }

    _id("resultatFactorial").innerHTML = resultatFactorial;
    _id("operacionsFactorial").innerHTML = operacionsFactorial;
}

function calculaIVA(){
    let preuAmbIVA = _id("preuAmbIVA").value;
    let tipusIVA = parseInt(_id("tipusIVA").value);

    let preuSenseIVA = preuAmbIVA / (1+tipusIVA/100);
    let IVA = preuAmbIVA - preuSenseIVA;
    _id("preuSenseIVA").innerHTML = preuSenseIVA.toFixed(2);
    _id("IVA").innerHTML = IVA.toFixed(2);
}

function canviaFons(tipus){
    let colorFons = "";
    let colorTexte = "";
    if (tipus == "random"){
        let gris = Math.floor(Math.random() * 255);
        colorFons = "rgb(" + gris + "," + gris + "," + gris + ")";
        if (gris < 75){
            let negatiu = 255-gris;
            colorTexte = "rgb(" + negatiu + "," + negatiu + "," + negatiu + ")";
        } else{
            colorTexte = "black";
        }
    } else{
        colorFons = "white";
        colorTexte = "black";
    }

    let cos = _id("cos");
    cos.style.backgroundColor = colorFons;
    cos.style.color = colorTexte;
}