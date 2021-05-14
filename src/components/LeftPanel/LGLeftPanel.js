import React from 'react';
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
    return (
        <Paper elevation={3} className="lg-default-left-panel">
            <LGLeftPanelOption Icon={HomeIcon} text="Home" active={true} />
            <LGLeftPanelOption Icon={SearchIcon} text="Explore" />
            <LGLeftPanelOption Icon={NotificationsNoneIcon} text="Notifications" />
            <LGLeftPanelOption Icon={MailOutlineIcon} text="Messages" />
            <LGLeftPanelOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <LGLeftPanelOption Icon={ListAltIcon} text="Lists" />
            <LGLeftPanelOption Icon={PermIdentityIcon} text="Profile" />
            <LGLeftPanelOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="" fullWidth> Add New Post</Button>
        </Paper>
    );
}

export default LGLeftPanel;
