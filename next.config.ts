const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
    localeDetection: false,
  },
  env: {
    NEXT_PUBLIC_TIME_ZONE: 'UTC',
  },
};

module.exports = nextConfig;