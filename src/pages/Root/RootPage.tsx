import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "@components/Layout";

export const RootPage: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
