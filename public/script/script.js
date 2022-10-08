function currentTime() {
    let dd = new Date(); 
    let hh = dd.getHours();
    let mm = dd.getMinutes();

  
    if(hh === 0){
        hh = 12;
    }
    
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
      
     let time = hh + ":" + mm;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();