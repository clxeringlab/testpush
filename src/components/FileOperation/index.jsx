import React, { Fragment, useState } from "react";
import DataUnit from "./DataUnit";

const FileOperation = () => {
  const [dataSourceFile, setDataSourceFile] = useState({});

  const handleChange = (e) => {
    let fileResource = e.target.files[0];
    setDataSourceFile(fileResource);
  };

  return (
    <Fragment>
      <input onChange={handleChange} type="file" />
      <DataUnit params={{ dataSourceFile: dataSourceFile }} />
    </Fragment>
  );
};

export default FileOperation;
