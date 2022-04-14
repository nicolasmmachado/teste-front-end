import style from './ShopCarrousel.module.css';
import heart from '../../assets/Heart.png';
import imgteste from '../../assets/image 10.png';

export const Shop = () => {
    return(
        <div className={style.container}>
            <div className={style.carrouselShop}>
                <div className={style.item}>
                    <div className={style.top}>
                        <p>40% OFF</p>
                        <img src={heart} alt="" />
                    </div>
                    <img src={imgteste} alt="" />
                </div>
            </div>
        </div>
    )
}