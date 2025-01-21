const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./app/i18n/request.ts"); // Use relative path

const nextConfig = {};

module.exports = withNextIntl(nextConfig);
