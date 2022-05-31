import HttpService from "../helpers/HttpService";

export default class ScamAction {
  getOne = (slug) => {
    const http = new HttpService();
    let url = "items/scams?filter[slug]=" + slug;
    return http.getData(url);
  };
  getData = (fields = "") => {
    const http = new HttpService();
    let url = "graphql?query={scams{" + fields + "}}";
    return http.getData(url);
  };
}
