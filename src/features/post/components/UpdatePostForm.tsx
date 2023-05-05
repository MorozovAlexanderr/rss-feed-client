import Form from '@/components/Form/Form';
import InputField from '@/components/Form/InputField';
import TextareaField from '@/components/Form/TextareaField';
import { useGetPostQuery, useUpdatePostMutation } from '@/api';
import { PostCreationParams } from '@/features/post/types';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type UpdatePostFormProps = {
  id: string;
};

const UpdatePostForm = ({ id }: UpdatePostFormProps) => {
  const navigate = useNavigate();

  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const { data, isLoading: isFetching } = useGetPostQuery(id);

  const handleSubmit = async (data: PostCreationParams) => {
    try {
      await updatePost({ _id: id, ...data }).unwrap();
      navigate('/posts');
    } catch (err) {
      console.error(err);
    }
  };

  if (isFetching) {
    return (
      <Typography fontSize="large" sx={{ mt: 2 }}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Form<PostCreationParams>
        onSubmit={handleSubmit}
        options={{ defaultValues: { title: data?.title, body: data?.body } }}
      >
        {({ control }) => (
          <>
            <InputField
              name="title"
              label="Title"
              control={control}
            />
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
              {isUpdating ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Update'
              )}
            </Button>
          </>
        )}
      </Form>
    </Box>
  );
};

export default UpdatePostForm;
