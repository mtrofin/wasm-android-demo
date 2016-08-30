//
// Created by clarkchenwang on 8/10/16.
//
#include <stdio.h>

#ifndef TEAPOTS_WASM_PORTING_PLATFORM_H
#define TEAPOTS_WASM_PORTING_PLATFORM_H

#define TARGET_WASM

#define PRINT(...)	\
		(printf(__VA_ARGS__));

#endif //TEAPOTS_WASM_PORTING_PLATFORM_H
