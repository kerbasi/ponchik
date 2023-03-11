import './Card.sass'
import photo from './temp.jpg'

export const Card = () => {
    return(
        <div className="card">
            <img src={photo} alt="" className="card__img" />
            <h4 className="card__title">Сет «Классический»  (12 шт.)</h4>
        </div>
    )
}