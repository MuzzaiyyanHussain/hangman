const BODY_PARTS = [
  // Each body part corresponds to a wrong guess
  <div
    key="head"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />,
  <div
    key="body"
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      borderRadius: "100%",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  />,
  <div
    key="right-arm"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      borderRadius: "100%",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />,
  <div
    key="left-arm"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      borderRadius: "100%",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />,
  <div
    key="right-leg"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      borderRadius: "100%",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />,
  <div
    key="left-leg"
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      borderRadius: "100%",
      position: "absolute",
      top: "210px",
      right: "0",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />,
];

interface HangmanDrawingProps {
  numberOfGuesses: number;
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* Dynamically render the body parts based on incorrect guesses */}
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
}
