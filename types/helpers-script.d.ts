declare module "helpers-script" {
  export namespace Validates {
    export function isChinesePhone(value: string, reg?: RegExp): boolean;
    export function isEmail(value: string, reg?: RegExp): boolean;
    export function isValidValue(value: any): boolean;
    export function isChinesePhone(collections: object): boolean;
  }
  export namespace Parsers {
    export function parserUrl(u: string): object;
  }
  export namespace Handlers {
    export function slice<T>(
      arr: T[],
      startIndex?: number,
      endIndex?: number
    ): T[] | never;
  }
}
