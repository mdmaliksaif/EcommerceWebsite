const Razorpay = require('razorpay');

apiKey="rzp_test_5MMBfxX3ilC97u"
apiSecret="MjPtuXsjdYm5X3"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay; 