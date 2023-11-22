import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDisPatch, RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch: () => AppDisPatch = useDispatch;
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;
