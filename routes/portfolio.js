const express = require('express');
const { body } = require('express-validator');

const portfolioController = require('../controllers/portfolio');

const router = express.Router();

router.get('/', portfolioController.getHomePage);

router.get('/contact', portfolioController.getContactPage);

router.post(
  '/contact',
  [
    body('name').notEmpty().withMessage('Please provide a name.').trim(),
    body('email')
      .isEmail()
      .withMessage('Please provide a valid email.')
      .normalizeEmail(),
    body('message')
      .notEmpty()
      .withMessage('Please ensure that this field is filled.')
      .trim(),
  ],
  portfolioController.postContact
);

router.get('/thank-you', portfolioController.getThankyouPage);

router.get('/resume', portfolioController.getResume)

module.exports = router;
