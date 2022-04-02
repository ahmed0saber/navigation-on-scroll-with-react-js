import React, { useEffect, useState } from 'react'
import PizzaBox from './home-assets/pizza_box.png'
import Bread from './home-assets/dominos-bread.png'
import Bread2 from './home-assets/dominos-bread1.png'
import Phone from './home-assets/domi-img1.png'
import Phone2 from './home-assets/ux-strategy-for-mobile-app-devlopment.png'
import { NavLink } from "react-router-dom"

const Home = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#4C4C7D;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <h2>Home Page</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#4C4C7D;color:#f7f7f7;" className="progress">
                    <div className={"text animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <p>Redefining</p>
                        <h2>UX Strategy</h2>
                        <p>and UI Design</p>
                    </div>
                    <div className="circle p1"></div>
                    <div>
                        <NavLink to="/" className="pageBtn active"></NavLink>
                        <NavLink to="/about" className="pageBtn"></NavLink>
                        <NavLink to="/page3" className="pageBtn"></NavLink>
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
            <div Style="--bg:#1F273B;color:#080808;" className="right">
                <img className={"asset1 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={PizzaBox} alt="animated-asset"/>
                <img className={"asset2 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Bread} alt="animated-asset"/>
                <img className={"asset3 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Bread2} alt="animated-asset"/>
                <img className={"asset4 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
                <img className={"asset5 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone2} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default Home