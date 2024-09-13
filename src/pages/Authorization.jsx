import styles from "./pages.module.scss";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export default function Authorization() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const auth = () => {
    console.log("auth");
    navigate("/main");
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authContetLeft}>
        <div style={{ display: "flex" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
          <p style={{ fontWeight: "700" }}>Company Name</p>
        </div>
        <div>
          <h2 style={{ marginBottom: "20px" }}>
            Scale Your Business with Reliable, Efficient, Secure Server Space
            and Storage
          </h2>
          <p>
            Solutions Discover flexible and affordable server hosting that grows
            with your needs. Whether you're a startup, developer, or enterprise,
            our state-of-the-art infrastructure provides you with
            high-performance, scalable server space and secure storage options.
            Maximize uptime, protect your data, and get 24/7 support to ensure
            your operations run smoothly—because your business deserves the
            best.
          </p>
        </div>
      </div>
      <div className={styles.authFormContainer}>
        <div style={{ width: "500px" }}>
          <h3>Authorization</h3>
          <p style={{ color: "#93939B", marginBottom: "16px" }}>
            Sign In with username and password
          </p>
          <Label htmlFor="username" style={{ color: "#93939B" }}>
            Username
          </Label>
          <Input
            style={{ marginBottom: "8px" }}
            onChange={(e) =>
              setForm((prevFrom) => ({ ...prevFrom, username: e.target.value }))
            }
          />
          <Label htmlFor="password" style={{ color: "#93939B" }}>
            Password
          </Label>
          <Input
            type="password"
            onChange={(e) =>
              setForm((prevFrom) => ({ ...prevFrom, password: e.target.value }))
            }
          />
          <Button
            style={{ width: "100%", marginTop: "24px" }}
            onClick={() => auth()}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
