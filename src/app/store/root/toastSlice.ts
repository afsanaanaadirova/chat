import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { EToast } from '@/data/enum/toast.enum'
import { TToast } from '@/ui/shared/Toast/TToast'

const initialState: { toastList: TToast[] } = {
    toastList: []
}

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        addToast: (state, action: PayloadAction<TToast>) => {
            state.toastList.push({ id: action.payload.id, message: action.payload.message, type: action.payload.type });
        },
        removeToast: (state) => {
            state.toastList.shift()
        }
    },
})

export const successToast = (message: string) => (dispatch: AppDispatch) => {
    const d = Date.now();
    const body = {
        id: d,
        message: message,
        type: EToast.SUCCESS
    }
    dispatch(addToast(body));
    setTimeout(() => dispatch(removeToast()), 5000);
};
export const errorToast = (message: string) => (dispatch: AppDispatch) => {
    const d = Date.now();
    const body = {
        id: d,
        message: message,
        type: EToast.ERROR
    }
    dispatch(addToast(body));
    setTimeout(() => dispatch(removeToast()), 5000);
};
export const infoToast = (message: string) => (dispatch: AppDispatch) => {
    const d = Date.now();
    const body = {
        id: d,
        message: message,
        type: EToast.INFO
    }
    dispatch(addToast(body));
    setTimeout(() => dispatch(removeToast()), 5000);
};

export const { addToast, removeToast } = toastSlice.actions

export default toastSlice.reducer