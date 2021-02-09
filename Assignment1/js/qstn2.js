function qstn2(){
            let input1 = document.getElementById("q2input1");
            let count = 0;
            for (var x=0; x<=input1.value; x++) {
                if (x == 0) {
                        document.write(x +  " is even" + '<br/>'); 
                }
                else if(x == 1){
                        document.write(x+" is odd"+'<br/>');
                }
                else if(x == 2){
                        document.write(x + " is even and prime" + '<br/>')
                }
                else if (x % 2 == 0) {
                        document.write(x + " is even" + '<br/>');
                }
                else if(x%2!=0){
                        for(let i=2;i<=x;i++){
                                if(x%i!=0){
                                        count = count + 1;
                                        // break;
                                }
                                else{
                                        count = 0;
                                }
                        }
                        if(count>0){
                                document.write(x+" is odd and prime"+'<br/>');
                        }
                        else{
                                document.write(x+" is odd"+'<br/>');
                        }
                }
                
        }
        
}