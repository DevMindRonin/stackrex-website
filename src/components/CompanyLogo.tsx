import { data } from "../data.ts";
import "./../styles/styles.css";

const CompanyLogo = () => {
  return (
    <div className="d-flex flex-row justify-content-center flex-wrap mt-5">
      {data.map((image, id) => {
        return (
          <div key={id}>
            <img
              src={image.logo}
              alt=""
              className="img-fluid ps-4 pe-4 pb-5 m-sm-3 m-md-0 m-lg-4 logo-enlarge"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyLogo;
