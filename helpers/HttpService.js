export default class HttpService {
  API_URL = process.env.APP_DIRECTUS_URL;
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET,
    "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID,
  };
  getData = async (addedUrl) => {
    let url = this.API_URL + addedUrl + "&fields=*&access_token=" + process.env.DIRECTUS_TOKEN;
    console.log(url)
    return fetch(url, {
      headers: this.headers,
    })
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };

  patchData = (addedUrl, props) => {
    return fetch(this.url + addedUrl, {
      method: "PATCH",
      body: JSON.stringify(props),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };

  postData = (addedUrl, props) => {
    return fetch(this.url + addedUrl, {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };

  deleteData = (addedUrl, props) => {
    return fetch(this.url + addedUrl, {
      method: "DELETE",
      body: JSON.stringify(props),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data.success ? data.data : false;
      })
      .catch(function (err) {
        console.log("Something went Wrong!");
      });
  };
}
