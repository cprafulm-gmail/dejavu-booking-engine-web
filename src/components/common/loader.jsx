import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center m-5">
      <div className="spinner-border" role="status">
        <span className="sr-only">{"_loadingText"}</span>
      </div>
    </div>
  );
};

export default Loader;
