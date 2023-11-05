import axios, { AxiosError, AxiosRequestConfig } from 'axios';

async function callback<T>(
  url: AxiosRequestConfig<T>['url'],
  customConfig: AxiosRequestConfig = {},
): Promise<T> {
  const params: AxiosRequestConfig = {
    ...customConfig,
    headers: customConfig.headers ?? {},
    method: customConfig.method ?? 'GET',
  };

  const options: AxiosRequestConfig = {
    ...params,
    headers: {
      'Content-Type': 'application/json',
      authorId: '25',
      ...params.headers,
    },
    url,
  };

  return new Promise<T>((resolve, reject) => {
    axios(options)
      .then((success) => {
        resolve(success.data as T);
      })
      .catch((error: Error | AxiosError<T>) => {
        if (axios.isAxiosError(error)) {
          reject(error.response);
        } else {
          reject(error);
        }
      });
  });
}

export default callback;
