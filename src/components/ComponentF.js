import React, { useContext } from "react";
import { UserContext, LanguageContext } from "../App";

const ComponentF = () => {
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);
  return (
    <>
      <p>
        {user.name}: {language}
      </p>
    </>
  );
};

export default ComponentF;
