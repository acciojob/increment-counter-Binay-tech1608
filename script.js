//your JS code here. If required.

let counter = document.getElementById("counter");
let count = 0 ;
let mybtn = document.getElementById("btn");

mybtn.addEventListener("click", ()=>{
	count++;
	counter.textContent = count;
})
