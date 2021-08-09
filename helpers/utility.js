const nodemailer = require('nodemailer')
const PORT = 3000
const sendEmail = async (receiverEmail, secretKey) => {	    
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "hieudao03021999@gmail.com", 
                pass: "hieu03021999"
            }
        })
        let mailOptions = {
            from: '"HNTutor" <hieudao03021999@gmail.com>', //Email người gửi
            to: receiverEmail, 
            subject: 'Activate email',         
            html: `<h1>Please click here to activate your account:</h1>
                   http://${require('os').hostname()}:${PORT}/dang-ky-lam-gia-su/activateUser?secretKey=${secretKey}&email=${receiverEmail}` 
        }
        let info = await transporter.sendMail(mailOptions)
        console.log('Message sent: %s', info.messageId);
    } catch(error) {
        throw error
    }
}
module.exports = {
    sendEmail, 
    PORT   
}