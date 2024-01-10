import nodemailer from "nodemailer"

async function sendemail(userd) {
    console.log(userd,process.env.EMAIL,process.env.PASSWORD)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user:process.env.EMAIL,
          pass:process.env.PASSWORD
      },
    });

    let mailDetails = {
      from: process.env.EMAIL,
      to: userd,
      subject: 'this is subhajit',
      text: 'user information',
      html:JSON.stringify(`nodemon does not require any additional 
      changes to your code or method of development. nodemon is a replacement 
      wrapper for node. To use nodemon, replace the word node on the command 
      line when executing your script`)
    };
    transporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs',err.message);           
        } else {
            console.log('Email sent successfully');       
        }
    }); 
}

export {sendemail}