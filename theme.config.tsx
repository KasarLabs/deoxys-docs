import React from 'react'
import { DocsThemeConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const Logo = () => {
	const { resolvedTheme } = useTheme(); // This hook is from next-themes
  
	const logoSrc = resolvedTheme === 'dark' ? 
	  "https://github.com/KasarLabs/brand/blob/main/projects/deoxys/Full/GradientFullWhite.png?raw=true" : 
	  "https://github.com/KasarLabs/brand/blob/main/projects/deoxys/Full/GradientFullBlack.png?raw=true";
  
	return (
	  <span style={{ display: 'flex', alignItems: 'center' }}>
		<img src={logoSrc} alt="Deoxys Logo" style={{ height: '50px' }} />
	  </span>
	);
};

const BigLogo = () => {
	const { resolvedTheme } = useTheme(); // This hook is from next-themes
  
	const logoSrc = resolvedTheme === 'dark' ? 
	  "https://github.com/KasarLabs/brand/blob/main/projects/deoxys/Full/GradientFullWhite.png?raw=true" : 
	  "https://github.com/KasarLabs/brand/blob/main/projects/deoxys/Full/GradientFullBlack.png?raw=true";
  
	return (
	  <span style={{ display: 'flex', alignItems: 'center' }}>
		<img src={logoSrc} alt="Deoxys Logo" style={{ height: '175px' }} />
	  </span>
	);
};

const config: DocsThemeConfig = {
	logo: <Logo />,
	project: {
		link: "https://github.com/kasarlabs/deoxys",
	},
	chat: {
		link: "https://t.me/kasarlabs",
	},
	docsRepositoryBase: "https://github.com/kasarLabs/deoxys-docs/tree/main",
	footer: {
		text: (
			<span>MIT {new Date().getFullYear()} © Deoxys - Kasar Labs</span>
		),
	},
	editLink: {
		text: (
			<span>Contribute to Deoxys | Edit on GitHub</span>
		),
	},
	primaryHue: 10,
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s",
			};
		}
	},
	themeSwitch: {
		useOptions() {
			return {
				light: "Light",
				dark: "Dark",
				system: "System",
			};
		},
	},
};

export default config
export { Logo, BigLogo };