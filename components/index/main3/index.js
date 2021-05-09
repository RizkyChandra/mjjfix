import Item from "./item.js";
import Link from "next/link";
const index = (props) => {
  return (
    <div>
      <ul className="grid grid-cols-1 mx-auto lg:grid-cols-3">
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
};

export default index;
