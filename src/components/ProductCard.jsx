import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'

export default function CardProducts ({image, price, price2, name, tag, id}){

    return (
        <a href={`/product/${id}`} className="products__list--item">

             <img src={image} alt="" />
            
             <h3 className="products__list--price">R$ {price} <span>R$ {price2}</span></h3>
             <h4 className="products__list--name">{name}</h4>
              <div className="product__tag">
                
                 {tag === "Contém lactose" 
                  ? <img src={CowImage} alt="vaca" /> 
                  : <img src={PlantImage} alt="planta" />
}
               <span>{tag}</span>
              </div>
                </a>
                
  )
}