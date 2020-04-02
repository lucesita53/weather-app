/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import { Grid, Divider, List, ListItem } from '@material-ui/core'
import cities from '../../../utils/constants'

const SideMenu = ({ history, citySelected }) => {
  useEffect(() => {
    if (!cities.includes(citySelected)) {
      history.push('/')
    }
  }, [citySelected])

  return (
    <Fragment>
      <Grid container className="side-menu-container">
        <Grid container item justify="center" alignContent="center" className="side-menu">
          <Grid container className="side-menu__list">
            <List>
              <ListItem>
                <button
                  type="button"
                  className={`side-menu-button${history.location.pathname === '/' ? '__selected' : ''}`}
                  onClick={() => history.push('/')}>
                  {'Home'}
                </button>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} className="how-works__items__divider">
            <Divider />
          </Grid>

          <Grid container justify="flex-end" className="side-menu__list">
            <List>
              {cities.map(city => (
                <ListItem key={city}>
                  <button
                    type="button"
                    className={`side-menu-button${city === citySelected ? '__selected' : ''}`}
                    onClick={() => {
                      history.push(`/weather/${city}`)
                    }}>
                    {city}
                  </button>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default SideMenu
