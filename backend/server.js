const { get } = require('config');
const Router = require('express');
const express = require('express');

const app = express();


app.get('/', (req, res) => res.json({ msg: 'Welcome from get 5000 Json' }))


// Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hello from Port in ${PORT}`));








// const exp = require('express');
// const cors = require('cors')
// const DB = require('./modules/db.js')

// const app = exp();
// app.use(cors());
// app.use(exp.json());
// app.use(exp.static(__dirname + '/public'));

// app.post('/adduser', (req, res) => {

//     DB.adduser(req.body)
//         .then(data => {
//             res.send(data)
//         })
//         .catch(err => {
//             res.send({ message: err })
//         })
// })

// app.post('/checkuser', (req, res) => {

//     const { password } = req.body
//     DB.checkuser(req.body)
//         .then(data => {
//             const dbpassword = data[0].password;
//             if (dbpassword === password) {
//                 console.log("it works");
//                 res.send({answer:'works'})
//             }
//             else {
//                 console.log("doesnt work");
//                 res.send({answer:'doesnt works'})
//             }
//         })
//         .catch(err => {
//             res.send({ message: err.detail })
//         })
// })

// app.post('/addbout', (req, res) => {
//     DB.addbout(req.body)
//         .then(data => {
//             console.log(data);
//             res.send({message: 'good' })
//         })
//         .catch(err => {
//             console.log(err);
//             res.send({ message: err.detail })

//         })
// })


// app.get('/boats', (req, res) => {
//     DB.boats()
//         .then(data => {
//             res.send(data)
//         })
//         .catch(err => {
//             console.log(err);
//             res.send({ message: err.detail })
//         })
// })

// app.get('/specuser', (req, res) => {
//     const{q}=req.query
//     DB.searchSeller(q)
//     .then(data => {
//         res.send(data[0])
//     })
//     .catch(err => {
//         console.log(err);
//         res.send({message:err.detail})
//     })   
// })

// app.get('/params', (req, res) => {
//     const{s,c,l,pmi,pma,ymi,yma}=req.query
//     DB.specboats(s,c,l,pmi,pma,ymi,yma)
//     .then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         console.log(err);
//         res.send({message:err.detail})
//     })   
// })

// app.get('/userbymail', (req, res) => {
//     const{q}=req.query
//     DB.userbymail(q)
//     .then(data => {
//         res.send(data[0])
//     })
//     .catch(err => {
//         console.log(err);
//         res.send({message:err.detail})
//     })
// })

// app.listen(process.env.PORT || 3001, () => {
//     console.log(`app is running on port ${process.env.PORT}`);
//   })
// app.listen(3001)