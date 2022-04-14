import style from './BigImage.module.css';
import image from '../../assets/image 48.png';
import CaretDown from '../../assets/CaretDown.png';
import CaretDownBlack from '../../assets/CaretDownBlack.png';

export const BigImage = () => {
    return (
        <>
            <div className={style.box}>
                <img src={image} alt="" className={style.bigImgCarrousel} />
                <div className={style.info}>
                    As melhores guias para os melhores passeios.
                    <input type="button" value="CONFIRA" />
                </div>
                <div className={style.previus}> <img src={CaretDown} alt="Voltar" /></div>
                <div className={style.next}><img src={CaretDown} alt="Avançar" /></div>
                <div className={`${style.movDots}`}><div className={`${style.dot}  ${style.selected}`}></div><div className={style.dot}></div><div className={style.dot}></div></div>
            </div>
            <div className={style.down}><img src={CaretDownBlack} alt="Descer" /></div>
        </>
    )
}