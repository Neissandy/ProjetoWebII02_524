import React from 'react'
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Confira a lista de cachoeiras mais famosas do estado de Alagoas!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/imgAnel5.jpg'
                            text= "Cachoeira do Anel - Localizada em Viçosa"
                            label='Alagoas - Brasil'
                            path='/cachoeira1'
                        />
                          <CardItem 
                            src='images/imgTiririca1.jpg'
                            text= 'Cachoeira da Tiririca - Localizada em Murici'
                            label='Alagoas - Brasil'
                            path='/cachoeira2'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/imgVaiVem1.png'
                            text= "Cachoeira do Vai e Vem - Localizada em Água Branca"
                            label='Alagoas - Brasil'
                            path='/cachoeira3'
                        />
                          <CardItem 
                            src='images/imgTombador1.jpg'
                            text= 'Cachoeira do Tombador - Localizada em Ibateguara'
                            label='Alagoas - Brasil'
                            path='/cachoeira4'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
