import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { lightTheme } from 'src/styles/theme';
import {ThemeProvider} from 'styled-components';

const Example = lazy(() => import('src/pages/Example'));
const GenericNotFound = lazy(() => import('src/pages/GenericNotFound'));

const Routes: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
  <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Example} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
    </ThemeProvider>
  );
};

export default Routes;
