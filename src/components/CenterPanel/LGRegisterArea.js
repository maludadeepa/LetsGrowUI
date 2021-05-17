import React from 'react';
import { FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const LGRegisterArea = () => {
    return (
        <form className="lg-create-post" onSubmit="">

            <h4>Register</h4>

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
                    value="test"
                    onChange={()=>console.log("test")}>
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <div className="lg-create-post-submit">
                <Button style={{float: "right"}}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                >Save</Button>
            </div>
        </form>
    );
}

export default LGRegisterArea;
