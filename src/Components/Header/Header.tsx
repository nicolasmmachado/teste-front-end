import style from './Header.module.css';
import ShieldCheck from '../../assets/Header/ShieldCheck.png';
import Truck from '../../assets/Header/Truck.png';
import CreditCard from '../../assets/Header/CreditCard.png';
import CrownSimple from '../../assets/Header/CrownSimple.png';
import Heart from '../../assets/Header/Heart.png';
import MagnifyingGlass from '../../assets/Header/MagnifyingGlass.png';
import UserCircle from '../../assets/Header/UserCircle.png';
import Logo from '../../assets/Header/Logo.png';
import Vector from '../../assets/Header/Vector.png';
import ShoppingCart from '../../assets/Header/ShoppingCart.png';

export const Header = () => {
    return (
        <header>
            <div className={style.top}>
                <div className={style.box}>
                    <img src={ShieldCheck} alt="ShieldCheck" />
                    <span>Compra </span>
                    <span className={style.principal}> 100% segura</span>
                </div>
                <div className={style.box}>
                    <img src={Truck} alt="Truck" />
                    <span className={style.principal}>Frete grátis </span>
                    <span >acima de R$200,00</span>
                </div>
                <div className={style.box}>
                    <img src={CreditCard} alt="CreditCard" />
                    <span className={style.principal}>Parcele </span>
                    <span>suas compras</span>
                </div>
            </div>
            <div className={style.center}>
                <div>
                    <div className={style.block}></div>
                    <img src={Logo} alt="O Cãoselheiro" className={style.logo} />
                </div>
                <div>
                    <input type="text" placeholder="O que você está buscando?" /><img src={MagnifyingGlass} alt="MagnifyingGlass" className={style.magnifyingGlass} />
                </div>
                <div className={style.shop}>
                    <img src={Vector} alt="Vector" />
                    <img src={Heart} alt="Favoritos" />
                    <img src={UserCircle} alt="Usuário" />
                    <img src={ShoppingCart} alt="Carrinho" />
                </div>
            </div>
            <nav>
                <a href="">BRINCAR</a>
                <a href="">MORDER</a>
                <a href="">COMER</a>
                <a href="">PASSEAR</a>
                <a href="">CASA E CONFORTO</a>
                <a href="">EDUCAÇÃO</a>
                <a href="">OFERTAS</a>
                <a href="" className={style.icon}> <img src={CrownSimple} alt="Coroa" /> COLEÇÃO DE OUTONO</a>
            </nav>
        </header>
    )
}