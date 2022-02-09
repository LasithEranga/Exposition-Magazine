import image from '../images/main-image.png';
import './MainImage.css';

const MainImage = ()=>{
    return <div className='container-main-image'>
        <img src={image} alt="" className='mt-lg-2 main-image' style={{ width:'100%',objectFit:'cover'}}/>
        <div className='blur-container-main-image'>
            <div>
            <a href='#home' className='border-0 btn text-light' style={{backgroundColor:'#F2B900'}} size="sm"> INTERVIEWS</a>
            <a href='#gome' className='border-0 ms-2 btn text-light' style={{backgroundColor:'#F2B900'}} size="sm"> MAIN</a>
            </div>
            <div>
                <div className='text-white' style={{fontSize:'2rem'}}>Deshabandu W. K. H. Wegapitiya</div>
            </div>
            
        </div>
        
    </div>
}

export default MainImage;