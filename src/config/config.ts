const environment: string = process.env.NODE_ENV;
const prod: string =
  environment === 'production' ? 'https://thehub.cpandr.co.uk/api/booking' : 'http://localhost:5001/api/booking';
export default prod;
