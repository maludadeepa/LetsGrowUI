import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import { Paper } from '@material-ui/core'
import MapIcon from '@material-ui/icons/Map';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import "./mainPanel.scss";



export default function LGPostView({ post }) {
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

  return (
    <Paper elevation={3} className="post">
      <div className="post-avatar">
        <Avatar src={post.author.avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">

          <div className="post-headerText">
            <h3>
              {post.author.name}{" "}
              <span className="post-headerSpecial">
                {post.author.username}
              </span>
            </h3>
          </div>
          <div className="post-headerDescription">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        </div>
        <img src={post.image} alt="" />
        <div className="post-footer">
          <div className="post-footer-left">
            <ChatBubbleOutline />
          </div>

          <div className="post-footer-right">
            <ScreenShareOutlinedIcon />
            <MapIcon  onClick={() => history.push("/showinmap")} />
            <ImportContactsOutlinedIcon />
            <FavoriteBorder />
          </div>

        </div>
      </div>
    </Paper>
  );
}
