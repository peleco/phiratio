var ratioGolden = new Number((1 + Math.sqrt(5)) / 2);
var ratioFourThree = new Number(4/3); //TV
var ratioThreeTwo = new Number(3/2); //35mm
var ratioSixteenNine = new Number(16/9);

//var ratioGolden = ((1 + Math.sqrt(5)) / 2);
//var ratioFourThree = (4/3); //TV
//var ratioThreeTwo = (3/2); //35mm
//var ratioSixteenNine = (16/9); //HD

var selectedRatio = ratioGolden;

var calculation = new Number(0); //numero calculado

var calculatedResult = document.querySelector("#numberDisplay #result");
var calculationDone = false;
var valueToCalculate = new Number();
var valueREF = document.querySelector("#numberDisplay #valueREF"); //valor que fue calculado
var operationREF = document.querySelector("#numberDisplay #operationREF"); //operacion
var ratioREF = document.querySelector("#numberDisplay #ratioREF");
//ratioREF.innerHTML = selectedRatio.toFixed(3);
ratioREF.innerHTML = ratioREFInitial.innerHTML =  1.618;

var refValuesInitial = document.querySelector("#refValuesInitial"); //info del display al comienzo
var refValues = document.querySelector("#refValues"); //info del display

function calculateLth() {
	refValuesInitial.style.display = "none";
	refValues.style.display = "block";
	valueREF.innerHTML = calculatedResult.innerHTML;
	operationREF.innerHTML = "&times";
	valueToCalculate = calculatedResult.innerHTML * selectedRatio
	//r = valueToCalculate.toFixed(3);
	r = valueToCalculate;
	//alert(r);
	//var pre = r.toString().split('.');
	//alert(pre[0].length);
	//alert(pre[1].length);
	//alert (r.length);
	if (r.length >= 12) {
		calculatedResult.innerHTML = r.substring(0,12);
	} else {

		if (calculatedResult.innerHTML == 0.000){
			calculatedResult.innerHTML = 0
		} else {
			calculatedResult.innerHTML = r;
		}

	}
	dotDisplayed = true;
	calculationDone = true;
}

function calculateWth() {
	refValuesInitial.style.display = "none";
	refValues.style.display = "block";
	valueREF.innerHTML = calculatedResult.innerHTML;
	operationREF.innerHTML = "&divide;";
	valueToCalculate = calculatedResult.innerHTML / selectedRatio
	//r = valueToCalculate.toFixed(3);
	r = valueToCalculate;

	if (r.length >= 12) {
		calculatedResult.innerHTML = r.substring(0,12);
	} else {

		if (calculatedResult.innerHTML == 0.000){
			calculatedResult.innerHTML = 0
		} else {
			calculatedResult.innerHTML = r;
		}

	}
	dotDisplayed = true;
	calculationDone = true;
}

function roundValue() {
	calculatedResult.innerHTML = Math.round(calculatedResult.innerHTML);

	calculationDone = true;
}

function resetCalc() {
	refValuesInitial.style.display = "block";
	refValues.style.display = "none";
	calculatedResult.innerHTML = 0;
	calcStart = false;
	dotDisplayed = false;
	calculationDone = false;

	valueREF.innerHTML = calculatedResult.innerHTML;
}



var numCalc;
var calcStart = false;
var dotDisplayed = false;
var numberDisplayLenght = 0;

//CALUCULATOR
function calculator(calcNum) {

	numberDisplayLenght = calculatedResult.innerHTML.length;
	//alert (numberDisplayLenght);

	if (calculationDone == false) {

	if (numberDisplayLenght <12) {

		if (calcStart==false){
			if (calcNum == 0){
				null;
			} else {
				calculatedResult.innerHTML = calcNum;
				calcStart = true;
			}

			if (calcNum == "." && dotDisplayed == false) {
				calculatedResult.innerHTML = "0.";
				dotDisplayed = true;
				calcStart = true;
			}

		} else {

			if (calcNum == "." && dotDisplayed == false){
				calculatedResult.innerHTML = calculatedResult.innerHTML + calcNum;
				dotDisplayed = true;
			} else if (calcNum == "." && dotDisplayed == true){
				null;
			} else {
				calculatedResult.innerHTML = calculatedResult.innerHTML + calcNum;
			}

		}

	};

	} else {

		resetCalc();

		if (calcNum == "." && dotDisplayed == false) {
			calculatedResult.innerHTML = "0.";
			dotDisplayed = true;
			calcStart = true;
		} else if (calcNum == "0"){
			calculatedResult.innerHTML = "0";
			dotDisplayed = false;
			calcStart = false;
		} else {
			calculatedResult.innerHTML = calcNum;
			calcStart = true;
		}
	};

};




var valorActual = 0;

function btn_1_action (){
	calculator(1);
};
document.querySelector("#btn1").onclick = btn_1_action;

function btn_2_action (){
	calculator(2);
};
document.querySelector("#btn2").onclick = btn_2_action;

function btn_3_action (){
	calculator(3);
};
document.querySelector("#btn3").onclick = btn_3_action;

function btn_4_action (){
	calculator(4);
};
document.querySelector("#btn4").onclick = btn_4_action;

function btn_5_action (){
	calculator(5);
};
document.querySelector("#btn5").onclick = btn_5_action;

function btn_6_action (){
	calculator(6);
};
document.querySelector("#btn6").onclick = btn_6_action;

function btn_7_action (){
	calculator(7);
};
document.querySelector("#btn7").onclick = btn_7_action;

function btn_8_action (){
	calculator(8);
};
document.querySelector("#btn8").onclick = btn_8_action;

