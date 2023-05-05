import DialogModal from '@/components/UI/DialogModal';
import { useDeletePostMutation } from '@/api';
import { AccountCircle, Delete } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Link as MuiLink,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type PostDetailsProps = {
  id: string;
  title: string;
  creator: string;
  date: string;
};

const PostDetails = ({ id, title, creator, date }: PostDetailsProps) => {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const dateObj = new Date(date);
  const formattedDatetime = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;

  const handleDelete = () => {
    deletePost(id);
  };

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccountCircle />
              <Typography mx={1} fontSize="small" color="gray">
                {creator}
              </Typography>
              <Typography fontSize="small" color="gray">
                {formattedDatetime}
              </Typography>
            </Box>
            <MuiLink
              component={RouterLink}
              to="/posts/create"
              variant="body2"
              fontSize="large"
            >
              {title}
            </MuiLink>
          </Box>
          {isDeleting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <Delete
              fontSize="large"
              sx={{ cursor: 'pointer' }}
              onClick={handleDelete}
            />
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostDetails;
