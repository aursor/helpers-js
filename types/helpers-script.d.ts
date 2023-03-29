declare module "helpers-script" {
  export namespace Validates {
    export function isChinesePhone(value: string, reg?: RegExp): boolean;
    export function isEmail(value: string, reg?: RegExp): boolean;
    export function isValidValue(value: any): boolean;
    export function isChinesePhone(collections: object): boolean;
  }
}
