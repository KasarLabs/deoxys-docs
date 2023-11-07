import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
	logo: (
		<span style={{ display: 'flex', alignItems: 'center' }}> {/* This span becomes a flex container */}
			<img 
				src="https://github.com/KasarLabs/deoxys/raw/deoxys/prod/docs/images/deoxys.jpg" 
				alt="Deoxys Logo" 
				style={{ height: '50px', borderRadius: '10%' }} 
			/>
			<span style={{ marginLeft: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>Deoxys</span>
		</span>
	  ),
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
