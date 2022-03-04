import React, { useState, useCallback, useEffect, useMemo } from "react";
import Carousel from "react-elastic-carousel";
import { Paper, Button, Typography } from "@mui/material";

function CardSlider(props) {
  const items = useMemo(
    () => [
      {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
      },
      {
        name: "Random Name #2",
        description: "Hello World!",
      },
    ],
    []
  );
  const [activeChild, setActiveChild] = useState(0);

  const changeChild = useCallback(
    (e) => {
      console.log(e.key);
      if (e.key === "ArrowLeft") {
        // If supposed previous child is < 0 set it to last child
        setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
        // console.log(activeChild)
      } else if (e.key === "ArrowRight") {
        // If supposed next child is > length -1 set it to first child
        setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
        // console.log(activeChild)
      }
    },
    [items.length]
  );
  console.log(activeChild);
  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });

  return (
    <Carousel
      index={activeChild} // <-- This controls the activeChild
      autoPlay={false}
    >
      {items.map((item, i) => (
        // <Item key={i} item={items[activeChild]} />
        <Paper style={{ width: "600px", marginLeft: "600px" }} >
          <h2>{items[activeChild].name}</h2>
          <h2>{items[activeChild].description}</h2>

          <Button className="CheckButton">Check it out!</Button>
        </Paper>
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper style={{ width: "600px", marginLeft: "600px" }}>
      <h2>{props.item.name}</h2>
      <h2>{props.item.description}</h2>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default CardSlider;
