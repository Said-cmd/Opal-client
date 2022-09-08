import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddTransaction() {
    const [value, setValue] = useState(null);
    return(
        <Container>
           <Typography
           variant="h6"
           component="h2"
           gutterBottom
           color="text.secondary"
           >
            Add a Transaction
           </Typography>
           <form noValidate autocomplete="off">
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Transaction Date"
                variant="outlined"
                color="secondary"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
           </form>
           <Button
           type="submit"
           color="secondary"
           variant = "contained"
           endIcon={<AddIcon />}
           >
            Add Transaction
           </Button>
        </Container>
    )
}

export default AddTransaction;