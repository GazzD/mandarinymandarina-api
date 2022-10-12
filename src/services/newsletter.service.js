const mailchimp = require("@mailchimp/mailchimp_marketing");

require('dotenv').config();

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const healthCheck = async () => {
  const response = await mailchimp.ping.get();
  return response;
}

const subscribe = async (body) => {
  const { email } = body;
  const newsletterListId = process.env.MAILCHIMP_NEWSLETTER_LIST_ID;
  const subscribingUser = {
    email
  };

  const response = await mailchimp.lists.addListMember(newsletterListId, {
    email_address: subscribingUser.email,
    status: "subscribed",
  });
}

module.exports = {
  subscribe,
  healthCheck
};
