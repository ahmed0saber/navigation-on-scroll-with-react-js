import React, { useEffect, useState } from 'react'
import Phone from './page5-assets/developers-for-social-media-app.png'
import Phone2 from './page5-assets/karavan-social-networking-app-screen.png'
import Phone3 from './page5-assets/karavan-social-networking-app-screen-2.png'
import Phone4 from './page5-assets/karavan_2.png'
import Phone5 from './page5-assets/social-networking-app-case-study.png'

const Page5 = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#542344;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <h2>Page 5</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#542344;color:#f7f7f7;" className="progress">
                    <div className={"animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <p>Text HeadLine</p>
                        <h2>HeadLine</h2>
                        <p>Text HeadLine</p>
                    </div>
                </div>
            </div>
            <div Style="--bg:#F7A9A8;color:#080808;" className="right">
                <img className={"asset12 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
                <img className={"asset13 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone2} alt="animated-asset"/>
                <img className={"asset14 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone3} alt="animated-asset"/>
                <img className={"asset15 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone4} alt="animated-asset"/>
                <img className={"asset16 animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutUp")} src={Phone5} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default Page5