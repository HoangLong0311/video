import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from './imageAC.jpg';

function CardAddC({navigateTo}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    }
    return(
        <div className="card" onClick={handleClick}>
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí câu</h2>
            <p className='card-text'>Chỉnh sửa câu</p>
        </div>
    );
}

export default CardAddC