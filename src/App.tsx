import { useState, useEffect } from 'react';
import axios from 'axios';
import qs, { ParsedQuery } from 'query-string';
import './App.css';
import { FeedbackForm, Loading, Error, Success } from './pages';
import prod from './config/config';

function App() {
  const [state, setState] = useState<string>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { id }: ParsedQuery<string> = qs.parse(window.location.search);
    axios
      .get(`${prod}/validate_feedback/${id}`)
      .then((res) => {
        setState('form');
      })
      .catch((err) => {
        if (err.message === 'Network Error') {
          setState('error');
        } else {
          const { data } = err?.response;
          setState('error');
          setError(data);
        }
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
