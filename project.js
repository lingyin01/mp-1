let first;
let second;

function addition()  {
    first = document.getElementById("first-num").value;
    second = document.getElementById("second-num").value;
    let result = Number(first)+Number(second);
    document.getElementById("output").innerHTML =String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }

    else{
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML =String(result);
}


function subtraction() {
    first = document.getElementById("first-num").value;
    second = document.getElementById("second-num").value;
    let result = Number(first)-Number(second);
    document.getElementById("output").innerHTML =String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }

    else{
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML =String(result);
}


function multiplication() {
    first = document.getElementById("first-num").value;
    second = document.getElementById("second-num").value;
    let result = Number(first)*Number(second);
    document.getElementById("output").innerHTML =String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }

    else{
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML =String(result);
}


function division() {
    first = document.getElementById("first-num").value;
    second = document.getElementById("second-num").value;
    let result = Number(first)/Number(second);
    document.getElementById("output").innerHTML =String(result);


    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }

    else{
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML =String(result);
}


function power(){
    first=document.getElementById("first-num").value;
    second=document.getElementById("second-num").value;
    let result = 1;
    for(let i =0; i<second; i=i+1){
        result=first*result;
    }
    document.getElementById("output").innerHTML =String(result);


    if (result < 0) {
        document.getElementById("output").style.color = "red";
    }

    else{
        document.getElementById("output").style.color = "black";
    }

    document.getElementById("output").innerHTML =String(result);
}

function clearing(){
    document.getElementById("output").innerHTML="";
    document.getElementById("first-num").value="";
    document.getElementById("second-num").value="";
}