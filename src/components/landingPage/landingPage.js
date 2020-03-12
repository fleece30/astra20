import React from 'react';
import Particles from 'react-particles-js';
import Header from '../header/header';
import './landingPage.css';
import Countdown from '../timer/timer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from 'react-html-parser';

const mobile = (window.innerWidth <= 768) ? true : false;

const str = '<a href="https://astra2020.hackerearth.com/" target="_blank" rel="noopener noreferrer">Hackerearth</a>';


const hackImages = [
    {
        "img": "1 (1)"
    },
    {
        "img": "1 (2)"
    },
    {
        "img": "1 (3)"
    },
    {
        "img": "1 (4)"
    },
    {
        "img": "1 (5)"
    },
    {
        "img": "1 (6)"
    },
    {
        "img": "1 (7)"
    },
    {
        "img": "1 (8)"
    },
    {
        "img": "1 (9)"
    }
]

const winners = [
    {
        "img": "2-(1)",
        "name": "Team Quazars",
        "pos": "First Position"
    },
    {
        "img": "2-(2)",
        "name": "Team Pneumoployers",
        "pos": "Second Position"
    },
    {
        "img": "2-(3)",
        "name": "Team Kaizen",
        "pos": "Third Position"
    }
]

const tracks = [
    {
        "img": "https://image.flaticon.com/icons/svg/1599/1599800.svg",
        "title": "Deep Space Navigation & Control",
        "desc": "Deep space navigation enables missions to precisely target distant solar system bodies and particular sites of interest on them. Navigation takes place in real-time for spacecraft operation and control. It can also be used for creating higher-fidelity reconstructions of a craft’s trajectory for future course corrections, and for scientific and operational purposes. "
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2245/2245284.svg",
        "title": "Big Data",
        "desc": "Data can unravel things helping us challenge the our limits everyday. Space science has multitudes of data, be it the syreams of radio signals from the VLA or the stunning full spectral images from the Hubble Space Telescope. Studying, classifying and searching this data efficiently is a herculean task and poses challenges to analysts and scientists across the globe. Automating this collection and analysis could pave the path to numerous discoveries about the intricate workings of our Universe."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/1129/1129383.svg",
        "title": "Robotics",
        "desc": "NASA landed humans on the moon. NASA is now poised for its next great transformation: the robot revolution. Here on Earth, robots are performing increasingly complex tasks in ever more challenging settings—medical surgery, automated driving, and bomb disposal are just a few examples of the important work of robots."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/653/653465.svg",
        "title": "Artificial Intelligence",
        "desc": "From detecting exoplanets and their chemistry to listening to gravitational waves to navigating extraterrestrial rovers, artificial intelligence and machine learning have broadened the horizon of space exploration and understanding of the universe. Integrating intelligence into space technology will truly allow us to have automated space crafts, synchronized satellites and even self sustaining colonies. Are you upto the challenge?"
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2079/2079040.svg",
        "title": "Cubesat",
        "desc": "The development, operation, and analysis of data from cubesats can promote science education and spur technology utilization in emerging and developing nations. Their small size and weight enables cubesats to “piggyback” on rocket launches and accompany orbiters travelling to Moon and Mars. It is envisaged that constellations of cubesats will be used for larger science missions."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/947/947680.svg",
        "title": "Extra Terrestrial Automotives",
        "desc": "While many countries including India have planned manned missions to space in the coming years, our primary tools for studying mystery filled terrains of Mars and the Moon are still unmanned vehicles. Optimizing the structure, robustness and controls of these vehicles decides the cost effectiveness of space missions, how long we can continue to operate and ultimately how much we are able to learn about what lies in the depths of our celestial neighbours. "
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2510/2510967.svg",
        "title": "Materials & Structures for Space",
        "desc": "Space missions require materials that can preserve functional integrity under extreme conditions of heat, impact and radiation. The accompanying structural design must ensure that the craft can persevere and navigate optimally in these harsh condotions. Starting from the launch phase, spacecrafts face high vibrations, acoustic and shock levels, lightning and bird strikes."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/1866/1866613.svg",
        "title": "Satellite Network Expansion and Data Acquisition",
        "desc": "Satellites are the height of modern communications technology. Being a central part of space technologies, communication determines our sphere of influence beyond the Karman Line. While communicating with satellites is crucial and forms the basis of many networks such as telecommunication and geographical mapping, synchronous and efficient operation between satellites and ground networks poses many challenges with tangible consequences here on Earth. "
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2538/2538051.svg",
        "title": "Rogue Planets: Open Innovation",
        "desc": "Elon Musk, Steve Squyres, K Radhakrishnan, three names that will make it into history books only because they created what others could scarcely imagine. Have an idea that doesn't fit in with our themes? Open innovation is your platform to showcase your unique idea that proposes a novel approach to solving any problem faced by scientists and engineers in the space industry."
    },
    {
        "img": "https://image.flaticon.com/icons/svg/2620/2620605.svg",
        "title": "Quantum Computing",
        "desc": "Quantum computers, a revolutionary form of computing which uses qubits of information (instead of bits). These qubits can exist not just as ones and zeros, but use the properties of quantum systems. NASA researchers are using these systems to investigate areas where quantum algorithms might someday dramatically improve the agency's ability to solve difficult optimization problems in aeronautics, Earth and space sciences, and space exploration. With quantum computing frameworks getting better every day what innovative applications can you think of?"
    }
]

