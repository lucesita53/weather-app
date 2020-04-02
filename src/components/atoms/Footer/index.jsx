import React from 'react'
import { Grid } from '@material-ui/core'
import OpenWeatherImage from '../../../assets/images/OpenWeatherImage.png'
import Facebook from '../../../assets/icons/social-fb.png'
import Instagram from '../../../assets/icons/social-ig.png'
import LinkedIn from '../../../assets/icons/social-ln.jpg'

const Footer = () => {
  return (
    <footer>
      <Grid container item xs={12} justify="space-between" className="footer">
        <Grid item container xs={8} className="footer__social">
          <a href="https://www.facebook.com/groups/openweathermap/" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/openweathermap/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/openweathermap" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </Grid>
        <Grid item container xs={4} justify="flex-end" className="footer__image">
          <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
            <img src={OpenWeatherImage} alt="Open Weather" />
          </a>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
