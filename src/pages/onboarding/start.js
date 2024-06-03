import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function start() {


      
        return (
        <div className="main" style={{backgroundColor:'#1ABDE8'}}>
            <div className='main_content' style={{backgroundColor:'#1ABDE8',height:'100vh'}}>
                <div>
                    <div className="middle_compo">
                        <div className='start_title'>바다</div>
                        <div className='start_sub_title'>
                            <div>당신 곁에서,</div>
                            <div> 바라보다,</div>
                        </div>
                    </div>
                </div>

                <div className='bottom_compo'>
                    <Link to="/onboarding/baseinfo">
                     <Button id="white" Label="바다 시작하기"></Button>
                    </Link>
                </div>
            </div> 
        </div>
        );
      };

export default start;