import './App.css';
import FeedbackForm from './pages/FeedbackForm';
import Loading from './pages/Loading';
import Error from './pages/Error';
import Success from './pages/Success';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={FeedbackForm} />
      <Route path="/loading" component={Loading} />
      <Route path="/error" component={Error} />
      <Route path="/success" component={Success} />
    </>
  );
}
export default App;
