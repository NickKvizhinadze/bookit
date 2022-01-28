module.exports = {
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
    CLOUDINARY_CLOUD_NAME: 'dfyeyzoof',
    CLOUDINARY_API_KEY: '347557288216642',
    CLOUDINARY_SECRET_KEY: 'c1DpWShs0wF8Je8fAUHUcw4eWvY',

    SMTP_HOST: 'smtp.mailtrap.io',
    SMTP_PORT: '2525',
    SMTP_USER: 'ae14844db3355f',
    SMTP_PASSWORD: '03221fe8e0c5fb',
    SMTP_FROM_NAME: 'BookIt',
    SMTP_FROM_EMAIL: 'noreply@bookit.com'
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
