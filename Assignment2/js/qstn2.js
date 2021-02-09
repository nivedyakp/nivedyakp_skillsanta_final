function qstn2(){
    var myColor = [];
    var s = document.getElementById("q2input1").value;
    for(var l=0;l<s;l++){
        myColor[l]=prompt("Enter the value "+(l+1));
    }
    var text = (myColor.toString());
    var text1 = (myColor.join());
    var text2 = (myColor.join('+'));
    document.write("Input array:"+'<br/>'+myColor+'<br/>'+'<br/>'+"Answer:"+'<br/>'+text+'<br/>'+text1+'<br/>'+text2);
    q2input1.value="";
}