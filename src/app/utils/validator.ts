import { ZodType } from "zod";

//features
export const validator = <T, K>({ schema, response, onError, onSuccess }: { schema: ZodType<any>, response: T, onError?: (dto: T) => K, onSuccess: (dto: T) => K }) => {
    const validatedDTO = schema.safeParse(response);
    if (!validatedDTO.success) {
        console.error(validatedDTO.error);
        return onError?.(response) || response as unknown as K;
    }
    return onSuccess(validatedDTO.data)
}