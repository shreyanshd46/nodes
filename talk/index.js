var hello = function (name){
	console.log("hello " + name);
};

var intro = function (){
	console.log("Hello I'm new file from index.js.");
};

module.exports =  {
	hello : hello ,
	intro : intro
};