function btn_9_action (){
	calculator(9);
};
document.querySelector("#btn9").onclick = btn_9_action;

function btn_0_action (){
	calculator(0);
};
document.querySelector("#btn0").onclick = btn_0_action;

function btn_dot_action (){
	calculator(".");
};
document.querySelector("#btnDot").onclick = btn_dot_action;




function ftn_WTH (){
	calculateWth();
};
document.querySelector("#btnWth").onclick = ftn_WTH;

function ftn_LTH (){
	calculateLth();
};
document.querySelector("#btnLth").onclick = ftn_LTH;

function ftn_ROUND (){
	roundValue();
};
document.querySelector("#btnINT").onclick = ftn_ROUND;

function ftn_RESET (){
	resetCalc();
};
document.querySelector("#btnReset").onclick = ftn_RESET;



//ratio selectors

function slct_Golden (){
	refValuesInitial.style.display = "block";
	refValues.style.display = "none";
	selectedRatio = ratioGolden;
	ratioREF.innerHTML = ratioREFInitial.innerHTML = 1.618;
	document.querySelector("#selectGolden").className='btn ratioSelected';
	document.querySelector("#selectFourThree").className='slctBTN btn';
	document.querySelector("#selectThreeTwo").className='slctBTN btn';
	document.querySelector("#selectSixteenNine").className='slctBTN btn';

	document.querySelector("#selectGolden").onclick = null;
	document.querySelector("#selectFourThree").onclick = slct_fourThree;
	document.querySelector("#selectThreeTwo").onclick = slct_threeTwo;
	document.querySelector("#selectSixteenNine").onclick = slct_sixteenNine;
};

function slct_fourThree (){
	refValuesInitial.style.display = "block";
	refValues.style.display = "none";
	selectedRatio = ratioFourThree;
	//ratioREF.innerHTML = ratioREFInitial.innerHTML = selectedRatio.toFixed(1);
	ratioREF.innerHTML = ratioREFInitial.innerHTML = 1.3;
	document.querySelector("#selectGolden").className='slctBTN btn';
	document.querySelector("#selectFourThree").className='btn ratioSelected';
	document.querySelector("#selectThreeTwo").className='slctBTN btn';
	document.querySelector("#selectSixteenNine").className='slctBTN btn';

	document.querySelector("#selectGolden").onclick = slct_Golden;
	document.querySelector("#selectFourThree").onclick = null;
	document.querySelector("#selectThreeTwo").onclick = slct_threeTwo;
	document.querySelector("#selectSixteenNine").onclick = slct_sixteenNine;
};

function slct_threeTwo (){
	refValuesInitial.style.display = "block";
	refValues.style.display = "none";
	selectedRatio = ratioThreeTwo;
	ratioREF.innerHTML = ratioREFInitial.innerHTML = 1.5;
	document.querySelector("#selectGolden").className='slctBTN btn';
	document.querySelector("#selectFourThree").className='slctBTN btn';
	document.querySelector("#selectThreeTwo").className='btn ratioSelected';
	document.querySelector("#selectSixteenNine").className='slctBTN btn';

	document.querySelector("#selectGolden").onclick = slct_Golden;
	document.querySelector("#selectFourThree").onclick = slct_fourThree;
	document.querySelector("#selectThreeTwo").onclick = null;
	document.querySelector("#selectSixteenNine").onclick = slct_sixteenNine;
};

function slct_sixteenNine (){
	refValuesInitial.style.display = "block";
	refValues.style.display = "none";
	selectedRatio = ratioSixteenNine;
	//ratioREF.innerHTML = ratioREFInitial.innerHTML = selectedRatio.toFixed(3);
	ratioREF.innerHTML = ratioREFInitial.innerHTML = 1.7;
	document.querySelector("#selectGolden").className='slctBTN btn';
	document.querySelector("#selectFourThree").className='slctBTN btn';
	document.querySelector("#selectThreeTwo").className='slctBTN btn';
	document.querySelector("#selectSixteenNine").className='btn ratioSelected';

	document.querySelector("#selectGolden").onclick = slct_Golden;
	document.querySelector("#selectFourThree").onclick = slct_fourThree;
	document.querySelector("#selectThreeTwo").onclick = slct_threeTwo;
	document.querySelector("#selectSixteenNine").onclick = null;
};

document.querySelector("#selectGolden").onclick = null;
document.querySelector("#selectFourThree").onclick = slct_fourThree;
document.querySelector("#selectThreeTwo").onclick = slct_threeTwo;
document.querySelector("#selectSixteenNine").onclick = slct_sixteenNine;

//Keyboard handling:
document.addEventListener('keydown', function(event) {

	if (event.keyCode >= 48 && event.keyCode <= 57) {
		var c = String.fromCharCode(event.keyCode);
		calculator(c);
	}

	//dot
	if (event.keyCode == 46 || event.keyCode == 110){
		var c = String.fromCharCode(event.keyCode);
		//alert ("hola")
		if (dotDisplayed == true) {
			null;
		} else {
			calculator(".");
			dotDisplayed = true;
		}

	}

	//Lth
	if (event.keyCode == 43 || event.keyCode == 107){
		calculateLth();
	}

	//Wth
	if (event.keyCode == 45 || event.keyCode == 109){
		calculateWth();
	}

	//Reset
	if (event.keyCode == 27 || event.keyCode == 63289 || event.keyCode == 13){
		resetCalc();
	}

	//INT
	if (event.keyCode == 42 || event.keyCode == 106){
		roundValue();
	}

}, true );
