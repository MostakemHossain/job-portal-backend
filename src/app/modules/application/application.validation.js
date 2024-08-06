import { z } from "zod";

export const updateStatusValidationSchema = z.object({
    body:z.object({
        status: z.enum(['pending', 'accepted', 'rejected'], {
            required_error: 'Status is required',
            invalid_type_error: 'Status must be one of "pending", "accepted", or "rejected"',
        })
    })
});

export const applicationValidation = {
    updateStatusValidationSchema
};
