import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/index">
                Início
            </Link>
            <Link to="/card">
                Inserir Cartas
            </Link>
            <Link to="/deck">
                Deck
            </Link>
        </nav>
    </aside>