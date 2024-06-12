function updateClock(){
    const now = new Date(); 
    const hours=now.getHours().toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const secinds=now.getSeconds().toString().padStart(2,0);
    const time =    `${hours}:${minutes}:${secinds}`; 
    document.getElementById("clock").textContent=time; 


}

setInterval(updateClock,1000);