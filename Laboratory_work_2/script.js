var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

console.log('\n', "J = good bye :( Else - hello", '\n')
for (let i = 0; i < names.length; i++) {
  if (names[i].toLowerCase().charAt(0) === "j") {
    $SpeakGoodBye.speak(names[i]);
  } else {
    $SpeakHello.speak(names[i]);
  } 
}

console.log('\n', "another way of name selection - if the last letter of name is 'a' - goodbye :(", '\n')
for (let i = 0; i < names.length; i++) {
  if (names[i].toLowerCase().slice(-1) === "a") {
    $SpeakGoodBye.speak(names[i]);
  } else {
    $SpeakHello.speak(names[i]);
  } 
}