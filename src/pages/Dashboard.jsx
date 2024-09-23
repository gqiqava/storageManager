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
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [cards, setCards] = useState([
    {
      title: "All Buckets",
      description: "Card Description",
      content: "some content here",
      footer: "card footer",
      func: () => console.log(12),
      actionText: "+ Create New Bucket",
    },
    {
      title: "Usage",
      description: "Card Description",
      content: "some content here",
      footer: "card footer",
      func: () => console.log(12),
      actionText: "> Go to Analytics",
    },
    {
      title: "Total Objects",
      description: "Card Description",
      content: "some content here",
      footer: "card footer",
      func: () => console.log(12),
      actionText: "> Go to Object List",
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
                <div>
                  <Button onClick={card.func}>{card.actionText}</Button>
                </div>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
          </div>
        ))}
      </div>
      <div>asdasd</div>
    </div>
  );
}
