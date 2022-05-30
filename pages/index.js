import BlogList from "../components/Home/BlogList";
import MainSection from "../components/Home/MainSection";
import HttpService from "../helpers/HttpService";

function Home({ posts }) {
  return (
    <div>
      <MainSection />
      {/* <BlogList /> */}
    </div>
  );
}

// export async function loadScams() {
//   const http = new HttpService();
//   let url =
//     "graphql?query={scams{id title description picture slug date_created}}";
//   return http.getData(url);
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
