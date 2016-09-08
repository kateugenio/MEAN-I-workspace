var topFilms = [{
           title: "Don't Breath",
           tomatoMeter: 86,
           boxOffice: 15.7
       }, {
           title: "Suicide Squad",
           tomatoMeter: 26,
           boxOffice: 10
       }, {
           title: "Pete's Dragon",
           tomatoMeter: 87,
           boxOffice: 6.5
       }, {
           title: "Kubo and the Two Strings",
           tomatoMeter: 96,
           boxOffice: 6.5
       }, {
           title: "Sausage Party",
           tomatoMeter: 82,
           boxOffice: 5.3
       }];

function grabBoxOfficeData(arr){
  return arr.map(function(value){
    return "$" + value.boxOffice;
  });
}
