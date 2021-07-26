export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  captchaSecret: process.env.CAPTCHA_SECRET || '',
});
