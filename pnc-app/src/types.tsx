export type APIResult<T = null, U = Record<string, unknown>> = Readonly<{
    data: T | null;
    error: ({ message: string; status?: number | null } & { [k in keyof U]: U[k] }) | null;
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
