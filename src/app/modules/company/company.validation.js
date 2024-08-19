import { z } from "zod";

const companyRegistrationValidationSchema= z.object({
    body:z.object({
        name:z.string({
            required_error:"Company name is Required"
        })
    })
});
const companyUpdateValidationSchema= z.object({
        name:z.string({
            required_error:"Company name is Required"
           
        }).optional(),
        description:z.string({
           
        }).optional(),
        website:z.string({
            
        }).optional(),
        location:z.string({
            
        }).optional()
        
});

export const companyValidation={
    companyRegistrationValidationSchema,
    companyUpdateValidationSchema
}