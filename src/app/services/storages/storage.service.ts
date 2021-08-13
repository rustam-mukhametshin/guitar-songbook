/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Injectable } from '@angular/core';
import { GetResult, Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  /**
   * Get data from storage
   *
   * @param key
   */
  get(key: string): Promise<GetResult> {
    return Storage.get({key});
  }

  /**
   * Set data to storage
   *
   * @param key
   * @param value
   */
  set(key: string, value: string): Promise<void> {
    return Storage.set({
      key,
      value
    });
  }

  /**
   * Remove key from storage
   *
   * @param key
   */
  remove(key: string): Promise<void> {
    return Storage.remove({
      key
    });
  }
}
