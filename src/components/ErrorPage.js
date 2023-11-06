import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-300">
      <h1>Oops !!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {error.status}: {error.statusText}
      </h3>
      <h3>{error}</h3>
      {/* <h4>{errorMsg}</h4> */}
    </div>
  );
}

export default ErrorPage;
