/* function Layout() {
  return <h1>Layout Component</h1>;
}

export default Layout; */

import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;