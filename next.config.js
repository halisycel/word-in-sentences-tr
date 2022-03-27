/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		CREATOR: 'halis yücel',
		CREATOR_WEB_SITE: 'https://halisyucel.me',
		REPO_URL: 'https://github.com/',
		API_URL: 'http://localhost:3000/api',
	},
}

module.exports = nextConfig
