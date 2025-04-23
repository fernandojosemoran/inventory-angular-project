import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTextPipe',
  standalone: true,
})
export class ShortTextPipePipe implements PipeTransform {
  public transform(text: string, short = true, maxLength = 15): string {
    if (!text) return "";

    if (!short || text.trim().length < maxLength) return text;

    const textShorted: string = text.trim().slice(0, maxLength);

    return textShorted.endsWith(".")
           ?  textShorted.concat("..")
           : textShorted.concat("...");
  }
}
