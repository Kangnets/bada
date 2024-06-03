import React from 'react';
import Chat from '../../components/Chat';
import axios from 'axios';


function FirstChat() {

       const handleClick = () => {
      axios.get('http://localhost:5000/record-audio')
          .then(response => {
              console.log("음성 인식 결과:", response.data.audio_result);
          })
          .catch(error => {
              if (error.response && error.response.data && error.response.data.error) {
                  console.error("에러 발생:", error.response.data.error);
              } else {
                  console.error("에러 발생:", error.message);
              }
          });
  };
      
        return (
        <div className="main" >
            <div className='main_content' >
                 
                 <div style={{
                        color: "#1ABDE8",
                        fontFamily: '"Pretendard Variable"',
                        fontSize: "38px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",

                        marginTop:'100px'
                 }}>
                    <div style={{marginRight:'165px'}}>버튼을 눌러</div>
                    <div>첫 대화를 시작해보세요</div>
                 </div>

                 <div  onClick={handleClick}>
                    <Chat />
                 </div>
            </div> 
        </div>
        );
      };

export default FirstChat;