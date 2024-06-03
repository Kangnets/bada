import React from 'react';

function LoginTitleB({first_sen,second_sen}) {


      
        return (
        <div style={{display:'flex', justifyContent:'center'}}>
           <div className='login_title_blue'>{first_sen}</div>
           <div className='login_title'>{second_sen}</div>
        </div>
        );
      };

export default LoginTitleB;