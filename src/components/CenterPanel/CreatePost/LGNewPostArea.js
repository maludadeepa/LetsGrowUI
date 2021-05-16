import React ,{useState} from 'react';
import { TextField } from '@material-ui/core';
import LGCreatePostText from './LGCreatePostText';

const LGNewPostArea = () => {

    const [textContent, setTextContent] = useState('');
    return (
        <form onSubmit="">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <LGCreatePostText content={textContent} setContent={setTextContent}></LGCreatePostText>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LGNewPostArea;
