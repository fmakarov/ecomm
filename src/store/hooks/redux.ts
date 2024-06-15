import { AppDispatch } from "../store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook = () => useDispatch