var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var campaignSchema = new Schema({
    campaign: String,
   
    created_at: {type: Date, default: Date.now}

    
});

module.exports = mongoose.model('campaignData', campaignSchema);





