/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
