var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var characterSchema = new Schema({
    characterName: String,
    characterRace: String, 
    characterClass: String,
    characterBackstory: String,
    user: String,
    members: [String]


});

module.exports = mongoose.model('Character', characterSchema);





