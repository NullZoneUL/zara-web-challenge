import AppContainer from "@components/container";
import { useParams } from "react-router-dom";
import { getComponentFromRoute, RouteKeys } from "./utils";

const AppRouter = ({ route }: { route: RouteKeys }) => {
  const Page = getComponentFromRoute(route);
  const props: any = useParams(); //As props could be any thing, this must be 'any'

  return (
    <AppContainer>
      <Page {...props}></Page>
    </AppContainer>
  );
};

export default AppRouter;
