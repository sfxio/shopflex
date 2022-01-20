export type AsyncToRes<R> = Promise<[null, R]> | Promise<[Error, null]>
