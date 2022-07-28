import { React, useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState();
  const route = url;
  const apiFetch = (url) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '30345a29c4msha38c111e7f770d6p177732jsn1884b167df54',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    fetch(route, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setTimeout(() => {
      apiFetch();
    }, 1000);
  }, []);
  return data;
};

export default useApi;
