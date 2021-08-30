const express = require('express');
const cors = require('cors');

const app = express();

const  bodyParser = require('body-parser');
var corsOptions = {
  origin: "http://localhost:2410"
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup mongoose DB
const db = require("./app/models");
const dbConfig = require('./app/config/db.config');


const Role = db.role;

db.mongoose
  //.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  .connect(dbConfig.HOST, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then( () => {
    console.log("Successfully coonnected to mongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connections error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to toles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  })
}

//new
const productRoute = require('./app/routes/product.routes')
const brandRoute = require('./app/routes/brand.routes');
const ptypeRoute = require('./app/routes/ptype.routes');
const contactRoute = require('./app/routes/contact.routes');
const cartRoute = require('./app/routes/cart.routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// API root
app.use('/api/product', productRoute)
//
// API root
app.use('/api/cart', cartRoute)
//
// API root
app.use('/api/brand', brandRoute)
//
// API root
app.use('/api/ptype', ptypeRoute)
//
// API root
app.use('/api/contact', contactRoute)
//

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the login tutorial back-end."});
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Set port and start server
const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}.`)
});


