// export interface ImmutableObjectMixin<T> {

//     // set w/ overloads
//     set<TValue>(property: string, value: TValue): ImmutableObject<T>;
//     set<K extends keyof T>(propPath: [K], value: T[K]): ImmutableObject<T>;
//     set<K extends keyof T, L extends keyof T[K]>(propPath: [K, L], value: T[K][L]): ImmutableObject<T>;
//     set<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(propPath: [K, L, M], value: T[K][L][M]): ImmutableObject<T>;
//     set<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(propPath: [K, L, M, N], value: T[K][L][M][N]): ImmutableObject<T>;
//     set<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(propPath: [K, L, M, N, O], value: T[K][L][M][N][O]): ImmutableObject<T>;
//     set<TValue>(propPath: string[], value: TValue): ImmutableObject<T>;

//     // get w/ overloads
//     get<K extends keyof T>(property: K): T[K];
//     get<K extends keyof T>(property: K, defaultValue: T[K]): T[K];
//     get<K extends keyof T>(propPath: [K]): T[K];
//     get<K extends keyof T>(propPath: [K], defaultValue: T[K]): T[K];
//     get<K extends keyof T, L extends keyof T[K]>(propPath: [K, L]): T[K][L];
//     get<K extends keyof T, L extends keyof T[K]>(propPath: [K, L], defaultValue: T[K][L]): T[K][L];
//     get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(propPath: [K, L, M]): T[K][L][M];
//     get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(propPath: [K, L, M, N]): T[K][L][M][N];
//     get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(propPath: [K, L, M, N], defaultValue: T[K][L][M][N]): T[K][L][M][N];
//     get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(propPath: [K, L, M, N, O]): T[K][L][M][N][O];
//     get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(propPath: [K, L, M, N, O], defaultValue: T[K][L][M][N][O]): T[K][L][M][N][O];
//     get(propPath: string[]): any;
//     get<TValue>(propPath: string[], defaultValue: TValue): TValue;

//     // update w/ overloads
//     update<K extends keyof T>(property: K, updaterFunc: (value: T[K]) => any): ImmutableObject<T>;
//     update<K extends keyof T>(propPath: [K], updaterFunc: (value: T[K]) => any): ImmutableObject<T>;
//     update<K extends keyof T, L extends keyof T[K]>(propPath: [K, L], updaterFunc: (value: T[K][L]) => any): ImmutableObject<T>;
//     update<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(propPath: [K, L, M], updaterFunc: (value: T[K][L][M]) => any): ImmutableObject<T>;
//     update<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(propPath: [K, L, M, N], updaterFunc: (value: T[K][L][M][N]) => any): ImmutableObject<T>;
//     update<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(propPath: [K, L, M, N, O], updaterFunc: (value: T[K][L][M][N][O]) => any): ImmutableObject<T>;
//     update<TValue>(propPath: string[], updaterFunc: (value: TValue) => any): ImmutableObject<T>;

//     merge(obj: Partial<T>): ImmutableObject<T>;
//     mergeTollerant<Z>(obj: Z): ImmutableObject<T & Z>;
//     asMutable(): ImmutableObject<T>;
//     toJS(): T;
// }

// export type ImmutableObject<T> = T & ImmutableObjectMixin<T>;
