import React, { createContext, useState, useEffect } from 'react';

export const ApiDataContext = createContext(null);

export const ApiDataProvider = ({ children }) => {
  const [dataRaw, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(apiData => {
        const dataAPI = apiData.find(patient => patient.name === 'Jessica Taylor');
        if (dataAPI) {
          setData(dataAPI);
        } else {
          throw new Error('Jessica Taylor data not found.');
        }
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return (
    <ApiDataContext.Provider value={{ dataRaw, loading, error }}>
      {children}
    </ApiDataContext.Provider>
  );
};
