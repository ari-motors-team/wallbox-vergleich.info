export default async function fetch(url, data) {
  const dev = process.env.NODE_ENV === "development";

  try {
    const response = await fetch(url, {
      method: data ? "POST" : "GET",
      headers: data && {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data && JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
}
