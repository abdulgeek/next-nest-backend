export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly address?: string;
  readonly phoneNumber?: string;
  readonly role: string;
  readonly profilePicture?: string;
}
