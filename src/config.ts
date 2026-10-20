import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "enoa-blog",
	subtitle: "数学技巧の仓库",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	welcomeOverlay: {
		enable: true, // Show the welcome screen before entering the site
		wallpaper: "assets/images/demo-banner.png", // Relative to /src, or to /public if it starts with "/"
		// title: "enoa-blog", // Defaults to siteConfig.title
		// subtitle: "数学技巧の仓库", // Defaults to siteConfig.subtitle
		buttonText: "进入网站", // Text of the enter button
		showOnce: true, // Only show on the first visit of a browser session
		veilOpacity: 0.45, // Darkening layer over the wallpaper, 0 - 1
	},
	musicPlayer: {
		enable: true,
		position: "bottom-left", // "bottom-left" or "bottom-right"
		volume: 0.7, // Initial volume, 0 - 1
		loop: "all", // "all" | "one" | "none"
		// Replace these demo tracks with your own songs.
		// Put audio files in public/music/ and use "/music/xxx.mp3",
		// or use a full https URL. Cover images are optional.
		playlist: [
			{
				name: "「言って。 (说吧。)」",
				artist: "Yorushika(ヨルシカ)",
				url: "https://jk.lyszm.com/down.php?hash=831a25f1e41b919db8fe7425df0ad42c",
				cover: "/music/default-cover.svg",
			},
			{
				name: "「花の塔」",
				artist: "酸欠少女さユり",
				url: "https://jk.lyszm.com/down.php?hash=3ac54eea3c9ee938c00d20e99b1b63f2",
				cover: "/music/default-cover.svg",
			},
			{
				name: "微风",
				artist: "demo",
				url: "/music/demo-breeze.wav",
				cover: "/music/default-cover.svg",
			},
		],
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "Github",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "孙浩宸",
	bio: "Hello world",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/enoa-sao",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
