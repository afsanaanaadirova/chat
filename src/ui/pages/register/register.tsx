import Robot from "/images/robot.png";
import Logo from "/images/logo.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/ui/shared/Button";
import Input from "@/ui/shared/Input";
import { registerApi } from "@/app/api/authApi";
import { toastNotification } from "@/app/utils/toastNotification";
import Image from "@/ui/shared/Image";
import { registerMigration } from "@/data/migration/register.migration";
import { RegisterModel } from "@/data/model/registerModel.model";
import { registerSchema } from "@/data/schemas/formValidations/registerSchema";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const registerapi = registerApi();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModel>({
    resolver: zodResolver(registerSchema),
  });

  const submitHandler = (data: RegisterModel) => {
    registerapi.mutate(registerMigration.modelToDSO(data), {
      onSuccess() {
        toastNotification("success", "Registration completed successfully");
        navigate("/");
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
        <h2>Sign Up</h2>
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
          />
          <Input
            name="name"
            label="name"
            title="Name"
            error={errors.name}
            register={register}
          />
          <Input
            name="password"
            label="Password"
            title="Password"
            error={errors.password}
            register={register}
          />
          <Button
            type="submit"
            className="border bg-blue-600  text-white py-3 rounded-xl gap-3 w-full"
          >
            Log in
          </Button>
          <Link to={"/"} className="text-[#15ABFF]">
            Already have an account? Log In
          </Link>
        </form>
      </div>
      <div>
        <img src={Robot} alt="robot image" />
      </div>
    </div>
  );
};

export default Register;
