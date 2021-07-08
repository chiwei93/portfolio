const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');
const { validationResult } = require('express-validator');

const transporter = require('../util/email');
const s3 = require('../util/s3');

exports.getHomePage = (req, res, next) => {
  return res.render('home', {
    currentPage: 'home',
  });
};

exports.getContactPage = (req, res, next) => {
  return res.render('contact', {
    currentPage: 'contact',
    errors: [],
    emailError: null,
  });
};

exports.postContact = (req, res, next) => {
  const { name, email, message } = req.body;

  const results = validationResult(req);

  if (!results.isEmpty()) {
    return res.render('contact', {
      currentPage: 'contact',
      errors: results.array(),
      emailError: null,
    });
  }

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: 'Message from portfolio',
    html: `
      <p>From: ${name}</p>
      <p>Sender Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  transporter
    .sendMail(msg)
    .then(() => {
      return res.redirect('/thank-you');
    })
    .catch(err => {
      return res.render('contact', {
        currentPage: 'contact',
        errors: [],
        emailError:
          'Failed to send email. Please refresh the page and try again.',
      });
    });
};

exports.getThankyouPage = (req, res, next) => {
  return res.render('thank-you', {
    currentPage: 'thank-you',
  });
};

exports.getResume = (req, res, next) => {
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: 'myresume.pdf',
  };

  const stream = s3.getObject(params).createReadStream();

  stream.on('error', err => {
    console.log(err);
  });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="chi-wei\'s resume.pdf"');

  stream.pipe(res);
};
