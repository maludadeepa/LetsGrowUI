import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import LGLeftPanelOption from './LGLeftPanelOption'
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from '@material-ui/icons/BarChart';
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button } from "@material-ui/core";

const LGLeftPanel = () => {
    const history = useHistory();
    return (
        <div className="lg-default-left-panel">
            <div>
            <div onClick={() => history.push("/home")}><LGLeftPanelOption Icon={HomeIcon} text="Home" active={true} /></div>
            <div onClick={() => history.push("/Analytics")}><LGLeftPanelOption Icon={BarChartIcon} text="Analytics" active={true} /></div>
            <div onClick={() => history.push('/explore')}><LGLeftPanelOption Icon={SearchIcon} text="Explore"/></div>
            <div onClick={() => history.push("/notifications")}><LGLeftPanelOption Icon={NotificationsNoneIcon} text="Notifications" /></div>
            <div onClick={() => history.push("/bookmarks")}><LGLeftPanelOption Icon={BookmarkBorderIcon} text="Bookmarks" /></div>
            <div onClick={() => history.push("/profile")}><LGLeftPanelOption Icon={PermIdentityIcon} text="Profile" /></div>
            </div>


            <Button variant="contained" color="primary" component={Link}  to="/newpost" className="sidebar-post-button" fullWidth> Add New Post</Button>

        </div>
    );
}

export default LGLeftPanel;
