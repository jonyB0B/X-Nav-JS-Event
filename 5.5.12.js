function evento()
{
	var el = document.getElementById("Evento");
	el.style.backgroundColor = el.value;
}
// Function to add event listener to table
var el = document.getElementById("Evento");
el.addEventListener("input",evento);
