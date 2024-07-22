import { useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError()
  return (
    <>
      <h1>oops</h1>
      <h2>something went wrong</h2>
      <span>{error.status} : </span>
      <span>{error.statusText}</span>
    </>
  );
};

export default Error
