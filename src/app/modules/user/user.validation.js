import { z } from "zod";

const createUserValidationSchema = z.object({
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
  
});



const updateUserValidationSchema = z.object({
  body: z.object({
    fullName: z.string().optional(),
    email: z.string().email("Invalid email format").optional(),
    phoneNumber: z.string().optional(),
    profile: z.object({
      bio: z.string().optional(),
      skills: z.array(z.string()).optional(),
    }).optional(),
  }),
});


export const userValidation={
    createUserValidationSchema,
    updateUserValidationSchema,
}