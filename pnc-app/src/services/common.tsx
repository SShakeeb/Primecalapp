import type { AxiosError } from "axios";
const INVALID_NUMBERS = "Invalid Character are in query parameters.";
const UNEXPECTED_ERROR = "An unexpected error occurred";
const HTTP_INTERNAL_SERVER_ERROR = 500;

export function getErrorStatus(error: AxiosError): number | null {
    return error.response?.status ?? null;
}

export function getErrorMessage(error: AxiosError): string {
    if (getErrorStatus(error) !== HTTP_INTERNAL_SERVER_ERROR) {
        return INVALID_NUMBERS;
    }
    return UNEXPECTED_ERROR;
  }
