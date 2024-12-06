import { referencies } from "./../data.ts";

const Referencies = () => {
  return (
    <div className="mb-5">
      {referencies.map((reference) => {
        return (
          <p>
            <div>{reference.text}</div>
            <div>{reference.author}</div>{" "}
          </p>
        );
      })}
    </div>
  );
};

export default Referencies;
