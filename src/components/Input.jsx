import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function input({ setIsPassed }) {
    const value = useRef()
    const navigate = useNavigate();
    function PassworPassFun(e) {
        console.log(value.current.value);
        e.preventDefault()

        if (value.current.value == "mypasswordis2008") {
            navigate('/create');
            setIsPassed(false)
        } else{
            alert('Parolni XATO yozdingiz!!!')
            setIsPassed(true)
            value.current.value = ''
            return;
        }
        value.current.value = ''
    }
    return (
        <div className='OpenInPhonePasswordWritier'>
            <form className='openinphoneform' onSubmit={(e) => PassworPassFun(e)}>
                <label className='openinphoneformlabel'>
                    Enter your password:
                    <input ref={value} type="password" placeholder='enter your password' />
                </label>
                <div style={{display: 'flex', gap: '20px'}}>
                    <button>Davom etish</button>
                    <button onClick={() => setIsPassed(false)} type='button'>Bekor qilish</button>
                </div>
            </form>
        </div>
    )
}
