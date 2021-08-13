export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  captchaSecret: process.env.CAPTCHA_SECRET || '',
});
