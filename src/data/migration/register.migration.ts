import { RegisterModel } from "../model/registerModel.model";
import { RegisterDSO } from "../dso/register.dso";

export const registerMigration = {
  dtoToModel: () => {
    //
  },
  modelToDSO: (model: RegisterModel): RegisterDSO => {
    return {
        name: model.name,
        email: model.email,
        password: model.password
    };
  },
};
