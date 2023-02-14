import React from 'react'
import style from './About.module.css'
import img1 from '../image/self.jpg'
import photo1 from '../image/ui.svg'
import photo2 from '../image/brand equity.png'
import photo3 from '../image/web.svg'
import photo4 from '../image/ANALYTICS.png'
import photo5 from '../image/photographer.jpg'
import photo6 from '../image/mobile app.png'
import Nevbar from '../Nevbar/Nevbar'

const About = () => {
    return (
        <>
            <Nevbar />
            <section className={ style.section }>
                <div className={ style.about }>
                    <div className={ style.photo }>
                        <div className={ style.border }>
                        </div>
                        <div className={ style.img }>
                            <img src={ img1 } alt="" />
                        </div>
                    </div>
                    <div className={ style.data }>
                        <p> <b> im a Full stack Developer austin based who loves clean, <br /> simple  & unique design. i also enjoy crafting brand <br /> identities,  icons, & ilustration work.</b></p>
                        <h5>To an English person, it will seem like simplified English, as a skeptical <br /> Cambridge friend of mine told me what Occidental is. The European <br /> languages are members of the same family.English person.</h5>
                    </div>
                </div>
                <div className={ style.program1 }>
                    <div className={ style.work1 }>
                        <img src={ photo1 } alt="" />
                        <p>UI/UX DESIGN</p>
                        <p>to an english person,it will seem like <br /> simplified english, told me what</p>
                    </div>
                    <div className={ style.work1 }>
                        <img src={ photo2 } alt="" />
                        <p>BRAND IDENTITY</p>
                        <p>to an english person,it will seem like <br /> simplified english, told me what</p>
                    </div>
                    <div className={ style.work1 }>
                        <img src={ photo3 } alt="" />
                        <p>WEB DESIGNING</p>
                        <p>to an english person,it will seem like <br /> simplified english, told me what</p>
                    </div>
                </div>
                <div className={ style.program2 }>
                    <div className={ style.work2 }>
                        <img src={ photo4 } alt="" />
                        <p>ANALYTICS</p>
                        <p>to an english person,it will seem like <br /> simplified english, told me what</p>
                    </div>
                    <div className={ style.work2 }>
                        <img src={ photo5 } alt="" />
                        <p>PHOTOGRAPHY</p>
                        <p>to an english person,it will seem like <br /> simplified english, told me what</p>
                    </div>
                    <div className={ style.work1 }>
                        <img src={ photo6 } alt="" />
                        <p>MOBILE APPS</p>
                        <p>to an english person,it will seem like <br /> simplified english, told me what</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
