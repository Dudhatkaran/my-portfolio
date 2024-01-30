import React from 'react'
import style from './Home.module.css'
import photo from '../image/my photo.jpg'
import Nevbar from '../Nevbar/Nevbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Nevbar />
            <section>
                <div className={ style.home }>
                    <div className={ style.photo }>
                        <img src={ photo } alt="" />
                    </div>
                    <div className={ style.name }>
                        <h1>I'M FREELANCER</h1>
                        <p>Designer, Developer, Freelancer, Photographer</p>
                        <i class='bx bxl-facebook-circle'></i>
                        <i class='bx bxl-instagram-alt'></i>
                        <i class='bx bxl-linkedin-square'></i>
                        <i class='bx bxl-twitter'></i>
                    </div>
                </div>
            </section>
            <p>sdgvhg</p>
            <div data-aos="zoom-out"><h1>hello</h1></div>
            <div animation="fade-right"><h1>hello</h1></div>

        </>
    )
}

export default Home