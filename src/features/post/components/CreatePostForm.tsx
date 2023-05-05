import Form from '@/components/Form/Form';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextareaField';
import { useAddPostMutation } from '@/api';
import { PostCreationParams } from '@/features/post/types';
import { Box, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreatePostForm = () => {
  const navigate = useNavigate();
  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = async (data: PostCreationParams) => {
    try {
      await addPost(data).unwrap();
      navigate('/posts');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Form<PostCreationParams> onSubmit={handleSubmit}>
        {({ control }) => (
          <>
            <InputField name="title" label="Title" control={control} />
            <TextareaField
              name="body"
              label="Content"
              control={control}
              fieldProps={{ sx: { mt: 2 } }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, width: 100 }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Create'
              )}
            </Button>
          </>
        )}
      </Form>
    </Box>
  );
};

export default CreatePostForm;
