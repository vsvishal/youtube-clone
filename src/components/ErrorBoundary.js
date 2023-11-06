import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorBoundary({ status }) {
  console.log("status ", status);
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.log("INSIDE ERROR BOUNDARY");
    if (error.status === 404) {
      return (
        <>
          <h1>{error.status}</h1>
          <div className="m-4 p-4 font-bold text-center">
            This page doesn't exist!
          </div>
        </>
      );
    }

    if (error.status === 401) {
      return (
        <>
          <h1>{error.status}</h1>
          <div>You aren't authorized to see this</div>
        </>
      );
    }

    if (error.status === 403) {
      return (
        <>
          <h1>{error.status}</h1>
          <div>You don’t have permission to access this resource</div>
        </>
      );
    }

    if (error.status === 503) {
      return (
        <>
          <div>{error.status}</div>
          <div>Looks like our API is down</div>
        </>
      );
    }

    if (error.status === 418) {
      return (
        <>
          <div>{error.status}</div>
          <div>🫖</div>
        </>
      );
    }
  }

  return (
    <>
      <div className="m-4 p-4 font-bold text-center">
        Oops!! Something went wrong
      </div>
    </>
  );
}

export default ErrorBoundary;
