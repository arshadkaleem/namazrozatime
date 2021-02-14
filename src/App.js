import React from 'react'

import Header from './components/header';
import Footer from './components/footer'

import {  Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage';
import NamazTiming from './pages/namaztiming';
import IslamicCalender from './pages/islamiccalender';



function App() {
  return (
    <div className="App">
        <Header/>
       <Switch>
       <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/namaztiming">
          <NamazTiming/>
        </Route>
        <Route path="/islamiccalender">
          <IslamicCalender/>
        </Route>
       </Switch>
        

        



        <Footer/>
    </div>
  );
}

export default App;
