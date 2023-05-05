import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import UpdatePostForm from '@/features/post/components/UpdatePostForm';

const EditPost = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: any }>();

  const handleReturnBack = () => {
    navigate('/posts');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          width: 'fit-content',
          mb: 4,
        }}
        onClick={handleReturnBack}
      >
        <ArrowBackIosIcon />
        <Typography fontSize="large">Back</Typography>
      </Box>
      <Typography component="h1" variant="h5">
        Editing mode
      </Typography>
      <UpdatePostForm id={params.id} />
    </Box>
  );
};

export default EditPost;
