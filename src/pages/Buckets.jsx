import styles from "./pages.module.scss";

import { useState } from "react";
import Navigation from "@/components/func/Navigation";

export default function Buckets() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return <div>Buckets</div>;
}
