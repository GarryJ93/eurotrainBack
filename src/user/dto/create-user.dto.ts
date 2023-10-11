export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  motivation: string;
  access: boolean;
  full_access: boolean;
}
