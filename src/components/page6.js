import React, { useEffect, useState } from 'react'
import Phone from './page6-assets/erp-app-development-service.png'

const Page6 = (props) => {
    const [animation, setAnimation] = useState(props.animation)

    useEffect(() => {
        setAnimation(props.animation)
    }, [props])

    return (
        <div Style={"height:" + window.innerHeight + "px"} className="page">
            <div Style="--bg:#143109;color:#f7f7f7;" className="left">
                <div className={"info animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <h2>Page 6</h2>
                    <p>Hello, Welcome To My Simple Website.</p>
                </div>
                <div className={"foot animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                    <p>View Case Study</p>
                    <p className="skip">SKIP</p>
                </div>
                <div Style="--bg:#143109;color:#f7f7f7;" className="progress">
                    <div className={"animate__animated " + (animation ? "animate__fadeInDown" : "animate__fadeOutDown")}>
                        <p>Text HeadLine</p>
                        <h2>HeadLine</h2>
                        <p>Text HeadLine</p>
                    </div>
                </div>
            </div>
            <div Style="--bg:#EBF5EE;color:#080808;" className="right">
                <img className={"asset17 animate__animated " + (animation ? "animate__fadeInUp" : "animate__fadeOutDown")} src={Phone} alt="animated-asset"/>
            </div>
        </div>
    )
}

export default Page6