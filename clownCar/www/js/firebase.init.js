angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAAsFyWM943-XVW1SB3HodWBgaEVCFSeQ8",
    authDomain: "clown-car-1484972695847.firebaseapp.com",
    databaseURL: "https://clown-car-1484972695847.firebaseio.com",
    storageBucket: "clown-car-1484972695847.appspot.com",
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/