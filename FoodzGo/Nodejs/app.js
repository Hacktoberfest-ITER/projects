const express = require("express");
const path = require("path"); 
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");

mongoose.connect('mongodb://localhost/foodzgoservice', {useNewUrlParser: true});
const port = 8000;
const hostname= '127.0.0.1';

//Order Request



// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
var loginSchema = new mongoose.Schema({
    userID: String,
    password: String,
  });
var signupSchema = new mongoose.Schema({
    mobile: String,
    username: String,
    emailID: String,
    locality: String,
    password: String
  });

var Contact = mongoose.model('Contact', contactSchema);
var Login = mongoose.model('Login', loginSchema);
var SignUp = mongoose.model('Signup', signupSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
})
app.get('/addres', (req, res)=>{ 
    const params = { }
    res.status(200).render('addres.pug', params);
})
app.get('/login', (req, res)=>{ 
    const params = { }
    res.status(200).render('login.pug', params);
})
app.get('/signup', (req, res)=>{ 
    const params = { }
    res.status(200).render('signup.pug', params);
})
app.get('/error', (req, res)=>{ 
    const params = { }
    res.status(200).render('error.pug', params);
})
app.get('/order', (req, res)=>{ 
    const params = { }
    res.status(200).render('order.pug', params);
})


app.post('/contact', (req, res)=>{ 
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.status(200).render('contact.pug');
        alert('Your response has been submitted !')
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });

    // res.status(200).render('contact.pug');
})
app.post('/login', (req, res)=>{ 
    var myData1 = new Login(req.body);
    myData1.save().then(()=>{
        res.status(200).render('home.pug');
        alert('You are now Logged In .')
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });

    // res.status(200).render('contact.pug');
})
app.post('/signup', (req, res)=>{ 
    var myData2 = new SignUp(req.body);
    myData2.save().then(()=>{
        res.status(200).render('home.pug');
        alert('You have successfully Signed In and Logged In')
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    });

    // res.status(200).render('contact.pug');
})

// START THE SERVER
app.listen(port, hostname, ()=>{
    console.log(`The application started successfully on http://${hostname}:${port}/ `);
});

