import React from 'react';
import x_icon from "../assets/x_icon.svg"

function Input({type,value, onChange , placeholder}) {


      
        return (
        <div >
           <div style={{display:'flex', justifyContent:'center'}}>
                <form style={{marginLeft:'-10px'}}>
                    <input 
                    className='input_content' 
                    
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}></input>
                </form>

                <div style={{display:'flex', justifyItems:'center'}}><img style={{width:"17px"}} src={x_icon}></img></div>
            </div>

            <div style={{display:'flex',justifyContent:'center'}} >
                   <div className='under_line'></div>
            </div>
           
        </div>
        );
      };

export default Input;