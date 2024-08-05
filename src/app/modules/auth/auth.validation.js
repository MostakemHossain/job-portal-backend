import { z } from "zod";

const authValidationSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is Required"
    }).email("Invalid email format"),
    password: z.string({
      required_error: "Password is Required"
    }),
    role: z.enum(["student", "recruiter"], {
      required_error: "Role is Required"
    }),
  }),
});

export const authValidation={
    authValidationSchema
}
