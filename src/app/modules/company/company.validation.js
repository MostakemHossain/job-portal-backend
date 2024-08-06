import { z } from "zod";

const companyRegistrationValidationSchema= z.object({
    body:z.object({
        name:z.string({
            required_error:"Company name is Required"
        })
    })
});

export const companyValidation={
    companyRegistrationValidationSchema
}