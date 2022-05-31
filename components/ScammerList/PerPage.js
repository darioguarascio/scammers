import { useRouter } from "next/router";

const PerPage = ({ onSetPerPage }) => {
  const route = useRouter();
  return (
    <div>
      <span>Show</span>
      <select
        defaultValue={route.query.perpage}
        onChange={(e) => onSetPerPage(e.target.value)}
        className="p-2 px-3 bg-white border rounded-md"
      >
        {[10, 25, 50].map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <span>entries</span>
    </div>
  );
};

export default PerPage;
