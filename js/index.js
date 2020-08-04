var hacker1 = "Jurgen";
var hacker2 = "Monika";
var countName1 = 0;
var countName2 = 0;
var name1 = "";
var name2="";
var lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nibh placerat, commodo mi et, lobortis quam. Vestibulum pellentesque est nec nibh dignissim tristique vitae quis massa. Integer placerat interdum dolor. Phasellus in sodales mi. Quisque gravida est porttitor, feugiat nibh ut, accumsan magna. Sed rutrum mollis dolor, a vulputate magna tincidunt sit amet. Sed vitae ornare augue.";

// iteration 1
console.log(`The driver name is ${hacker1} `);
console.log(`The navigator's name is ${hacker2}`);

//iteration2
for (let i = 0; i<hacker1.length; i++){
  countName1 = countName1+1;  
}
console.log (countName1);


for (let i = 0; i<hacker2.length;i++){
  countName2 += 1;
}
console.log(countName2);

if (countName1>countName2){
  console.log(`The driver has the longest name, it has ${countName1} characters`);
}else if (countName2>countName1){
   console.log(`It seems that the navigator has the longest name, it has ${countName2} characters.`)
}else{
  console.log(`Wow, you both have equally long names, ${countName1} characters!`) 
}

//iteration3 

for (var i =0; i<hacker1.length; i++){
  var name1 =  name1 + hacker1[i] + " ";
  name1 = name1.toUpperCase();
  }
console.log(`${name1}`);

for (let i = hacker2.length -1; i>=0 ;i--){
  name2 += hacker2[i];
}
console.log(name2);

//iteration 3
function lexo(name1,name2){
for (let i=0; i<name1.length; i++){
     if (name1 === name2){
    console.log (`you have the same name`);
   break;
 }
 else if (name1[i]<name2[i]){
  console.log(name1);
   break;
}
  else if (name1[i]>name2[i]) {console.log(name2);
     break;
    }}}
lexo(hacker1,hacker2);
lexo(hacker2,hacker1);


//iteration bonus1
function countWord(name){
 // let name =0;
  let name4 = name.split(" ").length;
  name4 = name4 +1;
console.log(name4);
  }
countWord(lorem);

console.log(lorem.includes(" et "));

function checkString(data){
   return data.split('et').length;
}
console.log(checkString(lorem));

//iteration bonus2

