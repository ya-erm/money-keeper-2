import type { FC } from "react";
import { Link } from "react-router-dom";

export const Menu: FC = () => {
  const items = [
    {
      path: "/categories",
      title: "Categories",
    },
    {
      path: "/accounts",
      title: "Accounts",
    },
    {
      path: "/settings",
      title: "Settings",
    },
  ];

  return (
    <div className="border-t border-t-[#ccc] flex justify-around gap-1">
      {items.map((item) => (
        <Link key={item.path} to={item.path}>
          <div>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};
