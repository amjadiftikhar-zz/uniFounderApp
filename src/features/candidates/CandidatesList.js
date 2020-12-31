import React from 'react'; 
import {Grid, Typography} from "@material-ui/core";
import manager from "../../assets/images/manager.png";
import {useStyles} from "./candidates.styles";
import Candidate from "./Candidate";

const jobsObj = [ { candidateTitle:'Manager', designationImage: manager }, 
    { candidateTitle:'Project Manager', designationImage: manager }, 
    { candidateTitle:'Sale Associate', designationImage: manager }, 
    { candidateTitle:'Web Developer', designationImage: manager }, 
    { candidateTitle:'Copywriter', designationImage: manager }, 
    { candidateTitle:'Operations Manager', designationImage: manager }, 
    { candidateTitle:'Video Editor', designationImage: manager }, 
    { candidateTitle:'Graphic Designer', designationImage: manager }
]

function CandidatesList() {
    const classes = useStyles();
    return (
        <Grid className={classes.candidateSection}>
            <Typography className={classes.sectionHeader}>
                <h2 className={classes.headerContents}>What are you looking for?</h2>
                <p className={classes.headerContents} style = {{fontSize:'16px'}}>
                    Browse through the most popular categories of job titles.</p>                               
            </Typography>
            <Grid className={classes.candidatesContainer}>
                {
                    jobsObj.map(j => {
                        return (
                            <Candidate candidateTitle={j.candidateTitle} 
                                designationImage={j.designationImage}
                            />
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default CandidatesList
