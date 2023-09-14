import * as z from "zod";

export type UserValidationType = {
  profile_photo: string;
  name: string;
  username: string;
  bio: string;
};

export const UserValidation: z.ZodType<UserValidationType> = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
