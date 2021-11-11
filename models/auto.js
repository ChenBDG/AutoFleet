const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoSchema = new Schema({
    id: 'String',
    state: 'String',
    routeCommitId: 'Number',
    seats: 'Number',
    class:{
        name: 'String',
    },
    location: {
        lat:'Number' ,
        lng:'Number' ,
        bearing:'Number'
    },
    distance: 'Number'    
  });

module.exports = mongoose.model("Auto", autoSchema);