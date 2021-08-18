const environment = process.env.NODE_ENV;
exports.prod =
  environment === 'production' ? 'https://thehub.cpandr.co.uk/api/booking' : 'http://localhost:5001/api/booking';
