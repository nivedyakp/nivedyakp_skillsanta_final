let a = document.getElementById("q1input1");
let b = document.getElementById("q1input2");
let c = document.getElementById("q1input3");
function qstn1(){
    if(a.value > b.value && a.value > c.value){
        if(b.value > c.value){
            alert(a.value+", "+b.value+", "+c.value);
            a.value="";
            b.value="";
            c.value="";
        }
        else{
            alert(a.value+", "+c.value+", " +b.value);
            a.value="";
            b.value="";
            c.value="";
        }
    }
    else if(b.value > a.value && b.value > c.value){
        if(a.value > c.value){
            alert(b.value+","+a.value+","+ c.value);
            a.value="";
            b.value="";
            c.value="";
        }
        else{
            alert(b.value+","+c.value+","+ a.value);
            a.value="";
            b.value="";
            c.value="";
        }
    }
    else if(c.value > a.value && c.value > b.value){
        if(a.value > b.value){
            alert(c.value +", "+ a.value + ", "+ b.value);
            a.value="";
            b.value="";
            c.value="";
        }
        else{
            alert(c.value +", "+ b.value + ", "+ a.value);
            a.value="";
            b.value="";
            c.value="";
        }
    }
    else{
        alert("Please enter the inputs!!");
    }
}