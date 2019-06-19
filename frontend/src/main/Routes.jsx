import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "semantic-ui-css/semantic.min.css";
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import CardCrud from '../components/cards/CardCrud'
import Deck from '../components/deck/Deck'
import CardInfo from '../components/deck/CardInfo'


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Switch>
                <Route path='/index' component={Home} />
                <Route path='/card/:id' component={CardCrud} />
                <Route path='/card' component={CardCrud} />
                <Route path ="/deck/:id" component={CardInfo}/>
                <Route path='/deck' component={Deck} />
                
                <Redirect from='*' to='/index' />
            </Switch>

        </div>
    </BrowserRouter>