
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
      <div>
        <Sidebar />
        <Outlet />
      </div>
    );
};

export default Layout;

Layout.loader = { ".jsx": "jsx" };