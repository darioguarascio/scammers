import directus, { authDirectus } from "../helpers/DirectusService";

export default class EventAction {
  getData = async (fields = "") => {
    await authDirectus();

    const { data, meta } = await directus.items("events").readByQuery({
      meta: "total_count",
      fields,
    });

    return { total: meta && meta.total_count, data };
  };
  getOne = async (id) => {
    await authDirectus();

    const data = await directus.items("events").readOne(Number(id), {
      fields: "*.*",
    });

    return { data };
  };
  getPaginateData = async (page = 1) => {
    await authDirectus();

    const { data, meta } = await directus.items("events").readByQuery({
      meta: "total_count",
      limit: 10,
      page,
      fields: "*.*",
    });

    return { total: meta && meta.total_count, data };
  };
}
