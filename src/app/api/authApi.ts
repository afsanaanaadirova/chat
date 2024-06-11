import auth_repository from "@/app/repositories/auth_repository";
import { useMutation } from "@tanstack/react-query";
import { LoginDSO } from "@/data/dso/login.dso";
import { RegisterDSO } from "@/data/dso/register.dso"

export const loginApi = () => {
  return useMutation({
    mutationFn: (appeal: LoginDSO) => {
      return auth_repository.login(appeal);
    },
    onSuccess: (_data, _variables) => {},
  });
};

export const registerApi = () => {
  return useMutation({
    mutationFn: (appeal: RegisterDSO) => {
      return auth_repository.register(appeal);
    },
    onSuccess: (_data, _variables) => {},
  });
};
