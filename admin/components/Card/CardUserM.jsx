import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from './imageUM.jpg';

function CardUserM({navigateTo}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };
    return(
        <div className="card" onClick={handleClick}>
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí người dùng</h2>
            <p className='card-text'>quản lí thông tin, điều chỉnh,...</p>
        </div>
    );
}

export default CardUserM