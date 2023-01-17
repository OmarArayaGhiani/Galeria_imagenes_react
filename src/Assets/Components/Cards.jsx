import Images from '../Js/DataImages'
import ListImagesCards from './ImagesCard'
import '../css/Cards.css'

const ImagesCards = () => {
    return (
        <div>
            <div className="subTitle w-xxl-75 mx-auto mt-5">
                <h2 className="pt-5 text-center">Algunas otras cartas</h2>
                <hr className="border border-4 border-primary rounded" />
            </div>
            <ListImagesCards lista={Images} />
        </div>
    )
}

export default ImagesCards