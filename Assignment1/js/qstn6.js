let str2 = document.getElementById("q6input1");
let n = document.getElementById("q6input2");
function qstn6(){
    function truncate(str, no_words){
        return str.split(" ").splice(0,no_words).join(" ");
    }
    alert(truncate(str2.value,n.value));
    str2.value = "";
    n.value = "";
}