function gcd(a,b){
  if(a==0){
    return b;
  }
  else{
    return gcd(b%a,a);
  }
}


function lcm(a,b){
  flag = 1;
  return ((a/gcd(a,b))*b);
}


function qstn3(){
  var a = document.getElementById("q3input1").value;
  var b = document.getElementById("q3input2").value;
  var flag = 0;
  var c = lcm(a,b);
  if(flag==1){
    alert(`LCM OF ${a} and ${b} is `+ c);
    q3input1.value="";q3input2.value="";
  }
  else{
    alert("Error!! Enter valid numbers");
  }
}