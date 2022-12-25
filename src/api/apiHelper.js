export default async (method, url, body) => {
  const baseUrl = 'https://63a7501359fd83b1bb43465b.mockapi.io';

  try {
    const data = await fetch(`${baseUrl}/${url}`, {
      method,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    });

    return await data.json();
  } catch (error) {
    alert(error);
    return null;
  }
};
