import React from "react";

export default function Button({ Label, id }) {
  // id 값에 따라 클래스 변수 설정
  const buttonClass = id === "blue" ? "blue_button" : "white_button";

  return (
    <div className={buttonClass}>
      <div className="flexbox">
        <div>{Label}</div>
      </div>
    </div>
  );
}
