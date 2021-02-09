var str1 = document.getElementById("q5input1");
function qstn5(){
    function capital_letter(str){
        str = str.split(" ");
        for (var i = 0, x = str.length; i < x; i++){
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
        return str.join(" ");
    }
    alert(capital_letter(str1.value));
    str1.value = "";
}