import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core'
import GeneralContainer from '../../../containers/GeneralContainer'
import cities from '../../../utils/constants'
import Actions from '../../../actions'
import {} from 'react'
import callOpenWeather from '../../../utils/helper'

const Home = ({ history }) => {
  const dispatch = useDispatch()
  const setWeatherCities = info => dispatch(Actions.Weather.setWeatherCities(info))

  useEffect(() => {
    cities.forEach(city =>
      callOpenWeather(city).then(data => {
        let cityInfo = {}
        cityInfo[city] = data
        setWeatherCities(cityInfo)
      })
    )
  }, [])

  return (
    <GeneralContainer history={history}>
      <Grid item container xs={12}>
        <button type="button" onClick={() => history.push('/weather/corrientes')}>
          search
        </button>
      </Grid>
    </GeneralContainer>
  )
}

export default Home
