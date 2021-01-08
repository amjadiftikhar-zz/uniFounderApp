import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles, CustomCheckbox} from "./startupsPage.styles";
import Radius from '../../posts/Radius';

function StartUpsCategory() {
    const classes = useStyles();
    return (
        <Grid className={classes.startupCategoryCard}>
            <Radius/>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">
                    Industory</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    Technology
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Transport</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Agriculture</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Education</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Healthcare</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Food</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    News & Media</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Arts & Design</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    <a>See less</a></Typography> 
            </Grid>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">Company Size</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    1 - 10
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    11 - 20
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    21 - 30
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    31 - 50
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    51 - 100
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                   101 - 200
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    200+
                </Typography>
            </Grid>             
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">
                    Stage
                </Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    Idea
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Prototype
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Launch
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Scale
                </Typography>                                    
            </Grid>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">
                    Funding
                </Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    Not looking for funding
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Looking for funding
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Funded
                </Typography>                               
            </Grid>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">
                    Impact Startup
                </Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    Yes
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    No
                </Typography>                               
            </Grid>
        </Grid>
    )
}

export default StartUpsCategory;
