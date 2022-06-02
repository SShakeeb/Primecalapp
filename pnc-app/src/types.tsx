export type APIResult<T = null> =
  | Readonly<{
      data: T | null;
      error: null;
    }>
  | Readonly<{
      data: null;
      error: { message: string };
    }>;
export type SumResponse = Readonly<{
    result: number;
    isPrime: boolean;
}> | null;
export type CheckPrimeResponse = Readonly<{
    isPrime: boolean;
}> | null;