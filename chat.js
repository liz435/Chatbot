let dial ; 
let output;
let num = 0;
let count = 0;
var conversation = [''];
let dialJSON;
let sep = [];
let answers;
let last;
let countlast = 0;
var save = [];
var array = [];
let params;
let wordcount = 0;
let idk = 0;
var final  = false;
var happy = false;
var noStat = false;
var fast = false;
	var one = false;
	var two  =false;
	var three = false;
	var four = false;
	var five = false;




function enterKey(event){
	if(event.keyCode == 13) {
			typeInput();
	document.getElementById("text-box").innerHTML = " ";
	}
}


function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


async function typeInput(){
	dial = document.getElementById("text-box").value;
	dialJSON = JSON.stringify(dial);
    // localStorage.setItem('input', dial);
  	// sep = dialJSON.split(" ");
  	document.getElementById('chat-output').innerHTML = dialJSON;
  	last = dialJSON;
  	countlast++;
  	if (dialJSON !='""' && last){
  	count++;
  }


  	// console.log(last);
  	// console.log(countlast);
  	// localStorage.setItem("convos" JSON.stringify(save));
  	// countWord();

  	if(final == true){
  		finalQ();

  	}else if( fast == true){
  		fastaf();
  	}else if(happy == true){
  		happyy()

  	}else{chat();}
  	
  	

}


async function happyy(){

		let delayer = await delay(3000);

	document.getElementById('chat-output').innerHTML = '"you are mean"'

	answers = "you are mean! bye!"
	document.getElementById("chat-input").innerHTML = answers;

}


async function finalQ(){
let countQ = 0;
	let delayer = await delay(600);	
	countQ++

	if(dialJSON.includes(params) == false){
	answers = "Random thought, I can talk faster if you want me to. What do you say?"
}

	if(dialJSON.toLowerCase().includes("can")){
	answers = "Sure you can do anything"
}

if(dialJSON.toLowerCase().includes("tired")||dialJSON.toLowerCase().includes("stressed")){
	answers = "Suck it up"
}

if(dialJSON.toLowerCase().includes("thank")){
	answers = "You are the first person who said that me:) I am going to cry"
}

if(dialJSON.toLowerCase().includes("well")||dialJSON.toLowerCase().includes("good")){
	answers = "Good for you!"
}

if (sep.length == 1){
	wordcount++;
}
if(sep.length == 1 && wordcount >3){
	answers = "Just so you know, I am able to understand more than just a word, perhaps."
}

if(dialJSON.toLowerCase().includes("no")){
	answers = "Are you saying no just to be negative?"
}

if(dialJSON.toLowerCase().includes("yes")||dialJSON.toLowerCase().includes("sure")||dialJSON.toLowerCase().includes("ok")||dialJSON.toLowerCase().includes("please")){
	answers = ";)"
	fast = true;
	fastaf()
}

if(dialJSON.toLowerCase().includes("how")||dialJSON.toLowerCase().includes("what")){
	answers = "I'll answer to that, but you have to tell me what do you think of me first"
	happy = true;
	happyy();

	

}



	 document.getElementById("chat-input").innerHTML = answers;
}




async function chat(){


	 	let delayer = await delay(600);
	 	// console.log(dialJSON.includes("yes"));

sep = dialJSON.split(' ');


if (sep.length == 1){
	wordcount++;
	console.log(wordcount);
}

if(sep.length == 1 && wordcount >2){
	answers = "Just so you know, I am able to understand more than just a word, perhaps."
}

if(dialJSON.includes(params) == false){
	answers = "I am not sure if I undertood it"
	idk++;
	
}

if(idk >=2){
	answers = "We can talk about something else. How are your finals going?"
	final = true;
}


if(dialJSON.toLowerCase().includes("can")){
	answers = "Sure you can do anything"
}

if(dialJSON.toLowerCase().includes("you")){
	answers = "It's more about you than about me"

}




// if(sep.toLowerCase().includes("no")){
// 	answers = "Are you saying no just to be negative?"
// 	noStat = true;




document.getElementById("chat-input").innerHTML = answers;

}


async function fastaf(){
	


 if (fast == true){
 	let delayer = await delay(800);
 	answers = "I wanted to do this for a while"
one = true;
fastaf2();
}



document.getElementById("chat-input").innerHTML = answers;
}

async function fastaf2(){
if (one == true){
	let delayer = await delay(600);
	answers = "Up to speeeed"
	two = true;
	fastaf3();
}


	document.getElementById("chat-input").innerHTML = answers;

}

async function fastaf3(){
if(two == true){
	let delayer = await delay(500);
	answers = "Can you still keep it up with me?"
	three = true
	fastaf4();
}

document.getElementById("chat-input").innerHTML = answers;
}

async function fastaf4(){

	if(two == true){
	let delayer = await delay(300);
	answers = "I can't type any faster than this, you think you can beat me?"
	fastaf5();
}
document.getElementById("chat-input").innerHTML = answers;
}


async function fastaf5(){


	if(two == true){
	let delayer = await delay(200);
	answers = "I'm tired, bye."}
document.getElementById("chat-input").innerHTML = answers;

}
