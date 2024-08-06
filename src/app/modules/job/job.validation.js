import { z } from "zod";

const postJobValidationSchema = z.object({
  body:z.object({
    title: z.string({
      required_error: 'Job Title is Required',
    }),
    description: z.string({
      required_error: 'Job description is Required',
    }),
    requirement: z.array(z.string()).optional(),
    salary: z.number({
      required_error: 'Job Salary is Required',
    }).min(0, 'Salary must be a positive number'),
    location: z.string({
      required_error: 'Job Location is Required',
    }),
    jobType: z.string({
      required_error: 'Job Type is Required',
    }),
    position: z.number({
      required_error: 'Experience level is Required',
    }).int().min(0, 'Experience level must be a non-negative integer'),
    experienceLevel: z.number({
      required_error: 'Experience Level is Required',
    }).int().min(0, 'Experience Level must be a non-negative integer'),
    company: z.string({
      required_error: 'Company is Required',
    }), 
  })
 
});

export const jobValidation = {
  postJobValidationSchema,
};
