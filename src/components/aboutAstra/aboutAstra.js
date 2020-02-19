import React from 'react';
import './aboutAstra.css';
import Fade from 'react-reveal/Fade';

const AboutAstra = () => {
    return(
        <div className="grid-container" id="aboutseds">
            <div className="image"></div>
            <div className="about">
                <div className="headings">
                    <div>
                      <h1 id="heading">What is ASTRA?</h1>
                    </div>
                </div>
                    Citing the importance of developing not just smart but sustainable solutions 
                    to new age problems, we bring the second edition of our space-themed hackathon, 
                    ASTRA 2020. Team selections will be done upon the basis of abstracts of solutions 
                    to the given real-world problem statements and letters of intent. In the 24-hours 
                    hack, the progress made by the teams based upon their original abstracts in the 
                    first 10 hours will decide their entry into the next round. Here they will be 
                    given real-time challenges like budget cuts, module failure etc. and teams will 
                    be evaluated based upon their solutions to these problems. In the final round, 
                    the qualified teams will have to present their entire design and solutions in a 
                    short presentation to a panel of experts. Based upon the views of the experts and 
                    scores from previous rounds, the winner will be decided. We aim to provide the winners 
                    technical support to further develop their ideas and prototypes by partnering with suitable organisations.
                <div>
                <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
                    <Fade left>
                    <h1>React Reveal</h1>
                    </Fade>
                    <Fade right>          
                    <h1>React Reveal</h1>
                    </Fade>
                </div>

                </div>
            </div>
        </div>
    )
}

export default AboutAstra;