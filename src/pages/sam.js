import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import MainTitle from '../components/MainTitle';
import LoginTitle from '../components/loginTitle';
import LoginTitleB from '../components/loginTitleB';
import SubTitle from '../components/SubTitle';
import Option from '../components/Option';
import Button from '../components/Button';
import Chat from '../components/Chat';

const Sam = () => {
    // state
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/users")
            .then(response => {
                // Check if the response is not ok
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Check if the response is in JSON format
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new TypeError("Received non-JSON response");
                }
                return response.json();
            })
            .then(data => {
                // Update the state with the fetched data
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="main">
            <div className='main_content'>
                <Input />
                <LoginTitleB first_sen="바다" second_sen="로 들어가기" />
                <LoginTitle sentence="잠깐! 비밀번호가 필요해요" />
                <MainTitle />
                <SubTitle sentence="주진님 안녕하세요" />
                <Option />
                <Button id="white" label="들어가기" />
                <Chat />
                <div style={{fontSize:'500px'}}>
                    {data.users && data.users.map((u) => <p key={u.id}>{u.name}</p>)}
                </div>
            </div>
        </div>
    );
};

export default Sam;
