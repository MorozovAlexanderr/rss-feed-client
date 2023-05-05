import { useCallback } from 'react';
import * as yup from 'yup';

type ValidationResult<T> = {
  values: T;
  errors: Record<string, { type: string; message: string }>;
};

type ValidationSchema<T> = yup.Schema<T>;

export const useYupValidationResolver = <T extends Record<string, unknown>>(
  validationSchema: ValidationSchema<T>
) =>
  useCallback(
    async (data: T): Promise<ValidationResult<T>> => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {} as T,
          errors: errors.inner.reduce(
            (
              allErrors: Record<string, { type: string; message: string }>,
              currentError: any
            ) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
