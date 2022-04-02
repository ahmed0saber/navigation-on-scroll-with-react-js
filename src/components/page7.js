import React, { useEffect, useState } from 'react'
import Phone from './page7-assets/melltoo-img2.png'
import Phone2 from './page7-assets/melltoo-img1.png'
import Badge from './page7-assets/mobile-app-of-the-year-by-entrepreneur.png'
import { NavLink } from "react-router-dom"

const Page7 = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#082D0F;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <img Style="width:260px;margin-bottom:20px;" src={Badge} alt="badge"/>
                    <h2>Page 7</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#082D0F;color:#f7f7f7;" className="progress">
                    <div className={"text animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <p>Text HeadLine</p>
                        <h2>HeadLine</h2>
                        <p>Text HeadLine</p>
                    </div>
                    <div className="circle p7"></div>
                    <div>
                        <NavLink to="/" className="pageBtn active"></NavLink>
                        <NavLink to="/about" className="pageBtn active"></NavLink>
                        <NavLink to="/page3" className="pageBtn active"></NavLink>
                        <NavLink to="/page4" className="pageBtn active"></NavLink>
                        <NavLink to="/page5" className="pageBtn active"></NavLink>
                        <NavLink to="/page6" className="pageBtn active"></NavLink>
                        <NavLink to="/page7" className="pageBtn active"></NavLink>
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
            <div Style="--bg:#70AE6E;color:#080808;" className="right">
                <img className={"asset18 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
                <img className={"asset19 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone2} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default Page7