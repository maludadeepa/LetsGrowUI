import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import LGLeftPanelOption from './LGLeftPanelOption'
import Paper from "@material-ui/core/Paper"
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const LGLeftPanel = () => {
    const history = useHistory();
    return (
        <div elevation={3} className="lg-default-left-panel">
            <div>
            <div onClick={() => history.push("/home")}><LGLeftPanelOption Icon={HomeIcon} text="Home" active={true} /></div>
            <div onClick={() => history.push('/explore')}><LGLeftPanelOption Icon={SearchIcon} text="Explore"/></div>
            <div onClick={() => history.push("/notifications")}><LGLeftPanelOption Icon={NotificationsNoneIcon} text="Notifications" /></div>
            {/* <LGLeftPanelOption Icon={MailOutlineIcon} text="Messages" /> */}
            <div onClick={() => history.push("/bookmarks")}><LGLeftPanelOption Icon={BookmarkBorderIcon} text="Bookmarks" /></div>
            {/* <div onClick={() => history.push("/lists")}><LGLeftPanelOption Icon={ListAltIcon} text="Lists" /></div> */}
            <div onClick={() => history.push("/profile")}><LGLeftPanelOption Icon={PermIdentityIcon} text="Profile" /></div>
            {/* <LGLeftPanelOption Icon={MoreHorizIcon} text="More" /> */}
            </div>


            <Button variant="outlined"  component={Link}  to="/newpost" className="sidebar-post-button" fullWidth> Add New Post</Button>

        </div>
    );
}

export default LGLeftPanel;
