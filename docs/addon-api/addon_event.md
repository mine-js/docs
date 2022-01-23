---
sidebar_position: 4
---

# Create an event

Let's learn about how to create a event on Mine.JS!

:::tip

We don't explain about J2V8(V8) API, We recommend to read [J2V8 Tutorial](https://github.com/eclipsesource/J2V8#tutorials)!

:::

## Example

```kotlin
class SampleAddon : NativeAddon() {
    // ...

    override fun init() {
        // ...
        registerListener(object : Listener { // Just an anonymous interface
            @EventHandler
            fun onInteract(event: PlayerInteractEvent) {
                if(event.action != Action.RIGHT_CLICK_BLOCK) return

                if(event.player.inventory.itemInMainHand.type == Material.DIAMOND) {
                    // invoke functions with eventName on all scripts
                    ScriptLoader.invokeEvent("onDiamond") {
                        // If you want to get a V8, use runtime variable
                        // Create array
                        val array = V8Array(runtime)

                        // You can put Int, Double, String, V8Value(Array, Object) to an array's element, V8Object
                        array.push(1234)

                        // Add values into the "event" param object
                        add("int", 1234)
                        add("double", 1234.4)
                        add("string", "just string")
                        add("array", array)
                    }
                }
            }
        })
        // ...
    }

    // ...
}
```