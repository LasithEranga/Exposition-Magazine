import image from '../images/main-image.png';
import './MainImage.css';

const MainImage = ()=>{
    return <div>
        <img src={image} alt="" className='mt-lg-2 main-image' style={{ width:'100%',objectFit:'cover'}}/>
    </div>
}

export default MainImage;