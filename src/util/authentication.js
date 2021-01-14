import getResponse from '../lib/superAgent';

export default async () => {
  const res = await getResponse(
    '/token',
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    {
      client_id: 'scoober-test-app',
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'client_credentials',
    },
  );
  return res.body.access_token;
};
