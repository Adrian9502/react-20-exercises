import React, { useEffect, useState } from "react";

function UseFetch(url, options = {}) {
  // 3 states
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(null);
  const [error, setError] = useState(null);
  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`Error: ${e}`);
      setPending(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
}

export default UseFetch;
