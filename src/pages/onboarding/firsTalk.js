import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FirstTalk() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const navigateTimer = setTimeout(() => {
        navigate('/onboarding/firstchat');
      }, 1000); // 페이드아웃 지속 시간 (1초)
      return () => clearTimeout(navigateTimer);
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="main" 
      style={{ 
        backgroundColor: '#1ABDE8',
        transition: 'opacity 1s ease-in-out',
        opacity: fadeOut ? 0 : 1
      }}
    >
      <div className='main_content' style={{ backgroundColor: '#1ABDE8', height: '100vh' }}>
        <div className='middle_compo'>
          <div style={{
            color: "#FFF",
            fontFamily: '"Pretendard Variable"',
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal"
          }}
          >안녕하세요</div>

          <div style={{ display: 'flex', width : '270px' , justifyContent:'center'}}>
            <div style={{
              color: "#FFF",
              fontFamily: "Pretendard Variable",
              fontSize: "72px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal"
            }}>바다</div>
            <div style={{
              color: "#FFF",
              fontFamily: "Pretendard Variable",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginTop: '33px',
              marginLeft: '5px'
            }}
            >입니다</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstTalk;
