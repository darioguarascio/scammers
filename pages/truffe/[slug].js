import Head from "next/head";
import ScamAction from "../../actions/ScamAction";
import Markdown from "react-markdown";

function Scam({ post }) {
  return (
    <div>
      {post && (
        <div>
          <Head>
            <meta name="title" content={post.meta_title} />
            <meta name="description" content={post.meta_description} />
            <meta name="keywords" content={post.meta_keywords} />
            <meta property="og:title" content={post.meta_title} />
            <meta property="og:type" content="scam article" />
            <meta
              property="og:image"
              content={process.env.APP_DIRECTUS_URL + "assets/" + post.picture}
            />
            <meta name="twitter:title" content={post.meta_title} />
            <meta name="twitter:description" content={post.meta_description} />
            <meta
              name="twitter:image"
              content={process.env.APP_DIRECTUS_URL + "assets/" + post.picture}
            />
          </Head>
          <div>
            <div className="container px-4 mx-auto my-3">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1">
                  <div className="bg-gray-200 h-[440px] w-full rounded-md relative">
                    {post.picture ? (
                      <img
                        src={
                          process.env.APP_DIRECTUS_URL +
                          "assets/" +
                          post.picture +
                          "?height=400"
                        }
                        alt={post.title}
                        loading="lazy"
                        className="h-full object-cover w-full rounded-md"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center">
                          <p className="font-bolder text-gray-500">No Photo</p>
                          <div className="text-xs">
                            <small className="font-normal text-gray-700">
                              Truffatori
                            </small>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-2 p-0 lg:px-5">
                  <h1 className="font-bolder text-red-400 text-[24px]">
                    {post.title}
                  </h1>
                  <div className="text-gray-600 text-base font-normal">
                    <article className="prose">
                      <Markdown>{post.description}</Markdown>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Scam;

// export async function loadScams() {
//   return new ScamAction().getData("slug");
// }

export async function loadScam(slug) {
  return new ScamAction().getOne(slug);
}

export async function getServerSideProps(context) {
  const { params } = context;
  const post = await loadScam(params.slug);

  return {
    notFound: typeof post.data === "undefined",
    props: {
      post: typeof post.data && post.data,
    },
  };
}

// export async function getStaticPaths() {
//   const data = await loadScams();
//   const paths =
//     typeof data.data &&
//     data.data.scams.map((post) => {
//       return {
//         params: {
//           slug: `${post.slug}`,
//         },
//       };
//     });

//   return {
//     paths,
//     fallback: false,
//   };
// }
