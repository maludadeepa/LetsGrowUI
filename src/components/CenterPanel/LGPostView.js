import React from 'react';
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import "./mainPanel.scss";



export default function LGPostView({ post }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={post.author.avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {post.author.displayName}{" "}
              <span className="post__headerSpecial">
                {post.author.username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{post.text}</p>
          </div>
        </div>
        <img src={post.image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}
