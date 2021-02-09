function qstn2(){
    var date_diff_indays = function(date1, date2){
        dt1 = new Date(date1);dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    var x = document.getElementById("q2input1");
    var y = document.getElementById("q2input2");
    alert((date_diff_indays(x.value, y.value)+" days"));
    x.value="";
    y.value="";
}