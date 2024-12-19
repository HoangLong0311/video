import picture from './imageAC.jpg';
function CardAddW(){
    return(
        <div className="card">
            <img className='card-image' src={picture} alt="Pic" />
            <h2 className='card-title'>Quản lí câu</h2>
            <p className='card-text'>chỉnh sửa câu</p>
        </div>
    );
}

export default CardAddW