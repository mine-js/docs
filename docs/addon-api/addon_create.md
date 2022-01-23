---
sidebar_position: 2
---

# Setup Workspace

### 1. Create repository using template

Clone or create repository for/using [Mine.JS Addon Template](https://github.com/mine-js/addon-template)

### 2. Change name, group of the project

Change `settings.gradle.kts` to below content

```kotlin
rootProject.name = "<Your addon id>"
```

:::tip

We recommend set addon id to Camel Case, Snake Case, Kebab Case, or Pascal Case!

:::

Change `build.gradle.kts`'s `org.example` group to your group!

### 3. Write addon

Rename `xyz.minejs.sample` package to `<your group name>.<addon id>`, and Class `SampleAddon` to your addon ID!

And change `resources/addon.json` to

```json
{
  "name": "<your addon id>",
  "main": "<renamed package name>.<renamed class name>"
}
```

We are ready, let's work with addon!

:::info

You can write addon with java, but we recommend addon with kotlin!

:::