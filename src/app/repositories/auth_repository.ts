import { loginService, registerService } from "@/app/services/auth.service";
import { LoginModel } from "@/data/model/loginModel.model";
import { RegisterModel } from "@/data/model/registerModel.model";

const authRepository = {
  login(appeal: LoginModel): Promise<any> {
    return loginService(appeal);
  },
  register(appeal: RegisterModel): Promise<any> {
    return registerService(appeal);
  },
};

export default authRepository;
