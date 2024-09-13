import styles from "./comps.module.scss";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div>
      <Tabs defaultValue={activeTab} className="w-[500px]">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="/main/dashboard"
            onClick={() => navigate("/main/dashboard")}
          >
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            value="/main/buckets"
            onClick={() => navigate("/main/buckets")}
          >
            Buckets
          </TabsTrigger>
          <TabsTrigger value="/main/profile">Profile</TabsTrigger>
          <TabsTrigger
            value="logout"
            onClick={() => navigate("/")}
            style={{
              color: "rgba(255, 0, 0, 0.85)",
              backgroundColor: "rgba(255, 0, 0, 0.15)",
            }}
          >
            Log Out
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
