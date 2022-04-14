import React from 'react';
import style from './App.module.css'
import { Header } from './Components/Header/Header';
import { BigImage } from './Components/BigImage/BigImage';
import { CategoriesCarrousel } from './Components/CategoriesCarrousel/CategoriesCarrousel';
import { Shop } from './Components/ShopCarrousel/ShopCarrousel';
import { Problems} from './Components/ProblemCategories/ProblemCategories';

function App() {
  return (
    <div className={style.principal}>
      <Header />
      <BigImage />
      <p className={style.title}>Categorias</p>
      <CategoriesCarrousel />
      <div className={style.shop}>
        <p className={style.titleShop}>Meu Cachorro...</p>
        <Problems />
      </div>
      <Shop />
    </div>
  );
}

export default App;
