import z from "zod";

export const LoginFormSchema = z.object({
    email: z.email(),
    password: z.string().min(1, "This field is required."),

});

export const avatar = z.file().max(2*1024*1024, "File size must be under 2Mb.").mime(["image/png", "image/jpeg", "image/jpg", "image/webp", "image/svg+xml"], "Unsupported File Format.")

const avatarSchema = z.object({
    file: avatar,
    preview: z.string()
})

export const RegisterFormSchema = z.object({
    full_name: z.string().min(1, "This field is required."),
    email: z.email(),
    username:z.string().min(1, "This field is required."),
    avatar: avatarSchema.nullable(),
    password:z.string().min(8, "This field is required."),
    password2:z.string().min(8, "This field is required."),
}).refine(data: => data.password === data.password2, {message: "Passwords do not match.", path: ["password2"],});

export type RegisterFormDataType = z.infer<typeof RegisterFormSchema>


export const ProfileFormSchema = z.object({
    full_name: z.string().min(1, "This field is required."),
    email: z.email(),
    username:z.string().min(1, "This field is required."),
    avatar: avatarSchema.nullable(),
    password:z.string(),
    password2:z.string(),
}).refine(data: => data.password === data.password2, {message: "Passwords do not match.", path: ["password2"],});;

export type ProfileFormDataType = z.infer<typeof ProfileFormSchema>