import Theme from '../styles/theme';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Experience/Experience.css';
import '../components/Projects/ProjectsStyles.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 