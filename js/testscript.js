var pos = 0, test_status, test, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
["Determine the chemical formula of complex substance:", "а) Al;", "б) N<sub>2</sub>;", "в) O<sub>3</sub>;", "г) SO<sub>3</sub>.", "D"],
["Correct record of full ion equation is:", "а) CuO+2HCl = Cu<sup>2+</sup>+Cl<sup>-</sup><sub>2</sub>+H<sub>2</sub>O;", "б) CuO+2H<sup>+</sup>+2Cl<sup>-</sup> = Cu<sup>2+</sup>+Cl<sup>-</sup><sub>2</sub>+H<sub>2</sub>O;", "в) CuO+2H<sup>+</sup>+2Cl<sup>-</sup> = Cu<sup>2+</sup>+2Cl<sup>-</sup>+H<sub>2</sub>O;", "г) Cu<sup>2+</sup>+O<sup>2-</sup>+2H<sup>+</sup>+2Cl<sup>-</sup>=Cu<sup>2+</sup>+Cl<sup>-</sup><sub>2</sub>+H<sub>2</sub>O.", "C"],
["Isotopes are:", "а) nuclides of one chemical element;", "б) nuclides of different chemical elements;", "в) simple substances of one chemical element;", "г) simple substances of different chemical elements.", "A"],
["Why Sulphur and Chromium are in the same group of periodic table?", "а) Sulfur and Chromium atoms have the same number of valence orbitals;", "б) Sulfur and Chromium atoms have the same number of valence electrons;", "в) Sulfur and Chromium atoms have the same number of energy levels;", "г) Sulfur and Chromium have the same valence.", "B"],
["The same number of energy levels have atoms of elements with proton numbers:", "а) 15 and 16;", "б) 7 and 15;", "в) 8 and 16;", "г) 15 and 33.", "A"]
];

function _(x){
	return document.getElementById(x);
}

function renderQuestion(){
	test = _("test");
	test.style.display = 'block';
	start = _("start");
	start.style.display = 'none';
	restart = _("restart");
	restart.style.display = 'block';
	if(pos>=questions.length){
	test.innerHTML = "<h2>You have "+correct+" correct answers of "+questions.length+"</h2><br>";
		if((correct/questions.length)*100 >= 92){
			test.innerHTML ="<h2>You have "+correct+" correct answers of "+questions.length+"</h2><br><h3>Excellent!<h3>";
		}
		else if ((correct/questions.length)*100 <= 91 && (correct/questions.length)*100 >= 76){
			test.innerHTML ="<h2>You have "+correct+" correct answers of "+questions.length+"</h2><br><h3>Bad!<h3>";
		}
		else if ((correct/questions.length)*100 <= 75){
			test.innerHTML ="<h2>You have "+correct+" correct answers of "+questions.length+"</h2><br><h3>Very bad!<h3>";
		}
	_("test_status").innerHTML = "Quiz is over";
	pos = 0;
	correct = 0;
	return false;
}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question=questions[pos][0];
	chA=questions[pos][1];
	chB=questions[pos][2];
	chC=questions[pos][3];
	chD=questions[pos][4];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'>"+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'>"+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'>"+chC+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='D'>"+chD+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Submit answer</button>";
};

function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
	if(choices[0].checked === false && choices[1].checked === false && choices[2].checked === false && choices[3].checked === false){
		alert("You should make a choice!");
		return false;}
	else if(choices[i].checked){
		choice = choices[i].value;}
	};
	if(choice == questions[pos][5]){
	correct++;
	}
	pos++;
	renderQuestion();
};

function restartQuestion(){
	if(pos>=0){
	pos = 0;
	correct = 0;
	renderQuestion()};
};