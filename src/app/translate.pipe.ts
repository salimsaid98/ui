import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  pure: false // impure so it updates when language changes
})
export class TranslatePipe implements PipeTransform {
  constructor(private t: TranslationService) {}
  transform(key: string): string {
    return this.t.translate(key);
  }
}
