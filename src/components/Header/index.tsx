import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  const t = useTranslations("header");
  return (
    <header className="header-wrapper">
      <Image
        className="logo-wrapper mobile"
        src="/images/logo_mobile.svg"
        alt={`${t("logoAltTextMobile")}`}
        height={58}
        width={185}
        priority
      />
      <Image
        className="logo-wrapper desktop"
        src="/images/logo_desktop.svg"
        alt={`${t("logoAltTextDesktop")}`}
        height={58}
        width={322}
        priority
      />
      <div className="decoration-item">
        <span className="decoration-text">{t("decorationBlog")}</span>
      </div>
    </header>
  );
};

export default Header;
