import './ButtonMenu.sass'


export const ButtonMenu = ({lable}) => {

    return(
        <div className="buttonMenu">
            <button className="buttonMenu__button">{lable}</button>
        </div>
    )

}