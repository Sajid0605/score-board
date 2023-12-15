import { forwardRef, useEffect, useState } from "react";

import {
  Badge,
  ScoreSpan,
  TextLabel,
  UserImg,
  UserImgBlock,
  UserName,
  UserPoints,
  UserRow,
} from "./RowStyle";

interface IProps {
  text: string;
  picture: string;
  score: number;
  index: number;
}
const Row = forwardRef(({ text, picture, score, index }: IProps, ref: any) => {
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = score - 20;
    const end = score;
    if (start === end) return;
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start));
      if (start === end) clearInterval(timer);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [score]);
  
  return (
    <UserRow ref={ref}>
      <Badge>{index + 1}</Badge>
      <UserImgBlock>
        <UserImg
          style={{
            backgroundImage: `url('images/${picture}')`,
          }}
        />
      </UserImgBlock>
      <UserName>{text}</UserName>
      <UserPoints>
        <ScoreSpan>{count}</ScoreSpan>
        <TextLabel>pt</TextLabel>
      </UserPoints>
    </UserRow>
  );
});

export default Row;
