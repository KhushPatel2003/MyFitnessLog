import React from 'react';
import CardItem from '../CardItem/Carditems';
import '../../styles/cards.css';
import lose from '../../images/loss.PNG';
import gainPIC from '../../images/gain.PNG';
import maintainePIC from '../../images/maintaine.PNG';
import workout from '../../images/exercise.PNG';
import tracking from '../../images/trackingCALS.PNG';

function Cards() {
    return (
        <div className="cards" id="info">
            <h1 className="BigText">All your fitness needs, fulfuilled.!</h1>
            <br />
            <br />
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={lose}
                        text="Our program will calculate how many calories you should eat in a day to lose atleast 1 pound per week granted that you exercise and burn more calories as well. "
                        label="Lose"
                        // path="/services"
                        />
                        <CardItem 
                        src={gainPIC}
                        text="Our program will also calculate how many calories you should eat in a day to gain atleast 1 pound per week granted that you exercise and burn more calories as well. "
                        label="Gain"
                        // path="/services"
                        />
                        <CardItem 
                        src={maintainePIC}
                        text="If you just want to maintain your weight then with our program we will provide the user with the amount of calories they should eat in a day based on their activity level to maintain their weight. "
                        label="Maintain"
                        // path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src={workout}
                        text="We also offer workout tracking. You can input the amount of exercising you have done as well as teh amount of sets and reps perform with the weight. In the end a table will appear showing the user all the exercises they have done and the details of the exercise for their records. "
                        label="Exercise"
                        // path="/services"
                        />
                        <CardItem 
                        src={tracking}
                        text="You can also input what you ate for breakfast, lunch and dinner as well as snacks and drinks and their calories. Our program will then add up all those calories and tell you how many you have consumed as well as if you are on track to meet your goal or not."
                        label="Tracking"
                        // path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards