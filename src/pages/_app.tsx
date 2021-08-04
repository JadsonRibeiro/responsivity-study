import ReactModal from 'react-modal';

import '../styles/global.css';
import '../styles/responsive.css';

// import '../styles/modal.css';

ReactModal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
