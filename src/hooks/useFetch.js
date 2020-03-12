//Essentials
import { useState, useEffect } from "react";

//This component makes use of useState and useEffect to make HTTP Requests to the asigned URL and brings the result back

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        //Fetching the HTTP GET
        const res = await fetch(url, options);
        //Transforming the result into a JSON
        const json = await res.json();
        //Asigning result to state
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [options, url]);
  return { loading, result, error };
}
