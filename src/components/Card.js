import React from 'react';
import cat from '../images/cat.png';

function Card(card) {
    const [isSelected, setSelected] = React.useState(false);
    const [isJustClicked, seJustClicked] = React.useState(false);
    const isAvailable = card.isAvailable;
    const cardCornerClassName = `card__corner ${isAvailable ?
        'card__corner_theme_selected' :
        'card__corner_theme_disabled'}`;
    const cardBackgroundClassName = `card__background ${isAvailable ?
        'card__background_theme_selected' :
        'card__background_theme_disabled'}`;
    const cardWeightClassName = `card__weight ${isAvailable ?
        'card__weight_theme_selected' :
        'card__weight_theme_disabled'}`;
    const cardClassName = `card ${isJustClicked && 'card_active'}`;

    function outOfStock() {
        if (isAvailable) {
            return (<p className="card__buy">{card.description}</p>);
        }
        else {
            return (<p className="card__buy card__buy_theme_disabled">Печалька, {card.type} закончился.</p>);
        }
    }

    function selectCard() {
        setSelected(!isSelected);
        seJustClicked(true);
    }

    return (
        <li className={cardClassName} id={card.id} onClick={selectCard} onMouseOver={() => seJustClicked(false)} >
            <div className={isSelected ? cardCornerClassName : 'card__corner'}></div>
            <div className={isSelected ? cardBackgroundClassName : 'card__background'}>
                <p className="card__main-text">Сказочное заморское яство</p>
                <h2 className="card__title">Нямушка</h2>
                <p className="card__subtitle">{card.type}</p>
                <p className="card__subtext">
                    <span className="card__subtext_number">{card.serving} </span>порций
                    <span className="card__subtext_number"> {card.miceNumber} </span>
                    в подарок {card.feature}</p>
                <img src={cat} alt="cat" className="card__cat" />
                <div className={isSelected ? cardWeightClassName : 'card__weight'}>
                    <p className="card__weight_text">{card.weight}</p>
                    <p className="card__weight_subtext">кг</p>
                </div >
            </div>
            {
                isSelected ? outOfStock() :
                    (<p className="card__buy">Чего сидишь? Порадуй котэ, <a href="#" target="_blank" className="card__buy card__buy_link">купи</a>.</p>)
            }

        </li >
    );
}

export default Card;