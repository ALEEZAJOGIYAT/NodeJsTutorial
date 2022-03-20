// const nodemailer=require('nodemailer')

// var transport=nodemailer.createTransport({
//     host:'smtp.mail.me.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//         user:'alizajogyat09@gmail.com',
//         pass:'jogi,.abcd'
//     }
// })

// var options={
//     to:'aleezajogiyat09@gmail.com',
//     from:'alizajogyat09@gmail.com',
//     subject:'CHECK MAIL',
//     Text:'Congartulations Mamm, you have successfully send this email :)'
// }

// transport.sendMail(options,(info,error)=>{
//     if(error){
//         console.warn('not send')
//     }
//     else{
//         console.warn('send',info)
//     }
// })
var nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "alizajogyat09@gmail.com",
    pass: "jogi,.abcd",
  },
});

var mailOptions = {
  from: "alizajogyat09@gmail.com",
  to: "aleezajogiyat@gmail.com",
  subject: "Test Mail",
  text: "Congartulations Mamm, you have successfully send this email :)",
};

transport.sendMail(mailOptions, function (error, info) {
  if (info) {
    console.warn("send successfully", info.response);
  } else {
    console.warn("not send", error);
  }
});

// transport.MailMessage({
//     from:'aleezajogiyat09@gmail.com'
// })
