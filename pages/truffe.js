import List from "../components/ScamType/List";
import HttpService from "../helpers/HttpService";

const scammerList = ({ posts }) => {
  return (
    <div>
      <div className="container px-4 mx-auto my-3">
        <List data={posts} />
      </div>
    </div>
  );
};

export async function loadScams() {
  const http = new HttpService();
  let url =
    "graphql?query={scams{id title description picture slug date_created}}";
  return http.getData(url);
}
export async function getStaticProps() {
// export async function getServerSideProps() {
  const posts = await loadScams();
  return {
    props: {
      posts,
    },
  };
}
export default scammerList;
