---
"bigrequest": patch
"bigexec": patch
---

Fixes issue with types not being bundled with the package correctly. Adds `cjsInterop` flag to maintain default export parity for commonjs. **NOTE: It is recommended to set `"esModuleInterop": true` in `tsconfig.json` if using this library in Typescript projects.**
