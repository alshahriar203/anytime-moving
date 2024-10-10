import Headroom from 'react-headroom';
import Navbar from './Navbar';

export default (Component) => (props) =>
  (
    <>
      <Headroom tag="header" className="page-header">
        <nav className="max:show">
          <Navbar />
        </nav>
      </Headroom>
      <Component {...props} />
    </>
  );
