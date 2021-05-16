import React from 'react';
import { Link } from 'react-router-dom';
import LGListView from '../Common/LGListView';

const admins = [
    { "text": "Lony" },
    { "text": "Savita" }
]


const LGAdminsView = () => {
    return (
        <div className="lg-right-admins">
            <h4>Site Admins</h4>
            <LGListView items={admins} ></LGListView>
            <Link to='/admins'>Meet All..</Link>
        </div>
    );
}

export default LGAdminsView;
