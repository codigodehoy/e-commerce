import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

function Detail ({title, price, rate }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating rate={rate}/>
            <h3>${price}</h3>
        </div>
    )
}

export { Detail }
