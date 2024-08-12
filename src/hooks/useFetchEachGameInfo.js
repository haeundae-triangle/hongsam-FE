import React, { useState, useEffect } from 'react';

const useFetchEachGameInfo = ( gameId ) => {
  const [game, setGame] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_ENDPOINT

  useEffect(( gameId ) => {
    const fetchGameInfo = async () => {
      if (gameId) {
        try {
          const response = await fetch(`${apiUrl}/api/games/${gameId}}`);
  
          if (!response.ok) {
            throw new Error('게임 정보 가져오기 실패');
          }
  
          const data = await response.json();
          setGame(data);
          console.log('데이터 저장했다!');
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchGameInfo();
  }, [gameId]);

  // 디버깅
  // useEffect(( gameId ) => {
  //   const jsonString = JSON.stringify(game, null, 2);
  //   console.log('현재 게임 (포맷된 JSON):', jsonString);
  // }, [gameId]);


  return {
    game,
    error,
    isLoading,
  };
};

export default useFetchEachGameInfo;