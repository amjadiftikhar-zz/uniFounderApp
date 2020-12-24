import React from 'react'; 
import {Grid, Typography} from "@material-ui/core";
import manager from "../../assets/images/manager.png";
import {useStyles} from "./jobs.styles";
import Job from "./Job";

const jobsObj = [ { jobTitle:'Manager', designationImage: manager }, 
    { jobTitle:'Project Manager', designationImage: manager }, 
    { jobTitle:'Sale Associate', designationImage: manager }, 
    { jobTitle:'Web Developer', designationImage: manager }, 
    { jobTitle:'Copywriter', designationImage: manager }, 
    { jobTitle:'Operations Manager', designationImage: manager }, 
    { jobTitle:'Video Editor', designationImage: manager }, 
    { jobTitle:'Graphic Designer', designationImage: manager }
]

function JobsList() {
    const classes = useStyles();
    return (
        <Grid className={classes.jobSection}>
            <Typography className={classes.sectionHeader}>
                <h2 className={classes.headerContents}>What are you looking for?</h2>
                <p className={classes.headerContents} style = {{fontSize:'16px'}}>
                    Browse through the most popular categories of job titles.</p>                               
            </Typography>
            <Grid className={classes.jobsContainer}>
                {
                    jobsObj.map(j => {
                        return (
                            <Job jobTitle={j.jobTitle} 
                                designationImage={j.designationImage}
                            />
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default JobsList
