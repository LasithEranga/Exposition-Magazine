import stories from '../Data/SuccessStories.json';

import SuccessStoriesCarousel from './SuccessStoriesCarousel';

const SuccessStories = ()=>{
    return <div>
        <SuccessStoriesCarousel stories={stories}/>
    </div>
}

export default SuccessStories; 