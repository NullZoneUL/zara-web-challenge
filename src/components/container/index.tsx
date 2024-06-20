import Header from "@elements/header";
import { ReactNode } from "react";

const AppContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="page-container">{children}</main>
    </>
  );
};

export default AppContainer;
