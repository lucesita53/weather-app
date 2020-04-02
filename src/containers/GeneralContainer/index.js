import React from 'react'
import { Grid } from '@material-ui/core'
import Header from '../../components/atoms/Header'
import Footer from '../../components/atoms/Footer'

const GeneralContainer = ({ history, citySelected, children }) => {
  return (
    <>
      <Header history={history} citySelected={citySelected} />
      <Grid container item xs={12} className="general-container">
        {children}
      </Grid>
      <Footer />
    </>
  )
}

export default GeneralContainer
