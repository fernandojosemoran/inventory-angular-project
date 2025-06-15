import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "defaultImage",
  standalone: true,
})
export default class DefaultImagePipe implements PipeTransform {
  public transform(image: string | undefined): string {
    const defaultImage: string =
      "https://imgs.search.brave.com/_seRCAn5G8vbTPZ7uC2jGAc9AV3_UK1kL7kCLWP_w3k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWUwYTAxYjA5Mzg5/ZWViZjRjMDliNDUv/NjY3YzJkZGUyMjNj/OWM2MDAzZjUyY2E0/XzAtQWZ0ZXItRGVz/a3RvcC53ZWJw";

    if (!image) return defaultImage;

    const url = new URL(image);

    if (url.host === "example.com") return defaultImage;

    return image;
  }
}
