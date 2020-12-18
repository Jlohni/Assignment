
const mongoose = require ('mongoose');

const URL = 'mongodb+srv://jlohni05:457680@cluster0.i1s6y.mongodb.net/testing?retryWrites=true&w=majority'
mongoose.connect(URL);

mongoose.connection.once('open', () =>{
    console.log('Databese connected...');
}).on('error', (error) =>{
    console.log('Unable to Connect Database', error)

});
db 