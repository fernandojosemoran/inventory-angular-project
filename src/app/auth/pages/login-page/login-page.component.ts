import { Product } from '@/app/products/interfaces/product.interface';
import { HeadersBasicFormValue, RowsBasicFormValues } from './../../../shared/interfaces/basic-form-values.interface';
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  public clickMe(id: string): void {
    console.log({ id });
  }

  public headers: HeadersBasicFormValue = {
    headers: [
      {
        name:"id",
        type: "text"
      },
      {
        name:"name",
        type: "text"
      },
      {
        name:"imageUrl",
        type: "image"
      },
      {
        name:"categoryName",
        type: "text"
      },
      {
        name:"code",
        type: "text"
      },
      {
        name:"cost",
        type: "text"
      },
      {
        name:"stock",
        type: "text"
      },
      {
        name:"available",
        type: "text"
      },
      {
        name:"price",
        type: "text"
      },
      {
        name:"createdAt",
        type: "text"
      },
      {
        name:"updatedAt",
        type: "text"
      }
    ]
  };

  public rows: RowsBasicFormValues<Product> = {
    rows: [
      {
        id: 1,
        name: "Laptop ASUS",
        imageUrl: "https://imgs.search.brave.com/_seRCAn5G8vbTPZ7uC2jGAc9AV3_UK1kL7kCLWP_w3k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWUwYTAxYjA5Mzg5/ZWViZjRjMDliNDUv/NjY3YzJkZGUyMjNj/OWM2MDAzZjUyY2E0/XzAtQWZ0ZXItRGVz/a3RvcC53ZWJw",
        categoryName: "Electrónica",
        code: "LTP12345",
        cost: 1200,
        stock: 5,
        available: true,
        price: 1350,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Smartphone Samsung",
        imageUrl: "https://imgs.search.brave.com/_seRCAn5G8vbTPZ7uC2jGAc9AV3_UK1kL7kCLWP_w3k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWUwYTAxYjA5Mzg5/ZWViZjRjMDliNDUv/NjY3YzJkZGUyMjNj/OWM2MDAzZjUyY2E0/XzAtQWZ0ZXItRGVz/a3RvcC53ZWJw",
        categoryName: "Electrónica",
        code: "SMP67890",
        cost: 800,
        stock: 8,
        available: true,
        price: 950,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Cámara Canon",
        imageUrl: "https://imgs.search.brave.com/_seRCAn5G8vbTPZ7uC2jGAc9AV3_UK1kL7kCLWP_w3k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWUwYTAxYjA5Mzg5/ZWViZjRjMDliNDUv/NjY3YzJkZGUyMjNj/OWM2MDAzZjUyY2E0/XzAtQWZ0ZXItRGVz/a3RvcC53ZWJw",
        categoryName: "Fotografía",
        code: "CAM09876",
        cost: 500,
        stock: 3,
        available: true,
        price: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Auriculares Sony",
        imageUrl: "https://imgs.search.brave.com/_seRCAn5G8vbTPZ7uC2jGAc9AV3_UK1kL7kCLWP_w3k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWUwYTAxYjA5Mzg5/ZWViZjRjMDliNDUv/NjY3YzJkZGUyMjNj/OWM2MDAzZjUyY2E0/XzAtQWZ0ZXItRGVz/a3RvcC53ZWJw",
        categoryName: "Audio",
        code: "AUD54321",
        cost: 150,
        stock: 12,
        available: true,
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  };

}
