import React from "react";
import { Fragment } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import "./index.css";

interface loaderProps {
  loading?: any;
}

const Loader: React.FC<loaderProps> = ({ loading = false }) => {
  return (
    <Fragment>
      {loading && (
        <div className="flex-container overlay">
          <BeatLoader
            color="red"
            loading={loading}
            // css="overRideCss"
            size={30}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Loader;
