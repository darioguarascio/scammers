import directus from "../helpers/DirectusService";

export default class ScamAction {
  getOne = async (slug) => {
    const { data } = await directus.items("scams").readByQuery({
      filter: {
        slug: {
          _eq: slug,
        },
      },
    });

    return { data: data[0] };
  };
  getData = async (fields = []) => {
    const { data } = await directus.items("scams").readByQuery({
      fields,
    });

    return { data };
  };
}
