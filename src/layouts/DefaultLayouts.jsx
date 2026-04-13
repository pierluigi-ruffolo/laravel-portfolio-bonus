import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayouts() {
  return (
    <>
      {" "}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayouts;
