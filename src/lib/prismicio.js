import * as prismic from '@prismicio/client';

const repoName = 'ftssvelte'; // Fill in your repository name

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
		routes
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
