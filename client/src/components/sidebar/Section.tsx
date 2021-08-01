import { Link } from "react-router-dom";

interface Props {
  name: string;
  items: any[];
}

const Section = ({ name, items }: Props) => {
  const isCommunity = name === "my community";

  return (
    <section>
      {isCommunity && (
        <div className="mb-2">
          <p className="uppercase">{name}</p>
          <input placeholder="Filter" />
        </div>
      )}

      <p className="uppercase mb-2">{name}</p>

      <ul>
        {items.map((item) => {
          return (
            <li
              className="mb-2 cursor-pointer hover:bg-gray-100"
              key={item.name}
            >
              <Link to={isCommunity ? `/r/${item.name}` : item.path}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Section;
