import data from "../data.ts";
import "../styles/styles.css";

const CompanyLogo = () => {
  return (
    <div className="logo-image ">
      {data.map((image, id) => {
        return (
          <div key={id}>
            <img src={image.logo} alt="" className="logo-image-one" />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyLogo;
