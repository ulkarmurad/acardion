import { useState } from "react";

export default function Terminal() {
  const [data, setData] = useState([
    { title: "Accordion#1", content: "some content#1" },
    { title: "Accordion#2", content: "some content#2" },
    { title: "Accordion#3", content: "some content#3" },
  ]);

  const[idk, setIdk] = useState(null)

  function accor(contenti) {
   setIdk(contenti === idk ? null : contenti)
   
  }

  return (
    <>
      {data.map((el) => {
        console.log(el);
        return (
          <div
            style={{ border: "1px solid green" }}
            key={el.title}
            onClick={() => accor(el.content)}
          >
            <p>{el.title}</p>
            {el.content == idk && <p>{el.content}</p> }
          </div>
        );
      })}
    </>
  );
}
