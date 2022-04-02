import React, { useEffect, useState } from 'react'
import Phone from './page4-assets/veme-blockchain-app-developed.png'
import Phone2 from './page4-assets/veme-app-ui-design.png'
import { NavLink } from "react-router-dom"

const Page4 = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#3C887E;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <h2>Page 4</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#3C887E;color:#f7f7f7;" className="progress">
                    <div className={"text animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <p>Text HeadLine</p>
                        <h2>HeadLine</h2>
                        <p>Text HeadLine</p>
                    </div>
                    <div className="circle p4"></div>
                    <div>
                        <NavLink to="/" className="pageBtn active"></NavLink>
                        <NavLink to="/about" className="pageBtn active"></NavLink>
                        <NavLink to="/page3" className="pageBtn active"></NavLink>
                        <NavLink to="/page4" className="pageBtn active"></NavLink>
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
            <div Style="--bg:#BEB2C8;color:#080808;" className="right">
                <img className={"asset10 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
                <img className={"asset11 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone2} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default Page4