// console.log("projetc strtde");
// console.log("chage one");

const mailer=require('nodemailer')

let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'abc@gmail.com',
        pass:'abc@123'
    }
})

let messageOb={
    from:'abc@gmail.com',
    to:'abcd@gmail.com',
    subject:'Email using Node JS',
    text:'this mail is send using node js'
}

transport.sendMail(messageOb,(error,info)=>{
   if(error){
    console.log(error);
   } 
   else{
    console.log("Email sent")
    console.log(info.response)
   }
})