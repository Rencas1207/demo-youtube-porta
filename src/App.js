import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './GlobalStyles';

// Components
import { Main } from './components/Main';
import { AboutPage } from './components/AboutPage';
import { BlogPage } from './components/BlogPage';
import { WorkPage } from './components/WorkPage';
import { MySkillsPage } from './components/MySkillsPage';
import { AnimatePresence } from 'framer-motion';
import { SoundBar } from './subComponents/SoundBar';

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/work" component={WorkPage} />
            <Route path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
