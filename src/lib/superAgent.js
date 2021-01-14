import superagent from 'superagent';

export default async (route, header, body = {}) => superagent
  .post(`${process.env.BASE_URL}${route}`)
  .send(body)
  .set(header)
  .then((res) => res);
