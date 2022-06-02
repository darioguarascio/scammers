import HttpService from "../helpers/HttpService";

export default class EventAction {
  getData = (fields = "") => {
    const http = new HttpService();
    let url = "graphql?query={events{" + fields + "}}";
    return http.getData(url);
  };
  getOne = (id) => {
    const http = new HttpService();
    let url = "items/events?filter[id]=" + id + "&fields=*.*";
    return http.getData(url);
  };
  getPaginateData = (page = 1) => {
    const http = new HttpService();
    let url =
      "items/events?limit=10&meta=total_count&page=" + page + "&fields=*.*";

    return http.getData(url);
  };
}
