// importing the dependencies
const bodyParser = require('body-parser');

module.exports =(app)=>{
    // using bodyParser to parse JSON bodies into JS objects
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}
