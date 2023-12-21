import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, Dispatch } from "../store";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
