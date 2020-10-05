// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // An api endpoint that returns a short list of items
// app.get('/api/getList', (req, res) => {
//     var list = ['item1', 'item2', 'item3'];
//     res.json(list);
//     console.log('Sent list of items');
// });

// // Instantiate SMTP server
// const smtpTrans = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.REACT_APP_GMAIL_USER,
//         pass: process.env.REACT_APP_GMAIL_PASS,
//     },
// });

// //Verify whether SMTP is ready to take messages
// smtpTrans.verify((err, success) => {
//     if (err) {
//         console.log('verification error: ', err);
//     } else {
//         console.log('Server is ready to take messages! Success: ', success);
//     }
// });

// // POST route from contact form
// app.post('/contact', (req, res) => {
//     //Specify what email will look like
//     const mailOptions = {
//         from: 'AwJeez.Dev Contact Form',
//         to: process.env.REACT_APP_MY_EMAIL,
//         subject: `New Message from ${req.body.email} via AwJeez.Dev`,
//         text: `${req.body.name} at email address ${req.body.email} says: ${req.body.subject}: ${req.body.message}`,
//     };

//     //Attempt to send the email
//     smtpTrans.sendMail(mailOptions, (error, data) => {
//         if (error) {
//             res.json({ msg: 'fail' });
//         } else {
//             res.json({ msg: 'success' });
//         }
//     });
// });

// // Handles any requests that don't match the ones above
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '../../../public/index.html'));
// });

// const port = process.env.PORT || 5000;
// app.listen(port);

// console.log('App is listening on port ' + port);
