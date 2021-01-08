import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles, CustomCheckbox} from "./posts.styles";
import Radius from './Radius';

function PostCategory() {
    const classes = useStyles();
    return (
        <Grid className={classes.PostCategoryCard}>
            <Radius/>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">Field</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    Marketing & Communication
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Business Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Full-Stack Developmnt</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Backend Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Frontend Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Project Management</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Business Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Customer Service</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Sales</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Analysis</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Data Scientist</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Graphic Design</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    UX/UI Design</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Finance</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Engineering</Typography> 
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    <a>See less</a></Typography>
            </Grid> 
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
                <Typography className={classes.categoryTitle} variant="h4">
                    Compensation</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox color='primary' className={classes.checkbox} /> 
                    Equity
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Salary</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Wage</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox color='primary' className={classes.checkbox} />
                    Commission</Typography>                                    
            </Grid>
        </Grid>
    )
}

export default PostCategory;
