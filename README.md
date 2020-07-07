# Glasspane
Custom Shutdown, Restart, Lock and Logout screen

# How to use

You can either download a pre-packaged release or build it yourself

# How to build


1. Clone this repo.
2. Install Dependencies
    * `yarn` or `npm install`
3. Run build script
    * `yarn dist` or `npm run dist`
4. Install one of the produced files in `dist`.

*By default the app is build as `deb`, `AppImage` and `tar.gz`. If you wanna try to build in other formats (such as arch linux) you can try to add one of [these targets](https://www.electron.build/configuration/linux) to the package.json (even though i can neither confirm if it works nor help with packages for non-debian distrobutions).*
