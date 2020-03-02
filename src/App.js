import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LogIn } from './components/LogIn'
import { SignUp } from './components/SignUp'
import { WelcomePage } from './components/WelcomePage'
import { WorkOut } from './components/WorkOut'

export const App = () => {
  return (
    <BrowserRouter>
      <main>     
        <Switch>
          <Route path="/" exact>
            <LogIn/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <Route path="/welcome" exact>
            <WelcomePage/>
          </Route>  
          <Route path="/workout" exact>
            <WorkOut/>
          </Route>
        </Switch>  
      </main>
    </BrowserRouter>
  )
}
