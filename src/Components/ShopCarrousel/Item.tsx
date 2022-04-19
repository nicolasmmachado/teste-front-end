import style from "./ShopCarrousel.module.css";
import heart from "../../assets/Heart.png";
import { List } from '../../helpers/List';

export const Item = (item: List) => {
    return (
        <div className={style.item}>
            <div className={style.top}>
                <p>40% OFF</p>
                <img src={heart} alt="Favoritar" />
            </div>
            <img src={item.photo} />
            <p className={style.description}>{item.productName} </p>
            <p className={style.discount}>De R$ 100,00</p>
            <span className={style.price}><span>Por </span> {item.price.toLocaleString("pt-BR")}</span>
            <div className={style.subscribers}>
                <span className={style.subsPrice}>R$ 85,00</span>
                <span className={style.subsInfo}>Para assinantes</span>
            </div>
            <input type="button" value="ADICIONAR" className={style.addButton} />
        </div>
    )
}