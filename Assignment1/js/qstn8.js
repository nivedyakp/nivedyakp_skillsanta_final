let num = document.getElementById("q8input1");
function qstn8(){
    let a = 0, b = 1, c;
    document.write("Fibonnaci Series"+"<br/>");
    for(let i =1;i<=num.value;i++){
        document.write(a+" ");
        c = a + b;
        a = b;
        b = c;
    }
}