import ScamAction from "../actions/ScamAction";
import List from "../components/ScamType/List";
import HttpService from "../helpers/HttpService";

const scammerList = ({ posts }) => {
  return (
    <div>
      <div className="container px-4 mx-auto my-3">
        {posts && <List data={posts} />}
      </div>
    </div>
  );
};

export async function loadScams() {
  return new ScamAction().getData(
    "id title description picture slug date_created"
  );
}
export async function getStaticProps() {
  const posts = await loadScams();
  return {
    props: {
      posts: posts || null,
    },
  };
}
export default scammerList;
