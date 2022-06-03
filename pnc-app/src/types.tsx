export type APIResult<T = null> =
  | Readonly<{
      data: T | null;
      error: null;
    }>
  | Readonly<{
      data: null;
      error: { message: string };
    }>;

export type APIResponse = Readonly<{
    result?: number;
    isPrime: boolean;
}> | null;

export type OutputModal = Readonly<{
    result?: number;
    isPrime: boolean;
    show: boolean;
    handleClose: Function;
  }>;
  