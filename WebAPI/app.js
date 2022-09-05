const  DeclarationDB = require('./DB/Declaration/DBExecute');
const  SymptomsDB = require('./DB/Symptoms/DBExecute');

var express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//Middleware
router.use((request, response, next) => {
  console.log('middleware');
  next();
});
 

router.route('/addUser').get((request, response) => {
  let  userDeclaration = { ...request.body }
  DeclarationDB.addUser(userDeclaration).then((data) => {
    response.json(data[0]);
  })
})

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.listen(8080, function () {
  console.log('listening on port 8080!');
});