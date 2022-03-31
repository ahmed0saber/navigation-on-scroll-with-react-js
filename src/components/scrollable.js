import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Page3 from "./page3"
import Page4 from "./page4"
import Page5 from "./page5"
import Page6 from "./page6"
import Page7 from "./page7"
import NoPage from "./nopage"

const Scrollable = () => {
    let navigate = useNavigate()
    const [animation, setAnimation] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [true])

    const handleScroll = () => {
        window.removeEventListener('scroll', handleScroll)
        let screenHeight = window.innerHeight
        if (document.documentElement.scrollTop <= 7*screenHeight && document.documentElement.scrollTop > 6*screenHeight && window.location.pathname!=="/page7"){
            setAnimation(false)
            setTimeout(() => {
                navigate("/page7")
                setAnimation(true)
            }, 180)
        } else if (document.documentElement.scrollTop <= 6*screenHeight && document.documentElement.scrollTop > 5*screenHeight && window.location.pathname!=="/page6") {
            setAnimation(false)
            setTimeout(() => {
                navigate("/page6")
                setAnimation(true)
            }, 180)
        } else if (document.documentElement.scrollTop <= 5*screenHeight && document.documentElement.scrollTop > 4*screenHeight && window.location.pathname!=="/page5") {
            setAnimation(false)
            setTimeout(() => {
                navigate("/page5")
                setAnimation(true)
            }, 180)
        } else if (document.documentElement.scrollTop <= 4*screenHeight && document.documentElement.scrollTop > 3*screenHeight && window.location.pathname!=="/page4") {
            setAnimation(false)
            setTimeout(() => {
                navigate("/page4")
                setAnimation(true)
            }, 180)
        } else if (document.documentElement.scrollTop <= 3*screenHeight && document.documentElement.scrollTop > 2*screenHeight && window.location.pathname!=="/page3") {
            setAnimation(false)
            setTimeout(() => {
                navigate("/page3")
                setAnimation(true)
            }, 180)
        } else if (document.documentElement.scrollTop <= 2*screenHeight && document.documentElement.scrollTop > screenHeight && window.location.pathname!=="/about") {
            setAnimation(false)
            setTimeout(() => {
                navigate("/about")
                setAnimation(true)
            }, 180)
        } else if(document.documentElement.scrollTop <= screenHeight && window.location.pathname!=="/") {
            setAnimation(false)
            setTimeout(() => {
                navigate("/")
                setAnimation(true)
            }, 180)
        }

        setTimeout(() => {
            window.addEventListener('scroll', handleScroll)
        }, 200)
    }

    return (
        <div Style={"height:" + 8*window.innerHeight + "px"} className="total-height">
            <Routes>
                <Route path="/" element={<Home animation={animation}/>} />
                <Route path="/about" element={<About animation={animation}/>} />
                <Route path="/page3" element={<Page3 animation={animation}/>} />
                <Route path="/page4" element={<Page4 animation={animation}/>} />
                <Route path="/page5" element={<Page5 animation={animation}/>} />
                <Route path="/page6" element={<Page6 animation={animation}/>} />
                <Route path="/page7" element={<Page7 animation={animation}/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </div>
    )
}

export default Scrollable