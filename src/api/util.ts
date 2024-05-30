const get = async (url: string) => {
  const response = await fetch(url, {
    mode: "cors",
    credentials: "include",
  });
  return response.json();
};

const post = async <T>(url: string, data: T) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    credentials: "include",
  });
  return response.json();
};

export const api = {
  get,
  post,
};
