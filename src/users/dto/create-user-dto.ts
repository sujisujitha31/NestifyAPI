import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import isEmail from "validator/lib/isEmail";
export class CreateUSerDto {
    id: number
    @IsString()
    @IsNotEmpty({message:"caught empty string please give valid string"})
    name: string
    @IsEmail()
    email: string
    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], { message: "valid role required" })
    role: "INTERN" | "ENGINEER" | "ADMIN"


}