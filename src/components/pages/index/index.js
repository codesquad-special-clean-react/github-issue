import { useState } from "react";
import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
import Toolbar from "../../organisms/toolbar";
import { PATHS } from "../../../constants/paths";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "../../../routes";

const Index = () => {
  const [openNewLabel, setOpenNewLabel] = useState(false);

  return (
    <main className={styles.index}>
      <Header />
      <Main>
        <Toolbar setOpenNewLabel={setOpenNewLabel} />
        <Switch>
          {ROUTES.map(({ path, component: Component }) => {
            return (
              <Route
                path={path}
                render={() => <Component openNewLabel={openNewLabel} />}
                key={path}
              />
            );
          })}
          <Redirect path="*" to={PATHS.LABELS_PATH} />
        </Switch>
      </Main>
    </main>
  );
};

export default Index;
