import React from "react";
import notes from "../notes";
import Card from "./Card";

function NoteList() {
  return notes.map(function (item) {
    //return eachContent.content.toString(0, 100);
    return (
      <Card key={item.key} title={item.title} content={item.content}></Card>
    );
  });
}
export default NoteList;
