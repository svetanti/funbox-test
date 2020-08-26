import React from 'react';
import Card from './Card';

function Cards() {
    const cards = [
        {
            id: 1,
            type: 'с фуа-гра',
            serving: '10',
            miceNumber: 'мышь',
            feature: '',
            weight: '0,5',
            description: 'Печень утки разварная с артишоками.',
            isAvailable: true
        },
        {
            id: 2,
            type: 'с рыбой',
            serving: '40',
            miceNumber: '2 мыши',
            feature: '',
            weight: '2',
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            isAvailable: true
        },
        {
            id: 3,
            type: 'с курой',
            serving: '100',
            miceNumber: '5 мышей',
            feature: 'заказчик доволен',
            weight: '5',
            description: 'Филе из цыплят с трюфелями в бульоне.',
            isisAvailable: false
        },
    ];

    return (
        <ul className='cards'>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    card={card}
                    type={card.type}
                    serving={card.serving}
                    miceNumber={card.miceNumber}
                    feature={card.feature}
                    weight={card.weight}
                    description={card.description}
                    isAvailable={card.isAvailable}
                />
            ))}
        </ul>

    )

}

export default Cards;