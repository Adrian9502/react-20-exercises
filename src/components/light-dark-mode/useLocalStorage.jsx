import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      // Get the current value from localStorage
      const storedValue = localStorage.getItem(key);
      // If there's a stored value, parse it; otherwise, use the default value
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } catch (e) {
      // Log the error and fall back to default value
      console.log("Error reading from localStorage:", e);
      return defaultValue;
    }
  });

  useEffect(() => {
    // Store the value in localStorage whenever it changes
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Log the error if setting to localStorage fails
      console.log("Error writing to localStorage:", e);
    }
  }, [key, value]);

  return [value, setValue];
}
