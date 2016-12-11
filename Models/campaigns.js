var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var campaignSchema = new Schema({
    campaignName: String
    
});

module.exports = mongoose.model('campaigns', campaignSchema);





