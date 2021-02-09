function qstn6(){
    function removeDuplicates(num){
        var x, len=num.length, out=[],obj={};
        for(x=0; x<len; x++){
            obj[num[x]]=0;
        }
        for(x in obj){
            out.push(x);
        }
        return out;
    }
    var Mynum = [];
    var l = document.getElementById("q6input1").value;
    for(var h=0;h<l;h++){
        Mynum[h]=prompt("Enter the value "+(h+1));
    }
    result = removeDuplicates(Mynum);
    alert("Input array: "+Mynum);
    alert("Output array: "+result);
    q6input1.value="";
}