const judges = [
    {
        "img": "andemurali.jfif",
        "name": "Dr. Ande Murali Varaprasad",
        "desig": "Professor & Director CIGS ISRO"
    },
    {
        "img": "evan.jfif",
        "name": "Prof. Elangovan Rajagopalan",
        "desig": "Vice Principal & HOD Aerospace Dept. ACS College of Technology"
    },
    {
        "img": "gaurav.jfif",
        "name": "Mr. Gaurav Agarwal",
        "desig": "Flight Software Engineer and Team Indus Skywalker"
    },
    {
        "img": "shyam.png",
        "name": "Mr. Shyam Sundar",
        "desig": "Service Delivery Specialist IBM"
    },
    {
        "img": "siddeshnaik.jfif",
        "name": "Mr. Siddesh Naik",
        "desig": "SEDS USA Alumni, Project Manager and New Space Research and Technologies"
    }
]

const questions = [
    {
        "id": "1",
        "ques": "Who can participate?",
        "ans": "Students from all engineering subdivisions and colleges are welcome to participate in Astra 2020."
    },
    {
        "id": "2",
        "ques": "How much is the participation fee?",
        "ans": "Teams can submit their abstracts and register for free. A nominal fee of Rs. 100 is to be paid to attend the final stage of the hack in VIT, Vellore which includes refreshments."
    },
    {
        "id": "3",
        "ques": "How can I register?",
        "ans": "You can visit "+ str +" to register for Astra 2020 irrespective of your college or country of origin."
    },
    {
        "id": "4",
        "ques": "Is it a purely coding-based hackathon?",
        "ans": "No. The problem statements are designed such that there's something for all backgrounds and we encourage multi-disciplinary team formation."
    },
    {
        "id": "5",
        "ques": "Will I get a certificate for participation?",
        "ans": "All participants will receive participation certificates."
    },
    {
        "id": "6",
        "ques": "What is the prize money?",
        "ans": "The total prize money is Rs. 60000 for the top three positions along with certificates and merchandise."
    },
    {
        "id": "7",
        "ques": "How to reach Vellore?",
        "ans": "The nearest airports are Chennai and Bangalore while buses and trains ply regularly from all nearby junctions."
    },
    {
        "id": "8",
        "ques": "What if I don't have a team?",
        "ans": "Worry not. You can register on "+ str +" and we'll do the team formation as suitable."
    },
    {
        "id": "9",
        "ques": "I am not very interested in/aware of the developments in the space sector. Should I participate?",
        "ans": "Absolutely. Astra is first and foremost a platform to show and grow your engineering skills. Webinars from industry experts and our panel of judges would be more than enough to help you apply your knowledge in the space sector."
    },
    {
        "id": "10",
        "ques": "Whom do I contact for more information?",
        "ans": "You can contact us on Facebook or Instagram or mail us at <a href='mailto:vit.sedsindia@gmail.com'>vit.sedsindia@gmail.com</a>."
    },
    {
        "id": "11",
        "ques": "Will we be provided with food and the internet?",
        "ans": "Yes, refreshments would be provided at regular intervals along with lunch and dinner. VIT wifi would also be provided."
    }
]

