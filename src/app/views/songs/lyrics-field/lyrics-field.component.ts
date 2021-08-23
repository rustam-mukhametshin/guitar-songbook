/*
 * Guitar songbook project
 *
 * @author Rustam Mukhametshin <https://github.com/iproman>
 * @link https://github.com/iproman
 * @copyright Copyright (c) Rustam Mukhametshin, LLC, 2021
 */

import { Component, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-lyrics-field',
  templateUrl: './lyrics-field.component.html',
  styleUrls: ['./lyrics-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LyricsFieldComponent,
      multi: true
    }
  ]
})
export class LyricsFieldComponent implements ControlValueAccessor {

  @Output() isLyrics: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChange: (value: string) => void;
  onTouched: () => void;

  value: string;
  disabled: boolean;

  constructor() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  set(val: string) {
    if (this.disabled) {
      return;
    }

    this.value = val;
    this.onChange(this.value);
    this.onTouched();

    this.isLyrics.emit(false);
  }

}
