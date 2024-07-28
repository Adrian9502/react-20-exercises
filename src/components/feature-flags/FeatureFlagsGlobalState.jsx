import React, { useEffect, useState } from "react";
import { createContext } from "react";
import featureFlagsDataServiceCall from "./data";

export const FeatureFlagsContext = createContext(null);

function FeatureFlagsGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      // original service call
      const response = await featureFlagsDataServiceCall();
      setEnableFlags(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

export default FeatureFlagsGlobalState;
