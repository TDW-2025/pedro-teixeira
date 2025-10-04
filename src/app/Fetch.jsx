import React, { useState } from "react";

export default function Fetch({ url }) {
  const [greeting, setGreeting] = useState("");

  const handleClick = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setGreeting(data.greeting);
  };

  return (
    <div>
      <button onClick={handleClick}>Load Greeting</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}
