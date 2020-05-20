const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	service : 'gmail',
	auth : {
		user : 'nettoyageexclusif@gmail.com',
		pass : process.env.GMAIL_PASS
	}
})

exports.contactForm = (req, res) => {
    const {name,email,phone,service,userMessage} = req.body;
    const emailData = {
        from: "nettoyageexclusif@gmail.com", // todo : add this to env
        to: "alexbarsann@gmail.com", // todo : add this to env
        subject: `User Enquiry : ${process.env.APP_NAME}`,
        text: `Email Received from contact form \n Sender Name: ${name} \n Sender Email: ${email} \n Sender Phone number: ${phone} \n Selected Service: ${service} \n Sender Message: ${userMessage}`,
        html:
            `
                <h3>Email received from Contact form</h3>
                <p><b>Sender Name:</b> ${name}</p>
                <p><b>Sender Email:</b> ${email}</p>
                <p><b>Sender Phone number:</b> ${phone}</p>
                <p><b>Selected Service:</b> ${service}</p>
                <p><b>Sender Message:</b> ${userMessage}</p>
                <hr/>
                <h5>CONFIDENTIALITY NOTICE : </h5>
                <p>The contents of this email message and any attachments are intended solely for the addressee(s) and may contain confidential and/or privileged information and may be legally protected from disclosure. If you are not the intended recipient of this message or their agent, or if this message has been addressed to you in error, please immediately alert the sender by reply email and then delete this message and any attachments. If you are not the intended recipient, you are hereby notified that any use, dissemination, copying, or storage of this message or its attachments is strictly prohibited.</p>
            `
    };

    transporter.sendMail(emailData,(err, info)=>{
		if (err){
            res.status(400).json({
                error: err
            });	
		} else {
			res.json({
                success:true,
                information:info
            })
		}
	})
};