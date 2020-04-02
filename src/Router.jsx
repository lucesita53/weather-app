import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./components/pages/Home'))
const Weather = React.lazy(() => import('./components/pages/Weather'))

const Router = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weather/:city" component={Weather} />
      </Switch>
    </main>
  )
}

export default Router
