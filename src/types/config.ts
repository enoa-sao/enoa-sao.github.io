import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	welcomeOverlay: {
		enable: boolean;
		/** Relative to /src, or relative to /public when it starts with "/" */
		wallpaper: string;
		/** Falls back to siteConfig.title when omitted */
		title?: string;
		/** Falls back to siteConfig.subtitle when omitted */
		subtitle?: string;
		buttonText: string;
		/** Show only on the first visit of a browser session */
		showOnce: boolean;
		/** Darkening layer over the wallpaper, from 0 to 1 */
		veilOpacity: number;
	};

	musicPlayer: MusicPlayerConfig;

	favicon: Favicon[];
};

export type MusicTrack = {
	name: string;
	artist?: string;
	/** Local file under /public (e.g. "/music/song.mp3") or a full http(s) URL */
	url: string;
	/** Cover image URL, falls back to the bundled default cover */
	cover?: string;
};

export type MusicPlayerConfig = {
	enable: boolean;
	position: "bottom-left" | "bottom-right";
	/** Initial volume, 0 - 1 */
	volume: number;
	loop: "all" | "one" | "none";
	playlist: MusicTrack[];
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};
