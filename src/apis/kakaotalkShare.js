const kakaoTalkShare = ({ title, description, imageUrl, apiType, typeId }) => {
  if (window.Kakao) {
    const Kakao = window.Kakao;
    Kakao.cleanup();
    
    if (!Kakao.isInitialized()) {
      Kakao.init(`${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}`);
    }

    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: imageUrl,
        link: {
          webUrl: 'https://haeundae-triangle.github.io'
          // webUrl: 'https://http://localhost:3000'
        }
      },
      // social: {
      //   likeCount: 286,
      //   commentCount: 45,
      //   haredCount: 845,
      // },
      buttons: [
        {
          title: '바로 가기',
          link: {
            mobileWebUrl: `https://haeundae-triangle.github.io/${apiType}?${typeId}`,
            webUrl: `https://haeundae-triangle.github.io/${apiType}?${typeId}`,
          },
        },
      ],
    })
  }
}


export default kakaoTalkShare;