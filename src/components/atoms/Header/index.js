import React, { useState } from 'react'
import { Grid, SwipeableDrawer, Typography } from '@material-ui/core'
import BurgerMenu from '../../../assets/icons/burger-menu.svg'
import SideMenu from '../SideMenu'

const Header = ({ history, citySelected }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpenMenu(open)
  }

  return (
    <>
      <header>
        <Grid container item xs={12} justify="center" className="header">
          <Grid item className="header__title" onClick={() => history.push('/')}>
            <Typography variant="inherit">{'Weather App'}</Typography>
          </Grid>
          <Grid item className="header__burger-menu">
            <img src={BurgerMenu} alt="menu" onClick={toggleDrawer(true)} />
          </Grid>
        </Grid>
      </header>
      <SwipeableDrawer anchor={'right'} open={openMenu} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
        <SideMenu history={history} citySelected={citySelected} />
      </SwipeableDrawer>
    </>
  )
}

export default Header
