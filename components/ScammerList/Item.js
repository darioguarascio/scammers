import Link from "next/link";

const Item = ({ item }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {item.codename}
      </th>
      <td className="px-6 py-4">{item.contact ?? "example@mail.com"}</td>
      <td className="px-6 py-4">{item.platform ?? "platform"}</td>
      <td className="px-6 py-4 text-right justify-center flex">
        <Link href={"/scam-report"}>
          <a className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2 focus:outline-none whitespace-nowrap">
            Report Scam
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default Item;
