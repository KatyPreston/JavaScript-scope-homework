//ARRAYS:
// var sports = ["football", "tennis", "rugby"];
//
// var firstSport = sports[0];
// console.log(firstSport);
//
// var secondSport = sports[1];
// console.log(secondSport);
//
// sports.push("curling");
// sports.push("darts");
// console.log(sports);
//
// var lastSport = sports[sports.length -1];
// console.log(lastSport);
//
// console.log(sports.pop());
// console.log(sports);
//
// sports.unshift("basketball");
// sports.shift()
// console.log(sports);
//
// sports.splice(3, 1);
// console.log(sports);
//

//LOOPS:
// for(var currentSport of sports){
//   var loudSport = currentSport.toUpperCase();
//   console.log(loudSport);
// }
//
// for(var i = 0; i < sports.length; i++){
//   var currentSport = sports[i];
//   var loudSport = currentSport.toUpperCase();
//   console.log(loudSport);
// }


//OBJECTS:
var movie = {
  title: "It's a Wonderful Life",
  year: 1946,
  language: "Spanish"
};

console.log(movie.title);

movie.cast = ["James Stewart", "Donna Reed"];
movie.language = "English";
movie["language"] = "French";
movie["subtitle-language"] = "German";
console.log(movie);

movie.ratings = {
  critic: 94,
  audience: 95
};

console.log(movie);

for(var key in movie){
  var value = movie[key];
  console.log(`The key is ${key}`);
  console.log(`The value is ${value}`);
}

var keys = Object.keys(movie);
console.log(keys);
for(var i = 0; i < keys.length; i++){
  var currentKey = keys[i];
  var currentValue = movie[currentKey];
  console.log(`The key is ${currentKey}`);
  console.log(`The value is ${currentValue}`);
}

console.log(movie);
