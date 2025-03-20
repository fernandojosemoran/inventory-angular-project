# What is SIM?

SIM `Simplified Inventory Management` is an application designed for easy and organized product inventory management. It includes modules for:

* **`user`**: User management and authentication.
* **`dashboard`**: Control panel with key inventory information.
* **`shopping cart`**: Shopping cart for sales management.
* **`reports`**: Generation of detailed inventory reports.
* **`inventory`**: Central control of product inventory.
* **`products`**: Product catalog management.
* **`purchases`**: Tracking of purchases and suppliers.
* **`sales`**: Management of sales and customers.

The main objective of SIM is to maximize your business's profitability through efficient inventory management.

## Prerequisites

Before running the SIM application, ensure you have Node.js or an alternative like Bun or Deno installed.

* **Node.js**: [https://nodejs.org/en/download](https://nodejs.org/en/download)
* **Deno**: [https://deno.com](https://deno.com)
* **Bun**: [https://bun.sh](https://bun.sh)

In this example, we will use Node.js.

## Running in Development Mode

1.  **Install dependencies and run the application:**

    ```bash
    npm install && npm run start
    ```

2.  **Observe the console output.** You should see information about the generated bundles, similar to this:


```bash
  Browser bundles
  Initial chunk files     | Names                |  Raw size
  polyfills.js            | polyfills            |  90.20 kB |
  main.js                 | main                 |  23.93 kB |
  styles.css              | styles               |  95 bytes |

                          | Initial total        | 114.22 kB

  Lazy chunk files        | Names                |  Raw size
  chunk-D2NED2QE.js       | auth-module          |   3.55 kB |
  chunk-MVXHEGQM.js       | shopping-cart-module |   2.80 kB |
  chunk-FDG4JXCD.js       | categories-module    |   2.71 kB |
  chunk-2CCBCOTA.js       | purchases-module     |   2.68 kB |
  chunk-DQNNTU67.js       | dashboard-module     |   2.68 kB |
  chunk-QYHUAN72.js       | products-module      |   2.64 kB |
  chunk-HNZCLZHN.js       | reports-module       |   2.57 kB |
  chunk-LVCCL5PE.js       | sales-module         |   2.53 kB |
  chunk-RWV74RPO.js       | user-module          |   2.45 kB |


  Server bundles
  Initial chunk files     | Names                |  Raw size
  polyfills.server.mjs    | polyfills.server     | 572.91 kB |
  main.server.mjs         | main.server          |  24.38 kB |
  render-utils.server.mjs | render-utils.server  | 472 bytes |

  Lazy chunk files        | Names                |  Raw size
  chunk-LTJ5QNUD.mjs      | auth-module          |   3.58 kB |
  chunk-FLUR76SL.mjs      | shopping-cart-module |   2.84 kB |
  chunk-WKVOQBC5.mjs      | categories-module    |   2.74 kB |
  chunk-SSIDRO2C.mjs      | purchases-module     |   2.72 kB |
  chunk-BD4CDGZK.mjs      | dashboard-module     |   2.71 kB |
  chunk-O6G4RB4E.mjs      | products-module      |   2.68 kB |
  chunk-ZLQFZJ3G.mjs      | reports-module       |   2.60 kB |
  chunk-44U5ITG6.mjs      | sales-module         |   2.57 kB |
  chunk-AJCDW6ND.mjs      | user-module          |   2.48 kB |

  Application bundle generation complete. [3.529 seconds]

  Watch mode enabled. Watching for file changes...
  NOTE: Raw file sizes do not reflect development server per-request transformations.
    ➜  Local:   http://localhost:4200/
    ➜  press h + enter to show help
```

**Open your web browser** and navigate to `http://localhost:4200/`. The application will automatically reload if you modify the source files.

## Running in Production Mode

1.  **Build the application for production:**

    ```bash
    npm run build
    ```

2.  **Observe the console output.** You should see information about the production-optimized bundles:

```bash
  Browser bundles
  Initial chunk files     | Names                |  Raw size | Estimated transfer size
  chunk-KVSW2C35.js       | -                    | 212.27 kB |                57.39 kB
  polyfills-FFHMD2TL.js   | polyfills            |  34.52 kB |                11.28 kB
  main-W2YD3H22.js        | main                 |  19.97 kB |                 5.44 kB
  styles-5INURTSO.css     | styles               |   0 bytes |                 0 bytes

                          | Initial total        | 266.76 kB |                74.11 kB

  Lazy chunk files        | Names                |  Raw size | Estimated transfer size
  chunk-UPCJRXTJ.js       | auth-module          | 931 bytes |               931 bytes
  chunk-XFUAWFZF.js       | categories-module    | 715 bytes |               715 bytes
  chunk-LD3XDCXG.js       | purchases-module     | 713 bytes |               713 bytes
  chunk-DFIDOE5J.js       | products-module      | 708 bytes |               708 bytes
  chunk-H7EEUZXH.js       | shopping-cart-module | 708 bytes |               708 bytes
  chunk-4MXTWYY6.js       | reports-module       | 705 bytes |               705 bytes
  chunk-XNEJ2ZBI.js       | dashboard-module     | 703 bytes |               703 bytes
  chunk-LF6YVGRN.js       | sales-module         | 692 bytes |               692 bytes
  chunk-46MBITUZ.js       | user-module          | 673 bytes |               673 bytes


  Server bundles
  Initial chunk files     | Names                |  Raw size
  server.mjs              | server               |   1.60 MB |
  chunk-EPQWBVEU.mjs      | -                    | 307.23 kB |
  polyfills.server.mjs    | polyfills.server     | 268.60 kB |
  chunk-MF7U3YOG.mjs      | -                    | 230.68 kB |
  chunk-QD4N4BUT.mjs      | -                    |  20.10 kB |
  chunk-5XUXGTUW.mjs      | -                    |   2.55 kB |
  render-utils.server.mjs | render-utils.server  |   1.49 kB |
  main.server.mjs         | main.server          | 178 bytes |

  Lazy chunk files        | Names                |  Raw size
  chunk-VCVCHJZV.mjs      | xhr2                 |  12.07 kB |
  chunk-MUGERKIO.mjs      | auth-module          | 991 bytes |
  chunk-SOPF4GY3.mjs      | categories-module    | 780 bytes |
  chunk-DFRWGXUF.mjs      | purchases-module     | 778 bytes |
  chunk-7ISMLWP5.mjs      | shopping-cart-module | 773 bytes |
  chunk-CLQ4OOKO.mjs      | products-module      | 773 bytes |
  chunk-RQHUGQPC.mjs      | reports-module       | 770 bytes |
  chunk-64P6KPOL.mjs      | dashboard-module     | 768 bytes |
  chunk-BU7DBPZB.mjs      | sales-module         | 762 bytes |
  chunk-DNKRXPHS.mjs      | user-module          | 738 bytes |

  Prerendered 12 static routes.
  Application bundle generation complete. [25.520 seconds]
```
3. Deploying the Production Build

  After building your application for production, the optimized files, including index.html, are placed in the dist/SMI/browser/ directory. To make your application accessible, you need to serve these files. 
  
  Here are some common methods:

  ```bash
    cd ./dist/SMI/browser/index.html && python -m http.server 80
  ```
  ```bash
    cd ./dist/SMI/browser/index.html && php -S localhost:80
  ```
  For production deployments, it's highly recommended to use robust web servers like Nginx or Apache. These servers provide better performance, security, and scalability.

  Alternatively, you can configure your backend server to serve the index.html file as part of your application's response.
