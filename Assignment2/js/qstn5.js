function qstn5(){
    var ar = [];
    var siz = document.getElementById("q5input1").value;
    for(var m=0;m<siz;m++){
        ar[m]=prompt("Enter the value "+(m+1));
    }
    alert("Input array: "+ar);
    q5input1.value="";    
}