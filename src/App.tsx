import { useState, useEffect } from 'react';
import axios from 'axios';
import qs, { ParsedQuery } from 'query-string';
import './App.css';
import FeedbackForm from './pages/FeedbackForm';
import Loading from './pages/Loading';
import Error from './pages/Error';
import Success from './pages/Success';
import prod from './config/config';

function App() {
  const [state, setState] = useState<string>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { id }: ParsedQuery<string> = qs.parse(window.location.search);
    axios
      .get(`${prod}/validate_feedback/${id}`)
      .then(() => {
        setState('form');
      })
      .catch((err) => {
        const { error } = err?.response?.data;
        setState('error');
        setError(error);
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
    return <FeedbackForm setState={setState} />;
  }

  // Success state
  if (state === 'success') {
    return <Success />;
  }

  // Fallback error state
  else {
    return <Error error={error} />;
  }
}
export default App;
