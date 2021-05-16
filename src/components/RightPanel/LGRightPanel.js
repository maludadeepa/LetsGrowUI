import React from 'react';
import Paper from "@material-ui/core/Paper";
import LGTopics from './LGTopicsView';
import LGAdminsView from './LGAdminsView';

import './rightPanel.scss'



const LGRightPanel = () => {
    return (
        <div elevation={3} className="lg-default-right-panel">
            <LGTopics/>
            <LGAdminsView/>
        </div>
    );
}

export default LGRightPanel;
