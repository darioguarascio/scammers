import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import EventAction from "../../actions/EventAction";
import List from "../../components/ScamEvent/List";

const ScamEvent = ({ items, total }) => {
  const [pageInfo, setPageInfo] = useState({
    page: 1,
  });
  const route = useRouter();
  useEffect(() => {
    var page = 1;
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

    setPageInfo({
      page: page,
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
    setPageInfo({
      page: page,
    });
  };

  return (
    <div>
      <div className="container px-4 mx-auto my-12">
        <List
          pageInfo={pageInfo}
          data={items ?? []}
          total={total}
          onSetPage={(page) => onSetPage(page)}
        />
      </div>
    </div>
  );
};

export async function loadItems(page) {
  return new EventAction().getPaginateData(page);
}

export async function getServerSideProps({ query }) {
  const page = typeof query.page === "undefined" ? 1 : query.page;

  const items = await loadItems(page);

  return {
    props: {
      items: typeof items.data !== "undefined" ? items.data : null,
      total: typeof items.total !== "undefined" ? items.total : null,
    },
  };
}

export default ScamEvent;
