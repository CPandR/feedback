import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FeedbackForm from './pages/FeedbackForm';
import Loading from './pages/Loading';
import Error from './pages/Error';

function App() {
  const [state, setState] = useState<string>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/booking/validate_feedback/611cb9a5d37dff3443`)
      // .get(`http://localhost:5001/api/booking/validate_feedback/611cb9f5707ea5d37dff3443`)
      .then(() => {
        setState('form');
      })
      .catch((err) => {
        const { error } = err.response.data;
        setState('error');
        setError(error);
        console.log('Set state to error and error state set to - ', error);
      });
  }, []);

  // Initially loading
  if (state === 'loading') {
    return <Loading />;
  }
  // Error state
  if (state === 'error') {
    return <Error error={error} />;
  }

  // Form state
  if (state === 'form') {
    return <FeedbackForm />;
  }

  // Success state
  if (state === 'success') {
    return <Loading />;
  }

  // Fallback error state
  else {
    return <Error error={error} />;
  }
}
export default App;
