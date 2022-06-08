import directus from "../helpers/DirectusService";

export default class EventAction {
  getData = async (fields = "") => {
    const { data, meta } = await directus.items("events").readByQuery({
      meta: "total_count",
      fields,
    });

    return { total: meta && meta.total_count, data };
  };
  getOne = async (id) => {
    try {
      const data = await directus.items("events").readOne(id, {
        fields: "*.*",
      });

      return { data };
    } catch (err) {
      return { data: undefined };
    }
  };
  getPaginateData = async (page = 1) => {
    const { data, meta } = await directus.items("events").readByQuery({
      meta: "total_count",
      limit: 10,
      page,
      fields: "*.*",
    });

    return { total: meta && meta.total_count, data };
  };
}
