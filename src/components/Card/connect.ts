import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { selectPocemonList } from "../../app/selectors/home";
import { fetchPocemonList } from "../../app/slices/homeSlices/homeSlices";

const useConnect = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectPocemonList);

  useEffect(() => {
    dispatch(fetchPocemonList());
  }, [dispatch]);

  return { data };
};
