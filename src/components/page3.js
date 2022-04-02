import React, { useEffect, useState } from 'react'
import Phone from './page3-assets/nexgtv-entertainment-mobile-app-development.png'
import Phone2 from './page3-assets/nexgtv-mobile-app-ui-design.png'
import Badge from './page3-assets/world-communication-awards-for-best-digital-experience.png'
import { NavLink } from "react-router-dom"

const Page3 = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#7E3F8F;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <img Style="width:280px;margin-bottom:20px;" src={Badge} alt="badge"/>
                    <h2>Page 3</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#7E3F8F;color:#f7f7f7;" className="progress">
                    <div className={"text animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <h2>25M+ Downloads</h2>
                        <p>on appstore & google playstore</p>
                    </div>
                    <div className="circle p3"></div>
                    <div>
                        <NavLink to="/" className="pageBtn active"></NavLink>
                        <NavLink to="/about" className="pageBtn active"></NavLink>
                        <NavLink to="/page3" className="pageBtn active"></NavLink>
                        <NavLink to="/page4" className="pageBtn"></NavLink>
                        <NavLink to="/page5" className="pageBtn"></NavLink>
                        <NavLink to="/page6" className="pageBtn"></NavLink>
                        <NavLink to="/page7" className="pageBtn"></NavLink>
                    </div>
                </div>
                <div className="mobile-nav">
                    <NavLink to="/" className=""></NavLink>
                    <NavLink to="/about" className=""></NavLink>
                    <NavLink to="/page3" className=""></NavLink>
                    <NavLink to="/page4" className=""></NavLink>
                    <NavLink to="/page5" className=""></NavLink>
                    <NavLink to="/page6" className=""></NavLink>
                    <NavLink to="/page7" className=""></NavLink>
                </div>
            </div>
            <div Style="--bg:#D7D6D6;color:#080808;" className="right">
                <img className={"asset8 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
                <img className={"asset9 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone2} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default Page3