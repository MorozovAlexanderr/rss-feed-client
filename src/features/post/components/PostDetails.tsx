import { AccountCircle, Delete } from '@mui/icons-material';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

type PostDetailsProps = {
  title: string;
  creator: string;
  date: string;
};

const PostDetails = ({ title, creator, date }: PostDetailsProps) => {
  const dateObj = new Date(date);
  const formattedDatetime = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;

  return (
    <Card sx={{ cursor: 'pointer' }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box>
            <Grid container alignItems="center">
              <AccountCircle />
              <Typography mx={1} fontSize={14} color="gray">
                {creator}
              </Typography>
              <Typography fontSize={14} color="gray">
                {formattedDatetime}
              </Typography>
            </Grid>
            <Typography fontSize={18} mt={2}>
              {title}
            </Typography>
          </Box>
          <Delete />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostDetails;
