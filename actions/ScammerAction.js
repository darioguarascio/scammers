import directus from "../helpers/DirectusService";

export default class ScammerAction {
  getData = async (perPage = 10, page = 1, codenameSort = null) => {
    perPage = [10, 25, 50].includes(parseInt(perPage)) ? perPage : 10;

    const { data, meta } = await directus.items("scammers").readByQuery({
      meta: "total_count",
      page,
      limit: perPage,
      fields: "*.*",
      sort: codenameSort
        ? [codenameSort === "asc" ? "codename" : "-codename"]
        : undefined,
    });

    return { total: meta && meta.total_count, data };
  };
}
