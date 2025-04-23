import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTextPipe',
  standalone: true,
})
export class ShortTextPipePipe implements PipeTransform {
  public transform(short = true, maxLength = 15, text: string): string {
    if (!text) return "";

    if (!short) return text;

    return text.slice(0, maxLength).concat("...");
  }

}
