import React  from 'react';
import { Link } from 'react-router-dom';
import { Button }  from '@material-ui/core';

const topics = [
    { "text": "Drawing" },
    { "text": "Games" }
]

export const LGTopic = ({ topic }) => {
    return (
        <div className="lg-list-item">
            <div>{topic.text}</div>
            <div><Button variant="outlined" size="small">UnFollow</Button></div>
            </div>
    )
}

const LGTopicsFollowing = () => {
    return (
        <div className="lg-right-topics">
            <h4>Topics Following</h4>
            <div className="lg-list-itemlist">
                {topics.map((item, index) => <LGTopic topic={item} key={index}></LGTopic>)}
            </div>
            <Link to="/explore"> See more...</Link>
        </div>
    );
}

export default LGTopicsFollowing;
