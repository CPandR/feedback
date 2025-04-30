const environment: string = import.meta.env.MODE;
const prod: string =
  environment === 'production' ? 'https://thehub.cpandr.co.uk/api/feedback' : 'http://localhost:5001/api/feedback';
export default prod;
