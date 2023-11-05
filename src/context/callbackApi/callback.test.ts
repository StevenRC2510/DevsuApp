import axios from 'axios';
import callback from '@context/callbackApi/callback';

jest.mock('axios');
const MockedAxios = axios as unknown as jest.Mock<Promise<unknown>>;

describe('CallbackApi::Callback', () => {
  global.URL.createObjectURL = jest.fn();

  it('Promise resolve', async () => {
    const Success = { data: {} };
    MockedAxios.mockImplementationOnce(() => Promise.resolve(Success));
    await expect(callback('Route')).resolves.toEqual(Success.data);
  });

  it('Promise reject', async () => {
    const Error = {};
    MockedAxios.mockImplementationOnce(() => Promise.reject(Error));
    await expect(callback('Route')).rejects.toEqual(Error);
  });
});
