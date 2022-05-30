export default class HttpService {
  API_URL = process.env.APP_DIRECTUS_URL;
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "CF-Access-Client-Secret":
      "4369635d8d79859f590e4ade9df76bacf284338b10db8278d935871c2d3e3c99",
    "CF-Access-Client-Id": "8999599caf935f9a85710d15d51c02d4.access",
  };
  getData = async (addedUrl) => {
    return fetch(this.API_URL + addedUrl + "&fields=*&access_token=token", {
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
