const fetchEachServiceBoxInfo = async (boxId) => {
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;
    const response = await fetch(`${apiUrl}/api/games/servicePlaylist/${boxId}`);

    // console.log('요청을 보낸 주소는 = '+`${apiUrl}/api/games/servicePlaylist/${boxId}`)
  
    if (!response.ok) {
      throw new Error('게임박스 정보 가져오기 실패');
    }
  
    const data = await response.json();
    const jsonString = JSON.stringify(data, null, 2);
    console.log(jsonString);

    return data;
  };
  
export default fetchEachServiceBoxInfo;
  