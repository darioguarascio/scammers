import directus, { authDirectus } from "../helpers/DirectusService";

export default class ScamAction {
  getOne = async (slug) => {
    await authDirectus();

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
    await authDirectus();

    const { data } = await directus.items("scams").readByQuery({
      fields,
    });

    return { data };
  };
}
