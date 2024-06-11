import {useLayoutEffect} from 'react'
import {useAppDispatch} from "@/app/hooks/useRedux.ts";
import {setHeaderContent, THeaderSlice} from "@/app/store/root/headerSlice.ts";
export function useHeaderContent({title, breadcrumbs}: THeaderSlice) {
const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(setHeaderContent({title, breadcrumbs}))
    }, []);
}
