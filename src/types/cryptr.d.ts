// src/types/cryptr.d.ts
declare module 'cryptr' {
  class Cryptr {
    constructor(secret: string);
    encrypt(text: string): string;
    decrypt(text: string): string;
  }
  export = Cryptr;
}
