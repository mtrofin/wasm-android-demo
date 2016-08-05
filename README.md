# Background
This repository is a porting from the Android NDK example More Teapots to a WebAssembly application. The porting code may be found under the directory of `app/src/main/wasm`.

The project has two goals. The first one is to evaluate the engineering cost of porting an Android application to WASM. The other one is trying to figure out the performance overhead of WASM, compared to native Androis apps. In addition, I also ported a comparative WebJS version of this teapot program, which is under `app/src/main/webGL`.

# Pre-requisites
#### Android
1. Download and install Android Studio 2.1 from the [link](https://developer.android.com/studio/index.html) or you may choose just to download the [command line tools](https://developer.android.com/studio/index.html#downloads). Both will work.
2. Download and install the latest version of NDK from the [link](https://developer.android.com/ndk/downloads/index.html).

#### Wasm
1. Emscripten version [1.36.5](https://github.com/kripken/emscripten/tree/incoming)
2. Emscripten clang version 1.36.5 (https://github.com/kripken/emscripten-fastcomp-clang 4fddcbc67c8950a54b169030ad9b2d66288d5d5f)
3. Emscripten llvm version 1.36.5 (https://github.com/kripken/emscripten-fastcomp 21f1267bad4d8c523fae483104d4348cfb279cfe)
4. For building emscripten and other required toolchains from source, you may refer to this [page](http://kripken.github.io/emscripten-site/docs/building_from_source/index.html#installing-from-source)

# Build
Before Building, you need to change the building macro in file `app/src/main/jni/MoreTeapotsRenderer.cpp` and `app/src/main/jni/ndk_helper/shader.cpp`. If you want to build on Android, then `#define AND`. If you want to build to wasm, then `#define WASM`.
#### Android
1. `cd` into the root directory of this project.
2. Run `./gradlew assembleDebug`
3. The generated apk file should be located at `app/build/outputs/apk/app-debug.apk`
4. To install it on the phone (In our experiment, we use Nexus 5 Build/LMY49P, Android 5.1.1), you first
connect the phone to the desktop in debug mode, and then run `adb install -r <path-to-your-apk>`

#### Wasm
1. `cd app/src/main/wasm`
2. Open the script file `recompile`
3. Modify the variable `DESTDIR` to be the path you want to put these generated wasm files in your HTTP Server root directory.
4. Run script `./recompile`. The wasm files will be compiled in the `app/src/main/wasm`, also will be copied to `DESTDIR`

# RUN
#### Android
1. To run it on emulator: run `android avd` first and create an Emulator. After you have created one, use `emulator -avd <name>` to start it. Then you can run `adb install -r <path-to-your-apk>` to install apk on your emulator.
2. To run it on the phone, just connect the phone to the desktop in debug mode and then run `adb install -r <path-to-your-apk>` to install apk on your phone.

#### WASM
1. To run wams application on Chrome, you need to build the latest chromium from source. In our experiment, we used Version 53.0.2775.0 (64-bit).
2. To run wasm on Chrome on Android, you need also get the Developer version Chrome (You can actually download it from Play Store). In our experiment, we use Chrome Dev 53.0.2782.9.
    * To access the web resources hosted on a Google machine, you need to use the Obscura service. Follow the instructions [here](https://sites.google.com/a/google.com/obscura/user-guide/getting-started).

#### WebGL
1. The webGL files are under the directory `app/src/main/webGL`

# MACROS
Because what we want to do is a comparative experiment finding the graphical performance bottlenecks in wasm, we defined some more macros other than `AND` and `WASM` in order to play around and see what kind of things affect the performance most.

1. Define `TEAPOT` if you want to draw one instance as a teapot. Define `TRIANGLE` if you want to draw one instance as a simple triangle. Define `Zero` if you want to draw one instance as purely a bunch of points located at 0.
2. Define `ROTATION` if you want to instances to rotate among different frames. Otherwise, they will stay still.
3. To control the number of instances and the size of one instance,
    * Variables `NUM_TEAPOT_X`, `NUM_TEAPOT_Y` and `NUM_TEAPOT_Z` defined in `app/src/main/jni/MoreTeapotsNativeActivity.cpp` controls the number of instances drawn along X-axis, Y-axis, Z-axis in Android application. Variables `NUM_TEAPOTS_X`, `NUM_TEAPOTS_Y` and `NUM_TEAPOTS_Z` defined in `app/src/main/wasm/emsMain.cpp` controls the number of instances in wasm application.
    * Variable `size_instance_` defined in `app/src/main/jni/MoreTeapotsRenderer.cpp` defined the size (number of vertices, also the number of indices) of per instance. That is to say, if you set it to 1, then it remains the same size for one instance. It you set to 2, the size of per instance will become two times than the original one. If you also set the variable `offset` in `Init()` larger than 0, then each 'copy' of the original instance will have an offset in the new 'larger' instance. 
4. Define `DRAW_ALL_IN_MIDDLE` if you want to draw all instances in the middle of the screen. Otherwise, each instance will have a distance from other instances.
5. Define `SIMPLE_SHADER` if you want use a really simple shader to output solid color.
6. Define `MULTI_GL_SET_UNIFORM` if you want to call `glUniform4f` in a loop in order to find whether indirect calls to GL APIs is a heavy bottleneck for the performance.
7. Define `GL3` if you want to use GLES3 features. (We don't use in our experiment).

Below is the README from the original project.

More Teapots
============
More Teapots is an Android C++ sample that draws multiple instances of the same Teapot mesh using GLES 3.0 Instanced Rendering and [NativeActivity](http://developer.android.com/reference/android/app/NativeActivity.html).

This sample uses the new [Gradle Experimental Android plugin](http://tools.android.com/tech-docs/new-build-system/gradle-experimental) with C++ support.

Pre-requisites
--------------
- Android Studio 1.3+ with [NDK](https://developer.android.com/ndk/) bundle.

Getting Started
---------------
1. [Download Android Studio](http://developer.android.com/sdk/index.html)
1. Launch Android Studio.
1. Open the sample directory.
1. Open *File/Project Structure...*
  - Click *Download* or *Select NDK location*.
1. Click *Tools/Android/Sync Project with Gradle Files*.
1. Click *Run/Run 'app'*.

Screenshots
-----------
![screenshot](screenshot.png)

Support
-------
If you've found an error in these samples, please [file an issue](https://github.com/googlesamples/android-ndk/issues/new).

Patches are encouraged, and may be submitted by [forking this project](https://github.com/googlesamples/android-ndk/fork) and
submitting a pull request through GitHub. Please see [CONTRIBUTING.md](../CONTRIBUTING.md) for more details.

- [Stack Overflow](http://stackoverflow.com/questions/tagged/android-ndk)
- [Google+ Community](https://plus.google.com/communities/105153134372062985968)
- [Android Tools Feedbacks](http://tools.android.com/feedback)

License
-------
Copyright 2015 Google, Inc.

Licensed to the Apache Software Foundation (ASF) under one or more contributor
license agreements.  See the NOTICE file distributed with this work for
additional information regarding copyright ownership.  The ASF licenses this
file to you under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License.  You may obtain a copy of
the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
License for the specific language governing permissions and limitations under
the License.
