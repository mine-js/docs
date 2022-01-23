---
sidebar_position: 3
---

# Create a function

Let's learn about how to create a function on Mine.JS!

:::tip

We don't explain about J2V8(V8) API, We recommend to read [J2V8 Tutorial](https://github.com/eclipsesource/J2V8#tutorials)!

:::

## Void Function

Action to create a function is so easy.

```kotlin
class SampleAddon : NativeAddon() {
    // ...

    override fun init() {
        // ...
        registerFunction("testing") { receiver, parameters -> // If you want to get "V8" Object, use receiver.runtime
            // action
        }
        // ...
    }

    // ...
}
```

## Return Value Function

It is similar to the void function declaration!

:::caution

J2V8 doesn't allow to return java object, So if you need to return java object, you need to create a V8 Object, put data, and return that!

:::

:::tip

If you return the undefined, return `null`. j2v8(v8) will process that to `null` object in js.

:::

```kotlin
class SampleAddon : NativeAddon() {
    // ...

    override fun init() {
        // ...
        registerFunction("return", JavaCallback { _, _ ->
            return@JavaCallback "I returned string!" // You can return String, Double, Int, V8Object, V8Array for return value
        })
        // ...
    }

    // ...
}
```