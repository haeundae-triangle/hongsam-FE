import React, { useState, useEffect } from 'react';

const useFetchServiceGameBoxes = () => {
  const [serviceBoxes, setServiceBoxes] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_ENDPOINT

  useEffect(() => {
    const fetchServiceGameBoxes = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/games/servicePlaylist`);

        if (!response.ok) {
        throw new Error('서비스 게임박스 목록 가져오기 실패');
        }

        const data = await response.json();
        setServiceBoxes(data);
        console.log('서비스 게임박스 목록 가져와서 데이터 저장했다!');
    } catch (error) {
        setError(error.message);
    } finally {
        setIsLoading(false);
    }
    };

    fetchServiceGameBoxes();
  }, []);

  // 디버깅
  // useEffect(() => {
  //   const jsonString = JSON.stringify(serviceBoxes, null, 2);
  //   console.log('게임박스 목록 (포맷된 JSON):', jsonString);
  // });


  return {
    serviceBoxes,
    error,
    isLoading,
  };
};

export default useFetchServiceGameBoxes;