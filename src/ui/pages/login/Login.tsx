import Robot from "/images/robot.png";
import { useForm } from "react-hook-form";
import Logo from "/images/logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/ui/shared/Button";
import Input from "@/ui/shared/Input";
import { loginApi } from "@/app/api/authApi";
import { toastNotification } from "@/app/utils/toastNotification";
import { loginSchema } from "@/data/schemas/formValidations/loginSchema";
import { loginMigration } from "@/data/migration/login.migration";
import Image from "@/ui/shared/Image";
import { LoginDSO } from "@/data/dso/login.dso";
import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "@/app/helpers/cookies";
const Login = () => {
  const logIn = loginApi();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDSO>({
    resolver: zodResolver(loginSchema),
  });
  const submitHandler = (data: LoginDSO) => {
    logIn.mutate(loginMigration.modelToDSO(data), {
      onSuccess(res) {
        if (res.authToken !== undefined) {
          setCookie("authToken", res.authToken, 10);
        }
        navigate("/chat");
        toastNotification("success", "Login successfully");
      },
      onError(error: any) {
        toastNotification("error", error.response.data.message);
      },
    });
  };

  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center flex-col w-1/2">
        <Image
          className="object-contain w-[50px] h-[50px]"
          url={Logo}
          name="logo"
        />
        <h2>Log In</h2>
        <form
          className="flex gap-4 flex-col md:w-1/2 w-full pb-6 md:pt-8"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Input
            name="email"
            label="Email"
            title="Email"
            error={errors.email}
            register={register}
            className="w-full"
          />
          <Input
            name="password"
            label="Password"
            title="Password"
            type="password"
            error={errors.password}
            register={register}
          />

          <Button className="border bg-blue-600  text-white py-3 rounded-xl gap-3 w-full">
            Log in
          </Button>
          <Link to={"/register"} className="text-[#15ABFF]">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
      <div>
        <img src={Robot} alt="robot image" />
      </div>
    </div>
  );
};

export default Login;
