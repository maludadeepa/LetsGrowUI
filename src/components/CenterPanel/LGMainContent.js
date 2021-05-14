import React from 'react';
import Paper from "@material-ui/core/Paper"
import LGPostArea from './LGPostArea';

const LGMainContent = () => {
    return (
        <Paper elevation={3} className="lg-default-main-container">
            <LGPostArea></LGPostArea>
        </Paper>
    );
}

export default LGMainContent;