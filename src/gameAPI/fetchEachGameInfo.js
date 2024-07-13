const fetchEachGameInfo = async (gameId) => {
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    const response = await fetch(`${apiUrl}/api/games/${gameId}`);
  
    if (!response.ok) {
      throw new Error('게임 정보 가져오기 실패');
    }
  
    const data = await response.json();
    const jsonString = JSON.stringify(data, null, 2);
    console.log(jsonString);

    return data;
  };
  
export default fetchEachGameInfo;
  