import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "isAvailable",
  standalone: true,
})
export class AvailablePipe implements PipeTransform {
  public transform(bool: boolean): string {
    switch (bool) {
      case true:
        return "Si";
      case false:
        return "No";
      default:
        return "Desconocido";
    }
  }
}
