import styles from "./pages.module.scss";

import { useState } from "react";
import Navigation from "@/components/func/Navigation";

export default function Profile() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return <div>Profile</div>;
}
