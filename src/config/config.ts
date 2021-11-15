const environment: string = process.env.NODE_ENV;
const prod: string =
  environment === 'production' ? 'https://thehub.cpandr.co.uk/api/feedback' : 'http://localhost:5001/api/feedback';
export default prod;
