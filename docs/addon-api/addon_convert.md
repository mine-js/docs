---
sidebar_position: 5
---

# Convert between V8Object and Bukkit Object

:::tip

We don't explain about J2V8(V8) API, We recommend to read [J2V8 Tutorial](https://github.com/eclipsesource/J2V8#tutorials)!

:::

## Bukkit Object to V8Object

Most Bukkit API's Object can create a V8 Object with `ObjectUtils.create***Object(BukkitAPIObject, Runtime)`!

## V8Object to Bukkit Object

### V8 ItemStack to Bukkit ItemStack

```kotlin
ObjectUtils.fromV8ItemStack(v8ItemStack: V8Object, runtime: V8)
```

### V8 Location to Bukkit Location

```kotlin
ObjectUtils.fromV8Location(v8Location: V8Object, runtime: V8)
```

### V8 Vector to Bukkit Vector

```kotlin
ObjectUtils.fromV8Vector(v8Vector: V8Object, runtime: V8)
```

### V8 Player to Bukkit Player

```kotlin
Bukkit.getPlayer(UUID.fromString(v8Player.getString("uuid")))
```

### V8 Entity to Bukkit Entity

:::caution

This code can cause a performence degradation! Get bukkit entity by worldname string and entity uuid is safer for performance degradation than this way.

:::

```kotlin
val worldName = (v8Entity.executeJSFunction("location") as V8Object).getObject("world").getString("name")
val world = Bukkit.getWorld(worldName)!!

world.getEntity(UUID.fromString(v8Entity.getString("uuid")))
```

### V8 Block to Bukkit Block

```kotlin
val loc = ObjectUtils.fromV8Location(v8Entity.getObject("location"))

loc.block
```

### V8 World to Bukkit World

```kotlin
Bukkit.getWorld(v8World.getString("name"))
```