const LandingPage = () => {

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
                <Fade bottom>
                    <div className="comingSoon">
                        <h1>Problem Statements Out Now!</h1>
                        <a href={process.env.PUBLIC_URL + '/ASTRA_PS.pdf'} download style={{textDecoration: "none"}}> <button type="button" className="btn-grad" name="button" target="_blank" style={{padding: "15px", width: "200px", outline:"none"}}>
                        Download</button></a>
                    </div>
                </Fade>
            </div>
        )
    }
    
    const hackImagesCarousel = (images) => {
        return(
            images.map((img, key) => 
                <div key={key}>
                    <img src={process.env.PUBLIC_URL + '/images/' + img.img + '.jpg'} alt="" />
                </div>
            )
        )
    }
    
    const winnerImagesCarousel = (winners) => {
        return(
            winners.map((winner, key) => 
                <div key={key}>
                    <img src={process.env.PUBLIC_URL + '/images/' + winner.img + '.jpg'} alt="" />
                    <p className="legend"><b style={{letterSpacing: "3px"}}>{winner.name}</b><br/>{winner.pos}</p>
                </div>
            )
        )
    }
    
    const judgeCards = (judges) => {
        return(
            judges.map((judge, key) =>
                <aside key={key} className="profile-card">
                    <header>
                        <img src={process.env.PUBLIC_URL + '/images/' + judge.img} alt=""></img>
                        <h1>{judge.name}</h1>
                    </header>
                    <div className="bio">
                        <p style={{fontFamily: "Quicksand"}}><b>{judge.desig}</b></p>
                    </div>
                </aside>
            )
        )
    }

    const faq = (questions) => {
        return(
            <div className="faq-content" style={{fontFamily: "Montserrat"}}>
                {
                    questions.map((question, key) =>
                        <div key={key} className="faq-question">
                            <input id={question.id} type="checkbox" className="panel"></input>
                            <div className="plus">+</div>
                            <label htmlFor={question.id} className="panel-title">{question.ques}</label>
                            <div className="panel-content">{ReactHtmlParser(question.ans)}</div>
                        </div>
                    )
                }
            </div>
        )
    }


    return(
        <div>

        {/* Landing page */}
        <div id="home">
            <Particles
                className="particle"
                params={{
                    "particles": {
                        "number": {
                            "value": (mobile ? 50 : 100),
                            "density": {
                                "enable": true,
                                "value_area": (mobile ? 700 : 500)
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
                <h3>Sustainable and Smart Solutions to<br/> New Age Space Problems</h3>
                <h4>28<sup>th</sup> and 29<sup>th</sup> March <sup>'</sup>20</h4>
                <h4>VIT, Vellore</h4>
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
                <div className="heading intro"><span id="heading" style={{fontSize: "60px"}}>What is ASTRA?</span></div>
                </div>
            </div>
            <div style={{marginTop: "20px!important"}}>
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
        {/* tracks */}
        <div id="tracks" style={{padding: "3.5em 80px"}}>
            <div className="heading"><span id="heading" style={{fontSize: "60px"}}>TRACKS</span></div>
            {getTracks(tracks)}
        </div>
        {/* tracks end */}

        {/* Highlights */}
        <div id="highlights"style={{padding: "3.5em 80px", backgroundColor: "black", color: "white"}}>
            <div className="heading"><span id="heading" style={{fontSize: "60px"}}>HIGHLIGHTS 2019</span></div>
            <Fade left><h3 className="highlight-heads">The Hack</h3></Fade>
            <Fade right>
                <Carousel className="carousel-hack" width={mobile ? "90%" : "70%"} showThumbs={false} autoPlay={true}>
                    {hackImagesCarousel(hackImages)}
                </Carousel>
            </Fade>

            <Fade left><h3 className="highlight-heads">The Winners</h3></Fade>
            <Fade right>
                <Carousel className="carousel-winners" width={mobile ? "90%" : "70%"} showThumbs={false}>
                    {winnerImagesCarousel(winners)}
                </Carousel>
            </Fade>

            <h3 className="highlight-heads">The Judges</h3>
            <div className="judge-grid">
                {judgeCards(judges)}
            </div>
            <Carousel className="carousel-judges" showThumbs={false}>
                {judgeCards(judges)}
            </Carousel>

            <h3 className="highlight-heads">Our Sponsors</h3>
            <div className="sponsor-grid">
                <div style={{display: "table-cell", verticalAlign: "middle"}}><img src={process.env.PUBLIC_URL + '/images/voyager.png'} alt=""></img></div>
                <div style={{display: "table-cell", verticalAlign: "middle"}}><img src={process.env.PUBLIC_URL + '/images/nitrexo.png'} alt=""></img></div>
                <div style={{display: "table-cell", verticalAlign: "middle"}}><img src={process.env.PUBLIC_URL + '/images/murmur.png'} alt=""></img></div>
            </div>
            <Carousel className="carousel-sponsor" showThumbs={false}>
                <div style={{display: "table-cell", position: "relative", top: "50px"}}><img src={process.env.PUBLIC_URL + '/images/voyager.png'} alt=""></img></div>
                <div style={{display: "table-cell", position: "relative", top: "80px"}}><img src={process.env.PUBLIC_URL + '/images/nitrexo.png'} alt=""></img></div>
                <div style={{display: "table-cell", verticalAlign: "middle"}}><img src={process.env.PUBLIC_URL + '/images/murmur.png'} alt=""></img></div>
            </Carousel>
        </div>
        {/* Highlights end */}

        {/* FAQ */}
        <div id="faqs" style={{padding: "3.5em 80px", paddingBottom: "0"}}>
            <div className="heading"><span id="heading" style={{fontSize: "60px"}}>FAQs</span></div>
            {faq(questions)}
        </div>
        {/* FAQ ends */}

        {/* Contact Us */}
        <div id="contactus" style={{padding: "3.5em 80px"}}>
            <div className="heading"><span id="heading" style={{fontSize: "60px"}}>Contact us</span></div>
            <div className="contact-grid">
                <div style={{textAlign: "center", position: "relative", top: "30px"}}>
                    <h1>Got a question? Ask away...</h1>
                    <h2>Email us at <a href="mailto:vit.sedsindia@gmail.com" style={{color: "#fd79a8", textDecoration: "none"}}>vit.sedsindia@gmail.com</a></h2>
                    <div style={{fontSize: "40px"}}>OR, you know..</div>
                    <h2>The telephone is a good way to talk to people without having to offer them a drink. <br/>So, Ring us up @</h2>
                    <h2><a href="tel:+919003387780" style={{color: "#fd79a8", textDecoration: "none"}}>+91-9003387780</a> - Aditya Bhartia (Chair - SEDS VIT)</h2>
                    <h2><a href="tel:+918291142445" style={{color: "#fd79a8", textDecoration: "none"}}>+91-8291142445</a> - Ghanishtha Bhatti (Director of Events - SEDS VIT)</h2>
                    <div className="social_icons">
                        <div><a href="https://www.facebook.com/SEDSVIT/?ref=br_rs" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/images/facebook.svg'} alt=""></img></a></div>
                        <div><a href="https://www.instagram.com/sedsvit/?hl=en" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/images/instagram.svg'} alt=""></img></a></div>
                        <div><a href="https://www.linkedin.com/company/students-for-exploration-and-development-of-space/" target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/images/linkedin.svg'} alt=""></img></a></div>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/contact.svg'} alt=""></img>
                </div>
            </div>
        </div>
        {/* Contact Us ends */}
        <div id="footer">
            &copy; ASTRA 2020 - SEDS VIT<br/>Made with &hearts; by <a href="https://www.linkedin.com/in/abhishek-yadav-a56b6385/" rel="noopener noreferrer" target="_blank">Abhishek</a>, <a href="https://www.linkedin.com/in/prakhar-mehta-983494180/" rel="noopener noreferrer" target="_blank">Prakhar</a> and <a href="https://www.linkedin.com/in/shubham-aniket-5766b5178/" rel="noopener noreferrer" target="_blank">Shubham</a>
        </div>
        </div>
    )
}

export default LandingPage;