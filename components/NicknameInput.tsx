import React, { useState } from 'react';
import Image from 'next/image';

export default function NicknameInput() {
    const [error, setError] = useState("");

    function handleOnChange(event:any) {
        console.dir(event.target.value)
        if (/^[a-zA-Z ]*$/.test(event.target.value) !== true) {
            setError("Invalid input")
        } else {
            setError("");
        }

    }

    return (
        <>
            <div className="centered-div">
                <div className="header">
                    <h3>Your nickname is</h3>
                </div>
                <input onChange={handleOnChange} type="text" pattern="[A-Za-z]+" required maxLength={8} title="Only letters allowed" placeholder="Tickypick" className="entername" />
                <p className="error">{error}</p>            

            </div>
            <Image src='play.svg' className='translate-y-1' alt='Play button' width="40" height="40" />
        </>
    )
}