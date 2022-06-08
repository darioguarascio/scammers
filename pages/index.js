import ScamAction from "../actions/ScamAction";
import BlogList from "../components/Home/BlogList";
import MainSection from "../components/Home/MainSection";
import HttpService from "../helpers/HttpService";

function Home({ posts }) {
  return (
    <div>
      <MainSection />
      {/* <BlogList data={posts} /> */}
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}

// export async function loadScams() {
//   return new ScamAction().getData(
//     "id title description picture slug date_created"
//   );
// }
// export async function getStaticProps() {
//   const posts = await loadScams();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Home;
