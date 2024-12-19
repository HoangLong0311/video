import picture from './imageAV.jpg';
import { useNavigate } from 'react-router-dom';

function CardAddV({navigateTo}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navigateTo);
    }
    return(
        <div className="card" onClick={handleClick}>
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí video</h2>
            <p className='card-text'>quản lí bài giảng</p>
        </div>
    );
}

export default CardAddV