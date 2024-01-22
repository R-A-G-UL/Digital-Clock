let ampm=document.getElementById("ampm")

function displaytime(){
    let datetime= new Date()
    let hr = datetime.getHours();
    let min =datetime.getMinutes();
    let sec = datetime.getSeconds();

    if(hr>12){
        hr-=12
        ampm.innerHTML= 'PM'
    }
    else{
        ampm.innerHTML="Am"
    }
    document.getElementById("hour").innerHTML=padzero(hr)
    document.getElementById("min").innerHTML=padzero(min)
    document.getElementById("sec").innerHTML=padzero(sec)
    
}
function padzero(num){
    return num<10?"0"+num:num

}
setInterval(displaytime,500)