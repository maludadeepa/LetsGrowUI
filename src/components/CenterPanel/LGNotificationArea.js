import React from 'react';

const notifications = [
    {
        "type": "comment",
        "name": "Bhabani"
    },
    {
        "type": "liked",
        "name": "Bhabani"
    },
    {
        "type": "liked",
        "name": "Bhabani"
    }, {
        "type": "followed",
        "name": "Bhabani"
    }
]

const LGNotificationRow = ({item}) => {
    return (
        <div>
            {}
        </div>
    );
}



const LGNotificationArea = () => {
    return (
        <div>
            {notifications.map((item, index) => <LGNotificationRow item={item} key={index}></LGNotificationRow>)}
        </div>
    );
}

export default LGNotificationArea;
