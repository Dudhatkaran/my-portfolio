import React from 'react'
import style from './Nevbar.module.css'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Nevbar = () => {
    return (
        <>
            <section>
                <div className={ style.nev }>
                    <div className={ style.img }>
                        <img src={ logo } alt="" />
                    </div>
                    <div className={ style.list }>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/About"><li>About</li></Link>
                            <li>Portfolio</li>
                            <li>blog</li>
                            <Link to="/Contact"><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nevbar