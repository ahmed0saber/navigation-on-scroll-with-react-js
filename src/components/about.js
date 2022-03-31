import React, { useEffect, useState } from 'react'
import Nasa from './about-assets/nasa-mobile-app.png'
import Phone from './about-assets/nasa-fitness-tracking-mobile-app.png'
import Phone2 from './about-assets/measure-total-body-weight-through-fitness-app.png'

const About = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#E26D5C;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <h2>About Page</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#E26D5C;color:#f7f7f7;" className="progress">
                    <div className={"animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <p>Powered by advanced</p>
                        <img src={Nasa} alt="nasa"/>
                        <p>algorithms</p>
                    </div>
                </div>
            </div>
            <div Style="--bg:#1F271B;color:#080808;" className="right">
                <img className={"asset6 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
                <img className={"asset7 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone2} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default About