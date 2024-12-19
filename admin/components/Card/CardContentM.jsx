import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from './imageCM.jpg';
function CardContentM({navigateTo}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    };

    return(
        <div className="card" onClick={handleClick}>
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí Từ Vựng</h2>
            <p className='card-text'>Xem, chỉnh sửa các nội dung đã thêm</p>
        </div>
    );
}

export default CardContentM