const mongoose = require ('mongoose');
const { monitorEventLoopDelay } = require('perf_hooks');

const userSchema = mongoose.Schema({
    username :{
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    isActive : {
        type : Boolean,
        default : true
    },
    createdOn : {
        type : Date,
        default : true
    }
});

mongoose.model('users',userSchema);

module.exports = mongoose.model('users')
