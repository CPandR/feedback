import './App.css';
import { FeedbackForm, Loading, Error, Success } from './pages';
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
