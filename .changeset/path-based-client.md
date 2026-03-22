---
"bigrequest": patch
---

Switch REST client from method-based to path-based API via `createPathBasedClient` from `openapi-fetch`. The call syntax changes from method-first to path-first:

**Before:**

```ts
const client = bigrequest.rest({ storeHash, accessToken });
const res = await client.v3.GET("/content/scripts");
await client.v3.POST("/content/scripts", { body: { name: "My Script" } });
await client.v3.PUT(`/content/scripts/${uuid}`, { body: { html: "..." } });
await client.v3.DELETE(`/content/scripts/${uuid}`);
```

**After:**

```ts
const client = bigrequest.rest({ storeHash, accessToken });
const res = await client.v3["/content/scripts"].GET();
await client.v3["/content/scripts"].POST({ body: { name: "My Script" } });
await client.v3["/content/scripts/{uuid}"].PUT({
  params: { path: { uuid } },
  body: { html: "..." },
});
await client.v3["/content/scripts/{uuid}"].DELETE({
  params: { path: { uuid } },
});
```

Path parameters now use the OpenAPI template syntax (`{uuid}`) with a `params.path` object instead of JS template literal interpolation.
