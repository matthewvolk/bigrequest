---
"bigrequest": patch
---

Fix array query parameter serialization for BigCommerce API compatibility. Arrays are now serialized as CSV (`type:in=marketing,marketplace`) instead of using repeated keys (`type:in=marketing&type:in=marketplace`), which BigCommerce silently ignores beyond the first value.
