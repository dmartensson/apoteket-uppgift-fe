const get = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const post = async <T>(url: string, data: T) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};

export const api = {
  get,
  post,
};
