function qstn4(){
    var arr1 = [];
    var si = document.getElementById("q4input1").value;
    for(var h=0;h<si;h++){
        arr1[h]=prompt("Enter the value "+(h+1));
    }
    alert("Input array: "+arr1);
    var mf = 1;
    var m = 0;
    var item;
    for(var i=0; i<arr1.length; i++){
        for(var j=i; j<arr1.length; j++){
            if(arr1[i] == arr1[j]){
                m++;
            }
            if(mf<m){
                mf=m;
                item = arr1[i];
            }
        }
        m=0;
    }
    alert(item+" ( " +mf +" times ) ");
    q4input1.value="";
}