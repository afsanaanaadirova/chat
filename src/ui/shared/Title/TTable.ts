import { PropsWithChildren, ReactNode } from "react";
import { ETable } from "../Table/e_table";

type THeadDataType = {
  id: number;
  name?: string;
  width?: string;
  className?: string;
};

export type TRTDType = PropsWithChildren<{
  className?: string;
}>;

export type THeadType = {
  headclassName?:string,
  data?: THeadDataType[];
};

export type TTable = PropsWithChildren<{
  tHeadData?: THeadDataType[];
  tableData?: Record<string, unknown>[] //tableDataType;
  state?: ETable;
  title?: ReactNode;
  className?:string;
  tHeadClassName?:string
}>;

export type TTitleData = PropsWithChildren<{
  className?: string;
}>;
