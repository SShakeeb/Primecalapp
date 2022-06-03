import * as React from 'react';
import { Box, Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import { OutputModal } from "../types";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(response:OutputModal) {
    const handleClose = () => response.handleClose(false);
  return (
    <div>
      <Modal
        open={response.show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Result
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Number {response?.result} is {response?.isPrime ? "a prime number": "not a prime number"} .
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
