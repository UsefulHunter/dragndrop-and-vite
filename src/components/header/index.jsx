import React from 'react'
import './index.css'

const Header = () => 
(
    <header className="header">
        <h1 className="header__title">Motivadores</h1>
        <div className="header__info-container">
            <div className="header__info-side">
            <span></span>&#8592;{" - Importante"}
            </div>
            <div className="header__info-middle">
                Meus Motivadores
            </div>
            <div className="header__info-side">
             <span>{"+ Importante "}&#8594;</span>
            </div>
        </div>
    </header>
)

export default Header