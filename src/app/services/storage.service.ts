import { Injectable } from '@angular/core';

@Injectable()

export class StorageService {
  constructor() {}

  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public setItem(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  public clear(key: string) {
    localStorage.removeItem(key);
  }
}
