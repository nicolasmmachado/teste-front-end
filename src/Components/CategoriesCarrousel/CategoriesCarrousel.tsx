import style from './CategoriesCarrousel.module.css';
import img1 from '../../assets/image 40.png';
import img2 from '../../assets/image 41.png';
import img3 from '../../assets/image 42.png';
import img4 from '../../assets/image 43.png';

export const CategoriesCarrousel = () => {
    return(
        <div className={style.carrouselCategories}>
            <div className={style.carrousel}>
                <div className={style.categories}>
                    <img src={img1} alt="Brinquedos" />
                    <p>Brinquedos</p>
                </div>
                <div className={style.categories}>
                    <img src={img2} alt="Petiscos" />
                    <p>Petiscos</p>
                </div>
                <div className={style.categories}>
                    <img src={img3} alt="Guias" />
                    <p>Guias</p>
                </div>
                <div className={style.categories}>
                    <img src={img4} alt="Higiene" />
                    <p>Higiene</p>
                </div>
            </div>
        </div>
    )
}