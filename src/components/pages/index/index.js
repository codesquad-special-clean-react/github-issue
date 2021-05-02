import { useState } from "react";
import styles from "./index.module.css";
import Header from "../../layouts/header";
import Main from "../../layouts/main";
import Toolbar from "../../organisms/toolbar";
import { PATHS } from "../../../constants/paths";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { MILESTONE_EDIT_URL_PATTERN } from "../../../utils/regex";

const Index = () => {
  const [openNewLabel, setOpenNewLabel] = useState(false);
  const { pathname } = useLocation();

  const isToolbar =
    [PATHS.LABELS_PATH, PATHS.MILESTONES_PATH].includes(pathname) ||
    MILESTONE_EDIT_URL_PATTERN.test(pathname);

  return (
    <main className={styles.index}>
      <Header />
      <Main>
        {isToolbar && <Toolbar setOpenNewLabel={setOpenNewLabel} />}
        <Switch>
          {ROUTES.map(({ path, component: Component, childRoutes }) => {
            return (
              <Route
                path={path}
                render={() => (
                  <Component
                    openNewLabel={openNewLabel}
                    childRoutes={childRoutes}
                  />
                )}
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
