import { Box, Button, Dialog, DialogTitle } from '@mui/material';

const DialogModal = () => {
  return (
    <Dialog onClose={() => console.log('')} open={true}>
      <DialogTitle>Set backup account</DialogTitle>
      <Box>
        <Button>Delete</Button>
        <Button>Cancel</Button>
      </Box>
    </Dialog>
  );
};

export default DialogModal;
