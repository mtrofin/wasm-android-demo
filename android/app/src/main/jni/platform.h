//
// Created by clarkchenwang on 8/10/16.
//

#ifndef TEAPOTS_WASM_PORTING_PLATFORM_H
#define TEAPOTS_WASM_PORTING_PLATFORM_H

#define TARGET_ANDROID

#define PRINT(...)  \
        (LOGI(__VA_ARGS__))

#include "NDKHelper.h"

#endif //TEAPOTS_WASM_PORTING_PLATFORM_H
