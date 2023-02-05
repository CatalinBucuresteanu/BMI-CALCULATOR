var weight=document.querySelector("#input")
var height=document.querySelector("#input1");
var final=document.querySelector("#bmi");
function calculatebmi(){
var bmi;
bmi=weight.value/(height.value*height.value);
bmi=bmi*10000;
if(bmi>=18.5 && bmi<=24.99){
	final.innerHTML="<p>Healthy</p>";
}
else if(bmi>=25.0 && bmi<=29.99){  
    final.innerHTML="<p>Overweight</p>";
	 
}
else if(bmi>=30.00){
final.innerHTML="<p>Obese</p>";
}
else if(bmi<18.5){
    final.innerHTML="<p>Underweight</p>";
}}
