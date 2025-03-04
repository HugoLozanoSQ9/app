import React, { useEffect, useState } from 'react';
import { getUser } from '../../UseCases/getUser';
import Form from './MainSideUtilities/Form';

export default function MainSide() {
    const [user, setUser] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    // useEffect(() => {
    //     const userId = '-OIhgA_eHQMk_BR9yb7k';
    //     getUser(userId).then(userData => {
    //         setUser(userData);
    //         setUserEmail(userData.email);
    //         console.log('Email:', userData.email);
    //     }).catch(error => {
    //         console.error('Error fetching user:', error);
    //     });
    // }, []);

    return (
        <div className="lg:col-start-2 lg:col-end-3 col-start-1 col-end-2 text-black ">

            <div className="flex gap-[2%] flex-wrap w-[100%] h-[100%]">
                <div className="w-[32%] h-[32%]">2</div>
                <div className="w-[32%] h-[32%]">3</div>
                <div className="w-[32%] h-[32%]">4</div>
                <div className="w-[32%] h-[32%]">1</div>
                <div className="w-[32%] h-[32%] flex justify-center items-center">

                    <Form />


                </div>
                <div className="w-[32%] h-[32%]">6</div>
                <div className="w-[32%] h-[32%]">7</div>
                <div className="w-[32%] h-[32%]">8</div>
                <div className="w-[32%] h-[32%]">9</div>
            </div>
        </div>
    );
}

