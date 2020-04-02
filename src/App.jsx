import React, { Fragment, Suspense, useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Router from './Router'
import store from './store'
import Loader from './components/atoms/Loader'

const App = () => {
  useEffect(() => {
    store.dispatch({ type: 'INIT_APP_STATE' })
  }, [])

  return (
    <Provider store={store}>
      <Suspense fallback={<Loader loading />}>
        <BrowserRouter basename="/">
          <Fragment>
            <Helmet>
              <title>{'Weather App'}</title>
            </Helmet>
            <Router />
          </Fragment>
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}

export default App
