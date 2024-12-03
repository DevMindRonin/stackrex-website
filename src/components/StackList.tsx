import { stack } from "../data.ts";
import "./../styles/styles.css";
const StackList = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap flex-row mt-5">
      {stack.map((technology, id) => {
        return (
          <div key={id}>
            <img
              src={technology.stackname}
              alt=""
              className="img-fluid stack-img ps-3 pe-3 pb-5 m-sm-3 m-md-0 m-lg-4"
            />
          </div>
        );
      })}
    </div>
  );
};

export default StackList;
