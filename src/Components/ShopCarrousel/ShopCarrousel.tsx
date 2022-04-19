import style from './ShopCarrousel.module.css';
import heart from '../../assets/Heart.png';
import imgteste from '../../assets/image 10.png';
import { useState, useEffect } from 'react';
import { List } from '../../helpers/List';
import { Item } from "./Item";


export const Shop = () => {
    const [list, setList] = useState<List[]>([]);

    useEffect(() => {
        CatchList();
    }, []);

    const CatchList = () => {
        let lista = require("../../db/arquivo.json");
        setList(lista.products);
    }

    const Previus = () => {
        //let carrousel = style.carrouselShop.margin ;
        //if(){

        //}
    }

    const Next = () => {

    }

    return (
        <>
            <div className={style.previus} onClick={Previus}></div>
            <div className={style.next} onClick={Next}></div>
            <div className={style.container}>
                <div className={style.carrouselShop}>
                {list.map((itemList, index) => (
                        <Item productName={itemList.productName} description={itemList.description} photo={itemList.photo} price={itemList.price} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}