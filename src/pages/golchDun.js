import { useState, useEffect } from "react";

const Golch = () => {
  const [numberOfStudies, setNumberofStudies] = useState([1]);

  return (
    <div>
      <div>Golch dun</div>
      <div>
        {numberOfStudies.map((study) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default Golch;
