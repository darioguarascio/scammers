import HttpService from "../helpers/HttpService";

export default class EventAction {
  getLatest = () => {
    const http = new HttpService();
    let url = "items/events/?fields=*.*&sort=-date_created&limit=1";
    return http.getData(url);
  };
}
