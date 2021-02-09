let cel = document.getElementById("q9input1");
let far = document.getElementById("q9input2");
function qstn9a(){
    const celfar = (cel.value*1.8)+32;
    alert(celfar+" °F");
    q9input1.value="";
}
function qstn9b(){
    const farcel = (far.value - 32)*5/9;
    alert(farcel+" °C");
    q9input2.value="";
}