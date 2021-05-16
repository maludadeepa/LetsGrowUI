import React from 'react';
import postData from '../../service/postData';
import LGPostView from './HomeView/LGPostView';

const LGBookMarkArea = () => {
    return (
        <div>
            <h4>
                Here are the information your have book marked
            </h4>
            {postData.map((post, index) => <LGPostView key={index} post={post}></LGPostView>)}
        </div>
    );
}

export default LGBookMarkArea;
