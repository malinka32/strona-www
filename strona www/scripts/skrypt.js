window.onload=function(){
	
	var seconds=00;
	var tens=00;
	var minutes=00;
	var hours=00;
	var days=00;
	
	var appendTens=document.getElementById("tens");
	var appendSeconds=document.getElementById("seconds");
	 var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");
    var appendDays = document.getElementById("days");
	var buttonStart=document.getElementById("button-start");
	var buttonStop=document.getElementById("button-stop");
	var buttonReset=document.getElementById("button-reset");
	var Interval;
	
	buttonStart.onclick=function(){
		
		clearInterval(Interval);
		Interval=setInterval(startTimer, 10);
	}
	buttonStop.onclick=function(){
		clearInterval(Interval);
	}
	buttonReset.onclick=function(){
		clearInterval(Interval);
		tens="00";
		seconds="00";
		minutes="00";
		hours="00";
		days="00";
		appendTens.innerHTML=tens;
		appendSeconds.innerHTML=seconds;
	}
	 function startTimer(){
        tens++;
        if(tens <= 9){
            appendTens.innerHTML = "0" +tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
		if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(hours > 9){
            appendHours.innerHTML = hours;		
        }
		if(hours > 24){
            days++;
            appendMinutes.innerHTML = "0" + hours;
            seconds = 0;
            appendTens.innerHTML = "0" + 0;
        }

	 }
}