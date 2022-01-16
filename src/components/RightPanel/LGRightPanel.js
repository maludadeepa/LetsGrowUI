import React from 'react';
import LGTopics from './LGTopicsView';
import LGAdminsView from './LGAdminsView';
import { Link  } from 'react-router-dom';
import LGTopicsFollowing from './LGTopicsFollowing';
import './rightPanel.scss'
import { AppContext } from '../../service/LGAppContext';
import { Button } from "@material-ui/core";

const LGRightPanel = () => {
    return (
        <div elevation={3} className="lg-default-right-panel">
            <AppContext.Consumer>
                {([appCtx]) => appCtx.user_session.status && <LGTopicsFollowing/>}
            </AppContext.Consumer>


            <Button variant="contained" color="primary" component={Link}  to="/newpost" className="sidebar-post-button" fullWidth> Add New Post</Button>

            <LGTopics/>
            
        </div>
    );
}

export default LGRightPanel;
