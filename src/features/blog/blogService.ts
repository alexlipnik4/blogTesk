export async function getPosts() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "ad43d380",
    },
  };

  try {
    const response = await fetch(
      `https://my.api.mockaroo.com/posts`,
      requestOptions
    );
    const info = await response.json();
    return info;
  } catch (e) {
    console.error(e);
  }
}
