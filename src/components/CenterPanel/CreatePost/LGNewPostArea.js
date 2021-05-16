import React, { useState } from 'react';
import { FormControl, TextField, InputLabel , Select , MenuItem} from '@material-ui/core';
import LGCreatePostText from './LGCreatePostText';
import './createpost.scss'

const LGNewPostArea = () => {

    const [topic, setTopic] = React.useState('');
    const [textContent, setTextContent] = useState('');

    const handleChange = (event) => {
        setTopic(event.target.value);
      };

    return (
        <form className="lg-create-post" onSubmit="">

            <InputLabel htmlFor="my-input">Create New Post</InputLabel>

            <TextField
                id="filled-full-width"
                label="Post Title"
                placeholder="Placeholder"
                helperText="Please create posts relevant to kids."
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
            />


            <FormControl variant="filled" className="lg-create-post-topic">
                <InputLabel id="demo-simple-select-label2">Topic</InputLabel>
                <Select labelId="demo-simple-select-label2" id="demo-simple-select2"
                    value={topic}
                    onChange={handleChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="filled" className="lg-create-post-agegrp">
                
                <InputLabel id="demo-simple-select-label1">Age Group</InputLabel>
                <Select labelId="demo-simple-select-label1" id="demo-simple-select1"
                    value={topic}
                    onChange={handleChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <LGCreatePostText content={textContent} setContent={setTextContent}></LGCreatePostText>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LGNewPostArea;
