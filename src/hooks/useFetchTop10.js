import React, { useState, useEffect } from 'react';

const useFetchTop10 = () => {
  const [top10Games, setTop10Games] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_ENDPOINT

  useEffect(() => {
    const fetchTop10Games = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/games/top10`);

        if (!response.ok) {
          throw new Error('Top 10 게임 가져오기 실패');
        }

        const data = await response.json();
        setTop10Games(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTop10Games();
  }, []);

  // 디버깅
  // useEffect(() => {
  //   if (top10Games.length > 0) {
  //     const jsonString = JSON.stringify(top10Games, null, 2);
  //     console.log('Top 10 게임 (포맷된 JSON):', jsonString);
  //   }
  // }, [top10Games]);


  return {
    top10Games,
    error,
    isLoading,
  };
};

export default useFetchTop10;