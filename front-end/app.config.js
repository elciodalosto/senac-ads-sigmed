// filepath: app.config.js
import 'dotenv/config';

export default {
  expo: {
    name: 'senac-ads-sigmed',
    slug: 'senac-ads-sigmed',
    version: '1.0.0',
    extra: {
      API_URL: process.env.API_URL, // Expose API_URL
    },
  },
};