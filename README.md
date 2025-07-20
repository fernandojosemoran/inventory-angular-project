# What is SIM?

SIM `Simplified Inventory Management` is an application designed for easy and organized product inventory management. It includes modules for:

- **`user`**: User management and authentication.
- **`dashboard`**: Control panel with key inventory information.
- **`shopping cart`**: Shopping cart for sales management.
- **`reports`**: Generation of detailed inventory reports.
- **`inventory`**: Central control of product inventory.
- **`products`**: Product catalog management.
- **`purchases`**: Tracking of purchases and suppliers.
- **`sales`**: Management of sales and customers.

The main objective of SIM is to maximize your business's profitability through efficient inventory management.

## Prerequisites

Before running the SIM application, ensure you have Node.js or an alternative like Bun or Deno installed.

- **Node.js**: [https://nodejs.org/en/download](https://nodejs.org/en/download)
- **Deno**: [https://deno.com](https://deno.com)
- **Bun**: [https://bun.sh](https://bun.sh)

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

## Best practices before collaborating

If you execute the `prepare` script, it handles code quality and security control.
The `prepare` script is responsible for executing actions before pushing changes to the branch where you're pushing.

```bash
npm run prepare
```

example

```bash
git add .
git commit -m "feat: add Husky to manage pre-push actions"

> sim@1.1.0 lint:fix
> biome check --fix

Checked 152 files in 727ms. Fixed 112 files.

> sim@1.1.0 test
> jest

PASS  src/environments/environments.spec.ts
  ./src/environments/environments.ts
    √ Should backend url exists (4 ms)
    √ Should backend urls be strings (2 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.66 s, estimated 6 s
Ran all test suites.

[development 00f5f0a] feat: add Husky to manage pre-push actions
4 files changed, 36 insertions(+), 4 deletions(-)

git push origin development

Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 1.58 KiB | 404.00 KiB/s, done.
Total 10 (delta 8), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (8/8), completed with 5 local objects.
To https://github.com/fernandojosemoran/inventory-angular-project.git
  5435d3d..cdec8c1  development -> development
```

## Running in Production Mode

1. **Run the backend application**
   You need to download the [backend application](https://github.com/fernandojosemoran/worksho-server).

If you don't run the backend, the Angular project will throw an error when it builds the application because the application verifies if the components are behaving correctly."

```bash
./mvnw spring-boot:run

[INFO] Scanning for projects...
[INFO]
[INFO] ---------------------< org.gdzdev:workshop-server >---------------------
[INFO] Building workshop-server 0.0.1-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO]
[INFO] >>> spring-boot:3.4.3:run (default-cli) > test-compile @ workshop-server >>>
[INFO]
[INFO] --- resources:3.3.1:resources (default-resources) @ workshop-server ---
[INFO] Copying 2 resources from src\main\resources to target\classes
[INFO] Copying 3 resources from src\main\resources to target\classes
[INFO]
[INFO] --- compiler:3.11.0:compile (default-compile) @ workshop-server ---
[INFO] Nothing to compile - all classes are up to date
[INFO]
[INFO] --- resources:3.3.1:testResources (default-testResources) @ workshop-server ---
[INFO] Copying 1 resource from src\test\resources to target\test-classes
[INFO]
[INFO] --- compiler:3.11.0:testCompile (default-testCompile) @ workshop-server ---
[INFO] Nothing to compile - all classes are up to date
[INFO]
[INFO] <<< spring-boot:3.4.3:run (default-cli) < test-compile @ workshop-server <<<
[INFO]
[INFO]
[INFO] --- spring-boot:3.4.3:run (default-cli) @ workshop-server ---
[INFO] Attaching agents: []

  .   ____          _            __ _ _
/\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
=========|_|==============|___/=/_/_/_/

:: Spring Boot ::                (v3.4.3)

2025-06-08 13:53:17 - o.h.validator.internal.util.Version - HV000001: Hibernate Validator 8.0.2.Final
2025-06-08 13:53:17 - o.g.w.b.WorkshopServerApplication - Starting WorkshopServerApplication using Java 17.0.12 with PID 4368 (C:\Users\ferna\Documents\develoment-web\spring-boot\workshop-server\target\classes started by ferna in C:\Users\ferna\Documents\develoment-web\spring-boot\workshop-server)
2025-06-08 13:53:17 - o.g.w.b.WorkshopServerApplication - No active profile set, falling back to 1 default profile: "default"
2025-06-08 13:53:18 - o.s.b.d.e.DevToolsPropertyDefaultsPostProcessor - Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2025-06-08 13:53:18 - o.s.b.d.e.DevToolsPropertyDefaultsPostProcessor - For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2025-06-08 13:53:19 - o.s.d.r.c.RepositoryConfigurationDelegate - Bootstrapping Spring Data JPA repositories in DEFAULT mode.
2025-06-08 13:53:20 - o.s.d.r.c.RepositoryConfigurationDelegate - Finished Spring Data repository scanning in 140 ms. Found 5 JPA repository interfaces.
2025-06-08 13:53:20 - o.s.b.w.e.tomcat.TomcatWebServer - Tomcat initialized with port 3000 (http)
2025-06-08 13:53:20 - o.a.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-3000"]
2025-06-08 13:53:20 - o.a.catalina.core.StandardService - Starting service [Tomcat]
2025-06-08 13:53:20 - o.a.catalina.core.StandardEngine - Starting Servlet engine: [Apache Tomcat/10.1.36]
2025-06-08 13:53:21 - o.a.c.c.C.[Tomcat].[localhost].[/] - Initializing Spring embedded WebApplicationContext
2025-06-08 13:53:21 - o.s.b.w.s.c.ServletWebServerApplicationContext - Root WebApplicationContext: initialization completed in 3011 ms
2025-06-08 13:53:21 - o.h.jpa.internal.util.LogHelper - HHH000204: Processing PersistenceUnitInfo [name: default]
2025-06-08 13:53:21 - org.hibernate.Version - HHH000412: Hibernate ORM core version 6.6.8.Final
2025-06-08 13:53:21 - o.h.c.i.RegionFactoryInitiator - HHH000026: Second-level cache disabled
2025-06-08 13:53:22 - o.s.o.j.p.SpringPersistenceUnitInfo - No LoadTimeWeaver setup: ignoring JPA class transformer
2025-06-08 13:53:22 - com.zaxxer.hikari.HikariDataSource - HikariPool-1 - Starting...
2025-06-08 13:53:22 - com.zaxxer.hikari.pool.HikariPool - HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@1d6d6d8b
2025-06-08 13:53:22 - com.zaxxer.hikari.HikariDataSource - HikariPool-1 - Start completed.
2025-06-08 13:53:22 - org.hibernate.orm.deprecation - HHH90000025: MySQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
2025-06-08 13:53:23 - o.hibernate.orm.connections.pooling - HHH10001005: Database info:
        Database JDBC URL [Connecting through datasource 'HikariDataSource (HikariPool-1)']
        Database driver: undefined/unknown
        Database version: 8.0.38
        Autocommit mode: undefined/unknown
        Isolation level: undefined/unknown
        Minimum pool size: undefined/unknown
        Maximum pool size: undefined/unknown
2025-06-08 13:53:24 - o.h.e.t.j.p.i.JtaPlatformInitiator - HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
2025-06-08 13:53:25 - o.s.o.j.LocalContainerEntityManagerFactoryBean - Initialized JPA EntityManagerFactory for persistence unit 'default'
? Active Spring Profiles:
2025-06-08 13:53:25 - o.s.d.j.r.query.QueryEnhancerFactory - Hibernate is in classpath; If applicable, HQL parser will be used.
2025-06-08 13:53:26 - o.s.b.d.a.OptionalLiveReloadServer - LiveReload server is running on port 35729
2025-06-08 13:53:26 - o.a.coyote.http11.Http11NioProtocol - Starting ProtocolHandler ["http-nio-3000"]
2025-06-08 13:53:26 - o.s.b.w.e.tomcat.TomcatWebServer - Tomcat started on port 3000 (http) with context path '/'
2025-06-08 13:53:26 - o.g.w.b.WorkshopServerApplication - Started WorkshopServerApplication in 10.032 seconds (process running for 10.993)
```

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

3. **Deploying the Production Build**

After building your application for production, the optimized files, including index.html, are placed in the dist/SMI/browser/ directory. To make your application accessible, you need to run you server using the command `npm run serve:ssr:SIM`.

```bash
npm run serve:ssr:SIM

$ node dist/SIM/server/server.mjs
Node Express server listening on http://localhost:4000
```

## Testing

1.  **How run the test**

```bash
npm run test

$ jest

PASS  src/environments/environments.spec.ts
  ./src/environments/environments.ts
    √ Should backend url exists (5 ms)
    √ Should backend urls be strings (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.923 s
```

## Linter and Extensions

1.  **How to Use the Linter**

To resolve code formatting errors, you should run the following command:

```bash
# This command resolves code formatting issues to maintain code quality.
npm run lint:fix
```

2.  **Extensions recommended for vsc with angular**

```json
// ./vscode/extensions.json

"recommendations": [
  "angular.ng-template",
  "biomejs.biome",
  "loiane.angular-extension-pack",
  "formulahendry.auto-complete-tag",
  "steoates.autoimport",
  "formulahendry.auto-rename-tag",
  "usernamehw.errorlens",
]
```

c
