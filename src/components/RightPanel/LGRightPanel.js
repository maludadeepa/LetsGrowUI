import React from 'react';
import LGTopics from './LGTopicsView';
import LGAdminsView from './LGAdminsView';
import LGTopicsFollowing from './LGTopicsFollowing';
import './rightPanel.scss'
import { AppContext } from '../../service/LGAppContext';


const LGRightPanel = () => {
    return (
        <div elevation={3} className="lg-default-right-panel">
            <AppContext.Consumer>
                {([appCtx]) => appCtx.user_session.status && <LGTopicsFollowing/>}
            </AppContext.Consumer>
            <LGTopics/>
            <LGAdminsView/>
            
        </div>
    );
}

export default LGRightPanel;
