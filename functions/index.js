const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

const cors = require('cors')({ origin: true });

let transporter = nodemailer.createTransport({
    host: 'your host',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'your@email',
      pass: 'your password.',
    },
  });

  //export the cloud function called `sendEmail`
exports.sendEmail = functions.https.onRequest((req, res) => {
    //for testing purposes
    console.log(
      'from sendEmail function. The request object is:',
      JSON.stringify(req.body)
    );
  
    //enable CORS using the `cors` express middleware.
    cors(req, res, () => {
      //get contact form data from the req and then assigned it to variables
      const email = req.body.data.email;
      const name = req.body.data.name;
      const message = req.body.data.message;
  
      //config the email message
      const mailOptions = {
        from: email,
        to: `adonis11300522@gmail.com`,
        subject: 'New message from the nodemailer-form app',
        text: `${name} says: ${message}`,
      };
  
      //call the built in `sendMail` function and return different responses upon success and failure
      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).send({
            data: {
              status: 500,
              message: error.toString(),
            },
          });
        }
  
        return res.status(200).send({
          data: {
            status: 200,
            message: 'sent',
          },
        });
      });
    });
  });
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
