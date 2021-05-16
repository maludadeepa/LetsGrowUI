import React from 'react';
import {Switch , Route } from 'react-router-dom';
import LGPostArea from './HomeView/LGPostArea';
import LGProfileArea from './LGProfileArea';
import LGNewPostArea  from './CreatePost/LGNewPostArea';
import LGBookMarkArea from './LGBookMarkArea';
import LGNotificationArea from './LGNotificationArea';
import LGMapArea from './LGMapArea';
import LGExploreArea from './LGExploreArea';
import LGAdminsArea from './LGAdminsArea';

const LGMainContent = () => {
    return (
        <div className="lg-default-main-container">
            <Switch>
                <Route exact path="/profile" component={LGProfileArea}/>
                <Route exact path="/Notifications" component={LGNotificationArea}/>
                <Route exact path="/bookmarks" component={LGBookMarkArea}/>
                <Route exact path="/newpost" component={LGNewPostArea}/>
                <Route exact path="/showinmap" component={LGMapArea}/>
                <Route exact path="/explore" component={LGExploreArea}/>
                <Route exact path="/admins" component={LGAdminsArea}/>
                <Route exact path="/home" component={LGPostArea}/>
                <Route component={LGPostArea}/>
            </Switch>
        </div>
    );
}

export default LGMainContent;