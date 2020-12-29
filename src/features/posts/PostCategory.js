import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {useStyles, CustomCheckbox} from "./posts.styles";

function PostCategory() {
    const classes = useStyles();
    return (
        <Grid className={classes.PostCategoryCard}>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">Field</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox className={classes.checkbox} /> 
                    Marketing & Communication
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Business Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Full-Stack Developmnt</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Backend Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Frontend Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Project Management</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Business Development</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Customer Service</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Sales</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Analysis</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Data Scientist</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Graphic Design</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    UX/UI Design</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Finance</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Engineering</Typography> 
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    <a>See less</a></Typography>
            </Grid> 
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">
                    Industory</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox className={classes.checkbox} /> 
                    Technology
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Transport</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Agriculture</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Education</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Healthcare</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Food</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    News & Media</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Arts & Design</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    <a>See less</a></Typography> 
            </Grid>
            <Grid className={classes.typeOfBusiness}>
                <Typography className={classes.categoryTitle} variant="h4">
                    Compensation</Typography>
                <Typography className={classes.element}> 
                    <CustomCheckbox className={classes.checkbox} /> 
                    Equity
                </Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Salary</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Wage</Typography>
                <Typography className={classes.element}>
                    <CustomCheckbox className={classes.checkbox} />
                    Commission</Typography>                                    
            </Grid>
        </Grid>
    )
}

export default PostCategory;
