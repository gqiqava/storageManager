import styles from "./pages.module.scss";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const [cards, setCards] = useState([
    {
      title: "All Buckets",
      description: "Card Description",
      content: "some content here",
      footer: "card footer",
    },
    {
      title: "Usage",
      description: "Card Description",
      content: "some content here",
      footer: "card footer",
    },
    {
      title: "Total Objects",
      description: "Card Description",
      content: "some content here",
      footer: "card footer",
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <div className={styles.dashCardContainer}>
        {cards.map((card) => (
          <div style={{ maxWidth: "25%", minWidth: "400px" }}>
            <Card>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>
                  Card Description Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Suscipit inventore laudantium illum dolor
                  quo laboriosam voluptatum tenetur consectetur! Quis ratione
                  delectus omnis error id debitis, illo odit! Inventore, minima
                  a.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
