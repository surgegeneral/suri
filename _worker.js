const BLOCKED_COUNTRIES = [
  'NG', // Nigeria
  'IN', // India
  'SA', // Saudi Arabia
  'PK', // Pakistan
  'BD', // Bangladesh
  'ID', // Indonesia
  'VN', // Vietnam
  'PH', // Philippines
  'UA', // Ukraine
  'RU', // Russia
  'CN', // China
  'BR', // Brazil
];

export default {
  async fetch(request, env) {
    const country = request.cf?.country;

    if (country && BLOCKED_COUNTRIES.includes(country)) {
      return new Response('Access denied.', { status: 403 });
    }

    return env.ASSETS.fetch(request);
  }
};
