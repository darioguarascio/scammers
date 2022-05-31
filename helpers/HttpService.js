export default class HttpService {
  API_URL = process.env.APP_DIRECTUS_URL;
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET,
    "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID,
  };
  getData = async (addedUrl) => {
    let url =
      this.API_URL +
      addedUrl +
      "&fields=*&access_token=" +
      process.env.DIRECTUS_TOKEN;

    return fetch(url, {
      headers: this.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        return {
          total: typeof data.meta !== "undefined" && data.meta.total_count,
          data: data.data,
        };
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };
}
