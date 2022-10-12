const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const client = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = client.authentications['api-key'];

apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  
var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

const sendContactEmail = (body) => {  
  const { name, email, message } = body;
  
  sendSmtpEmail = {
      to: [{
        email: 'vcardozof@gmail.com',
        name: 'Mandarin y Mandarina'
      }],
      templateId: process.env.SENDINBLUE_CONTACT_TEMPLATE_ID,
      params: {
        name,
        email,
        message
      },
      subject: '[Mandarín y Mandarina] Nuevo mensaje de contacto',
  };
  
  apiInstance.sendTransacEmail(sendSmtpEmail).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
  }).catch((error) => {
    console.error(error);
  });
};

module.exports = {
  sendContactEmail,
};
