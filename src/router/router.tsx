import AppContainer from "@components/container";
import { useParams } from "react-router-dom";
import { getComponentFromRoute, RouteKeys } from "./utils";

const AppRouter = ({ route }: { route: RouteKeys }) => {
  const Page = getComponentFromRoute(route);
  const props = useParams();

  return (
    <AppContainer>
      <Page {...props}></Page>
    </AppContainer>
  );
};

export default AppRouter;
