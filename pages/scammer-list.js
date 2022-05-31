import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ScammerAction from "../actions/ScammerAction";
import List from "../components/ScammerList/List";

const scammerList = ({ items, total }) => {
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    perpage: 10,
  });
  const route = useRouter();
  useEffect(() => {
    var page = 1;
    var perpage = 10;
    if (!route.query.page) {
      route.push({
        pathname: route.pathname,
        query: {
          ...route.query,
          page: 1,
        },
      });
      page = 1;
    } else {
      page = parseInt(route.query.page);
    }

    if (
      !route.query.perpage ||
      ![10, 25, 50].includes(parseInt(route.query.perpage))
    ) {
      route.push({
        pathname: route.pathname,
        query: {
          ...route.query,
          perpage: 10,
        },
      });
      perpage = 10;
    } else {
      perpage = parseInt(route.query.perpage);
    }
    setPageInfo({
      page: page,
      perpage: perpage,
    });
  }, []);

  const onSetPage = (page) => {
    route.push({
      pathname: route.pathname,
      query: {
        ...route.query,
        page: page,
      },
    });
  };

  const onSetPerPage = (perPage) => {
    if ([10, 25, 50].includes(parseInt(perPage))) {
      route.push({
        pathname: route.pathname,
        query: {
          ...route.query,
          perpage: perPage,
        },
      });
    } else {
      alert("perPage is avaliable only 10, 25, 50");
    }
  };

  const addSort = (sortable) => {
    if (sortable.codeName !== null) {
      route.push({
        pathname: route.pathname,
        query: {
          ...route.query,
          codename: sortable.codeName,
        },
      });
    } else {
      route.push({
        pathname: route.pathname,
        query: {
          ...route.query,
          codename: null,
        },
      });
    }
  };

  return (
    <div>
      <div className="container px-4 mx-auto my-12">
        <List
          pageInfo={pageInfo}
          data={items ?? []}
          total={total}
          addSort={(sortable) => addSort(sortable)}
          onSetPage={(page) => onSetPage(page)}
          onSetPerPage={(perPage) => onSetPerPage(perPage)}
        />
      </div>
    </div>
  );
};

export async function loadItems(perPage, page, codenameSort) {
  return new ScammerAction().getData(perPage, page, codenameSort);
}

export async function getServerSideProps({ query }) {
  const page = typeof query.page === "undefined" ? 1 : query.page;
  const perPage = typeof query.perpage === "undefined" ? 10 : query.perpage;
  const codenameSort =
    typeof query.codename !== "undefined" &&
    ["desc", "asc"].includes(query.codename)
      ? query.codename
      : null;

  const items = await loadItems(perPage, page, codenameSort);

  return {
    props: {
      items: typeof items.data !== "undefined" ? items.data : null,
      total: typeof items.total !== "undefined" ? items.total : null,
    },
  };
}

export default scammerList;
