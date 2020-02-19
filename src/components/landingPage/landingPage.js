import React from 'react';
import Particles from 'react-particles-js';
import Header from '../header/header';
import './landingPage.css';
import Countdown from '../timer/timer';
import Fade from 'react-reveal/Fade';

const tracks = [
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/4fb1c40miscellaneous.png",
        "title": "Deep Space Navigation & Control",
        "desc": "Deep space navigation enables missions to precisely target distant solar system bodies and particular sites of interest on them. Navigation takes place in real-time for spacecraft operation and control. It can also be used for creating higher-fidelity reconstructions of a craft’s trajectory for future course corrections, and for scientific and operational purposes. "
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/b1c9b81big-data.png",
        "title": "Big Data",
        "desc": "Data can unravel things helping us challenge the our limits everyday. Space science has multitudes of data, be it the syreams of radio signals from the VLA or the stunning full spectral images from the Hubble Space Telescope. Studying, classifying and searching this data efficiently is a herculean task and poses challenges to analysts and scientists across the globe. Automating this collection and analysis could pave the path to numerous discoveries about the intricate workings of our Universe."
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/3a6e631robotic-arm.png?",
        "title": "Robotics",
        "desc": "NASA landed humans on the moon. NASA is now poised for its next great transformation: the robot revolution. Here on Earth, robots are performing increasingly complex tasks in ever more challenging settings—medical surgery, automated driving, and bomb disposal are just a few examples of the important work of robots."
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/ad64b0fbrain.png?",
        "title": "Artificial Intelligence",
        "desc": "From detecting exoplanets and their chemistry to listening to gravitational waves to navigating extraterrestrial rovers, artificial intelligence and machine learning have broadened the horizon of space exploration and understanding of the universe. Integrating intelligence into space technology will truly allow us to have automated space crafts, synchronized satellites and even self sustaining colonies. Are you upto the challenge?"
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/cabf7c6satellite_2.png",
        "title": "Cubesat",
        "desc": "The development, operation, and analysis of data from cubesats can promote science education and spur technology utilization in emerging and developing nations. Their small size and weight enables cubesats to “piggyback” on rocket launches and accompany orbiters travelling to Moon and Mars. It is envisaged that constellations of cubesats will be used for larger science missions."
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/7b7b50bmars-rover.png",
        "title": "Extra Terrestrial Automotives",
        "desc": "While many countries including India have planned manned missions to space in the coming years, our primary tools for studying mystery filled terrains of Mars and the Moon are still unmanned vehicles. Optimizing the structure, robustness and controls of these vehicles decides the cost effectiveness of space missions, how long we can continue to operate and ultimately how much we are able to learn about what lies in the depths of our celestial neighbours. "
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/6f6d539space.png",
        "title": "Materials & Structures for Space",
        "desc": "Space missions require materials that can preserve functional integrity under extreme conditions of heat, impact and radiation. The accompanying structural design must ensure that the craft can persevere and navigate optimally in these harsh condotions. Starting from the launch phase, spacecrafts face high vibrations, acoustic and shock levels, lightning and bird strikes."
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/8be4350space_1.png",
        "title": "Satellite Network Expansion and Data Acquisition",
        "desc": "Satellites are the height of modern communications technology. Being a central part of space technologies, communication determines our sphere of influence beyond the Karman Line. While communicating with satellites is crucial and forms the basis of many networks such as telecommunication and geographical mapping, synchronous and efficient operation between satellites and ground networks poses many challenges with tangible consequences here on Earth. "
    },
    {
        "img": "https://he-s3.s3.amazonaws.com/media/sprint/astra-2020-1/a6ca241idea.png",
        "title": "Rogue Planets: Open Innovation",
        "desc": "Elon Musk, Steve Squyres, K Radhakrishnan, three names that will make it into history books only because they created what others could scarcely imagine. Have an idea that doesn't fit in with our themes? Open innovation is your platform to showcase your unique idea that proposes a novel approach to solving any problem faced by scientists and engineers in the space industry."
    },
]

const getTracks = (tracks) => {
    return(
        <div className="tracksGrid">
            {
                tracks.map((track, key) => 
                    <Fade bottom key={key}>
                        <div className="card shadow p-3 mb-5 bg-white rounded">
                            <img className="card-img-top" src={track.img} alt="" style={{width: "100px"}}></img>
                            <div className="card-body">
                            <h5 className="card-title">{track.title}</h5>
                            <p className="card-text">{track.desc}</p>
                            </div>
                        </div>
                    </Fade>
                )
            }
        </div>
    )
}

const LandingPage = () => {
    const isMobile = window.innerWidth <= 500;
    return(
        <div>

        {/* Landing page */}
        <div id="home">
            <Particles
                className="particle"
                params={{
                    "particles": {
                        "number": {
                            "value": (isMobile ? 50 : 100),
                            "density": {
                                "enable": true,
                                "value_area": (isMobile ? 700 : 500)
                              }
                        },
                        "size": {
                            "value": 2
                        },
                        "color": {
                            "value": "#00f2ff"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                    position: "absolute",
                    backgroundColor: "#000011",
                    left: "0",
                    top: "0",
                    zIndex: "1",
                    height: "100vh"
                }}/>

            <div className="content">
                <img src="http://sedsindia.org/astra19/images/astranegativelogoFINAL.png" alt=""></img>
                <h4>Sustainable and Smart Solutions to new age space problems</h4>
                <h3>28<sup>th</sup> and 29<sup>th</sup> March <sup>'</sup>20</h3>
                <h3>VIT, Vellore</h3>
                <a href="https://astra2020.hackerearth.com/"> <button type="button" className="btn-grad" name="button" target="_blank">
                REGISTER</button></a>
            </div>
            <p className="scroll-down"><a href="#aboutseds" className="animate"> </a></p>
        </div>
        {/* Landing page end */}

        <Header/>
            
        {/* About astra */}
        <div className="grid-container" id="aboutseds">
        <div className="image"></div>
        <div className="about">
            <div className="headings">
                <div>
                <h1 id="heading">What is ASTRA?</h1>
                </div>
            </div>
            <div>
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
            </div>
            <div>
                <Fade right>
                <Countdown timeTillDate="03 28 2020, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
                </Fade>
            </div>
        </div>
        </div>
        {/* About astra ends */}
        <div id="tracks" style={{padding: "3.5em 80px"}}>
            <span id="heading" style={{fontSize: "60px"}}>TRACKS</span>
            {getTracks(tracks)}
        </div>
        </div>
    )
}

export default LandingPage;