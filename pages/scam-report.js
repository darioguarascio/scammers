import List from "../components/ScamType/List";
import JotformEmbed from "../helpers/JotformEmbed";

const ScamReport = () => {
  return (
    <div>
      <div className="container px-4 mx-auto my-3">
        <JotformEmbed src="https://form.jotform.com/221472485756060" />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default ScamReport;
