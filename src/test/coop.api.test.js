/* eslint-disable no-unused-expressions */
import bearerToken from '../util/authentication';
import postRequest from '../lib/superAgent';
import {
  isBarnMessageValid,
  isToiletSeatMessageValid,
  isChickenFeedMessageValid,
} from '../util/isApiMessageValid';

describe('ValidateCOOPApi', function () {
  let token;

  beforeAll(async () => {
    token = await bearerToken();
  });

  test('Verify barn unlock', async () => {
    const res = await postRequest(`/api/${process.env.USER_ID}/barn-unlock`, {
      Authorization: `Bearer ${token}`,
    });
    expect(res.status).toEqual(200);
    expect(res.body.action).toEqual('barn-unlock');
    expect(res.body.success).toEqual(true);
    expect(isBarnMessageValid(res.body.message)).toBeTruthy;
    expect(res.body.data).toEqual(null);
  });

  test('Verify toiletseat down', async () => {
    const res = await postRequest(
      `/api/${process.env.USER_ID}/toiletseat-down`,
      {
        Authorization: `Bearer ${token}`,
      },
    );
    expect(res.status).toEqual(200);
    expect(res.body.action).toEqual('toiletseat-down');
    expect(res.body.success).toEqual(true);
    expect(isToiletSeatMessageValid(res.body.message)).toBeTruthy;
    expect(res.body.data).toEqual(null);
  });

  test('Verify chickens feed', async () => {
    const res = await postRequest(
      `/api/${process.env.USER_ID}/chickens-feed`,
      {
        Authorization: `Bearer ${token}`,
      },
    );
    expect(res.status).toEqual(200);
    expect(res.body.action).toEqual('chickens-feed');
    expect(res.body.success).toEqual(true);
    expect(isChickenFeedMessageValid(res.body.message)).toBeTruthy;
    expect(res.body.data).toEqual(null);
  });
});
