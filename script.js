var $textInput = $("#textInput"),
    $button = $("#doAction"),
    $results = $("#results");

$button.on("click", function(){
  let word = $textInput.val();
  let reversedWord = word.split("").reverse().join("");
  
  if(word === reversedWord) {
     $results.append(`<li>${word} is a palindrome</li>`)
  } else {
    $results.append(`<li>${word} is NOT a palindrome</li>`)
  }
});