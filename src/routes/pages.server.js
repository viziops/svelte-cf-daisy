import { error } from '@sveltejs/kit';

import createClient from '$lib/prismicio';

export async function load({ fetch, request }) {
	const homepageUID = 'homepage'; // Update for the UID of your homepage
	const client = createClient({ fetch, request });
	const document = await client.getByUID('page', homepageUID);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}
