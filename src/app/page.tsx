"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const data = await axios.get("/api");
        console.log("fetched data: ", data);
        // setNotes();
      } catch (err) {
        console.log("the error on client is: ", err);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div>
      <pre>hello notes</pre>
      {/* {notes?.map((note) => (
        <div key={note.id}>
          <p>{note.content}</[]>
        </div>
      ))} */}
    </div>
  );
}
