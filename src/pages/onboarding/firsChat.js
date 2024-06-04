import React, { useState, useEffect } from 'react';
import Chat from '../../components/Chat';
import sam_audio from '../../assets/sam_audio.png'; // 이미지 경로 확인 필요
import axios from 'axios';

axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://localhost:5000';

function FirstChat() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [audioResult, setAudioResult] = useState(null);
    const [showImage, setShowImage] = useState(false); // 이미지를 보여줄지 여부를 저장하는 상태
    const [textOpacity, setTextOpacity] = useState(0); // 텍스트의 투명도를 조절할 상태

    // 클릭 이벤트가 발생한 시간을 저장하는 상태
    const [clickTime, setClickTime] = useState(null);

    // 예상된 출력이 변경될 때마다 fetch 요청을 보내도록 설정
    useEffect(() => {
        if (audioResult) {
            setLoading(true);
            setError(null);
            axios.get('http://127.0.0.1:5000/api/record-audio')
                .then(response => {
                    setAudioResult(response.data.predicted_output);
                    console.log("Predicted output:", response.data.predicted_output);
                })
                .catch(error => {
                    if (error.response && error.response.data && error.response.data.error) {
                        console.error("에러 발생:", error.response.data.error);
                        setError(error.response.data.error);
                    } else {
                        console.error("에러 발생:", error.message);
                        setError(error.message);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [audioResult]); // audioResult가 변경될 때마다 useEffect가 호출됩니다.

    const handleClick = () => {
        setLoading(true);
        setError(null);
        
        // 클릭 이벤트가 발생한 시간을 저장합니다.
        setClickTime(Date.now());
        
        // 클릭 이벤트가 발생한 후 20초 뒤에 예상된 출력을 설정합니다.
        setTimeout(() => {
            // 여기서 예상된 출력을 설정합니다.
            // 예를 들어 setAudioResult("예상된 출력 값");
            setAudioResult("예상된 출력 값"); // 예상된 출력을 설정하는 부분입니다.
        }, 20000); // 20초(20000ms) 지연 후에 예상된 출력을 설정합니다.

        // 서버에 GET 요청을 보냅니다.
        axios.get('http://127.0.0.1:5000/record-audio')
            .then(response => {
                console.log("Server refreshed successfully");
            })
            .catch(error => {
                console.error("Error refreshing server:", error.message);
            });

        // 이미지를 보여주기 위해 상태 변경
        setShowImage(true);
    };

    useEffect(() => {
        // 텍스트의 투명도를 조절하여 나타나는 효과를 만듭니다.
        if (audioResult) {
            let timer = setInterval(() => {
                setTextOpacity(opacity => Math.min(opacity + 0.1, 1));
            }, 100); // 0.1초마다 투명도를 0.1씩 증가시킵니다.

            // 클릭 이벤트가 발생한 후 20초가 지나면 투명도를 초기화합니다.
            setTimeout(() => {
                clearInterval(timer);
                setTextOpacity(0);
            }, 15000); // 20초(20000ms) 후에 투명도 초기화

            // audioResult이 변경될 때마다 투명도를 초기화합니다.
            return () => clearInterval(timer);
        }
    }, [audioResult]);

    return (
        <div className="main">
            <div className='main_content'>
                <div style={{
                    color: "#1ABDE8",
                    fontFamily: '"Pretendard Variable"',
                    fontSize: "38px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginTop: '0px'
                }}>
                     {showImage ? ( // showImage 상태에 따라 이미지를 보여줍니다.
                        <div style={{width:'0',height:'0'}}></div>
                    ) : (
                        <div>
                            <div style={{ marginRight: '165px', marginTop:'100px' }}>버튼을 눌러</div>
                            <div>첫 대화를 시작해보세요</div>
                        </div>
                    )}
                </div>

                <div onClick={handleClick}>
                    {showImage ? ( // showImage 상태에 따라 이미지를 보여줍니다.
                        <div style={{ position: 'relative' }}>
                        <img style={{ zIndex: '1', width: '100%', height: '100%' }} src={sam_audio} alt="sam_audio" />
                    
                        {loading && <p style={{ zIndex: '2', opacity: textOpacity, transition: 'opacity 1s ease', position: 'absolute',top: '60%',left: '50%',transform: 'translate(-50%, -50%)'}}>Loading...</p>}
                        {error && <p style={{ color: 'red', zIndex: '2', position: 'absolute', top: 0, left: 0 }}>에러 발생: {error}</p>}
                        {audioResult && (
                            <p className='chat_font' style={{ width: '350px', zIndex: '2', opacity: textOpacity, transition: 'opacity 1s ease', position: 'absolute',top: '60%',left: '50%',transform: 'translate(-50%, -50%)' }}>
                                {audioResult}
                            </p>
                        )}
                          </div>
                    
                    ) : (
                        <Chat />
                    )}
                </div>
            </div>
        </div>
    );
}

export default FirstChat;
