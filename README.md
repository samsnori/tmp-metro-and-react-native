# tmp-metro-and-react-native


### Goal

This is a reproduction case aiming to identify the issue where
`metro.config.js` with `nodeModulesPaths` fails to find my
module. After reviewing several posts ([this][config1] and
[this][config2]) it appears feasible to utilize React Native with
npm packages located in directories separate from the project.

For instance, you can have a package located at:
`/home/sam/my-package` and utilize it in a project stored at
`/home/sam/projects/my-app/`. This is achieved by configuring the
`metro.config.js` file.

### The Issue

However, I'm encountering difficulties making this setup work,
and the reason is unclear to me. I've followed the steps outlined
[here][config1], such as adding the module path for `my-package`
to the `nodeModulesPaths` in `metro.config.js`. To diagnose the
problem, I've created this repro case. In `app/metro.config.js`,
I've added a path to `my-package`, which I intend to use in
`app/App.jsx`. However, this results in an error:

```
error: Error: Unable to resolve module my-package from /home/....: my-package could not be found within the project or in these directories:
  node_modules
  ../my-package
```

### To Reproduce

```sh
git clone https://github.com/samsnori/tmp-metro-and-react-native.git
cd tmp-metro-and-react-native
cd app

npm install
npm start
```

[config1]: https://medium.com/@alielmajdaoui/linking-local-packages-in-react-native-the-right-way-2ac6587dcfa2
[config2]: https://medium.com/@tayfunkaya/use-local-package-in-react-native-b9fb18f17512
