PlayersList = new Mongo.Collection('players');
console.log("Hello world");
if(Meteor.isClient) {
  //this code only runs on the client
  console.log("Hello client");

  Template.leaderboard.helpers({
    'player' : function() {
      return PlayersList.find()
    },
    'otherHelperFunction' : function(){
      return "Some other function"
    }
  })

  Template.leaderboard.events({
    'click .player' : function() {
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
      var selectedPLayer = Session.get('selectedPlayer');
      console.log(selectedPLayer);
    }
  })

}
if(Meteor.isServer) {
  console.log("Hello server");
}