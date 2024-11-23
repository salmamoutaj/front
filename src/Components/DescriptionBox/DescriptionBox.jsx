import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Chez Cristalyn, nous créons des bijoux uniques qui capturent l'éclat et la beauté 
                    intemporelle des cristaux. Chaque pièce est soigneusement conçue pour sublimer votre quotidien
                    avec des designs raffinés, modernes et élégants. Que vous recherchiez un bijou délicat pour une 
                    occasion spéciale ou un accessoire chic pour illuminer votre style quotidien, Cristalyn a ce qu'il vous faut.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox