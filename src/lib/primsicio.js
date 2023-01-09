import * as prismic from '@prismicio/client';

const repoName = 'svelte-cf-daisy'; // Fill in your repository name
const accessToken =
	'MC5ZN3VxWkJFQUFDUUFYZ1FP.NRQhPl0m77-9Ou-_ve-_vXkF77-977-977-977-977-977-9ayMDR3su77-9Ou-_vQEF77-977-9TA'; // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
	{
		type: 'page',
		uid: 'homepage',
		path: '/'
	},
	{
		type: 'page',
		path: '/:uid'
	}
];

const createClient = ({ request, fetch } = {}) => {
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
