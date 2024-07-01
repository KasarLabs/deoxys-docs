import React from "react";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { FaTelegram, FaGithub, FaTwitter, FaMediumM } from "react-icons/fa";

const Logo = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://github.com/keep-starknet-strange/madara-branding/blob/main/logo/PNGs/Madara%20logomark%20-%20White%20-%20Duotone.png?raw=true"
      : "https://github.com/keep-starknet-strange/madara-branding/blob/main/logo/PNGs/Madara%20logomark%20-%20Black%20-%20Duotone.png?raw=true";

  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <img src={logoSrc} alt="Madara Logo" style={{ height: "50px" }} />
    </span>
  );
};

const BigLogo = () => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark"
      ? "https://github.com/keep-starknet-strange/madara-branding/blob/main/logo/PNGs/Madara%20logomark%20-%20White%20-%20Duotone.png?raw=true"
      : "https://github.com/keep-starknet-strange/madara-branding/blob/main/logo/PNGs/Madara%20logomark%20-%20Black%20-%20Duotone.png?raw=true";

  return (
    <span style={{ display: "flex", alignItems: "center" }}>
      <img src={logoSrc} alt="Madara Logo" style={{ height: "175px" }} />
    </span>
  );
};

const HeaderIcons = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <a
        href="https://github.com/keep-starknet-strange/madara"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub style={{ fontSize: "24px" }} />
      </a>
      <a
        href="https://t.me/madarastarknet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram style={{ fontSize: "24px" }} />
      </a>
      <a
        href="https://twitter.com/madarastarknet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter style={{ fontSize: "24px" }} />
      </a>
      <a
        href="https://medium.com/madarastarknet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMediumM style={{ fontSize: "24px" }} />
      </a>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  chat: {
    link: "https://github.com/keep-starknet-strange/madara",
    icon: <FaGithub style={{ fontSize: "24px" }} />,
  },
  docsRepositoryBase: "https://github.com/keep-starknet-strange/madara-docs/tree/main",
  footer: {
    text: <span>MIT {new Date().getFullYear()} © Madara - Keep Starknet Strange</span>,
  },
  editLink: {
    text: <span>Contribute to Madara | Edit on GitHub</span>,
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

export default config;
export { Logo, BigLogo };
