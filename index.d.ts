declare namespace EasyImmutable {

    export interface IObject<T> {
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<TValue>(path: string, value: TValue): ImmutableObject<T>;
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<K extends keyof T>(path: [K], value: T[K]): ImmutableObject<T>;
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<K extends keyof T, L extends keyof T[K]>(path: [K, L], value: T[K][L]): ImmutableObject<T>;
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(path: [K, L, M], value: T[K][L][M]): ImmutableObject<T>;
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(path: [K, L, M, N], value: T[K][L][M][N]): ImmutableObject<T>;
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(path: [K, L, M, N, O], value: T[K][L][M][N][O]): ImmutableObject<T>;
        /**
            * Sets value at a given path, and returns a new ImmutableObject
            * @param path The path of the property to set
            * @param value Value to set at the given path
            * @return Returns new ImmutableArray
            */
        set<TValue>(path: string[], value: TValue): ImmutableObject<T>;

        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get<K extends keyof T>(property: K): T[K];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<K extends keyof T>(property: K, defaultValue: T[K]): T[K];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get<K extends keyof T>(path: [K]): T[K];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<K extends keyof T>(path: [K], defaultValue: T[K]): T[K];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K]>(path: [K, L]): T[K][L];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K]>(path: [K, L], defaultValue: T[K][L]): T[K][L];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(path: [K, L, M]): T[K][L][M];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(path: [K, L, M], defaultValue: T[K][L][M]): T[K][L][M];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(path: [K, L, M, N]): T[K][L][M][N];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(path: [K, L, M, N], defaultValue: T[K][L][M][N]): T[K][L][M][N];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(path: [K, L, M, N, O]): T[K][L][M][N][O];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(path: [K, L, M, N, O], defaultValue: T[K][L][M][N][O]): T[K][L][M][N][O];
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get(path: string): any;
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<TValue>(path: string, defaultValue: TValue): TValue;
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @return Returns the resolved value
            */
        get(path: string[]): any;
        /**
            * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used in its place
            * @param path The path of the property to get
            * @param defaultValue The value returned if the resolved value is undefined
            * @return Returns the resolved value
            */
        get<TValue>(path: string[], defaultValue: TValue): TValue;

        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<K extends keyof T>(property: K, updaterFunc: (value: T[K]) => any): ImmutableObject<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<K extends keyof T>(path: [K], updaterFunc: (value: T[K]) => any): ImmutableObject<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<K extends keyof T, L extends keyof T[K]>(path: [K, L], updaterFunc: (value: T[K][L]) => any): ImmutableObject<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(path: [K, L, M], updaterFunc: (value: T[K][L][M]) => any): ImmutableObject<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(path: [K, L, M, N], updaterFunc: (value: T[K][L][M][N]) => any): ImmutableObject<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(path: [K, L, M, N, O], updaterFunc: (value: T[K][L][M][N][O]) => any): ImmutableObject<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableObject
            */
        update<TValue>(path: string[], updaterFunc: (value: TValue) => any): ImmutableObject<T>;
        /**
            * Recursively merges own and inherited enumerable properties of source
            * objects into the destination object, skipping source properties that resolve
            * to `undefined` and throwing if source object keys are not found on target.
            * Use mergeTollerant for greater flexibility.
            * @param sources The source object(s)
            * @return Returns new ImmutableObject
            */
        merge(...sources: Partial<T>[]): ImmutableObject<T>;
        /**
            * Like merge except accepts source objects that do not share common keys with target.
            * Use merge for more strict merging.
            * @param sources The source object(s)
            * @return Returns new ImmutableObject
            */
        mergeTollerant<TSource>(source: TSource): ImmutableObject<T & TSource>;
        /**
            * Like merge except accepts source objects that do not share common keys with target.
            * Use merge for more strict merging.
            * @param sources The source object(s)
            * @return Returns new ImmutableObject
            */
        mergeTollerant<TSource1, TSource2>(source1: TSource1, source2: TSource2): ImmutableObject<T & TSource1 & TSource2>;
        /**
            * Like merge except accepts source objects that do not share common keys with target.
            * Use merge for more strict merging.
            * @param sources The source object(s)
            * @return Returns new ImmutableObject
            */
        mergeTollerant<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ImmutableObject<T & TSource1 & TSource2 & TSource3>;
        /**
            * Like merge except accepts source objects that do not share common keys with target.
            * Use merge for more strict merging.
            * @param sources The source object(s)
            * @return Returns new ImmutableObject
            */
        mergeTollerant<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ImmutableObject<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
            * Like merge except accepts source objects that do not share common keys with target.
            * Use merge for more strict merging.
            * @param sources The source object(s)
            * @return Returns new ImmutableObject
            */
        mergeTollerant(...sources: any[]): ImmutableObject<T & any>;
        /**
            * Converts to mutable ImmutableObject, i.e. Immutable methods are still available,
            * but mutations are allowed until another ImmutableObject method is called
            * @return Returns new ImmutableObject
            */
        asMutable(): ImmutableObject<T>;
        /**
            * Converts ImmutableObject to plain-old JavaScript
            * @return Returns object
            */
        toJS(): T;
        /**
            * Performs a deep comparison between this and the given argument
            * @param comparison The values to compare with this
            * @return boolean
            */
        equals(comparison: any): boolean;
        /**
            * Returns a new ImmutableArray containing the values of the object's keys
            *
            * NOTE: If using TypeScript, and no type argument is explicitly passed to
            * the toArray generic, this method will essentially rerturn a tuple, which
            * is strictly typed to allow only the values found in your array. For a less
            * strictly typed array, pass a type argument, e.g. toArray<string | number>()
            * @return Returns new ImmutableArray
            */
        toArray<K extends keyof T>(): ImmutableArray<T[K]>;
        /**
            * Returns a new ImmutableArray containing the values of the object's keys
            *
            * NOTE: If using TypeScript, and no type argument is explicitly passed to
            * the toArray generic, this method will essentially rerturn a tuple, which
            * is strictly typed to allow only the values found in your array. For a less
            * strictly typed array, pass a type argument, e.g. toArray<string | number>()
            * @return Returns new ImmutableArray
            */
        toArray<TTypes>(): ImmutableArray<TTypes>;
    }

    interface IArray<T> {
        /**
            * Returns a new ImmutableArray with elements inserted at the end of the array
            * @param items New elements of the Array
            * @return Returns new ImmutableArray
            */
        push(...items: T[]): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray with the last element removed from it
            * @return Returns new ImmutableArray
            */
        pop(): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray with the elements reversed
            * @return Returns new ImmutableArray
            */
        reverse(): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray with the first element removed from it
            * @return Returns new ImmutableArray
            */
        shift(): ImmutableArray<T>;
        /**
            * Returns a new, sorted ImmutableArray
            * @param compareFn The function used to determine the order of the elements If omitted, the elements are sorted in ascending, ASCII character order
            * @return Returns new ImmutableArray
            */
        sort(compareFn?: (a: T, b: T) => number): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray, with elements removed and, if necessary, inserts new elements in their place
            * @param start The zero-based location in the array from which to start removing elements
            * @param deleteCount The number of elements to remove
            * @return Returns new ImmutableArray
            */
        splice(start: number, deleteCount?: number): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray, with elements removed and, if necessary, inserts new elements in their place
            * @param start The zero-based location in the array from which to start removing elements
            * @param deleteCount The number of elements to remove
            * @param items Elements to insert into the array in place of the deleted elements
            * @return Returns new ImmutableArray
            */
        splice(start: number, deleteCount: number, ...items: T[]): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray with new elements inserted at the start of an array
            * @param items  Elements to insert at the start of the Array
            * @return Returns new ImmutableArray
            */
        unshift(...items: T[]): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray with part of the array copied to another location in the same array, without modifying its size
            * @param target Zero based index at which to copy the sequence to If negative, target will be counted from the end
            * @param start Zero based index at which to start copying elements from If negative, start will be counted from the end
            * @param end Zero based index at which to end copying elements from copyWithin copies up to but not including end If negative, end will be counted from the end
            * @return Returns new ImmutableArray
            */
        copyWithin(target: number, start?: number, end?: number): ImmutableArray<T>;
        /**
            * Returns a new ImmutableArray filled from a start index to an end index with a static value The end index is not included
            * @param value Value to fill array section with
            * @param start Index to start filling the array at If start is negative, it is treated as length+start where length is the length of the array
            * @param end Index to stop filling the array at If end is negative, it is treated as length+end
            * @return Returns new ImmutableArray
            */
        fill(value: T, start?: number, end?: number): ImmutableArray<T>;
        /**
            * Gets the element at path of array. If the resolved value is undefined the defaultValue is used in its place.
            * @param index Position in array at wich to return
            * @return Returns ImmutableArray element
            */
        get(index: number): T;
        /**
            * Gets the element at path of array. If the resolved value is undefined the defaultValue is used in its place.
            * @param index Position in array at wich to return
            * @param defaultValue Value to return if index is invalid
            * @return Returns ImmutableArray element
            */
        get<TValue>(index: number, defaultValue: TValue): TValue;
        /**
            * Gets the element at path of array. If the resolved value is undefined the defaultValue is used in its place.
            * @param path The path of the element to get
            * @return Returns ImmutableArray element
            */
        get(path: string): T;
        /**
            * Gets the element at path of array. If the resolved value is undefined the defaultValue is used in its place.
            * @param path The path of the element to get
            * @param defaultValue Value to return if path is invalid
            * @return Returns new ImmutableArray element
            */
        get<TValue>(path: string, defaultValue: TValue): TValue;
        /**
            * Gets the element at path of array. If the resolved value is undefined the defaultValue is used in its place.
            * @param path The path of the element to get
            * @return Returns ImmutableArray element
            */
        get(path: PropertyName[]): T;
        /**
            * Gets the element at path of array. If the resolved value is undefined the defaultValue is used in its place.
            * @param path The path of the element to get
            * @param defaultValue Value to return if path is invalid
            * @return Returns ImmutableArray element
            */
        get<TValue>(path: PropertyName[], defaultValue: TValue): TValue;
        /**
            * Sets value at a given position or path, and returns a new ImmutableArray
            * @param index The position of the element to set
            * @param value Value to set at the given position
            * @return Returns new ImmutableArray
            */
        set(index: number, value: T): ImmutableArray<T>;
        /**
            * Sets value at a given position or path, and returns a new ImmutableArray
            * @param path The path of the element to set
            * @param value Value to set at the given position
            * @return Returns new ImmutableArray
            */
        set(path: string, value: T): ImmutableArray<T>;
        /**
            * Sets value at a given position or path, and returns a new ImmutableArray
            * @param path The path of the element to set
            * @param value Value to set at the given position
            * @return Returns new ImmutableArray
            */
        set(path: PropertyName[], value: T): ImmutableArray<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param index The position of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableArray
            */
        update(index: number, updater: (value: T) => T): ImmutableArray<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableArray
            */
        update(path: string, updater: (value: T) => T): ImmutableArray<T>;
        /**
            * Like set except accepts an updater function to produce the value to set
            * @param path The path of the element to set
            * @param updater The function to produce the updated value
            * @return Returns new ImmutableArray
            */
        update(path: PropertyName[], updater: (value: T) => T): ImmutableArray<T>;
        /**
            * Removes an element from the array and returns a new ImmutableArray Shorthand for Arraysplice(index, 1)
            * @param index The position of the element to delete
            * @return Returns new ImmutableArray
            */
        delete(index: number): ImmutableArray<T>;
        /**
            * Removes all provided values from array using SameValueZero for equality comparisons.
            * Uses Lodash's _.pull method
            * @param values The values to remove
            * @return Returns new ImmutableArray
            */
        pull(...values: T[]): ImmutableArray<T>;
        /**
             * Performs a deep comparison between this and the given argument
             * @param comparison The values to compare with this
             * @return boolean
             */
        equals(comparison: any): boolean;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject(): ImmutableObject<{ [K: T]: T; }>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject<IObjectType>(): ImmutableObject<IObjectType>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject(keyInitializer: string): ImmutableObject<{ [key: string]: T; }>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject<IObjectType>(keyInitializer: string): ImmutableObject<IObjectType>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject(keyInitializer: number): ImmutableObject<{ [key: number]: T; }>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject<IObjectType>(keyInitializer: number): ImmutableObject<IObjectType>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject(keyInitializer: MapCallback<T>): ImmutableObject<{ [key: PropertyKey]: T; }>;
        /**
            * Maps over array and converts to ImmutableObject. Keys-value pairs are produced by the elements
            * in the array (values) and by providing a key-initializer argument as described below (keys).
            *
            * NOTE: that in TypeScript, unless you pass an explicit type to the toObject generic, this method does cause your object to
            * lose some type-safety as the resulting type will not be as strict as it would be if you created an ImmutableObject directly.
            * Providing a type argument is highly recommended.
            * @param keyInitializer A single-letter string ([a-zA-Z]), number, or function synonymous with an Array.map callback.
            * If provided a letter or number, keys will begin with that letter or number and be incremented for each element of
            * the array. To designate custom keys, such as symbols based on the array's elements, proivde an Array.map callback instead.
            * If undefined, keys will be equal to their values or the stringified version of their values.
            * @return Returns a new ImmutableObject
            */
        toObject<IObjectType>(keyInitializer: MapCallback<T>): ImmutableObject<IObjectType>;
        /**
            * Converts to mutable ImmutableArray, i.e. Immutable methods are still available,
            * but mutations are allowed until another ImmutableArray method is called
            * @return Returns new ImmutableArray
            */
        asMutable(): ImmutableArray<T>;
        /**
            * Converts ImmutableArray to plain-old JavaScript
            * @return Returns array
            */
        toJS(): T[];
    }

    type PropertyName = string | number | symbol;
    type PropertyKey = string | number | symbol;
    type MapCallback<T> = (value: T) => PropertyKey;

    export type ImmutableArray<T> = T[] & IArray<T>;
    export type ImmutableObject<T> = T & IObject<T>;

}

declare function EasyImmutable<T>(object: T[]): EasyImmutable.ImmutableArray<T>;
declare function EasyImmutable<T>(object: T): EasyImmutable.ImmutableObject<T>;

export = EasyImmutable
