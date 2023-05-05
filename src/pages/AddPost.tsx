import CreatePostForm from '@/features/post/components/CreatePostForm';
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const navigate = useNavigate();

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
        Create new post
      </Typography>
      <CreatePostForm />
    </Box>
  );
};

export default AddPost;
