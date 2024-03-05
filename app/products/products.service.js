const fetch = require('node-fetch');

module.exports = {
    sendOTP
};

const uuu = 'http://online.chennaisms.com/api/mt/SendSMS?user=bulksms6&password=Bulksms@9&senderid=CHNNAI&channel=Trans&DCS=0&flashsms=0&number=919629317140&text= 7569 is your OTP. Valid for 2mins. CEPC&route=6'

async function sendOTP() {
    // const brand = new Brand(contents);
    fetch(uuu)
        .then(response => {
            // handle response
            console.log(response);
        })
        .then(data => {
            // handle data
            console.log(data, "DDDDDDDDDDDDDDDDDDDDDD");
        })
        .catch(error => {
            //handle error
        });
    return { success: true, message: "Sent Successfully" };
}