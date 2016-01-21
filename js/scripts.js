var disemvoweller = function(phrase){
  var phraseArray = phrase.split('');

  return phraseArray;
}

var findVowels = function(phrase) {

  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var newPhrase = "";
  for (var i=0; i < phrase.length ; i++) {
    for (var j=0; j < vowelArray.length; j++) {
      if (phrase[i] === vowelArray[j]) {
        var isVowel = true;
        newPhrase = newPhrase + "-";
        //newPhrase.push('-');
        console.log(phrase, vowelArray[j], i, j);
      }
    }
    if (isVowel != true) {
      newPhrase = newPhrase + phrase[i];
      console.log(newPhrase);
    }
    isVowel = false;
  }
  return newPhrase;
}

//phrase.replace(/aeiou/gi, '-')
// END BUSINESS LOGIC

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var phrase = $("#inputWord").val();
    var endPhrase = findVowels(phrase);
    //window.location.href ="disemvowelled.html";
    $(".output").text(endPhrase);
    //alert(endPhrase);


  });
});
