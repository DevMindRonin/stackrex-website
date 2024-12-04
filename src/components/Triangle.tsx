import "./../styles/styles.css";

interface Position {
  top: string;
  left: string;
  speed: string;
}

const Triangle = ({ top, left, speed }: Position) => {
  return (
    <div
      className="triangle"
      style={
        {
          "--triangle-top": top,
          "--triangle-left": left,
          "--triangle-speed": speed,
        } as React.CSSProperties
      }
    ></div>
  );
};

export default Triangle;
