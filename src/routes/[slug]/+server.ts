import { DiscordInvite, GitHubOrg } from '$lib/constants';
import type { RequestHandler } from './$types';

const Redirects = {
	discord: DiscordInvite,
	git: GitHubOrg
};

export const GET: RequestHandler = async (req) => {
	const { slug } = req.params;

	if (slug in Redirects) {
		return new Response(null, {
			status: 302,
			headers: {
				Location: Redirects[slug as keyof typeof Redirects]
			}
		});
	}

	return new Response(null, {
		status: 404
	});
};
