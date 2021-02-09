function qstn3(){
    var arr1 = [];
    var size = document.getElementById("q3input1").value;
    for(var x=0;x<size;x++){
        arr1[x]=prompt("Enter the value "+(x+1));
    }
    alert("Input array: "+"[ "+arr1+" ]");
    var arr2=[];
    var min=arr1[0];
    var pos;
    var max=arr1[0];
    for(i=0; i<arr1.length; i++){
        if (max<arr1[i]) max=arr1[i];
    }
    for(var i=0;i<arr1.length;i++){
        for (var j=0;j<arr1.length;j++){
            if(arr1[j]!="x"){
                if(min>arr1[j]){
                    min=arr1[j];
                    pos=j;
                }
            }
        }
        arr2[i]=min;arr1[pos]="x";
        min=max;
    }
    alert("Output array: "+arr2);
    q3input1.value="";
}