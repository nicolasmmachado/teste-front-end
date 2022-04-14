import style from './ProblemCategories.module.css';

export const Problems = () => {
    return (
        <nav className={style.problems}>
            <p className={style.selected}>É AGITADO</p>
            <p>MORDE</p>
            <p>LATE MUITO</p>
            <p>É ANSIOSO</p>
            <p>É ESTRESSADO</p>
        </nav>
    )
}