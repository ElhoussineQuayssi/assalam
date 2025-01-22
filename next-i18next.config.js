const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'], // Added Arabic as a supported language
  },
  localePath: path.resolve('./public/locales'),
};
