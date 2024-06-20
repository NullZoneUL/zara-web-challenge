import { ReactNode } from "react";

const AppContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="page-container">{children}</main>
    </>
  );
};

export default AppContainer;
