/**
 * Layout component that wraps the entire application structure.
 * It includes a persistent header, footer, and renders the nested route content using <Outlet />.
 *
 * @component
 * @returns {JSX.Element}
 */

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
