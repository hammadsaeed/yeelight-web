import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '50%',
    height: '40%',
    top: 0,
    left: '2%',
  },
  heading: {
    fontSize: '10vw',
    position: 'relative',
    margin: 0,
    top: '10%',
    left: '10%',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '10vw',
    letterSpacing: '10px',
    color: '#FFFFFF',
  }
});

export const SvgGlow = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <svg width="1600" height="1200" viewBox="0 0 1600 1200">
        <defs>
            <linearGradient id="lg3">
              <stop stopColor='#0034FF' stopOpacity='1' offset="0"/>
              <stop stopColor='#0034FF' stopOpacity='0' offset="1"/>
            </linearGradient>
            <radialGradient  id="lg4" cx="800" cy="600" fx="800" fy="600" r="800" gradientTransform="matrix(1,0,0,0.75,0,150)" gradientUnits="userSpaceOnUse"/>
        </defs>
        <g>
            <rect fill='#0034FF' width="1600" height="1200" x="0" y="0"/>
        </g>
      </svg>
    </div>
  )
}

export default SvgGlow;
