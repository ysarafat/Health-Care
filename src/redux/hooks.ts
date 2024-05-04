import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
// debounce hook
export const useDebounce = ({
  searchQuery,
  delay,
}: {
  searchQuery: string;
  delay: number;
}) => {
  const [debounceValue, setDebounceValue] = useState<string>(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchQuery);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, delay]);
  return debounceValue;
};
