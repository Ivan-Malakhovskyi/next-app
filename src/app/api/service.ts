const API_URL = "https://jsonplaceholder.typicode.com";

export const getAllContacts = async () => {
  const res = await fetch(`${API_URL}/users`, { next: { revalidate: 10 } });

  if (!res.ok) {
    throw new Error("Something went wrong, try reload page");
  }
  return res.json();
};

export const getContactById = async (params) => {
  const { id } = params;

  const res = await fetch(`${API_URL}/users/${id}`);

  if (!res.ok) {
    throw new Error("Something went wrong, try reload page");
  }

  const contacts = await res.json();

  return contacts;
};

export const getAllPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);

  if (!res.ok) {
    throw new Error("Something went wrong, try reload page");
  }

  const posts = await res.json();

  return posts;
};

export const getPostById = async (params) => {
  const { id } = params;

  const res = await fetch(`${API_URL}/posts/${id}`);

  if (!res.ok) {
    throw new Error("Something went wrong, try reload page");
  }

  const posts = await res.json();

  return posts;
};
