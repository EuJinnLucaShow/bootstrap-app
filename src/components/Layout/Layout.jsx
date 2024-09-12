import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Loader from "../Loader/Loader";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <div className={styles.wrapperLink}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
