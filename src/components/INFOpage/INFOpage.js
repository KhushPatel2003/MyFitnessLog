import '../../styles/INFOpage.css';
import React from'react';
import Vectorbby from '../../images/Vector.PNG';

function INFOpage() {
    return (
        <>
            <div className="INFOpageBIN">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="Left">
                    <article className="LeftArticle">
                        <h1 className="Lefty">Program Overview</h1>
                        <p className="LeftyP">➦Our program has been designed to aid users with their fitness goals.</p>
                        <p className="LeftyP">➦Our program will prompt the user for their data such as sex, weight, height, and what they eat throughout the day, as well as any exercises they may have done that day. Our program also incommadates the user’s activity level when helping them reach their fitness goals</p>
                        <p className="LeftyP">➦Our program follows the Mifflin-St Jeor Equation, the most accurate equation, to calculate the user’s Basal Metabolic Rate to see how many calories they burn ideally in a day.</p>
                    </article>
                </div>
                <div className="Right">
                    <article>
                        <img className="Vectors" src={Vectorbby} alt="Man running" />
                    </article>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

export default INFOpage;