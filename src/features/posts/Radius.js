import React from 'react';
import map from "../../assets/images/map.png";
import {Grid, Typography, IconButton, InputBase, Slider, Tooltip } 
from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import {useStyles} from "./posts.styles";

function ValueLabelComponent(props) {
    const { children, open, value } = props;
  
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

function Radius() {
    const classes = useStyles();
    return (
        <Grid className={classes.typeOfBusiness}>
            <Typography className={classes.categoryTitle} variant="h4">
               Radius
            </Typography>
            <Typography className={classes.citySearchWrapper}>
                <IconButton className={classes.locationIconButton} aria-label="directions">
                    <LocationOnOutlinedIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="City"
                />
            </Typography>
            <Typography className={classes.locationMap}>
                <img src={map} alt=""/>
            </Typography>
            <Typography className={classes.kmSlider}>
                <Slider
                    ValueLabelComponent={ValueLabelComponent}
                    aria-label="range slider"
                    defaultValue={20}
                />
            </Typography>
        </Grid>
    )
}

export default Radius;
