import styles from "./pages.module.scss";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import Navigation from "@/components/func/Navigation";
export default function Landing() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <div className={styles.navigationTabs}>
        <Navigation></Navigation>
      </div>
      <Outlet />
    </div>
  );
}
