import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./pages/main";
import Sam from "./pages/sam";
import Start from "./pages/onboarding/start"
import BaseInfo from './pages/onboarding/baseinfo';
import FirstTalk from './pages/onboarding/firsTalk';
import FirstChat from './pages/onboarding/firsChat';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* Routes 컴포넌트 안에 Route 컴포넌트를 사용해야 함 */}
        <Routes basename={process.env.PUBLIC_URL}>
          {/* 기본 경로를 "/"로 설정 */}
          <Route path="/" element={<Main />} />
          <Route path="/sam" element={<Sam />} />
          <Route path="/start" element={<Start />} />
          <Route path="/onboarding/baseinfo" element={<BaseInfo />} />

          <Route path="/onboarding/first" element={<FirstTalk />} />
          <Route path="/onboarding/firstChat" element={<FirstChat />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
