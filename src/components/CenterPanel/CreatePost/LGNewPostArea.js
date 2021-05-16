import React, { useState } from 'react';
import { FormControl, TextField, InputLabel } from '@material-ui/core';
import LGCreatePostText from './LGCreatePostText';

const LGNewPostArea = () => {

    const [textContent, setTextContent] = useState('');
    return (
        <form onSubmit="">
            <InputLabel htmlFor="my-input">Create New Post</InputLabel>
            <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
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
            <LGCreatePostText content={textContent} setContent={setTextContent}></LGCreatePostText>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LGNewPostArea;
