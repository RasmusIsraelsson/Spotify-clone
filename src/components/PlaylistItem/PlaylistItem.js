import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router-dom';
import { Skeleton } from '@mui/material';

function PlaylistItem({ name, id, images, loading }) {
	const history = useHistory();

	if (loading)
		return (
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemAvatar sx={{ marginRight: '15px' }}>
						<Skeleton variant="rectangular" width={60} height={60} />
					</ListItemAvatar>
					<Skeleton variant="text" animation="wave" width={150} height={20} />
				</ListItemButton>
			</ListItem>
		);

	const smallImage = images[2].url;

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => history.push(`/playlist/${id}`)}>
				<ListItemAvatar sx={{ marginRight: '15px' }}>
					<Avatar alt="Remy Sharp" src={smallImage} variant="square" sx={{ height: 60, width: 60 }} />
				</ListItemAvatar>
				<ListItemText primary={name} sx={{ color: 'text.secondary' }} />
			</ListItemButton>
		</ListItem>
	);
}

export default PlaylistItem;
