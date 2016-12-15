var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var campaignSchema = new Schema({
    campaign: String   
});

module.exports = mongoose.model('Campaign', campaignSchema);





