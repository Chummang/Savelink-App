import React, { useState } from "react";
import Link from "../Components/Link";
import AddLink from "../Components/AddLink";

export default function LinkPage() {
  //State
  const [data, setData] = useState([
    { name: "Google", link: "https://www.google.com.hk/" },
    { name: "Facebook", link: "https://www.Facebook.com/"},
    { name: "Youtube", link: "https://www.youtube.com/"},
  ]);

  // Vote Function
  const handleVote = (index, sign) => {
    setData((prevValue) => {
      let copyData = [...prevValue];
      sign === "+" ? copyData[index].vote++ : copyData[index].vote--;
      return copyData;
    });
  };



  //Delete function
  const handleDelete = (index) => {
    setData((prevValue) => {
      const copyData = [...prevValue];
      copyData.splice(index, 1);
      return copyData;
    });
  };

  return (
    <div>
      <h1 style={{ margin: "50px" }}>Save Link Application</h1>
      {data.map((obj, index) => (
        <Link
          name={obj.name}
          link={obj.link}
          vote={obj.vote}
          key={index}
          index={index}
          handleDelete={handleDelete}
          handleVote={handleVote}
        />
      ))}
      <AddLink
        addItem={(name, link) => {
          setData((prevValue) => [...prevValue, { name, link, vote: 0 }]);
        }}
      />
    </div>
  );
}