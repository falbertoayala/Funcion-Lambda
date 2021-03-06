'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.send = async(event) => {
return 
var MongoClient = require ('mongodb').MongoClient;
var moment = require ('moment');
var curl = require ('curl');
var twilio = require('twilio');
var env = require('node-env-file');
env(__dirname + '/.env')

var today = moment().format("MMM Do");
var fetch = "" ;
var fetch2 = "" ;
var email = "";
var emailApiKey = process.env.EMAILAPYKEY;
var connectDb = process.env.CONNECTDB;

MongoClient.connect(connectDb, function (err, db){
if (err) throw err;

db.collection('users', function (err, collection) {
    
    collection.find().toArray(function(err, items){
        for(var x=0; x<items.length;x++);     
       
        var data = items.filter(function(data){
            
            fetch = data.fecha;
            email = data.correo;
            fetch2 = moment(fetch).format("MMM Do");
            if(fetch2 === today){
                                
                console.log("Se ha enviado un correo de felicitacion a "+data.nombre+" "+data.apellido+" "+email)
                sgMail.send(msg);
               
            }
            else{
                return
                }
                           
            });
            
        });
    
    });

});

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(emailApiKey)
const msg = {
  to: 'falberto.ayala@gmail.com',
  from: 'soporte@totalpcpro.com',
  subject: 'Feliz dia en tu cumpleaños',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>Felicidades</strong>',
};
//sgMail.send(msg);

}