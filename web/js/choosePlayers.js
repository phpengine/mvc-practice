function p1change() {
	if (document.getElementById("p1radiocomp").checked) {
		hidediv("p1choicediv");
	} else if (document.getElementById("p1radiohuman").checked) {
		showdiv("p1choicediv");
	} 
	checkchoice();
}

function p2change() {
	if (document.getElementById("p2radiocomp").checked) {
		hidediv("p2choicediv");
	} else if (document.getElementById("p2radiohuman").checked) {
		showdiv("p2choicediv");
	} 
	checkchoice();
}

function hidediv(divid) {
	document.getElementById(divid).style.display = 'none';
}

function showdiv(divid) {
	document.getElementById(divid).style.display = 'block';
}


function checkchoice() {
	if ( document.getElementById("p2radiocomp").checked || document.getElementById("p2radiohuman").checked ){
		if (document.getElementById("p1radiocomp").checked || document.getElementById("p1radiohuman").checked){
			showgo();
		} else {
			hidego();
		}
	} else {
		hidego();
	}
}


function hidego() {
	document.getElementById("csb").style.display = 'none';
}

function showgo() {
	document.getElementById("csb").style.display = 'block';
} 
