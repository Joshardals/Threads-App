import * as z from "zod";

export type ThreadValidationType = {
  thread: string;
  accountId: string;
};

export type CommentValidationType = {
  thread: string;
};

export const ThreadValidation: z.ZodType<ThreadValidationType> = z.object({
  thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
  accountId: z.string(),
});

export const CommentValidation: z.ZodType<CommentValidationType> = z.object({
  thread: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
});
