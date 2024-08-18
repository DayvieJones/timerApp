import { ErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unesxpected error has orrured.</p>
      <p>
        <i>{error.status}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
