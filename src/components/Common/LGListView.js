/* eslint-disable react/prop-types */
import React from 'react';
import './common.scss';

export const LGListItem = ({item}) => {
    return (
        <div className="lg-list-item">
           {item.text}
        </div>
    );
}

export const LGListView = ({items}) => {
    return (
        <div className="lg-list-itemlist">
            {items.map((item , index)=><LGListItem item={item} key={index}></LGListItem>)}
        </div>
    );
}

export default LGListView;
