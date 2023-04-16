import { IsNotEmpty, IsString, MaxLength, MinLength,  } from "class-validator";

export class AddTodoDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
      message: "Name is too short...minimum length is 6"
  })
  @MaxLength(10, {
      message: "Name is too long...maximum length is 10"
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10,{
      message: "Description is too short...minimum length is 10"
  })
  description: string;

}