const fetch = require('node-fetch');

module.exports = {
    sendOTP
};

async function sendOTP(data) {
    // const brand = new Brand(contents);

    const uuu = `http://online.chennaisms.com/api/mt/SendSMS?user=bulksms6&password=Bulksms@9&senderid=CHNNAI&channel=Trans&DCS=0&flashsms=0&number=91${data.number}&text= ${data.otp} is your OTP. Valid for 2mins. CEPC&route=6`
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