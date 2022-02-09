const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



 const titleCased = () =>  {
  return tutorials.map(eachsentance =>{ 

  //console.log(eachsentance)
const wordsOfSentance = eachsentance.split(' ');
let titleCased2 = []; 
for (let eachWord of wordsOfSentance) {
  // eachWord.charAt(0) 

  //console.log(eachWord.charAt(0).toUpperCase() + eachWord.substring(1));
  titleCased2.push((eachWord.charAt(0).toUpperCase() + eachWord.substring(1)));

}


//console.log(titleCased2.join(' '));
return titleCased2.join(' ');
})
}
console.log(titleCased()); 
