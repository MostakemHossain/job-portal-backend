import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    fullName: z.string({
      required_error: "Full Name is Required"
    }),
    email: z.string({
      required_error: "Email is Required"
    }).email("Invalid email format"),
    phoneNumber: z.string({
      required_error: "Phone Number is Required"
    }),
    password: z.string({
      required_error: "Password is Required"
    }),
    role: z.enum(["student", "recruiter"], {
      required_error: "Role is Required"
    }),
  }),
});

export const userValidation={
    createUserValidationSchema
}
