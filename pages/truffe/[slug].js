import { useRouter } from "next/router";
import HttpService from "../../helpers/HttpService";
import md from "markdown-it";
import Head from "next/head";

function Scam({ post }) {
  console.log(post);
  return (
    <div>
      <Head>
        <meta name="title" content={post.meta_title} />
        <meta name="description" content={post.meta_description} />
        <meta name="keywords" content={post.meta_keywords} />
        <meta property="og:title" content={post.meta_title} />
        <meta property="og:type" content="scam article" />
        <meta property="og:image" content={post.picture} />
        <meta name="twitter:title" content={post.meta_title} />
        <meta name="twitter:description" content={post.meta_description} />
        <meta name="twitter:image" content={post.picture} />
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
                      "height:240"
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
                <article class="prose">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: md().render(post.description),
                    }}
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scam;

export async function loadScams() {
  const http = new HttpService();
  let url = "graphql?query={scams{slug}}";
  return http.getData(url);
}
export async function loadScam(slug) {
  const http = new HttpService();
  let url = "items/scams?filter[slug]=" + slug;
  return http.getData(url);
}

export async function getStaticProps(contex) {
  const { params } = contex;
  const post = await loadScam(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
}

export async function getStaticPaths() {
  const data = await loadScams();
  const paths = data.scams.map((post) => {
    return {
      params: {
        slug: `${post.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
