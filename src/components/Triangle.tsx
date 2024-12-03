import "./../styles/styles.css";

interface Position {
  top: string;
  left: string;
}

const Triangle = ({ top, left }: Position) => {
  return (
    <div
      className="triangle"
      style={
        {
          "--triangle-top": top,
          "--triangle-left": left,
        } as React.CSSProperties
      }
    ></div>
  );
};

export default Triangle;
