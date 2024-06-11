import { z } from "zod";

const validateGmail = (email: string) => {
  if (!email.endsWith("@gmail.com")) {
    throw new Error("E-posta adresi bir Gmail adresi olmalıdır.");
  }
  return true;
};
const validatePassword = (value: string) => {
  if (value.length < 5) {
    throw new Error("Parola en az 5 karakterden oluşmalıdır.");
  }
  if (!/[A-Z]/.test(value)) {
    throw new Error("Parola en az bir büyük harf içermelidir.");
  }
  if (!/[\W_]/.test(value)) {
    throw new Error("Parola en az bir sembol içermelidir.");
  }
  return true;
};

export const loginSchema = z.object({
  email: z.string().min(1, "Bu xana doldurulmalıdır"),
  password: z.string().min(1, "Bu xana doldurulmalıdır"),
});

