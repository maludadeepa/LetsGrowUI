import React from 'react';
import LGTopics from './LGTopicsView';
import LGAdminsView from './LGAdminsView';
import LGTopicsFollowing from './LGTopicsFollowing';
import './rightPanel.scss'



const LGRightPanel = () => {
    return (
        <div elevation={3} className="lg-default-right-panel">
            <LGTopicsFollowing/>
            <LGTopics/>
            <LGAdminsView/>
        </div>
    );
}

export default LGRightPanel;
