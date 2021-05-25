import React from 'react';
import getEnvVal from '../../service/constants';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    iframe: {
     width : "100%",
     height : "100%"
    },
  });

const LGDashboardArea = () => {
    const classes = useStyles();
    return (
        <iframe className={classes.iframe} src={getEnvVal().api_url + "/dashboard"}
        frameBorder="0"
        ></iframe>
    );
}

export default LGDashboardArea;
