import React from 'react';
import { Link } from 'react-router-dom';
import LGListView from '../Common/LGListView';
import '../Common/common.scss';
import { Button }  from '@material-ui/core'

const topics = [
    { "text": "Drawing" },
    { "text": "School" },
    { "text": "Kid cooking" },
    { "text": "Games" }
]

const LGTopic = ({ topic }) => {
    return (
        <div className="lg-list-item">
            <div>{topic.text}</div>
            <div><Button variant="outlined" size="small">Follow</Button></div>
            </div>
    )
}

const LGTopics = (prop) => {
    return (
        <div className="lg-right-topics">
            <h4>Topics to Follow</h4>
            <div className="lg-list-itemlist">
                {topics.map((item, index) => <LGTopic topic={item} key={index}></LGTopic>)}
            </div>
            <Link to="/explore"> See more...</Link>
        </div>
    )
}

export default LGTopics;