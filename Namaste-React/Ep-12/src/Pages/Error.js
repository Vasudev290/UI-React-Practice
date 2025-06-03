import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Ooops!!!!</h2>
            <h3>Something went wrong </h3>
            <h4>Try Again Later!</h4>
            <h4>{error.status} : {error.statusText}</h4>
        </div>
    )
};

export default Error;
