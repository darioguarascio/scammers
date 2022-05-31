import HttpService from "../helpers/HttpService";

export default class ScammerAction {
  getData = (perPage = 10, page = 1, codenameSort = null) => {
    perPage = [10, 25, 50].includes(parseInt(perPage)) ? perPage : 10;

    var codename = "";
    if (codenameSort === "desc") {
      codename = "&sort=-codename";
    } else if (codenameSort === "asc") {
      codename = "&sort=codename";
    }

    const http = new HttpService();
    let url =
      "items/scammers?limit=" +
      perPage +
      "&meta=total_count&page=" +
      page +
      "&fields=*.*" +
      codename;

    return http.getData(url);
  };
}
