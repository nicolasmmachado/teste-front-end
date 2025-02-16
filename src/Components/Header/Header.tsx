import style from './Header.module.css';
import ShieldCheck from '../../assets/ShieldCheck.png';
import Truck from '../../assets/Truck.png';
import CreditCard from '../../assets/CreditCard.png';
import CrownSimple from '../../assets/CrownSimple.png';
import Heart from '../../assets/Heart.png';
import MagnifyingGlass from '../../assets/MagnifyingGlass.png';
import UserCircle from '../../assets/UserCircle.png';
import Logo from '../../assets/Logo.png';
import Vector from '../../assets/Vector.png';
import ShoppingCart from '../../assets/ShoppingCart.png';

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