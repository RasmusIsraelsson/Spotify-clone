// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'd9f8557b7bc140a1bbeb86b600f07e65';
const redirectUri = 'https://rasmusspotifyclone.herokuapp.com/';
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
	'streaming'
];

export const getAccessToken = () => {
	const params = new URLSearchParams(window.location.hash.replace('#', '?'));
	return params.get('access_token');
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
