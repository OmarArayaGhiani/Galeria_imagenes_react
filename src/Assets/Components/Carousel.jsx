import ImagesMain from '../Js/DataImagesMain'
import '../css/Carousel.css'
import ListImagesCarousel from './ImagesCarousel'

const ImagesCarousel = () => {
    return (
        <div>
            <div className="subTitle mx-auto">
                <h2 className="pt-5 text-center">Cartas más utilizadas</h2>
                <hr className="border border-4 border-primary rounded" />
            </div>
            <ListImagesCarousel lista={ImagesMain}/>    
        </div>
    );
}

export default ImagesCarousel;