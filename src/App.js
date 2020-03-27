import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Intro } from './components/Intro'
import { LogIn } from './components/LogIn'
import { SignUp } from './components/SignUp'
import { WelcomePage } from './components/WelcomePage'

import { Energy } from './components/Energy'
import { SelfConfidence } from 'components/SelfConfidence'
import { Healing } from './components/Healing'
import { CalmDown } from './components/CalmDown'
import { Creativity } from './components/Creativity'

export const App = () => {
  return (
    <BrowserRouter>
      <main>     
        <Switch>
          <Route path="/" exact>
            <Intro/>
          </Route>
          <Route path="/login" exact>
            <LogIn/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/welcome" exact>
            <WelcomePage/>
          </Route>  
          <Route path="/energy" exact>
            <Energy/>
          </Route>
          <Route path="/selfconfidence" exact>
            <SelfConfidence/>
          </Route>
          <Route path="/healing" exact>
            <Healing/>
          </Route>
          <Route path="/calmdown" exact>
            <CalmDown/>
          </Route>
          <Route path="/creativity" exact>
            <Creativity/>
          </Route>
        </Switch>  
      </main>
    </BrowserRouter>
  )
}
