var str = document.getElementById("q10input1");
function qstn10(){
    let lowreg = /^([a-z])$/
    let upreg = /^([A-Z])$/
    let x = "";
    for(let i=0;i<=str.value.length;i++){
        if(lowreg.test(str.value[i])){
           x = x + str.value[i].toUpperCase();
        }
        else if(upreg.test(str.value[i])){
            x = x + str.value[i].toLowerCase();
        }
    }
    alert(x);
    q10input1.value = "";
}