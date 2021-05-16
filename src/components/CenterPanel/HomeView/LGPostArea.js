import React from 'react';
import postData from '../../../service/postData';
import LGPostView from './LGPostView';

const LGPostArea = () => {
    return (
        <div>
            {postData.map((post, index) => <LGPostView key={index} post={post}></LGPostView>)}
        </div>
    );
}

export default LGPostArea;
