// Methods
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1


var person = {
  // name - set this as your own name
  name: "Charlie",
  // distance_traveled - set this initially as zero
  distance_traveled: 0,
  say_name: function(){
    // say_name - should alert the object’s name property
    alert(person.name);
  },
  say_something: function(phrase){
    // say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.

    console.log(`${person.name} says: ${phrase}`);

  },
  walk: function(){
    // walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
    person.move("walking", 3);
    return person;
  },
  run: function(){
    // run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
    person.move("running", 10);
    return person;
  },
  crawl: function(){
    person.move("crawling", 1);
    return person;
  },
  move: function(movement, incrementDistance){
    console.log(`${person.name} is ${movement}`);
    person.distance_traveled += incrementDistance;
  }

}

person.walk().run().crawl().walk().crawl().crawl()
