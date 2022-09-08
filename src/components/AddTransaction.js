import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AddIcon from '@mui/icons-material/Add';

function AddTransaction() {
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