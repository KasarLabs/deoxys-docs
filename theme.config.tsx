import React from 'react'
import { DocsThemeConfig, useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { FaTelegram, FaGithub, FaTwitter, FaMediumM } from 'react-icons/fa';

const Logo = () => {
	const { resolvedTheme } = useTheme();
  
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
	const { resolvedTheme } = useTheme();
  
	const logoSrc = resolvedTheme === 'dark' ? 
	  "https://github.com/KasarLabs/brand/blob/main/projects/deoxys/Full/GradientFullWhite.png?raw=true" : 
	  "https://github.com/KasarLabs/brand/blob/main/projects/deoxys/Full/GradientFullBlack.png?raw=true";
  
	return (
	  <span style={{ display: 'flex', alignItems: 'center' }}>
		<img src={logoSrc} alt="Deoxys Logo" style={{ height: '175px' }} />
	  </span>
	);
};

const HeaderIcons = () => {
	return (
	  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
		<a href="https://github.com/kasarlabs/deoxys" target="_blank" rel="noopener noreferrer">
		  <FaGithub style={{ fontSize: '24px' }} />
		</a>
		<a href="https://t.me/kasarlabs" target="_blank" rel="noopener noreferrer">
		  <FaTelegram style={{ fontSize: '24px' }} />
		</a>
		<a href="https://twitter.com/kasarlabs" target="_blank" rel="noopener noreferrer">
		  <FaTwitter style={{ fontSize: '24px' }} />
		</a>
		<a href="https://medium.com/kasarlabs" target="_blank" rel="noopener noreferrer">
		  <FaMediumM style={{ fontSize: '24px' }} />
		</a>
	  </div>
	);
};


const config: DocsThemeConfig = {
	logo: <Logo />,
	chat: {
		link: "https://t.me/kasarlabs",
		icon: <HeaderIcons />,
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