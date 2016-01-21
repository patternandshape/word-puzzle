var disemvoweller = function(phrase){
  var phraseArray = phrase.split('');

  return phraseArray;
}

var findVowels = function(phraseArray) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var foundVowels = [];
  for (var i=0; i < phraseArray.length ; i++) {
    for (var j=0; j < vowelArray.length; j++) {
      if (phraseArray[i] === vowelArray[j]) {
        foundVowels.push(phraseArray[i]);
        console.log(phraseArray[i], vowelArray[j], i, j);
      }
    }
  }
  return foundVowels;
}
