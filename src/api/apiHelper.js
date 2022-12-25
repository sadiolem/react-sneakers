export default async (method, url, ...args) => {
  const baseUrl = 'https://63a7501359fd83b1bb43465b.mockapi.io';

  try {
    const data = await fetch(`${baseUrl}/${url}`, {
      method,
      ...args,
    });

    return await data.json();
  } catch ({ response }) {
    return {
      data: null,
      error: {
        text: response?.data,
        status: response?.status,
      },
    };
  }
};
