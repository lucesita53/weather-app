import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import GeneralContainer from '../../../containers/GeneralContainer'

const Weather = ({ history, match }) => {
  const infoCities = useSelector(state => state.Weather)

  if (!infoCities[match.params.city]) {
    history.push('/')
  }
  return (
    <GeneralContainer history={history} citySelected={match.params.city}>
      <Grid item container xs={12}>
        <div>Como esta el clima en {match.params.city}?</div>
        <pre>{JSON.stringify(infoCities[match.params.city], null, 2)}</pre>
      </Grid>
    </GeneralContainer>
  )
}

export default Weather
