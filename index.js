function objectCon(name,age,course, something){
  return {
    name: name,
    age: age,
    course: course,
    something: something
  }
}

var person = objectCon(
  "Jeff",
  28,
  "MEAN",
  heyThere
);


function heyThere(someCoolThing){
  console.log(someCoolThing);
}
