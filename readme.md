## @recipes

This repository serves as a collection of recipes for the `Remote Schema` feature of the ProbeJS project. By pulling schemas from remote sources, ProbeJS can automatically set up the recipe supports for you without you having to download any extra addons, or write any scripts yourself.

It is a community driven repository, so feel free to contribute your own schemas (and credit yourself in the uploaded schema file).

### How to contribute

1. Fork this repository
2. Learn how to write a schema by reading the included schema files and the `prelude.js` file.
3. Write your own schema file of the mod you want to support. (Recommended to write them in ProbeJS environment to get most of the types)
4. Send a pull request with your schema file and a short description of what it does.

Note that all the PRs will be manually reviewed, so it might take a while for your schema to be merged.

To make sure the scripts are safe, you should not:

- Use `eval` or `Function` to execute code - obviously
- Use `Java.loadClass` to load Java classes - to avoid naming conflicts
- Include any event listeners in the schema file - why?

### How to use

Install the [ProbeJS mod](https://www.curseforge.com/minecraft/mc-mods/probejs). It will automatically pull schemas needed by reading your mod list.

### Versioning scheme

If a mod changed its schema, the schema file will always reflect the latest version of the mod. So if you are using an older version of a mod, you might need to update the mod to the latest version to get the latest schema.

For Minecraft version changes, different branches will be used. So if you are making a modpack for Minecraft 1.20.1, ProbeJS will automatically pull schemas from the `1.20.1` branch.