input = "Votre texte ici";

function reverse (phrase){
  phrase = phrase.toLowerCase();
  return phrase.split("").reverse().join("");
}

function compare(){
  phrase = reverse(input).toLowerCase();
  if(input.toLowerCase() === phrase){
    console.log("Ce sont des palindromes");
  }
  else{
    console.log("Non, ce ne sont pas des palindromes");
  }
}

compare();