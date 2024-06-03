import React, { useState} from 'react';
import { motion  } from 'framer-motion'

import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import LoginTitleB from '../../components/loginTitleB';

function BaseInfo() {
    const [currentContent, setCurrentContent] = useState(1);

  const [Name, setNameId] = useState('');
  const [Birth, setBirthId] = useState('');
  const [Password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const nameInputChange = (e) => {
    const value = e.target.value;

    if (value.length <= 3) {
      setNameId(e.target.value);
      localStorage.setItem('user_name', e.target.value); 
    }
  };


  function formatPhoneNumber(phoneNumber) {
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length < 11) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
    }
    // 최대 길이를 초과하는 경우 뒷부분을 잘라냅니다.
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
  }

  const PasswordChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');

    if (!isNaN(value) && value.length <= 11) {
        const formattedValue = formatPhoneNumber(numericValue);
        setPhoneNumber(value);
        localStorage.setItem('user_phoneNumber', formattedValue);
  
      }
    };
  


  const birthInputChange = (e) => {
    const inputValue = e.target.value;
    const numberRegex = /^[0-9]*$/;
  
    if (numberRegex.test(inputValue) && inputValue.length <= 8) {
      const currentYear = new Date().getFullYear();
      const userBirthYear = parseInt(inputValue, 10);
      const koreanAge = currentYear - userBirthYear + 1;
  
      setBirthId(inputValue);
      localStorage.setItem('user_kakao_year', inputValue);
      localStorage.setItem('user_grade', koreanAge.toString());
    }
  };


  const handleNextClick = () => {
    if (currentContent < 2) {
        setCurrentContent(currentContent + 1);
    }
};

const handleInputChange_password = (event) => {
    const inputValue = event.target.value;
    setPassword(inputValue);
    localStorage.setItem('user_Password', inputValue);
  };
  
 

  return (
    <div className="main" style={{ backgroundColor: '#Fff' }}>
      <div className='main_content' style={{overflowY:'hidden'}}>

       
       <div style={{marginTop:'120px'}}>
            <LoginTitleB second_sen="로 들어가기" first_sen="바다"/>
       </div>

      <div>
        <div id='Content1' style={{ display: currentContent === 1 ? 'block' : 'none' }} >

  
            <div className='middle_component' style={{marginLeft:'-20px', marginTop:'135px'}}>

            <div style={{position:'sticky'}}>
                <Input placeholder="성함" value={Name} onChange={nameInputChange}/>
            </div>        

            {Name.length >= 1 && (
              <motion.div                          
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.3 }}
              >
            <div style={{ marginTop: '50px',position:'sticky', overflow:'none' }} >
                <Input placeholder='생년월일' value={Birth} onChange={birthInputChange}  />
            </div>
            </motion.div>
            )}


            {Birth.length >= 8 && (
              <motion.div                          
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0}}
              transition={{ duration: 0.3 }}
              style={{marginTop:'0px'}}
              >

                <div  onClick={handleNextClick} className='bottom_compo'>               
                     <Button  id="blue"value={Password} Label="바다로 들어가기" /> 
                </div>

            </motion.div>
            )}

            </div>

          </div>


          <div id='Content2' style={{ display: currentContent === 2 ? 'block' : 'none' }}>
           
            <div style={{position:'sticky' , display:'flex' , justifyContent:'center', marginTop:'137px'}}>
                <Input placeholder="비밀번호" type="password" value={Password} onChange={handleInputChange_password} />
            </div> 

                {Password.length >= 4 &&  (
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0}}
                  transition={{ duration: 0.3 }}
                  >
                    <div className='bottom_compo'>
                        <Link to="/onboarding/first">
                             <Button  id="blue" Label="바다로 들어가기" /> 
                        </Link>
                    </div>
                    </motion.div>
                )}
         </div>


        </div>

      </div>
    </div>
  );
}

export default BaseInfo;