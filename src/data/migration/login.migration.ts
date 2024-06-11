import { LoginDSO } from "@/data/dso/login.dso"
import { LoginModel } from "../model/loginModel.model";

export const loginMigration = {
  dtoToModel: () => {
    //
  },
  modelToDSO: (model: LoginModel): LoginDSO => {
    return {
      email: model.email,
      password: model.password,
    };
  },
};
