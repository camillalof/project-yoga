import React, { useState } from 'react'
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
  const [accessToken, setAccessToken] = useState()
  return (
    <BrowserRouter>
      <main>     
        <Switch>
          <Route path="/" exact>
            <Intro/>
          </Route>
          <Route path="/login" exact>
            <LogIn onAuthenticate={setAccessToken}/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/welcome" exact>
            <WelcomePage accessToken={accessToken}/>
          </Route>  
          <Route path="/energy" exact>
            <Energy accessToken={accessToken}/>
          </Route>
          <Route path="/selfconfidence" exact>
            <SelfConfidence accessToken={accessToken}/>
          </Route>
          <Route path="/healing" exact>
            <Healing accessToken={accessToken}/>
          </Route>
          <Route path="/calmdown" exact>
            <CalmDown accessToken={accessToken}/>
          </Route>
          <Route path="/creativity" exact>
            <Creativity accessToken={accessToken}/>
          </Route>
        </Switch>  
      </main>
    </BrowserRouter>
  )
}
