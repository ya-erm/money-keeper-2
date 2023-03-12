import { Header } from "@components/Header";
import { Menu } from "@components/Menu";
import type { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Menu />
    </div>
  );
};
