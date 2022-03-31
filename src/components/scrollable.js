import React, { useEffect } from 'react'
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [true])

    const handleScroll = () => {
        window.removeEventListener('scroll', handleScroll)
        let screenHeight = window.innerHeight
        if (document.documentElement.scrollTop > 6*screenHeight) {
            navigate("/page7")
        } else if (document.documentElement.scrollTop > 5*screenHeight) {
            navigate("/page6")
        } else if (document.documentElement.scrollTop > 4*screenHeight) {
            navigate("/page5")
        } else if (document.documentElement.scrollTop > 3*screenHeight) {
            navigate("/page4")
        } else if (document.documentElement.scrollTop > 2*screenHeight) {
            navigate("/page3")
        } else if (document.documentElement.scrollTop > screenHeight) {
            navigate("/about")
        } else {
            navigate("/")
        }
        setTimeout(() => {
            window.addEventListener('scroll', handleScroll)
        }, 100)
    }

    return (
        <div className="total-height">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/page3" element={<Page3/>} />
                <Route path="/page4" element={<Page4/>} />
                <Route path="/page5" element={<Page5/>} />
                <Route path="/page6" element={<Page6/>} />
                <Route path="/page7" element={<Page7/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </div>
    )
}

export default Scrollable