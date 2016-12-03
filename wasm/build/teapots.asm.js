Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var ___dso_handle=env.___dso_handle|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var Math_fround=global.Math.fround;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_vif=env.nullFunc_vif;
  var nullFunc_viiiii=env.nullFunc_viiiii;
  var nullFunc_vi=env.nullFunc_vi;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_viiiiii=env.nullFunc_viiiiii;
  var nullFunc_viiii=env.nullFunc_viiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_vif=env.invoke_vif;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _glUseProgram=env._glUseProgram;
  var ___syscall221=env.___syscall221;
  var _glDeleteShader=env._glDeleteShader;
  var _glVertexAttribPointer=env._glVertexAttribPointer;
  var _eglGetDisplay=env._eglGetDisplay;
  var _glGetProgramiv=env._glGetProgramiv;
  var emscriptenWebGLGet=env.emscriptenWebGLGet;
  var ___syscall54=env.___syscall54;
  var _abort=env._abort;
  var _eglChooseConfig=env._eglChooseConfig;
  var _glGetProgramInfoLog=env._glGetProgramInfoLog;
  var ___setErrNo=env.___setErrNo;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var _glClearColor=env._glClearColor;
  var ___assert_fail=env.___assert_fail;
  var _glDeleteProgram=env._glDeleteProgram;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var _XCreateWindow=env._XCreateWindow;
  var _glLinkProgram=env._glLinkProgram;
  var _glGetShaderInfoLog=env._glGetShaderInfoLog;
  var _glDeleteBuffers=env._glDeleteBuffers;
  var _glViewport=env._glViewport;
  var _XInternAtom=env._XInternAtom;
  var _emscripten_set_main_loop_timing=env._emscripten_set_main_loop_timing;
  var ___cxa_free_exception=env.___cxa_free_exception;
  var _glGetUniformLocation=env._glGetUniformLocation;
  var _glDepthFunc=env._glDepthFunc;
  var _glClear=env._glClear;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var _glUniform3f=env._glUniform3f;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var _XOpenDisplay=env._XOpenDisplay;
  var ___cxa_find_matching_catch_2=env.___cxa_find_matching_catch_2;
  var _eglCreateContext=env._eglCreateContext;
  var _glShaderSource=env._glShaderSource;
  var _glBindAttribLocation=env._glBindAttribLocation;
  var _glCreateShader=env._glCreateShader;
  var _glCompileShader=env._glCompileShader;
  var _glUniform4f=env._glUniform4f;
  var _eglInitialize=env._eglInitialize;
  var _atexit=env._atexit;
  var _XMapWindow=env._XMapWindow;
  var _XSendEvent=env._XSendEvent;
  var _glutCreateWindow=env._glutCreateWindow;
  var _XStoreName=env._XStoreName;
  var _glDrawElements=env._glDrawElements;
  var _glGetIntegerv=env._glGetIntegerv;
  var _glEnable=env._glEnable;
  var ___resumeException=env.___resumeException;
  var ___unlock=env.___unlock;
  var _glBindBuffer=env._glBindBuffer;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var _glCreateProgram=env._glCreateProgram;
  var _emscripten_set_main_loop=env._emscripten_set_main_loop;
  var _eglWaitClient=env._eglWaitClient;
  var _emscripten_get_now=env._emscripten_get_now;
  var _glGenBuffers=env._glGenBuffers;
  var _glAttachShader=env._glAttachShader;
  var _eglGetConfigs=env._eglGetConfigs;
  var _glFrontFace=env._glFrontFace;
  var _eglMakeCurrent=env._eglMakeCurrent;
  var ___cxa_atexit=env.___cxa_atexit;
  var _glUniformMatrix4fv=env._glUniformMatrix4fv;
  var ___cxa_throw=env.___cxa_throw;
  var _glEnableVertexAttribArray=env._glEnableVertexAttribArray;
  var ___lock=env.___lock;
  var ___syscall6=env.___syscall6;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _glutInitDisplayMode=env._glutInitDisplayMode;
  var ___syscall5=env.___syscall5;
  var _XChangeWindowAttributes=env._XChangeWindowAttributes;
  var _XSetWMHints=env._XSetWMHints;
  var _gettimeofday=env._gettimeofday;
  var _glBufferData=env._glBufferData;
  var _glGetShaderiv=env._glGetShaderiv;
  var _eglSwapBuffers=env._eglSwapBuffers;
  var ___syscall140=env.___syscall140;
  var ___syscall145=env.___syscall145;
  var ___syscall146=env.___syscall146;
  var _eglCreateWindowSurface=env._eglCreateWindowSurface;
  var tempFloat = Math_fround(0);
  const f0 = Math_fround(0);

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function ___cxx_global_var_init() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN19MoreTeapotsRendererC2Ev(30528);
 (___cxa_atexit((1|0),(30528|0),(___dso_handle|0))|0);
 return;
}
function __ZN6EngineC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 8|0);
 store1($3,0);
 $4 = ((($2)) + 4|0);
 store4($4,30792);
 store4($2,30528);
 STACKTOP = sp;return;
}
function __ZN6EngineD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 STACKTOP = sp;return;
}
function __ZN6Engine13LoadResourcesEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = load4($2);
 __ZN19MoreTeapotsRenderer4InitEiii($3,8,8,8);
 STACKTOP = sp;return;
}
function __ZN6Engine11InitDisplayEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 4|0);
 $4 = load4($3);
 _esInitContext($4);
 $5 = ((($2)) + 4|0);
 $6 = load4($5);
 (_esCreateWindow($6,27284,360,640,0)|0);
 __ZN6Engine13LoadResourcesEv($2);
 $7 = ((($2)) + 8|0);
 store1($7,1);
 _glEnable(2884);
 _glEnable(2929);
 _glDepthFunc(515);
 $8 = ((($2)) + 4|0);
 $9 = load4($8);
 $10 = ((($9)) + 4|0);
 $11 = load4($10);
 $12 = ((($2)) + 4|0);
 $13 = load4($12);
 $14 = ((($13)) + 8|0);
 $15 = load4($14);
 _glViewport(0,0,($11|0),($15|0));
 STACKTOP = sp;return;
}
function ___cxx_global_var_init_1() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN6EngineC2Ev(30828);
 (___cxa_atexit((25|0),(30828|0),(___dso_handle|0))|0);
 return;
}
function __Z9drawFramev() {
 var $0 = 0, $1 = 0, $10 = Math_fround(0), $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = Math_fround(0), $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = 0, $25 = Math_fround(0), $26 = 0;
 var $27 = 0, $28 = Math_fround(0), $29 = 0.0, $3 = 0.0, $30 = 0, $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = 0.0, $35 = Math_fround(0), $36 = Math_fround(0), $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 __ZN19MoreTeapotsRenderer6UpdateEv(30528);
 (_gettimeofday((30848|0),(30856|0))|0);
 $0 = load4(30848);
 $1 = load4(30840);
 $2 = (($0) - ($1))|0;
 $3 = (+($2|0));
 $4 = load4((30852));
 $5 = load4((30844));
 $6 = (($4) - ($5))|0;
 $7 = (+($6|0));
 $8 = $7 * 9.9999999999999995E-7;
 $9 = $3 + $8;
 $10 = Math_fround($9);
 storef(30864,$10);
 ; store8(30840,load8(30848,4),4);
 _glClearColor(0.5,0.5,0.5,1.0);
 _glClear(16640);
 __ZN19MoreTeapotsRenderer6RenderEv(30528);
 $11 = load4((30824));
 $12 = ($11|0)!=(0|0);
 if ($12) {
  $13 = load4((30824));
  $14 = loadf(30864);
  FUNCTION_TABLE_vif[$13 & 0](30792,$14);
 }
 $15 = load4((30820));
 $16 = ($15|0)!=(0|0);
 if ($16) {
  $17 = load4((30820));
  FUNCTION_TABLE_vi[$17 & 31](30792);
 }
 $18 = load4((30808));
 $19 = load4((30816));
 (_eglSwapBuffers(($18|0),($19|0))|0);
 $20 = loadf(30864);
 $21 = loadf(30868);
 $22 = Math_fround($21 + $20);
 storef(30868,$22);
 $23 = load4(30872);
 $24 = (($23) + 1)|0;
 store4(30872,$24);
 $25 = loadf(30868);
 $26 = $25 > Math_fround(5.0);
 if (!($26)) {
  STACKTOP = sp;return;
 }
 $27 = load4(30872);
 $28 = loadf(30868);
 $29 = +$28;
 $30 = load4(30872);
 $31 = (Math_fround(($30>>>0)));
 $32 = loadf(30868);
 $33 = Math_fround($31 / $32);
 $34 = +$33;
 store4($vararg_buffer,$27);
 $vararg_ptr1 = ((($vararg_buffer)) + 8|0);
 stored($vararg_ptr1,$29);
 $vararg_ptr2 = ((($vararg_buffer)) + 16|0);
 stored($vararg_ptr2,$34);
 (_printf(27292,$vararg_buffer)|0);
 $35 = loadf(30868);
 $36 = Math_fround($35 - Math_fround(5.0));
 storef(30868,$36);
 store4(30872,0);
 STACKTOP = sp;return;
}
function __Z5startv() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZN6Engine11InitDisplayEv(30828);
 _emscripten_set_main_loop((26|0),0,1);
 return;
}
function _main($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = 0;
 $3 = $0;
 $4 = $1;
 (_gettimeofday((30840|0),(30856|0))|0);
 __Z5startv();
 STACKTOP = sp;return 0;
}
function __GLOBAL__sub_I_MoreTeapots_wasm_cpp() {
 var label = 0, sp = 0;
 sp = STACKTOP;
 ___cxx_global_var_init();
 ___cxx_global_var_init_1();
 return;
}
function _CreateEGLContext($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $11 = sp + 40|0;
 $12 = sp + 36|0;
 $13 = sp + 32|0;
 $17 = sp + 16|0;
 $18 = sp;
 $6 = $0;
 $7 = $1;
 $8 = $2;
 $9 = $3;
 $10 = $4;
 ; store8($18,load8(1200,4),4); store8($18+8 | 0,load8(1200+8 | 0,4),4);
 $19 = load4(30876);
 $20 = $19;
 $21 = (_eglGetDisplay(($20|0))|0);
 $14 = $21;
 $22 = $14;
 $23 = ($22|0)==(0|0);
 do {
  if ($23) {
   $5 = 0;
  } else {
   $24 = $14;
   $25 = (_eglInitialize(($24|0),($12|0),($13|0))|0);
   $26 = ($25|0)!=(0);
   if (!($26)) {
    $5 = 0;
    break;
   }
   $27 = $14;
   $28 = (_eglGetConfigs(($27|0),(0|0),0,($11|0))|0);
   $29 = ($28|0)!=(0);
   if (!($29)) {
    $5 = 0;
    break;
   }
   $30 = $14;
   $31 = $10;
   $32 = (_eglChooseConfig(($30|0),($31|0),($17|0),1,($11|0))|0);
   $33 = ($32|0)!=(0);
   if (!($33)) {
    $5 = 0;
    break;
   }
   $34 = $14;
   $35 = load4($17);
   $36 = $6;
   $37 = (_eglCreateWindowSurface(($34|0),($35|0),($36|0),(0|0))|0);
   $16 = $37;
   $38 = $16;
   $39 = ($38|0)==(0|0);
   if ($39) {
    $5 = 0;
    break;
   }
   $40 = $14;
   $41 = load4($17);
   $42 = (_eglCreateContext(($40|0),($41|0),(0|0),($18|0))|0);
   $15 = $42;
   $43 = $15;
   $44 = ($43|0)==(0|0);
   if ($44) {
    $5 = 0;
    break;
   }
   $45 = $14;
   $46 = $16;
   $47 = $16;
   $48 = $15;
   $49 = (_eglMakeCurrent(($45|0),($46|0),($47|0),($48|0))|0);
   $50 = ($49|0)!=(0);
   if ($50) {
    $51 = $14;
    $52 = $7;
    store4($52,$51);
    $53 = $16;
    $54 = $9;
    store4($54,$53);
    $55 = $15;
    $56 = $8;
    store4($56,$55);
    $5 = 1;
    break;
   } else {
    $5 = 0;
    break;
   }
  }
 } while(0);
 $57 = $5;
 STACKTOP = sp;return ($57|0);
}
function _WinCreate($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 288|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(288|0);
 $6 = sp + 204|0;
 $7 = sp + 144|0;
 $9 = sp + 104|0;
 $10 = sp + 8|0;
 $3 = $0;
 $4 = $1;
 $12 = (_XOpenDisplay((0|0))|0);
 store4(30876,$12);
 $13 = load4(30876);
 $14 = ($13|0)==(0|0);
 if ($14) {
  $2 = 0;
  $68 = $2;
  STACKTOP = sp;return ($68|0);
 } else {
  $15 = load4(30876);
  $16 = ((($15)) + 132|0);
  $17 = load4($16);
  $18 = load4(30876);
  $19 = ((($18)) + 140|0);
  $20 = load4($19);
  $21 = (($20) + (($17*80)|0)|0);
  $22 = ((($21)) + 8|0);
  $23 = load4($22);
  $5 = $23;
  $24 = ((($6)) + 40|0);
  store4($24,32833);
  $25 = load4(30876);
  $26 = $5;
  $27 = $3;
  $28 = ((($27)) + 4|0);
  $29 = load4($28);
  $30 = $3;
  $31 = ((($30)) + 8|0);
  $32 = load4($31);
  $33 = (_XCreateWindow(($25|0),($26|0),0,0,($29|0),($32|0),0,0,1,(0|0),2048,($6|0))|0);
  $11 = $33;
  $34 = ((($7)) + 48|0);
  store4($34,0);
  $35 = load4(30876);
  $36 = $11;
  (_XChangeWindowAttributes(($35|0),($36|0),512,($7|0))|0);
  $37 = ((($9)) + 4|0);
  store4($37,1);
  store4($9,1);
  $38 = load4(30876);
  $39 = $11;
  (_XSetWMHints(($38|0),($39|0),($9|0))|0);
  $40 = load4(30876);
  $41 = $11;
  (_XMapWindow(($40|0),($41|0))|0);
  $42 = load4(30876);
  $43 = $11;
  $44 = $4;
  (_XStoreName(($42|0),($43|0),($44|0))|0);
  $45 = load4(30876);
  $46 = (_XInternAtom(($45|0),(27343|0),0)|0);
  $8 = $46;
  ; store8($10,i64_const(0,0),4); store8($10+8|0,i64_const(0,0),4); store8($10+16|0,i64_const(0,0),4); store8($10+24|0,i64_const(0,0),4); store8($10+32|0,i64_const(0,0),4); store8($10+40|0,i64_const(0,0),4); store8($10+48|0,i64_const(0,0),4); store8($10+56|0,i64_const(0,0),4); store8($10+64|0,i64_const(0,0),4); store8($10+72|0,i64_const(0,0),4); store8($10+80|0,i64_const(0,0),4); store8($10+88|0,i64_const(0,0),4);
  store4($10,33);
  $47 = $11;
  $48 = ((($10)) + 16|0);
  store4($48,$47);
  $49 = $8;
  $50 = ((($10)) + 20|0);
  store4($50,$49);
  $51 = ((($10)) + 24|0);
  store4($51,32);
  $52 = ((($10)) + 28|0);
  store4($52,1);
  $53 = ((($10)) + 28|0);
  $54 = ((($53)) + 4|0);
  store4($54,0);
  $55 = load4(30876);
  $56 = load4(30876);
  $57 = ((($56)) + 132|0);
  $58 = load4($57);
  $59 = load4(30876);
  $60 = ((($59)) + 140|0);
  $61 = load4($60);
  $62 = (($61) + (($58*80)|0)|0);
  $63 = ((($62)) + 8|0);
  $64 = load4($63);
  (_XSendEvent(($55|0),($64|0),0,524288,($10|0))|0);
  $65 = $11;
  $66 = $3;
  $67 = ((($66)) + 12|0);
  store4($67,$65);
  $2 = 1;
  $68 = $2;
  STACKTOP = sp;return ($68|0);
 }
 return (0)|0;
}
function _esInitContext($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ($2|0)!=(0|0);
 if (!($3)) {
  STACKTOP = sp;return;
 }
 $4 = $1;
 ; store8($4,i64_const(0,0),4); store8($4+8|0,i64_const(0,0),4); store8($4+16|0,i64_const(0,0),4); store8($4+24|0,i64_const(0,0),4); store4($4+32|0,0,4);
 STACKTOP = sp;return;
}
function _esCreateWindow($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $11 = sp;
 $6 = $0;
 $7 = $1;
 $8 = $2;
 $9 = $3;
 $10 = $4;
 store4($11,12324);
 $12 = ((($11)) + 4|0);
 store4($12,5);
 $13 = ((($12)) + 4|0);
 store4($13,12323);
 $14 = ((($13)) + 4|0);
 store4($14,6);
 $15 = ((($14)) + 4|0);
 store4($15,12322);
 $16 = ((($15)) + 4|0);
 store4($16,5);
 $17 = ((($16)) + 4|0);
 store4($17,12321);
 $18 = ((($17)) + 4|0);
 $19 = $10;
 $20 = $19 & 1;
 $21 = ($20|0)!=(0);
 $22 = $21 ? 8 : -1;
 store4($18,$22);
 $23 = ((($18)) + 4|0);
 store4($23,12325);
 $24 = ((($23)) + 4|0);
 $25 = $10;
 $26 = $25 & 2;
 $27 = ($26|0)!=(0);
 $28 = $27 ? 8 : -1;
 store4($24,$28);
 $29 = ((($24)) + 4|0);
 store4($29,12326);
 $30 = ((($29)) + 4|0);
 $31 = $10;
 $32 = $31 & 4;
 $33 = ($32|0)!=(0);
 $34 = $33 ? 8 : -1;
 store4($30,$34);
 $35 = ((($30)) + 4|0);
 store4($35,12338);
 $36 = ((($35)) + 4|0);
 $37 = $10;
 $38 = $37 & 8;
 $39 = ($38|0)!=(0);
 $40 = $39 ? 1 : 0;
 store4($36,$40);
 $41 = ((($36)) + 4|0);
 store4($41,12344);
 $42 = $6;
 $43 = ($42|0)==(0|0);
 if ($43) {
  $5 = 0;
  $65 = $5;
  STACKTOP = sp;return ($65|0);
 }
 $44 = $8;
 $45 = $6;
 $46 = ((($45)) + 4|0);
 store4($46,$44);
 $47 = $9;
 $48 = $6;
 $49 = ((($48)) + 8|0);
 store4($49,$47);
 $50 = $6;
 $51 = $7;
 $52 = (_WinCreate($50,$51)|0);
 $53 = ($52|0)!=(0);
 if (!($53)) {
  $5 = 0;
  $65 = $5;
  STACKTOP = sp;return ($65|0);
 }
 $54 = $6;
 $55 = ((($54)) + 12|0);
 $56 = load4($55);
 $57 = $6;
 $58 = ((($57)) + 16|0);
 $59 = $6;
 $60 = ((($59)) + 20|0);
 $61 = $6;
 $62 = ((($61)) + 24|0);
 $63 = (_CreateEGLContext($56,$58,$60,$62,$11)|0);
 $64 = ($63|0)!=(0);
 if ($64) {
  $5 = 1;
  $65 = $5;
  STACKTOP = sp;return ($65|0);
 } else {
  $5 = 0;
  $65 = $5;
  STACKTOP = sp;return ($65|0);
 }
 return (0)|0;
}
function __ZN19MoreTeapotsRendererD0Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 __ZN19MoreTeapotsRendererD2Ev($2);
 __ZdlPv($2);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRendererD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 store4($2,(20424));
 __ZN19MoreTeapotsRenderer6UnloadEv($2);
 $3 = ((($2)) + 228|0);
 __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEED2Ev($3);
 $4 = ((($2)) + 216|0);
 __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEED2Ev($4);
 $5 = ((($2)) + 204|0);
 __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEED2Ev($5);
 $6 = ((($2)) + 192|0);
 __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEED2Ev($6);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRenderer6UnloadEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 16|0);
 $4 = load4($3);
 $5 = ($4|0)!=(0);
 if ($5) {
  $6 = ((($2)) + 16|0);
  _glDeleteBuffers(1,($6|0));
  $7 = ((($2)) + 16|0);
  store4($7,0);
 }
 $8 = ((($2)) + 20|0);
 $9 = load4($8);
 $10 = ($9|0)!=(0);
 if ($10) {
  $11 = ((($2)) + 20|0);
  _glDeleteBuffers(1,($11|0));
  $12 = ((($2)) + 20|0);
  store4($12,0);
 }
 $13 = ((($2)) + 12|0);
 $14 = load4($13);
 $15 = ($14|0)!=(0);
 if ($15) {
  $16 = ((($2)) + 12|0);
  _glDeleteBuffers(1,($16|0));
  $17 = ((($2)) + 12|0);
  store4($17,0);
 }
 $18 = ((($2)) + 36|0);
 $19 = load4($18);
 $20 = ($19|0)!=(0);
 if (!($20)) {
  STACKTOP = sp;return;
 }
 $21 = ((($2)) + 36|0);
 $22 = load4($21);
 _glDeleteProgram(($22|0));
 $23 = ((($2)) + 36|0);
 store4($23,0);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 __ZNSt3__213__vector_baseIN10ndk_helper4Vec2ENS_9allocatorIS2_EEED2Ev($2);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 __ZNSt3__213__vector_baseIN10ndk_helper4Vec3ENS_9allocatorIS2_EEED2Ev($2);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 __ZNSt3__213__vector_baseIN10ndk_helper4Mat4ENS_9allocatorIS2_EEED2Ev($2);
 STACKTOP = sp;return;
}
function __ZNSt3__213__vector_baseIN10ndk_helper4Mat4ENS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(144|0);
 $4 = sp;
 $7 = sp + 128|0;
 $31 = sp + 12|0;
 $33 = sp + 4|0;
 $32 = $0;
 $34 = $32;
 $35 = load4($34);
 $29 = $31;
 $30 = -1;
 $36 = $29;
 store4($36,0);
 $37 = load4($31);
 store4($33,$37);
 $21 = $33;
 $38 = ($35|0)!=(0|0);
 if (!($38)) {
  STACKTOP = sp;return;
 }
 $13 = $34;
 $39 = $13;
 $40 = load4($39);
 $11 = $39;
 $12 = $40;
 $41 = $11;
 while(1) {
  $42 = $12;
  $43 = ((($41)) + 4|0);
  $44 = load4($43);
  $45 = ($42|0)!=($44|0);
  if (!($45)) {
   break;
  }
  $10 = $41;
  $46 = $10;
  $47 = ((($46)) + 8|0);
  $9 = $47;
  $48 = $9;
  $8 = $48;
  $49 = $8;
  $50 = ((($41)) + 4|0);
  $51 = load4($50);
  $52 = ((($51)) + -64|0);
  store4($50,$52);
  $1 = $52;
  $53 = $1;
  $5 = $49;
  $6 = $53;
  $54 = $5;
  $55 = $6;
  ; store1($4,load1($7,1),1);
  $2 = $54;
  $3 = $55;
 }
 $16 = $34;
 $56 = $16;
 $57 = ((($56)) + 8|0);
 $15 = $57;
 $58 = $15;
 $14 = $58;
 $59 = $14;
 $60 = load4($34);
 $20 = $34;
 $61 = $20;
 $19 = $61;
 $62 = $19;
 $63 = ((($62)) + 8|0);
 $18 = $63;
 $64 = $18;
 $17 = $64;
 $65 = $17;
 $66 = load4($65);
 $67 = load4($61);
 $68 = $66;
 $69 = $67;
 $70 = (($68) - ($69))|0;
 $71 = (($70|0) / 64)&-1;
 $26 = $59;
 $27 = $60;
 $28 = $71;
 $72 = $26;
 $73 = $27;
 $74 = $28;
 $23 = $72;
 $24 = $73;
 $25 = $74;
 $75 = $24;
 $22 = $75;
 $76 = $22;
 __ZdlPv($76);
 STACKTOP = sp;return;
}
function __ZNSt3__213__vector_baseIN10ndk_helper4Vec3ENS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(144|0);
 $4 = sp;
 $7 = sp + 128|0;
 $31 = sp + 12|0;
 $33 = sp + 4|0;
 $32 = $0;
 $34 = $32;
 $35 = load4($34);
 $29 = $31;
 $30 = -1;
 $36 = $29;
 store4($36,0);
 $37 = load4($31);
 store4($33,$37);
 $21 = $33;
 $38 = ($35|0)!=(0|0);
 if (!($38)) {
  STACKTOP = sp;return;
 }
 $13 = $34;
 $39 = $13;
 $40 = load4($39);
 $11 = $39;
 $12 = $40;
 $41 = $11;
 while(1) {
  $42 = $12;
  $43 = ((($41)) + 4|0);
  $44 = load4($43);
  $45 = ($42|0)!=($44|0);
  if (!($45)) {
   break;
  }
  $10 = $41;
  $46 = $10;
  $47 = ((($46)) + 8|0);
  $9 = $47;
  $48 = $9;
  $8 = $48;
  $49 = $8;
  $50 = ((($41)) + 4|0);
  $51 = load4($50);
  $52 = ((($51)) + -12|0);
  store4($50,$52);
  $1 = $52;
  $53 = $1;
  $5 = $49;
  $6 = $53;
  $54 = $5;
  $55 = $6;
  ; store1($4,load1($7,1),1);
  $2 = $54;
  $3 = $55;
 }
 $16 = $34;
 $56 = $16;
 $57 = ((($56)) + 8|0);
 $15 = $57;
 $58 = $15;
 $14 = $58;
 $59 = $14;
 $60 = load4($34);
 $20 = $34;
 $61 = $20;
 $19 = $61;
 $62 = $19;
 $63 = ((($62)) + 8|0);
 $18 = $63;
 $64 = $18;
 $17 = $64;
 $65 = $17;
 $66 = load4($65);
 $67 = load4($61);
 $68 = $66;
 $69 = $67;
 $70 = (($68) - ($69))|0;
 $71 = (($70|0) / 12)&-1;
 $26 = $59;
 $27 = $60;
 $28 = $71;
 $72 = $26;
 $73 = $27;
 $74 = $28;
 $23 = $72;
 $24 = $73;
 $25 = $74;
 $75 = $24;
 $22 = $75;
 $76 = $22;
 __ZdlPv($76);
 STACKTOP = sp;return;
}
function __ZNSt3__213__vector_baseIN10ndk_helper4Vec2ENS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(144|0);
 $4 = sp;
 $7 = sp + 128|0;
 $31 = sp + 12|0;
 $33 = sp + 4|0;
 $32 = $0;
 $34 = $32;
 $35 = load4($34);
 $29 = $31;
 $30 = -1;
 $36 = $29;
 store4($36,0);
 $37 = load4($31);
 store4($33,$37);
 $21 = $33;
 $38 = ($35|0)!=(0|0);
 if (!($38)) {
  STACKTOP = sp;return;
 }
 $13 = $34;
 $39 = $13;
 $40 = load4($39);
 $11 = $39;
 $12 = $40;
 $41 = $11;
 while(1) {
  $42 = $12;
  $43 = ((($41)) + 4|0);
  $44 = load4($43);
  $45 = ($42|0)!=($44|0);
  if (!($45)) {
   break;
  }
  $10 = $41;
  $46 = $10;
  $47 = ((($46)) + 8|0);
  $9 = $47;
  $48 = $9;
  $8 = $48;
  $49 = $8;
  $50 = ((($41)) + 4|0);
  $51 = load4($50);
  $52 = ((($51)) + -8|0);
  store4($50,$52);
  $1 = $52;
  $53 = $1;
  $5 = $49;
  $6 = $53;
  $54 = $5;
  $55 = $6;
  ; store1($4,load1($7,1),1);
  $2 = $54;
  $3 = $55;
 }
 $16 = $34;
 $56 = $16;
 $57 = ((($56)) + 8|0);
 $15 = $57;
 $58 = $15;
 $14 = $58;
 $59 = $14;
 $60 = load4($34);
 $20 = $34;
 $61 = $20;
 $19 = $61;
 $62 = $19;
 $63 = ((($62)) + 8|0);
 $18 = $63;
 $64 = $18;
 $17 = $64;
 $65 = $17;
 $66 = load4($65);
 $67 = load4($61);
 $68 = $66;
 $69 = $67;
 $70 = (($68) - ($69))|0;
 $71 = (($70|0) / 8)&-1;
 $26 = $59;
 $27 = $60;
 $28 = $71;
 $72 = $26;
 $73 = $27;
 $74 = $28;
 $23 = $72;
 $24 = $73;
 $25 = $74;
 $75 = $24;
 $22 = $75;
 $76 = $22;
 __ZdlPv($76);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRendererC2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0;
 var $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0;
 var $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0;
 var $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0;
 var $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 416|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(416|0);
 $3 = sp + 392|0;
 $7 = sp + 376|0;
 $11 = sp + 360|0;
 $16 = sp + 340|0;
 $19 = sp + 328|0;
 $22 = sp + 316|0;
 $23 = sp + 312|0;
 $24 = sp + 308|0;
 $28 = sp + 292|0;
 $32 = sp + 276|0;
 $36 = sp + 260|0;
 $41 = sp + 240|0;
 $44 = sp + 228|0;
 $47 = sp + 216|0;
 $48 = sp + 212|0;
 $49 = sp + 208|0;
 $53 = sp + 192|0;
 $57 = sp + 176|0;
 $61 = sp + 160|0;
 $66 = sp + 140|0;
 $69 = sp + 128|0;
 $72 = sp + 116|0;
 $73 = sp + 112|0;
 $74 = sp + 108|0;
 $78 = sp + 92|0;
 $82 = sp + 76|0;
 $86 = sp + 60|0;
 $91 = sp + 40|0;
 $94 = sp + 28|0;
 $97 = sp + 16|0;
 $98 = sp + 12|0;
 $99 = sp + 8|0;
 $101 = $0;
 $102 = $101;
 store4($102,(20424));
 $103 = ((($102)) + 64|0);
 __ZN10ndk_helper4Mat4C2Ev($103);
 $104 = ((($102)) + 128|0);
 __ZN10ndk_helper4Mat4C2Ev($104);
 $105 = ((($102)) + 192|0);
 $100 = $105;
 $106 = $100;
 $96 = $106;
 $107 = $96;
 $95 = $107;
 $76 = $78;
 $77 = -1;
 $108 = $76;
 store4($108,0);
 $109 = load4($78);
 store4($97,$109);
 $79 = $97;
 store4($107,0);
 $110 = ((($107)) + 4|0);
 $80 = $82;
 $81 = -1;
 $111 = $80;
 store4($111,0);
 $112 = load4($82);
 store4($98,$112);
 $83 = $98;
 store4($110,0);
 $113 = ((($107)) + 8|0);
 $84 = $86;
 $85 = -1;
 $114 = $84;
 store4($114,0);
 $115 = load4($86);
 store4($99,$115);
 $87 = $99;
 $93 = $113;
 store4($94,0);
 $116 = $93;
 $92 = $94;
 $117 = $92;
 $118 = load4($117);
 $90 = $116;
 store4($91,$118);
 $119 = $90;
 $89 = $119;
 $88 = $91;
 $120 = $88;
 $121 = load4($120);
 store4($119,$121);
 $122 = ((($102)) + 204|0);
 $25 = $122;
 $123 = $25;
 $21 = $123;
 $124 = $21;
 $20 = $124;
 $1 = $3;
 $2 = -1;
 $125 = $1;
 store4($125,0);
 $126 = load4($3);
 store4($22,$126);
 $4 = $22;
 store4($124,0);
 $127 = ((($124)) + 4|0);
 $5 = $7;
 $6 = -1;
 $128 = $5;
 store4($128,0);
 $129 = load4($7);
 store4($23,$129);
 $8 = $23;
 store4($127,0);
 $130 = ((($124)) + 8|0);
 $9 = $11;
 $10 = -1;
 $131 = $9;
 store4($131,0);
 $132 = load4($11);
 store4($24,$132);
 $12 = $24;
 $18 = $130;
 store4($19,0);
 $133 = $18;
 $17 = $19;
 $134 = $17;
 $135 = load4($134);
 $15 = $133;
 store4($16,$135);
 $136 = $15;
 $14 = $136;
 $13 = $16;
 $137 = $13;
 $138 = load4($137);
 store4($136,$138);
 $139 = ((($102)) + 216|0);
 $50 = $139;
 $140 = $50;
 $46 = $140;
 $141 = $46;
 $45 = $141;
 $26 = $28;
 $27 = -1;
 $142 = $26;
 store4($142,0);
 $143 = load4($28);
 store4($47,$143);
 $29 = $47;
 store4($141,0);
 $144 = ((($141)) + 4|0);
 $30 = $32;
 $31 = -1;
 $145 = $30;
 store4($145,0);
 $146 = load4($32);
 store4($48,$146);
 $33 = $48;
 store4($144,0);
 $147 = ((($141)) + 8|0);
 $34 = $36;
 $35 = -1;
 $148 = $34;
 store4($148,0);
 $149 = load4($36);
 store4($49,$149);
 $37 = $49;
 $43 = $147;
 store4($44,0);
 $150 = $43;
 $42 = $44;
 $151 = $42;
 $152 = load4($151);
 $40 = $150;
 store4($41,$152);
 $153 = $40;
 $39 = $153;
 $38 = $41;
 $154 = $38;
 $155 = load4($154);
 store4($153,$155);
 $156 = ((($102)) + 228|0);
 $75 = $156;
 $157 = $75;
 $71 = $157;
 $158 = $71;
 $70 = $158;
 $51 = $53;
 $52 = -1;
 $159 = $51;
 store4($159,0);
 $160 = load4($53);
 store4($72,$160);
 $54 = $72;
 store4($158,0);
 $161 = ((($158)) + 4|0);
 $55 = $57;
 $56 = -1;
 $162 = $55;
 store4($162,0);
 $163 = load4($57);
 store4($73,$163);
 $58 = $73;
 store4($161,0);
 $164 = ((($158)) + 8|0);
 $59 = $61;
 $60 = -1;
 $165 = $59;
 store4($165,0);
 $166 = load4($61);
 store4($74,$166);
 $62 = $74;
 $68 = $164;
 store4($69,0);
 $167 = $68;
 $67 = $69;
 $168 = $67;
 $169 = load4($168);
 $65 = $167;
 store4($66,$169);
 $170 = $65;
 $64 = $170;
 $63 = $66;
 $171 = $63;
 $172 = load4($171);
 store4($170,$172);
 $173 = ((($102)) + 260|0);
 store1($173,0);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRenderer4InitEiii($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$arith = 0, $$arith2 = 0, $$overflow = 0, $$overflow3 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = Math_fround(0), $109 = 0, $11 = 0, $110 = Math_fround(0), $111 = Math_fround(0), $112 = Math_fround(0), $113 = Math_fround(0);
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = Math_fround(0), $126 = 0, $127 = Math_fround(0), $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = 0;
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = Math_fround(0), $144 = 0, $145 = Math_fround(0), $146 = Math_fround(0), $147 = Math_fround(0), $148 = Math_fround(0), $149 = 0, $15 = 0;
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = Math_fround(0), $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0;
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = Math_fround(0), $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0;
 var $187 = Math_fround(0), $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0;
 var $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0;
 var $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0;
 var $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0;
 var $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0;
 var $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = Math_fround(0), $293 = Math_fround(0), $294 = 0, $295 = 0;
 var $296 = 0, $297 = Math_fround(0), $298 = Math_fround(0), $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = Math_fround(0), $303 = Math_fround(0), $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = Math_fround(0), $319 = Math_fround(0), $32 = 0, $320 = Math_fround(0), $321 = Math_fround(0), $322 = Math_fround(0), $323 = 0, $324 = Math_fround(0), $325 = Math_fround(0), $326 = Math_fround(0), $327 = Math_fround(0), $328 = Math_fround(0), $329 = 0, $33 = 0, $330 = Math_fround(0), $331 = Math_fround(0);
 var $332 = Math_fround(0), $333 = Math_fround(0), $334 = Math_fround(0), $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0;
 var $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = Math_fround(0), $361 = Math_fround(0), $362 = 0, $363 = Math_fround(0), $364 = Math_fround(0), $365 = 0, $366 = Math_fround(0), $367 = Math_fround(0), $368 = 0;
 var $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0;
 var $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = Math_fround(0), $393 = Math_fround(0), $394 = Math_fround(0), $395 = 0, $396 = Math_fround(0), $397 = Math_fround(0), $398 = Math_fround(0), $399 = 0, $4 = 0, $40 = 0, $400 = Math_fround(0), $401 = Math_fround(0), $402 = Math_fround(0), $403 = Math_fround(0);
 var $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0;
 var $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = Math_fround(0), $429 = 0.0, $43 = 0, $430 = 0.0, $431 = Math_fround(0), $432 = Math_fround(0), $433 = 0.0, $434 = 0.0, $435 = Math_fround(0), $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0;
 var $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0;
 var $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = Math_fround(0), $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = Math_fround(0), $7 = 0, $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = Math_fround(0), $74 = Math_fround(0), $75 = Math_fround(0);
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = Math_fround(0), $82 = Math_fround(0), $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 400|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(400|0);
 $vararg_buffer = sp;
 $16 = sp + 399|0;
 $29 = sp + 398|0;
 $42 = sp + 397|0;
 $55 = sp + 396|0;
 $79 = sp + 48|0;
 $80 = sp + 32|0;
 $83 = sp + 16|0;
 $84 = sp + 8|0;
 $56 = $0;
 $57 = $1;
 $58 = $2;
 $59 = $3;
 $85 = $56;
 _glFrontFace(2305);
 $86 = ((($85)) + 32|0);
 store4($86,1);
 $87 = ((($85)) + 28|0);
 store4($87,800);
 $88 = ((($85)) + 32|0);
 $89 = load4($88);
 $90 = ((($85)) + 28|0);
 $91 = load4($90);
 $92 = Math_imul($89, $91)|0;
 $93 = ((($85)) + 8|0);
 store4($93,$92);
 $60 = 24;
 $61 = 0;
 $94 = ((($85)) + 8|0);
 $95 = load4($94);
 $$arith2 = ($95*24)|0;
 $$overflow3 = ($95>>>0)>(178956970);
 $96 = $$overflow3 ? -1 : $$arith2;
 $97 = (__Znaj($96)|0);
 $62 = $97;
 $63 = Math_fround(0.5);
 $64 = 0;
 while(1) {
  $98 = $64;
  $99 = ((($85)) + 32|0);
  $100 = load4($99);
  $101 = ($98|0)<($100|0);
  if (!($101)) {
   break;
  }
  $65 = 0;
  while(1) {
   $102 = $65;
   $103 = ((($85)) + 28|0);
   $104 = load4($103);
   $105 = ($102|0)<($104|0);
   if (!($105)) {
    break;
   }
   $106 = $61;
   $107 = (1216 + ($106<<2)|0);
   $108 = loadf($107);
   $109 = $64;
   $110 = (Math_fround(($109|0)));
   $111 = $63;
   $112 = Math_fround($110 * $111);
   $113 = Math_fround($108 + $112);
   $114 = $65;
   $115 = $64;
   $116 = ((($85)) + 28|0);
   $117 = load4($116);
   $118 = Math_imul($115, $117)|0;
   $119 = (($114) + ($118))|0;
   $120 = $62;
   $121 = (($120) + (($119*24)|0)|0);
   storef($121,$113);
   $122 = $61;
   $123 = (($122) + 1)|0;
   $124 = (1216 + ($123<<2)|0);
   $125 = loadf($124);
   $126 = $64;
   $127 = (Math_fround(($126|0)));
   $128 = $63;
   $129 = Math_fround($127 * $128);
   $130 = Math_fround($125 + $129);
   $131 = $65;
   $132 = $64;
   $133 = ((($85)) + 28|0);
   $134 = load4($133);
   $135 = Math_imul($132, $134)|0;
   $136 = (($131) + ($135))|0;
   $137 = $62;
   $138 = (($137) + (($136*24)|0)|0);
   $139 = ((($138)) + 4|0);
   storef($139,$130);
   $140 = $61;
   $141 = (($140) + 2)|0;
   $142 = (1216 + ($141<<2)|0);
   $143 = loadf($142);
   $144 = $64;
   $145 = (Math_fround(($144|0)));
   $146 = $63;
   $147 = Math_fround($145 * $146);
   $148 = Math_fround($143 + $147);
   $149 = $65;
   $150 = $64;
   $151 = ((($85)) + 28|0);
   $152 = load4($151);
   $153 = Math_imul($150, $152)|0;
   $154 = (($149) + ($153))|0;
   $155 = $62;
   $156 = (($155) + (($154*24)|0)|0);
   $157 = ((($156)) + 8|0);
   storef($157,$148);
   $158 = $61;
   $159 = (10816 + ($158<<2)|0);
   $160 = loadf($159);
   $161 = $65;
   $162 = $64;
   $163 = ((($85)) + 28|0);
   $164 = load4($163);
   $165 = Math_imul($162, $164)|0;
   $166 = (($161) + ($165))|0;
   $167 = $62;
   $168 = (($167) + (($166*24)|0)|0);
   $169 = ((($168)) + 12|0);
   storef($169,$160);
   $170 = $61;
   $171 = (($170) + 1)|0;
   $172 = (10816 + ($171<<2)|0);
   $173 = loadf($172);
   $174 = $65;
   $175 = $64;
   $176 = ((($85)) + 28|0);
   $177 = load4($176);
   $178 = Math_imul($175, $177)|0;
   $179 = (($174) + ($178))|0;
   $180 = $62;
   $181 = (($180) + (($179*24)|0)|0);
   $182 = ((($181)) + 12|0);
   $183 = ((($182)) + 4|0);
   storef($183,$173);
   $184 = $61;
   $185 = (($184) + 2)|0;
   $186 = (10816 + ($185<<2)|0);
   $187 = loadf($186);
   $188 = $65;
   $189 = $64;
   $190 = ((($85)) + 28|0);
   $191 = load4($190);
   $192 = Math_imul($189, $191)|0;
   $193 = (($188) + ($192))|0;
   $194 = $62;
   $195 = (($194) + (($193*24)|0)|0);
   $196 = ((($195)) + 12|0);
   $197 = ((($196)) + 8|0);
   storef($197,$187);
   $198 = $61;
   $199 = (($198) + 3)|0;
   $61 = $199;
   $200 = $61;
   $201 = (($200>>>0) % 2400)&-1;
   $61 = $201;
   $202 = $65;
   $203 = (($202) + 1)|0;
   $65 = $203;
  }
  $204 = $64;
  $205 = (($204) + 1)|0;
  $64 = $205;
 }
 $206 = ((($85)) + 16|0);
 _glGenBuffers(1,($206|0));
 $207 = ((($85)) + 16|0);
 $208 = load4($207);
 _glBindBuffer(34962,($208|0));
 $209 = $60;
 $210 = ((($85)) + 8|0);
 $211 = load4($210);
 $212 = Math_imul($209, $211)|0;
 $213 = $62;
 _glBufferData(34962,($212|0),($213|0),35044);
 _glBindBuffer(34962,0);
 $214 = $62;
 $215 = ($214|0)==(0|0);
 if (!($215)) {
  __ZdaPv($214);
 }
 $216 = ((($85)) + 24|0);
 store4($216,3072);
 $217 = ((($85)) + 32|0);
 $218 = load4($217);
 $219 = ((($85)) + 24|0);
 $220 = load4($219);
 $221 = Math_imul($218, $220)|0;
 $222 = ((($85)) + 4|0);
 store4($222,$221);
 $223 = ((($85)) + 4|0);
 $224 = load4($223);
 store4($vararg_buffer,$224);
 (_printf(27357,$vararg_buffer)|0);
 $61 = 0;
 $225 = ((($85)) + 4|0);
 $226 = load4($225);
 $$arith = $226<<1;
 $$overflow = ($226>>>0)>(2147483647);
 $227 = $$overflow ? -1 : $$arith;
 $228 = (__Znaj($227)|0);
 $66 = $228;
 $67 = 0;
 while(1) {
  $229 = $67;
  $230 = ((($85)) + 32|0);
  $231 = load4($230);
  $232 = ($229|0)<($231|0);
  if (!($232)) {
   break;
  }
  $68 = 0;
  while(1) {
   $233 = $68;
   $234 = ((($85)) + 24|0);
   $235 = load4($234);
   $236 = ($233|0)<($235|0);
   if (!($236)) {
    break;
   }
   $237 = $61;
   $238 = (21140 + ($237<<1)|0);
   $239 = load2($238);
   $240 = $239&65535;
   $241 = $67;
   $242 = ((($85)) + 28|0);
   $243 = load4($242);
   $244 = Math_imul($241, $243)|0;
   $245 = (($240) + ($244))|0;
   $246 = $245&65535;
   $247 = $68;
   $248 = $67;
   $249 = ((($85)) + 24|0);
   $250 = load4($249);
   $251 = Math_imul($248, $250)|0;
   $252 = (($247) + ($251))|0;
   $253 = $66;
   $254 = (($253) + ($252<<1)|0);
   store2($254,$246);
   $255 = $61;
   $256 = (($255) + 1)|0;
   $61 = $256;
   $257 = $61;
   $258 = ((($85)) + 24|0);
   $259 = load4($258);
   $260 = (($257|0) % ($259|0))&-1;
   $61 = $260;
   $261 = $68;
   $262 = (($261) + 1)|0;
   $68 = $262;
  }
  $263 = $67;
  $264 = (($263) + 1)|0;
  $67 = $264;
 }
 $265 = ((($85)) + 12|0);
 _glGenBuffers(1,($265|0));
 $266 = ((($85)) + 12|0);
 $267 = load4($266);
 _glBindBuffer(34963,($267|0));
 $268 = ((($85)) + 4|0);
 $269 = load4($268);
 $270 = $269<<1;
 $271 = $66;
 _glBufferData(34963,($270|0),($271|0),35044);
 _glBindBuffer(34963,0);
 $272 = $66;
 $273 = ($272|0)==(0|0);
 if (!($273)) {
  __ZdaPv($272);
 }
 $274 = $57;
 $275 = ((($85)) + 240|0);
 store4($275,$274);
 $276 = $58;
 $277 = ((($85)) + 244|0);
 store4($277,$276);
 $278 = $59;
 $279 = ((($85)) + 248|0);
 store4($279,$278);
 $280 = ((($85)) + 192|0);
 $281 = ((($85)) + 240|0);
 $282 = load4($281);
 $283 = ((($85)) + 244|0);
 $284 = load4($283);
 $285 = Math_imul($282, $284)|0;
 $286 = ((($85)) + 248|0);
 $287 = load4($286);
 $288 = Math_imul($285, $287)|0;
 __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE7reserveEj($280,$288);
 __ZN19MoreTeapotsRenderer14UpdateViewportEv($85);
 $69 = Math_fround(100.0);
 $289 = ((($85)) + 240|0);
 $290 = load4($289);
 $291 = (($290) - 1)|0;
 $292 = (Math_fround(($291|0)));
 $293 = Math_fround(Math_fround(100.0) / $292);
 $70 = $293;
 $294 = ((($85)) + 244|0);
 $295 = load4($294);
 $296 = (($295) - 1)|0;
 $297 = (Math_fround(($296|0)));
 $298 = Math_fround(Math_fround(100.0) / $297);
 $71 = $298;
 $299 = ((($85)) + 248|0);
 $300 = load4($299);
 $301 = (($300) - 1)|0;
 $302 = (Math_fround(($301|0)));
 $303 = Math_fround(Math_fround(100.0) / $302);
 $72 = $303;
 $73 = Math_fround(-50.0);
 $74 = Math_fround(-50.0);
 $75 = Math_fround(-50.0);
 $76 = 0;
 while(1) {
  $304 = $76;
  $305 = ((($85)) + 240|0);
  $306 = load4($305);
  $307 = ($304|0)<($306|0);
  if (!($307)) {
   break;
  }
  $77 = 0;
  while(1) {
   $308 = $77;
   $309 = ((($85)) + 244|0);
   $310 = load4($309);
   $311 = ($308|0)<($310|0);
   if (!($311)) {
    break;
   }
   $78 = 0;
   while(1) {
    $312 = $78;
    $313 = ((($85)) + 248|0);
    $314 = load4($313);
    $315 = ($312|0)<($314|0);
    if (!($315)) {
     break;
    }
    $316 = ((($85)) + 192|0);
    $317 = $76;
    $318 = (Math_fround(($317|0)));
    $319 = $70;
    $320 = Math_fround($318 * $319);
    $321 = $73;
    $322 = Math_fround($320 + $321);
    $323 = $77;
    $324 = (Math_fround(($323|0)));
    $325 = $71;
    $326 = Math_fround($324 * $325);
    $327 = $74;
    $328 = Math_fround($326 + $327);
    $329 = $78;
    $330 = (Math_fround(($329|0)));
    $331 = $72;
    $332 = Math_fround($330 * $331);
    $333 = $75;
    $334 = Math_fround($332 + $333);
    __ZN10ndk_helper4Mat411TranslationEfff($79,$322,$328,$334);
    $53 = $316;
    $54 = $79;
    $335 = $53;
    $336 = ((($335)) + 4|0);
    $337 = load4($336);
    $52 = $335;
    $338 = $52;
    $339 = ((($338)) + 8|0);
    $51 = $339;
    $340 = $51;
    $50 = $340;
    $341 = $50;
    $342 = load4($341);
    $343 = ($337|0)!=($342|0);
    if ($343) {
     __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($55,$335,1);
     $49 = $335;
     $344 = $49;
     $345 = ((($344)) + 8|0);
     $48 = $345;
     $346 = $48;
     $47 = $346;
     $347 = $47;
     $348 = ((($335)) + 4|0);
     $349 = load4($348);
     $46 = $349;
     $350 = $46;
     $351 = $54;
     $43 = $347;
     $44 = $350;
     $45 = $351;
     $352 = $44;
     $353 = $45;
     ; store8($352,load8($353,4),4); store8($352+8 | 0,load8($353+8 | 0,4),4); store8($352+16 | 0,load8($353+16 | 0,4),4); store8($352+24 | 0,load8($353+24 | 0,4),4); store8($352+32 | 0,load8($353+32 | 0,4),4); store8($352+40 | 0,load8($353+40 | 0,4),4); store8($352+48 | 0,load8($353+48 | 0,4),4); store8($352+56 | 0,load8($353+56 | 0,4),4);
     __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($55);
     $354 = ((($335)) + 4|0);
     $355 = load4($354);
     $356 = ((($355)) + 64|0);
     store4($354,$356);
    } else {
     $357 = $54;
     __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($335,$357);
    }
    $358 = ((($85)) + 204|0);
    $359 = (_random()|0);
    $360 = (Math_fround(($359|0)));
    $361 = Math_fround($360 / Math_fround(2.36223206E+9));
    $362 = (_random()|0);
    $363 = (Math_fround(($362|0)));
    $364 = Math_fround($363 / Math_fround(2.36223206E+9));
    $365 = (_random()|0);
    $366 = (Math_fround(($365|0)));
    $367 = Math_fround($366 / Math_fround(2.36223206E+9));
    __ZN10ndk_helper4Vec3C2Efff($80,$361,$364,$367);
    $40 = $358;
    $41 = $80;
    $368 = $40;
    $369 = ((($368)) + 4|0);
    $370 = load4($369);
    $39 = $368;
    $371 = $39;
    $372 = ((($371)) + 8|0);
    $38 = $372;
    $373 = $38;
    $37 = $373;
    $374 = $37;
    $375 = load4($374);
    $376 = ($370|0)!=($375|0);
    if ($376) {
     __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($42,$368,1);
     $36 = $368;
     $377 = $36;
     $378 = ((($377)) + 8|0);
     $35 = $378;
     $379 = $35;
     $34 = $379;
     $380 = $34;
     $381 = ((($368)) + 4|0);
     $382 = load4($381);
     $33 = $382;
     $383 = $33;
     $384 = $41;
     $30 = $380;
     $31 = $383;
     $32 = $384;
     $385 = $31;
     $386 = $32;
     __ZN10ndk_helper4Vec3C2ERKS0_($385,$386);
     __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($42);
     $387 = ((($368)) + 4|0);
     $388 = load4($387);
     $389 = ((($388)) + 12|0);
     store4($387,$389);
    } else {
     $390 = $41;
     __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($368,$390);
    }
    $391 = (_random()|0);
    $392 = (Math_fround(($391|0)));
    $393 = Math_fround($392 / Math_fround(2.14748365E+9));
    $394 = Math_fround($393 - Math_fround(0.5));
    $81 = $394;
    $395 = (_random()|0);
    $396 = (Math_fround(($395|0)));
    $397 = Math_fround($396 / Math_fround(2.14748365E+9));
    $398 = Math_fround($397 - Math_fround(0.5));
    $82 = $398;
    $399 = ((($85)) + 216|0);
    $400 = $81;
    $401 = Math_fround($400 * Math_fround(0.0500000007));
    $402 = $82;
    $403 = Math_fround($402 * Math_fround(0.0500000007));
    __ZN10ndk_helper4Vec2C2Eff($83,$401,$403);
    $27 = $399;
    $28 = $83;
    $404 = $27;
    $405 = ((($404)) + 4|0);
    $406 = load4($405);
    $26 = $404;
    $407 = $26;
    $408 = ((($407)) + 8|0);
    $25 = $408;
    $409 = $25;
    $24 = $409;
    $410 = $24;
    $411 = load4($410);
    $412 = ($406|0)!=($411|0);
    if ($412) {
     __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($29,$404,1);
     $23 = $404;
     $413 = $23;
     $414 = ((($413)) + 8|0);
     $22 = $414;
     $415 = $22;
     $21 = $415;
     $416 = $21;
     $417 = ((($404)) + 4|0);
     $418 = load4($417);
     $20 = $418;
     $419 = $20;
     $420 = $28;
     $17 = $416;
     $18 = $419;
     $19 = $420;
     $421 = $18;
     $422 = $19;
     __ZN10ndk_helper4Vec2C2ERKS0_($421,$422);
     __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($29);
     $423 = ((($404)) + 4|0);
     $424 = load4($423);
     $425 = ((($424)) + 8|0);
     store4($423,$425);
    } else {
     $426 = $28;
     __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($404,$426);
    }
    $427 = ((($85)) + 228|0);
    $428 = $81;
    $429 = +$428;
    $430 = $429 * 3.1415926535897931;
    $431 = Math_fround($430);
    $432 = $82;
    $433 = +$432;
    $434 = $433 * 3.1415926535897931;
    $435 = Math_fround($434);
    __ZN10ndk_helper4Vec2C2Eff($84,$431,$435);
    $14 = $427;
    $15 = $84;
    $436 = $14;
    $437 = ((($436)) + 4|0);
    $438 = load4($437);
    $13 = $436;
    $439 = $13;
    $440 = ((($439)) + 8|0);
    $12 = $440;
    $441 = $12;
    $11 = $441;
    $442 = $11;
    $443 = load4($442);
    $444 = ($438|0)!=($443|0);
    if ($444) {
     __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($16,$436,1);
     $10 = $436;
     $445 = $10;
     $446 = ((($445)) + 8|0);
     $9 = $446;
     $447 = $9;
     $8 = $447;
     $448 = $8;
     $449 = ((($436)) + 4|0);
     $450 = load4($449);
     $7 = $450;
     $451 = $7;
     $452 = $15;
     $4 = $448;
     $5 = $451;
     $6 = $452;
     $453 = $5;
     $454 = $6;
     __ZN10ndk_helper4Vec2C2ERKS0_($453,$454);
     __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($16);
     $455 = ((($436)) + 4|0);
     $456 = load4($455);
     $457 = ((($456)) + 8|0);
     store4($455,$457);
    } else {
     $458 = $15;
     __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($436,$458);
    }
    $459 = $78;
    $460 = (($459) + 1)|0;
    $78 = $460;
   }
   $461 = $77;
   $462 = (($461) + 1)|0;
   $77 = $462;
  }
  $463 = $76;
  $464 = (($463) + 1)|0;
  $76 = $464;
 }
 $465 = ((($85)) + 36|0);
 (__ZN19MoreTeapotsRenderer11LoadShadersEP13SHADER_PARAMSPKcS3_($85,$465,27383,27410)|0);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE7reserveEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $14 = sp;
 $11 = $0;
 $12 = $1;
 $15 = $11;
 $16 = $12;
 $10 = $15;
 $17 = $10;
 $9 = $17;
 $18 = $9;
 $8 = $18;
 $19 = $8;
 $20 = ((($19)) + 8|0);
 $7 = $20;
 $21 = $7;
 $6 = $21;
 $22 = $6;
 $23 = load4($22);
 $24 = load4($18);
 $25 = $23;
 $26 = $24;
 $27 = (($25) - ($26))|0;
 $28 = (($27|0) / 64)&-1;
 $29 = ($16>>>0)>($28>>>0);
 if (!($29)) {
  STACKTOP = sp;return;
 }
 $5 = $15;
 $30 = $5;
 $31 = ((($30)) + 8|0);
 $4 = $31;
 $32 = $4;
 $3 = $32;
 $33 = $3;
 $13 = $33;
 $34 = $12;
 $2 = $15;
 $35 = $2;
 $36 = ((($35)) + 4|0);
 $37 = load4($36);
 $38 = load4($35);
 $39 = $37;
 $40 = $38;
 $41 = (($39) - ($40))|0;
 $42 = (($41|0) / 64)&-1;
 $43 = $13;
 __ZNSt3__214__split_bufferIN10ndk_helper4Mat4ERNS_9allocatorIS2_EEEC2EjjS5_($14,$34,$42,$43);
 __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($15,$14);
 __ZNSt3__214__split_bufferIN10ndk_helper4Mat4ERNS_9allocatorIS2_EEED2Ev($14);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRenderer14UpdateViewportEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = Math_fround(0), $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0), $24 = 0, $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0);
 var $28 = 0, $29 = Math_fround(0), $3 = 0, $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(192|0);
 $2 = sp + 160|0;
 $8 = sp + 72|0;
 $10 = sp;
 $1 = $0;
 $11 = $1;
 _glGetIntegerv(2978,($2|0));
 $12 = ((($2)) + 8|0);
 $13 = load4($12);
 $3 = $13;
 $14 = ((($2)) + 12|0);
 $15 = load4($14);
 $4 = $15;
 $5 = Math_fround(5.0);
 $6 = Math_fround(1.0E+4);
 $16 = $3;
 $17 = $4;
 $18 = ($16|0)<($17|0);
 if ($18) {
  $19 = $3;
  $20 = (Math_fround(($19|0)));
  $21 = $4;
  $22 = (Math_fround(($21|0)));
  $23 = Math_fround($20 / $22);
  $7 = $23;
  $24 = ((($11)) + 64|0);
  $25 = $7;
  __ZN10ndk_helper4Mat411PerspectiveEffff($8,$25,Math_fround(1.0),Math_fround(5.0),Math_fround(1.0E+4));
  (__ZN10ndk_helper4Mat4aSERKS0_($24,$8)|0);
  STACKTOP = sp;return;
 } else {
  $26 = $4;
  $27 = (Math_fround(($26|0)));
  $28 = $3;
  $29 = (Math_fround(($28|0)));
  $30 = Math_fround($27 / $29);
  $9 = $30;
  $31 = ((($11)) + 64|0);
  $32 = $9;
  __ZN10ndk_helper4Mat411PerspectiveEffff($10,Math_fround(1.0),$32,Math_fround(5.0),Math_fround(1.0E+4));
  (__ZN10ndk_helper4Mat4aSERKS0_($31,$10)|0);
  STACKTOP = sp;return;
 }
}
function __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(160|0);
 $13 = sp;
 $16 = sp + 148|0;
 $24 = sp + 64|0;
 $27 = sp + 52|0;
 $35 = sp + 4|0;
 $32 = $0;
 $33 = $1;
 $36 = $32;
 $31 = $36;
 $37 = $31;
 $38 = ((($37)) + 8|0);
 $30 = $38;
 $39 = $30;
 $29 = $39;
 $40 = $29;
 $34 = $40;
 $28 = $36;
 $41 = $28;
 $42 = ((($41)) + 4|0);
 $43 = load4($42);
 $44 = load4($41);
 $45 = $43;
 $46 = $44;
 $47 = (($45) - ($46))|0;
 $48 = (($47|0) / 64)&-1;
 $49 = (($48) + 1)|0;
 $23 = $36;
 store4($24,$49);
 $50 = $23;
 $51 = (__ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE8max_sizeEv($50)|0);
 $25 = $51;
 $52 = load4($24);
 $53 = $25;
 $54 = ($52>>>0)>($53>>>0);
 if ($54) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($50);
  // unreachable;
 }
 $21 = $50;
 $55 = $21;
 $20 = $55;
 $56 = $20;
 $19 = $56;
 $57 = $19;
 $58 = ((($57)) + 8|0);
 $18 = $58;
 $59 = $18;
 $17 = $59;
 $60 = $17;
 $61 = load4($60);
 $62 = load4($56);
 $63 = $61;
 $64 = $62;
 $65 = (($63) - ($64))|0;
 $66 = (($65|0) / 64)&-1;
 $26 = $66;
 $67 = $26;
 $68 = $25;
 $69 = (($68>>>0) / 2)&-1;
 $70 = ($67>>>0)>=($69>>>0);
 if ($70) {
  $71 = $25;
  $22 = $71;
 } else {
  $72 = $26;
  $73 = $72<<1;
  store4($27,$73);
  $14 = $27;
  $15 = $24;
  $74 = $14;
  $75 = $15;
  ; store1($13,load1($16,1),1);
  $11 = $74;
  $12 = $75;
  $76 = $11;
  $77 = $12;
  $8 = $13;
  $9 = $76;
  $10 = $77;
  $78 = $9;
  $79 = load4($78);
  $80 = $10;
  $81 = load4($80);
  $82 = ($79>>>0)<($81>>>0);
  $83 = $12;
  $84 = $11;
  $85 = $82 ? $83 : $84;
  $86 = load4($85);
  $22 = $86;
 }
 $87 = $22;
 $7 = $36;
 $88 = $7;
 $89 = ((($88)) + 4|0);
 $90 = load4($89);
 $91 = load4($88);
 $92 = $90;
 $93 = $91;
 $94 = (($92) - ($93))|0;
 $95 = (($94|0) / 64)&-1;
 $96 = $34;
 __ZNSt3__214__split_bufferIN10ndk_helper4Mat4ERNS_9allocatorIS2_EEEC2EjjS5_($35,$87,$95,$96);
 $97 = $34;
 $98 = ((($35)) + 8|0);
 $99 = load4($98);
 $6 = $99;
 $100 = $6;
 $101 = $33;
 $2 = $101;
 $102 = $2;
 $3 = $97;
 $4 = $100;
 $5 = $102;
 $103 = $4;
 $104 = $5;
 ; store8($103,load8($104,4),4); store8($103+8 | 0,load8($104+8 | 0,4),4); store8($103+16 | 0,load8($104+16 | 0,4),4); store8($103+24 | 0,load8($104+24 | 0,4),4); store8($103+32 | 0,load8($104+32 | 0,4),4); store8($103+40 | 0,load8($104+40 | 0,4),4); store8($103+48 | 0,load8($104+48 | 0,4),4); store8($103+56 | 0,load8($104+56 | 0,4),4);
 $105 = ((($35)) + 8|0);
 $106 = load4($105);
 $107 = ((($106)) + 64|0);
 store4($105,$107);
 __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($36,$35);
 __ZNSt3__214__split_bufferIN10ndk_helper4Mat4ERNS_9allocatorIS2_EEED2Ev($35);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec3C2Efff($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = Math_fround($2);
 $3 = Math_fround($3);
 var $10 = Math_fround(0), $11 = 0, $12 = Math_fround(0), $13 = 0, $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $4;
 $9 = $5;
 storef($8,$9);
 $10 = $6;
 $11 = ((($8)) + 4|0);
 storef($11,$10);
 $12 = $7;
 $13 = ((($8)) + 8|0);
 storef($13,$12);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec3C2ERKS0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = Math_fround(0), $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = Math_fround(0), $7 = 0, $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = $3;
 $6 = loadf($5);
 storef($4,$6);
 $7 = $3;
 $8 = ((($7)) + 4|0);
 $9 = loadf($8);
 $10 = ((($4)) + 4|0);
 storef($10,$9);
 $11 = $3;
 $12 = ((($11)) + 8|0);
 $13 = loadf($12);
 $14 = ((($4)) + 8|0);
 storef($14,$13);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(160|0);
 $13 = sp;
 $16 = sp + 148|0;
 $24 = sp + 64|0;
 $27 = sp + 52|0;
 $35 = sp + 4|0;
 $32 = $0;
 $33 = $1;
 $36 = $32;
 $31 = $36;
 $37 = $31;
 $38 = ((($37)) + 8|0);
 $30 = $38;
 $39 = $30;
 $29 = $39;
 $40 = $29;
 $34 = $40;
 $28 = $36;
 $41 = $28;
 $42 = ((($41)) + 4|0);
 $43 = load4($42);
 $44 = load4($41);
 $45 = $43;
 $46 = $44;
 $47 = (($45) - ($46))|0;
 $48 = (($47|0) / 12)&-1;
 $49 = (($48) + 1)|0;
 $23 = $36;
 store4($24,$49);
 $50 = $23;
 $51 = (__ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE8max_sizeEv($50)|0);
 $25 = $51;
 $52 = load4($24);
 $53 = $25;
 $54 = ($52>>>0)>($53>>>0);
 if ($54) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($50);
  // unreachable;
 }
 $21 = $50;
 $55 = $21;
 $20 = $55;
 $56 = $20;
 $19 = $56;
 $57 = $19;
 $58 = ((($57)) + 8|0);
 $18 = $58;
 $59 = $18;
 $17 = $59;
 $60 = $17;
 $61 = load4($60);
 $62 = load4($56);
 $63 = $61;
 $64 = $62;
 $65 = (($63) - ($64))|0;
 $66 = (($65|0) / 12)&-1;
 $26 = $66;
 $67 = $26;
 $68 = $25;
 $69 = (($68>>>0) / 2)&-1;
 $70 = ($67>>>0)>=($69>>>0);
 if ($70) {
  $71 = $25;
  $22 = $71;
 } else {
  $72 = $26;
  $73 = $72<<1;
  store4($27,$73);
  $14 = $27;
  $15 = $24;
  $74 = $14;
  $75 = $15;
  ; store1($13,load1($16,1),1);
  $11 = $74;
  $12 = $75;
  $76 = $11;
  $77 = $12;
  $8 = $13;
  $9 = $76;
  $10 = $77;
  $78 = $9;
  $79 = load4($78);
  $80 = $10;
  $81 = load4($80);
  $82 = ($79>>>0)<($81>>>0);
  $83 = $12;
  $84 = $11;
  $85 = $82 ? $83 : $84;
  $86 = load4($85);
  $22 = $86;
 }
 $87 = $22;
 $7 = $36;
 $88 = $7;
 $89 = ((($88)) + 4|0);
 $90 = load4($89);
 $91 = load4($88);
 $92 = $90;
 $93 = $91;
 $94 = (($92) - ($93))|0;
 $95 = (($94|0) / 12)&-1;
 $96 = $34;
 __ZNSt3__214__split_bufferIN10ndk_helper4Vec3ERNS_9allocatorIS2_EEEC2EjjS5_($35,$87,$95,$96);
 $97 = $34;
 $98 = ((($35)) + 8|0);
 $99 = load4($98);
 $6 = $99;
 $100 = $6;
 $101 = $33;
 $2 = $101;
 $102 = $2;
 $3 = $97;
 $4 = $100;
 $5 = $102;
 $103 = $4;
 $104 = $5;
 __ZN10ndk_helper4Vec3C2ERKS0_($103,$104);
 $105 = ((($35)) + 8|0);
 $106 = load4($105);
 $107 = ((($106)) + 12|0);
 store4($105,$107);
 __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($36,$35);
 __ZNSt3__214__split_bufferIN10ndk_helper4Vec3ERNS_9allocatorIS2_EEED2Ev($35);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec2C2Eff($0,$1,$2) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = Math_fround($2);
 var $3 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = 0, $7 = Math_fround(0), $8 = Math_fround(0), $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $6 = $3;
 $7 = $4;
 storef($6,$7);
 $8 = $5;
 $9 = ((($6)) + 4|0);
 storef($9,$8);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotatorC2ERKS5_j($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec2C2ERKS0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = Math_fround(0), $7 = 0, $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = $3;
 $6 = loadf($5);
 storef($4,$6);
 $7 = $3;
 $8 = ((($7)) + 4|0);
 $9 = loadf($8);
 $10 = ((($4)) + 4|0);
 storef($10,$9);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE24__RAII_IncreaseAnnotator6__doneEv($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE21__push_back_slow_pathIKS2_EEvRT_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0;
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0;
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0;
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(160|0);
 $13 = sp;
 $16 = sp + 148|0;
 $24 = sp + 64|0;
 $27 = sp + 52|0;
 $35 = sp + 4|0;
 $32 = $0;
 $33 = $1;
 $36 = $32;
 $31 = $36;
 $37 = $31;
 $38 = ((($37)) + 8|0);
 $30 = $38;
 $39 = $30;
 $29 = $39;
 $40 = $29;
 $34 = $40;
 $28 = $36;
 $41 = $28;
 $42 = ((($41)) + 4|0);
 $43 = load4($42);
 $44 = load4($41);
 $45 = $43;
 $46 = $44;
 $47 = (($45) - ($46))|0;
 $48 = (($47|0) / 8)&-1;
 $49 = (($48) + 1)|0;
 $23 = $36;
 store4($24,$49);
 $50 = $23;
 $51 = (__ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE8max_sizeEv($50)|0);
 $25 = $51;
 $52 = load4($24);
 $53 = $25;
 $54 = ($52>>>0)>($53>>>0);
 if ($54) {
  __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($50);
  // unreachable;
 }
 $21 = $50;
 $55 = $21;
 $20 = $55;
 $56 = $20;
 $19 = $56;
 $57 = $19;
 $58 = ((($57)) + 8|0);
 $18 = $58;
 $59 = $18;
 $17 = $59;
 $60 = $17;
 $61 = load4($60);
 $62 = load4($56);
 $63 = $61;
 $64 = $62;
 $65 = (($63) - ($64))|0;
 $66 = (($65|0) / 8)&-1;
 $26 = $66;
 $67 = $26;
 $68 = $25;
 $69 = (($68>>>0) / 2)&-1;
 $70 = ($67>>>0)>=($69>>>0);
 if ($70) {
  $71 = $25;
  $22 = $71;
 } else {
  $72 = $26;
  $73 = $72<<1;
  store4($27,$73);
  $14 = $27;
  $15 = $24;
  $74 = $14;
  $75 = $15;
  ; store1($13,load1($16,1),1);
  $11 = $74;
  $12 = $75;
  $76 = $11;
  $77 = $12;
  $8 = $13;
  $9 = $76;
  $10 = $77;
  $78 = $9;
  $79 = load4($78);
  $80 = $10;
  $81 = load4($80);
  $82 = ($79>>>0)<($81>>>0);
  $83 = $12;
  $84 = $11;
  $85 = $82 ? $83 : $84;
  $86 = load4($85);
  $22 = $86;
 }
 $87 = $22;
 $7 = $36;
 $88 = $7;
 $89 = ((($88)) + 4|0);
 $90 = load4($89);
 $91 = load4($88);
 $92 = $90;
 $93 = $91;
 $94 = (($92) - ($93))|0;
 $95 = (($94|0) / 8)&-1;
 $96 = $34;
 __ZNSt3__214__split_bufferIN10ndk_helper4Vec2ERNS_9allocatorIS2_EEEC2EjjS5_($35,$87,$95,$96);
 $97 = $34;
 $98 = ((($35)) + 8|0);
 $99 = load4($98);
 $6 = $99;
 $100 = $6;
 $101 = $33;
 $2 = $101;
 $102 = $2;
 $3 = $97;
 $4 = $100;
 $5 = $102;
 $103 = $4;
 $104 = $5;
 __ZN10ndk_helper4Vec2C2ERKS0_($103,$104);
 $105 = ((($35)) + 8|0);
 $106 = load4($105);
 $107 = ((($106)) + 8|0);
 store4($105,$107);
 __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($36,$35);
 __ZNSt3__214__split_bufferIN10ndk_helper4Vec2ERNS_9allocatorIS2_EEED2Ev($35);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRenderer11LoadShadersEP13SHADER_PARAMSPKcS3_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$expand_i1_val = 0, $$expand_i1_val10 = 0, $$expand_i1_val6 = 0, $$expand_i1_val8 = 0, $$pre_trunc = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $4 = sp + 48|0;
 $10 = sp + 24|0;
 $11 = sp + 20|0;
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $12 = (_glCreateProgram()|0);
 $9 = $12;
 $13 = $7;
 $14 = (__ZN6shader13CompileShaderEPjjPKc($10,35633,$13)|0);
 if (!($14)) {
  (_printf(27434,$vararg_buffer)|0);
  $15 = $9;
  _glDeleteProgram(($15|0));
  $$expand_i1_val = 0;
  store1($4,$$expand_i1_val);
  $$pre_trunc = load1($4);
  $68 = $$pre_trunc&1;
  STACKTOP = sp;return ($68|0);
 }
 $16 = $8;
 $17 = (__ZN6shader13CompileShaderEPjjPKc($11,35632,$16)|0);
 if (!($17)) {
  (_printf(27466,$vararg_buffer1)|0);
  $18 = $9;
  _glDeleteProgram(($18|0));
  $$expand_i1_val6 = 0;
  store1($4,$$expand_i1_val6);
  $$pre_trunc = load1($4);
  $68 = $$pre_trunc&1;
  STACKTOP = sp;return ($68|0);
 }
 $19 = $9;
 $20 = load4($10);
 _glAttachShader(($19|0),($20|0));
 $21 = $9;
 $22 = load4($11);
 _glAttachShader(($21|0),($22|0));
 $23 = $9;
 _glBindAttribLocation(($23|0),0,(27500|0));
 $24 = $9;
 _glBindAttribLocation(($24|0),1,(27509|0));
 $25 = $9;
 $26 = (__ZN6shader11LinkProgramEj($25)|0);
 $27 = $9;
 if ($26) {
  $37 = (_glGetUniformLocation(($27|0),(27545|0))|0);
  $38 = $6;
  $39 = ((($38)) + 20|0);
  store4($39,$37);
  $40 = $9;
  $41 = (_glGetUniformLocation(($40|0),(27554|0))|0);
  $42 = $6;
  $43 = ((($42)) + 24|0);
  store4($43,$41);
  $44 = $9;
  $45 = (_glGetUniformLocation(($44|0),(27564|0))|0);
  $46 = $6;
  $47 = ((($46)) + 4|0);
  store4($47,$45);
  $48 = $9;
  $49 = (_glGetUniformLocation(($48|0),(27572|0))|0);
  $50 = $6;
  $51 = ((($50)) + 8|0);
  store4($51,$49);
  $52 = $9;
  $53 = (_glGetUniformLocation(($52|0),(27589|0))|0);
  $54 = $6;
  $55 = ((($54)) + 12|0);
  store4($55,$53);
  $56 = $9;
  $57 = (_glGetUniformLocation(($56|0),(27606|0))|0);
  $58 = $6;
  $59 = ((($58)) + 16|0);
  store4($59,$57);
  $60 = load4($10);
  $61 = ($60|0)!=(0);
  if ($61) {
   $62 = load4($10);
   _glDeleteShader(($62|0));
  }
  $63 = load4($11);
  $64 = ($63|0)!=(0);
  if ($64) {
   $65 = load4($11);
   _glDeleteShader(($65|0));
  }
  $66 = $9;
  $67 = $6;
  store4($67,$66);
  $$expand_i1_val10 = 1;
  store1($4,$$expand_i1_val10);
  $$pre_trunc = load1($4);
  $68 = $$pre_trunc&1;
  STACKTOP = sp;return ($68|0);
 }
 store4($vararg_buffer3,$27);
 (_printf(27518,$vararg_buffer3)|0);
 $28 = load4($10);
 $29 = ($28|0)!=(0);
 if ($29) {
  $30 = load4($10);
  _glDeleteShader(($30|0));
  store4($10,0);
 }
 $31 = load4($11);
 $32 = ($31|0)!=(0);
 if ($32) {
  $33 = load4($11);
  _glDeleteShader(($33|0));
  store4($11,0);
 }
 $34 = $9;
 $35 = ($34|0)!=(0);
 if ($35) {
  $36 = $9;
  _glDeleteProgram(($36|0));
 }
 $$expand_i1_val8 = 0;
 store1($4,$$expand_i1_val8);
 $$pre_trunc = load1($4);
 $68 = $$pre_trunc&1;
 STACKTOP = sp;return ($68|0);
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE8max_sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $3 = sp + 8|0;
 $5 = sp + 77|0;
 $11 = sp;
 $14 = sp + 76|0;
 $19 = sp + 16|0;
 $20 = sp + 12|0;
 $18 = $0;
 $21 = $18;
 $17 = $21;
 $22 = $17;
 $23 = ((($22)) + 8|0);
 $16 = $23;
 $24 = $16;
 $15 = $24;
 $25 = $15;
 $4 = $25;
 $26 = $4;
 ; store1($3,load1($5,1),1);
 $2 = $26;
 $27 = $2;
 $1 = $27;
 store4($19,536870911);
 $28 = (4294967295 / 2)&-1;
 store4($20,$28);
 $12 = $19;
 $13 = $20;
 $29 = $12;
 $30 = $13;
 ; store1($11,load1($14,1),1);
 $9 = $29;
 $10 = $30;
 $31 = $10;
 $32 = $9;
 $6 = $11;
 $7 = $31;
 $8 = $32;
 $33 = $7;
 $34 = load4($33);
 $35 = $8;
 $36 = load4($35);
 $37 = ($34>>>0)<($36>>>0);
 $38 = $10;
 $39 = $9;
 $40 = $37 ? $38 : $39;
 $41 = load4($40);
 STACKTOP = sp;return ($41|0);
}
function __ZNSt3__214__split_bufferIN10ndk_helper4Vec2ERNS_9allocatorIS2_EEEC2EjjS5_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(160|0);
 $11 = sp + 116|0;
 $15 = sp + 100|0;
 $27 = sp + 52|0;
 $34 = sp + 24|0;
 $39 = sp + 4|0;
 $40 = sp;
 $35 = $0;
 $36 = $1;
 $37 = $2;
 $38 = $3;
 $41 = $35;
 $42 = ((($41)) + 12|0);
 $32 = $34;
 $33 = -1;
 $43 = $32;
 store4($43,0);
 $44 = load4($34);
 store4($39,$44);
 $17 = $39;
 $45 = $38;
 $14 = $42;
 store4($15,0);
 $16 = $45;
 $46 = $14;
 $13 = $15;
 $47 = $13;
 $48 = load4($47);
 $49 = $16;
 $7 = $49;
 $50 = $7;
 $10 = $46;
 store4($11,$48);
 $12 = $50;
 $51 = $10;
 $9 = $11;
 $52 = $9;
 $53 = load4($52);
 store4($51,$53);
 $54 = ((($51)) + 4|0);
 $55 = $12;
 $8 = $55;
 $56 = $8;
 store4($54,$56);
 $57 = $36;
 $58 = ($57|0)!=(0);
 do {
  if ($58) {
   $6 = $41;
   $59 = $6;
   $60 = ((($59)) + 12|0);
   $5 = $60;
   $61 = $5;
   $4 = $61;
   $62 = $4;
   $63 = ((($62)) + 4|0);
   $64 = load4($63);
   $65 = $36;
   $23 = $64;
   $24 = $65;
   $66 = $23;
   $67 = $24;
   $20 = $66;
   $21 = $67;
   $22 = 0;
   $68 = $20;
   $69 = $21;
   $19 = $68;
   $70 = ($69>>>0)>(536870911);
   if ($70) {
    ___assert_fail((27624|0),(27661|0),1734,(27731|0));
    // unreachable;
   } else {
    $71 = $21;
    $72 = $71<<3;
    $18 = $72;
    $73 = $18;
    $74 = (__Znwj($73)|0);
    $77 = $74;
    break;
   }
  } else {
   $25 = $27;
   $26 = -1;
   $75 = $25;
   store4($75,0);
   $76 = load4($27);
   store4($40,$76);
   $28 = $40;
   $77 = 0;
  }
 } while(0);
 store4($41,$77);
 $78 = load4($41);
 $79 = $37;
 $80 = (($78) + ($79<<3)|0);
 $81 = ((($41)) + 8|0);
 store4($81,$80);
 $82 = ((($41)) + 4|0);
 store4($82,$80);
 $83 = load4($41);
 $84 = $36;
 $85 = (($83) + ($84<<3)|0);
 $31 = $41;
 $86 = $31;
 $87 = ((($86)) + 12|0);
 $30 = $87;
 $88 = $30;
 $29 = $88;
 $89 = $29;
 store4($89,$85);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 176|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(176|0);
 $7 = sp + 140|0;
 $19 = sp + 92|0;
 $26 = sp + 64|0;
 $41 = $0;
 $42 = $1;
 $43 = $41;
 __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE17__annotate_deleteEv($43);
 $40 = $43;
 $44 = $40;
 $45 = ((($44)) + 8|0);
 $39 = $45;
 $46 = $39;
 $38 = $46;
 $47 = $38;
 $48 = load4($43);
 $49 = ((($43)) + 4|0);
 $50 = load4($49);
 $51 = $42;
 $52 = ((($51)) + 4|0);
 $33 = $47;
 $34 = $48;
 $35 = $50;
 $36 = $52;
 while(1) {
  $53 = $35;
  $54 = $34;
  $55 = ($53|0)!=($54|0);
  if (!($55)) {
   break;
  }
  $56 = $33;
  $57 = $36;
  $58 = load4($57);
  $59 = ((($58)) + -8|0);
  $32 = $59;
  $60 = $32;
  $61 = $35;
  $62 = ((($61)) + -8|0);
  $35 = $62;
  $28 = $62;
  $63 = $28;
  $27 = $63;
  $64 = $27;
  $29 = $56;
  $30 = $60;
  $31 = $64;
  $65 = $30;
  $66 = $31;
  __ZN10ndk_helper4Vec2C2ERKS0_($65,$66);
  $67 = $36;
  $68 = load4($67);
  $69 = ((($68)) + -8|0);
  store4($67,$69);
 }
 $70 = $42;
 $71 = ((($70)) + 4|0);
 $24 = $43;
 $25 = $71;
 $72 = $24;
 $23 = $72;
 $73 = $23;
 $74 = load4($73);
 store4($26,$74);
 $75 = $25;
 $21 = $75;
 $76 = $21;
 $77 = load4($76);
 $78 = $24;
 store4($78,$77);
 $22 = $26;
 $79 = $22;
 $80 = load4($79);
 $81 = $25;
 store4($81,$80);
 $82 = ((($43)) + 4|0);
 $83 = $42;
 $84 = ((($83)) + 8|0);
 $5 = $82;
 $6 = $84;
 $85 = $5;
 $4 = $85;
 $86 = $4;
 $87 = load4($86);
 store4($7,$87);
 $88 = $6;
 $2 = $88;
 $89 = $2;
 $90 = load4($89);
 $91 = $5;
 store4($91,$90);
 $3 = $7;
 $92 = $3;
 $93 = load4($92);
 $94 = $6;
 store4($94,$93);
 $10 = $43;
 $95 = $10;
 $96 = ((($95)) + 8|0);
 $9 = $96;
 $97 = $9;
 $8 = $97;
 $98 = $8;
 $99 = $42;
 $13 = $99;
 $100 = $13;
 $101 = ((($100)) + 12|0);
 $12 = $101;
 $102 = $12;
 $11 = $102;
 $103 = $11;
 $17 = $98;
 $18 = $103;
 $104 = $17;
 $16 = $104;
 $105 = $16;
 $106 = load4($105);
 store4($19,$106);
 $107 = $18;
 $14 = $107;
 $108 = $14;
 $109 = load4($108);
 $110 = $17;
 store4($110,$109);
 $15 = $19;
 $111 = $15;
 $112 = load4($111);
 $113 = $18;
 store4($113,$112);
 $114 = $42;
 $115 = ((($114)) + 4|0);
 $116 = load4($115);
 $117 = $42;
 store4($117,$116);
 $20 = $43;
 $118 = $20;
 $119 = ((($118)) + 4|0);
 $120 = load4($119);
 $121 = load4($118);
 $122 = $120;
 $123 = $121;
 $124 = (($122) - ($123))|0;
 $125 = (($124|0) / 8)&-1;
 __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE14__annotate_newEj($43,$125);
 $37 = $43;
 STACKTOP = sp;return;
}
function __ZNSt3__214__split_bufferIN10ndk_helper4Vec2ERNS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $18 = sp + 8|0;
 $21 = sp + 125|0;
 $27 = sp;
 $30 = sp + 124|0;
 $32 = $0;
 $33 = $32;
 $31 = $33;
 $34 = $31;
 $35 = ((($34)) + 4|0);
 $36 = load4($35);
 $28 = $34;
 $29 = $36;
 $37 = $28;
 $38 = $29;
 ; store1($27,load1($30,1),1);
 $25 = $37;
 $26 = $38;
 $39 = $25;
 while(1) {
  $40 = $26;
  $41 = ((($39)) + 8|0);
  $42 = load4($41);
  $43 = ($40|0)!=($42|0);
  if (!($43)) {
   break;
  }
  $24 = $39;
  $44 = $24;
  $45 = ((($44)) + 12|0);
  $23 = $45;
  $46 = $23;
  $22 = $46;
  $47 = $22;
  $48 = ((($47)) + 4|0);
  $49 = load4($48);
  $50 = ((($39)) + 8|0);
  $51 = load4($50);
  $52 = ((($51)) + -8|0);
  store4($50,$52);
  $15 = $52;
  $53 = $15;
  $19 = $49;
  $20 = $53;
  $54 = $19;
  $55 = $20;
  ; store1($18,load1($21,1),1);
  $16 = $54;
  $17 = $55;
 }
 $56 = load4($33);
 $57 = ($56|0)!=(0|0);
 if (!($57)) {
  STACKTOP = sp;return;
 }
 $7 = $33;
 $58 = $7;
 $59 = ((($58)) + 12|0);
 $6 = $59;
 $60 = $6;
 $5 = $60;
 $61 = $5;
 $62 = ((($61)) + 4|0);
 $63 = load4($62);
 $64 = load4($33);
 $4 = $33;
 $65 = $4;
 $3 = $65;
 $66 = $3;
 $67 = ((($66)) + 12|0);
 $2 = $67;
 $68 = $2;
 $1 = $68;
 $69 = $1;
 $70 = load4($69);
 $71 = load4($65);
 $72 = $70;
 $73 = $71;
 $74 = (($72) - ($73))|0;
 $75 = (($74|0) / 8)&-1;
 $12 = $63;
 $13 = $64;
 $14 = $75;
 $76 = $12;
 $77 = $13;
 $78 = $14;
 $9 = $76;
 $10 = $77;
 $11 = $78;
 $79 = $10;
 $8 = $79;
 $80 = $8;
 __ZdlPv($80);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE17__annotate_deleteEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $20 = $0;
 $21 = $20;
 $19 = $21;
 $22 = $19;
 $23 = load4($22);
 $18 = $23;
 $24 = $18;
 $17 = $21;
 $25 = $17;
 $26 = load4($25);
 $16 = $26;
 $27 = $16;
 $5 = $21;
 $28 = $5;
 $4 = $28;
 $29 = $4;
 $3 = $29;
 $30 = $3;
 $31 = ((($30)) + 8|0);
 $2 = $31;
 $32 = $2;
 $1 = $32;
 $33 = $1;
 $34 = load4($33);
 $35 = load4($29);
 $36 = $34;
 $37 = $35;
 $38 = (($36) - ($37))|0;
 $39 = (($38|0) / 8)&-1;
 $40 = (($27) + ($39<<3)|0);
 $7 = $21;
 $41 = $7;
 $42 = load4($41);
 $6 = $42;
 $43 = $6;
 $8 = $21;
 $44 = $8;
 $45 = ((($44)) + 4|0);
 $46 = load4($45);
 $47 = load4($44);
 $48 = $46;
 $49 = $47;
 $50 = (($48) - ($49))|0;
 $51 = (($50|0) / 8)&-1;
 $52 = (($43) + ($51<<3)|0);
 $10 = $21;
 $53 = $10;
 $54 = load4($53);
 $9 = $54;
 $55 = $9;
 $15 = $21;
 $56 = $15;
 $14 = $56;
 $57 = $14;
 $13 = $57;
 $58 = $13;
 $59 = ((($58)) + 8|0);
 $12 = $59;
 $60 = $12;
 $11 = $60;
 $61 = $11;
 $62 = load4($61);
 $63 = load4($57);
 $64 = $62;
 $65 = $63;
 $66 = (($64) - ($65))|0;
 $67 = (($66|0) / 8)&-1;
 $68 = (($55) + ($67<<3)|0);
 __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($21,$24,$40,$52,$68);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE14__annotate_newEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $20 = $0;
 $21 = $1;
 $22 = $20;
 $19 = $22;
 $23 = $19;
 $24 = load4($23);
 $18 = $24;
 $25 = $18;
 $17 = $22;
 $26 = $17;
 $27 = load4($26);
 $16 = $27;
 $28 = $16;
 $6 = $22;
 $29 = $6;
 $5 = $29;
 $30 = $5;
 $4 = $30;
 $31 = $4;
 $32 = ((($31)) + 8|0);
 $3 = $32;
 $33 = $3;
 $2 = $33;
 $34 = $2;
 $35 = load4($34);
 $36 = load4($30);
 $37 = $35;
 $38 = $36;
 $39 = (($37) - ($38))|0;
 $40 = (($39|0) / 8)&-1;
 $41 = (($28) + ($40<<3)|0);
 $8 = $22;
 $42 = $8;
 $43 = load4($42);
 $7 = $43;
 $44 = $7;
 $13 = $22;
 $45 = $13;
 $12 = $45;
 $46 = $12;
 $11 = $46;
 $47 = $11;
 $48 = ((($47)) + 8|0);
 $10 = $48;
 $49 = $10;
 $9 = $49;
 $50 = $9;
 $51 = load4($50);
 $52 = load4($46);
 $53 = $51;
 $54 = $52;
 $55 = (($53) - ($54))|0;
 $56 = (($55|0) / 8)&-1;
 $57 = (($44) + ($56<<3)|0);
 $15 = $22;
 $58 = $15;
 $59 = load4($58);
 $14 = $59;
 $60 = $14;
 $61 = $21;
 $62 = (($60) + ($61<<3)|0);
 __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($22,$25,$41,$57,$62);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec2ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE8max_sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $3 = sp + 8|0;
 $5 = sp + 77|0;
 $11 = sp;
 $14 = sp + 76|0;
 $19 = sp + 16|0;
 $20 = sp + 12|0;
 $18 = $0;
 $21 = $18;
 $17 = $21;
 $22 = $17;
 $23 = ((($22)) + 8|0);
 $16 = $23;
 $24 = $16;
 $15 = $24;
 $25 = $15;
 $4 = $25;
 $26 = $4;
 ; store1($3,load1($5,1),1);
 $2 = $26;
 $27 = $2;
 $1 = $27;
 store4($19,357913941);
 $28 = (4294967295 / 2)&-1;
 store4($20,$28);
 $12 = $19;
 $13 = $20;
 $29 = $12;
 $30 = $13;
 ; store1($11,load1($14,1),1);
 $9 = $29;
 $10 = $30;
 $31 = $10;
 $32 = $9;
 $6 = $11;
 $7 = $31;
 $8 = $32;
 $33 = $7;
 $34 = load4($33);
 $35 = $8;
 $36 = load4($35);
 $37 = ($34>>>0)<($36>>>0);
 $38 = $10;
 $39 = $9;
 $40 = $37 ? $38 : $39;
 $41 = load4($40);
 STACKTOP = sp;return ($41|0);
}
function __ZNSt3__214__split_bufferIN10ndk_helper4Vec3ERNS_9allocatorIS2_EEEC2EjjS5_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(160|0);
 $11 = sp + 116|0;
 $15 = sp + 100|0;
 $27 = sp + 52|0;
 $34 = sp + 24|0;
 $39 = sp + 4|0;
 $40 = sp;
 $35 = $0;
 $36 = $1;
 $37 = $2;
 $38 = $3;
 $41 = $35;
 $42 = ((($41)) + 12|0);
 $32 = $34;
 $33 = -1;
 $43 = $32;
 store4($43,0);
 $44 = load4($34);
 store4($39,$44);
 $17 = $39;
 $45 = $38;
 $14 = $42;
 store4($15,0);
 $16 = $45;
 $46 = $14;
 $13 = $15;
 $47 = $13;
 $48 = load4($47);
 $49 = $16;
 $7 = $49;
 $50 = $7;
 $10 = $46;
 store4($11,$48);
 $12 = $50;
 $51 = $10;
 $9 = $11;
 $52 = $9;
 $53 = load4($52);
 store4($51,$53);
 $54 = ((($51)) + 4|0);
 $55 = $12;
 $8 = $55;
 $56 = $8;
 store4($54,$56);
 $57 = $36;
 $58 = ($57|0)!=(0);
 do {
  if ($58) {
   $6 = $41;
   $59 = $6;
   $60 = ((($59)) + 12|0);
   $5 = $60;
   $61 = $5;
   $4 = $61;
   $62 = $4;
   $63 = ((($62)) + 4|0);
   $64 = load4($63);
   $65 = $36;
   $23 = $64;
   $24 = $65;
   $66 = $23;
   $67 = $24;
   $20 = $66;
   $21 = $67;
   $22 = 0;
   $68 = $20;
   $69 = $21;
   $19 = $68;
   $70 = ($69>>>0)>(357913941);
   if ($70) {
    ___assert_fail((27624|0),(27661|0),1734,(27731|0));
    // unreachable;
   } else {
    $71 = $21;
    $72 = ($71*12)|0;
    $18 = $72;
    $73 = $18;
    $74 = (__Znwj($73)|0);
    $77 = $74;
    break;
   }
  } else {
   $25 = $27;
   $26 = -1;
   $75 = $25;
   store4($75,0);
   $76 = load4($27);
   store4($40,$76);
   $28 = $40;
   $77 = 0;
  }
 } while(0);
 store4($41,$77);
 $78 = load4($41);
 $79 = $37;
 $80 = (($78) + (($79*12)|0)|0);
 $81 = ((($41)) + 8|0);
 store4($81,$80);
 $82 = ((($41)) + 4|0);
 store4($82,$80);
 $83 = load4($41);
 $84 = $36;
 $85 = (($83) + (($84*12)|0)|0);
 $31 = $41;
 $86 = $31;
 $87 = ((($86)) + 12|0);
 $30 = $87;
 $88 = $30;
 $29 = $88;
 $89 = $29;
 store4($89,$85);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0;
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0;
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0;
 var $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 176|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(176|0);
 $7 = sp + 140|0;
 $19 = sp + 92|0;
 $26 = sp + 64|0;
 $41 = $0;
 $42 = $1;
 $43 = $41;
 __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE17__annotate_deleteEv($43);
 $40 = $43;
 $44 = $40;
 $45 = ((($44)) + 8|0);
 $39 = $45;
 $46 = $39;
 $38 = $46;
 $47 = $38;
 $48 = load4($43);
 $49 = ((($43)) + 4|0);
 $50 = load4($49);
 $51 = $42;
 $52 = ((($51)) + 4|0);
 $33 = $47;
 $34 = $48;
 $35 = $50;
 $36 = $52;
 while(1) {
  $53 = $35;
  $54 = $34;
  $55 = ($53|0)!=($54|0);
  if (!($55)) {
   break;
  }
  $56 = $33;
  $57 = $36;
  $58 = load4($57);
  $59 = ((($58)) + -12|0);
  $32 = $59;
  $60 = $32;
  $61 = $35;
  $62 = ((($61)) + -12|0);
  $35 = $62;
  $28 = $62;
  $63 = $28;
  $27 = $63;
  $64 = $27;
  $29 = $56;
  $30 = $60;
  $31 = $64;
  $65 = $30;
  $66 = $31;
  __ZN10ndk_helper4Vec3C2ERKS0_($65,$66);
  $67 = $36;
  $68 = load4($67);
  $69 = ((($68)) + -12|0);
  store4($67,$69);
 }
 $70 = $42;
 $71 = ((($70)) + 4|0);
 $24 = $43;
 $25 = $71;
 $72 = $24;
 $23 = $72;
 $73 = $23;
 $74 = load4($73);
 store4($26,$74);
 $75 = $25;
 $21 = $75;
 $76 = $21;
 $77 = load4($76);
 $78 = $24;
 store4($78,$77);
 $22 = $26;
 $79 = $22;
 $80 = load4($79);
 $81 = $25;
 store4($81,$80);
 $82 = ((($43)) + 4|0);
 $83 = $42;
 $84 = ((($83)) + 8|0);
 $5 = $82;
 $6 = $84;
 $85 = $5;
 $4 = $85;
 $86 = $4;
 $87 = load4($86);
 store4($7,$87);
 $88 = $6;
 $2 = $88;
 $89 = $2;
 $90 = load4($89);
 $91 = $5;
 store4($91,$90);
 $3 = $7;
 $92 = $3;
 $93 = load4($92);
 $94 = $6;
 store4($94,$93);
 $10 = $43;
 $95 = $10;
 $96 = ((($95)) + 8|0);
 $9 = $96;
 $97 = $9;
 $8 = $97;
 $98 = $8;
 $99 = $42;
 $13 = $99;
 $100 = $13;
 $101 = ((($100)) + 12|0);
 $12 = $101;
 $102 = $12;
 $11 = $102;
 $103 = $11;
 $17 = $98;
 $18 = $103;
 $104 = $17;
 $16 = $104;
 $105 = $16;
 $106 = load4($105);
 store4($19,$106);
 $107 = $18;
 $14 = $107;
 $108 = $14;
 $109 = load4($108);
 $110 = $17;
 store4($110,$109);
 $15 = $19;
 $111 = $15;
 $112 = load4($111);
 $113 = $18;
 store4($113,$112);
 $114 = $42;
 $115 = ((($114)) + 4|0);
 $116 = load4($115);
 $117 = $42;
 store4($117,$116);
 $20 = $43;
 $118 = $20;
 $119 = ((($118)) + 4|0);
 $120 = load4($119);
 $121 = load4($118);
 $122 = $120;
 $123 = $121;
 $124 = (($122) - ($123))|0;
 $125 = (($124|0) / 12)&-1;
 __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE14__annotate_newEj($43,$125);
 $37 = $43;
 STACKTOP = sp;return;
}
function __ZNSt3__214__split_bufferIN10ndk_helper4Vec3ERNS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $18 = sp + 8|0;
 $21 = sp + 125|0;
 $27 = sp;
 $30 = sp + 124|0;
 $32 = $0;
 $33 = $32;
 $31 = $33;
 $34 = $31;
 $35 = ((($34)) + 4|0);
 $36 = load4($35);
 $28 = $34;
 $29 = $36;
 $37 = $28;
 $38 = $29;
 ; store1($27,load1($30,1),1);
 $25 = $37;
 $26 = $38;
 $39 = $25;
 while(1) {
  $40 = $26;
  $41 = ((($39)) + 8|0);
  $42 = load4($41);
  $43 = ($40|0)!=($42|0);
  if (!($43)) {
   break;
  }
  $24 = $39;
  $44 = $24;
  $45 = ((($44)) + 12|0);
  $23 = $45;
  $46 = $23;
  $22 = $46;
  $47 = $22;
  $48 = ((($47)) + 4|0);
  $49 = load4($48);
  $50 = ((($39)) + 8|0);
  $51 = load4($50);
  $52 = ((($51)) + -12|0);
  store4($50,$52);
  $15 = $52;
  $53 = $15;
  $19 = $49;
  $20 = $53;
  $54 = $19;
  $55 = $20;
  ; store1($18,load1($21,1),1);
  $16 = $54;
  $17 = $55;
 }
 $56 = load4($33);
 $57 = ($56|0)!=(0|0);
 if (!($57)) {
  STACKTOP = sp;return;
 }
 $7 = $33;
 $58 = $7;
 $59 = ((($58)) + 12|0);
 $6 = $59;
 $60 = $6;
 $5 = $60;
 $61 = $5;
 $62 = ((($61)) + 4|0);
 $63 = load4($62);
 $64 = load4($33);
 $4 = $33;
 $65 = $4;
 $3 = $65;
 $66 = $3;
 $67 = ((($66)) + 12|0);
 $2 = $67;
 $68 = $2;
 $1 = $68;
 $69 = $1;
 $70 = load4($69);
 $71 = load4($65);
 $72 = $70;
 $73 = $71;
 $74 = (($72) - ($73))|0;
 $75 = (($74|0) / 12)&-1;
 $12 = $63;
 $13 = $64;
 $14 = $75;
 $76 = $12;
 $77 = $13;
 $78 = $14;
 $9 = $76;
 $10 = $77;
 $11 = $78;
 $79 = $10;
 $8 = $79;
 $80 = $8;
 __ZdlPv($80);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE17__annotate_deleteEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $20 = $0;
 $21 = $20;
 $19 = $21;
 $22 = $19;
 $23 = load4($22);
 $18 = $23;
 $24 = $18;
 $17 = $21;
 $25 = $17;
 $26 = load4($25);
 $16 = $26;
 $27 = $16;
 $5 = $21;
 $28 = $5;
 $4 = $28;
 $29 = $4;
 $3 = $29;
 $30 = $3;
 $31 = ((($30)) + 8|0);
 $2 = $31;
 $32 = $2;
 $1 = $32;
 $33 = $1;
 $34 = load4($33);
 $35 = load4($29);
 $36 = $34;
 $37 = $35;
 $38 = (($36) - ($37))|0;
 $39 = (($38|0) / 12)&-1;
 $40 = (($27) + (($39*12)|0)|0);
 $7 = $21;
 $41 = $7;
 $42 = load4($41);
 $6 = $42;
 $43 = $6;
 $8 = $21;
 $44 = $8;
 $45 = ((($44)) + 4|0);
 $46 = load4($45);
 $47 = load4($44);
 $48 = $46;
 $49 = $47;
 $50 = (($48) - ($49))|0;
 $51 = (($50|0) / 12)&-1;
 $52 = (($43) + (($51*12)|0)|0);
 $10 = $21;
 $53 = $10;
 $54 = load4($53);
 $9 = $54;
 $55 = $9;
 $15 = $21;
 $56 = $15;
 $14 = $56;
 $57 = $14;
 $13 = $57;
 $58 = $13;
 $59 = ((($58)) + 8|0);
 $12 = $59;
 $60 = $12;
 $11 = $60;
 $61 = $11;
 $62 = load4($61);
 $63 = load4($57);
 $64 = $62;
 $65 = $63;
 $66 = (($64) - ($65))|0;
 $67 = (($66|0) / 12)&-1;
 $68 = (($55) + (($67*12)|0)|0);
 __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($21,$24,$40,$52,$68);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE14__annotate_newEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $20 = $0;
 $21 = $1;
 $22 = $20;
 $19 = $22;
 $23 = $19;
 $24 = load4($23);
 $18 = $24;
 $25 = $18;
 $17 = $22;
 $26 = $17;
 $27 = load4($26);
 $16 = $27;
 $28 = $16;
 $6 = $22;
 $29 = $6;
 $5 = $29;
 $30 = $5;
 $4 = $30;
 $31 = $4;
 $32 = ((($31)) + 8|0);
 $3 = $32;
 $33 = $3;
 $2 = $33;
 $34 = $2;
 $35 = load4($34);
 $36 = load4($30);
 $37 = $35;
 $38 = $36;
 $39 = (($37) - ($38))|0;
 $40 = (($39|0) / 12)&-1;
 $41 = (($28) + (($40*12)|0)|0);
 $8 = $22;
 $42 = $8;
 $43 = load4($42);
 $7 = $43;
 $44 = $7;
 $13 = $22;
 $45 = $13;
 $12 = $45;
 $46 = $12;
 $11 = $46;
 $47 = $11;
 $48 = ((($47)) + 8|0);
 $10 = $48;
 $49 = $10;
 $9 = $49;
 $50 = $9;
 $51 = load4($50);
 $52 = load4($46);
 $53 = $51;
 $54 = $52;
 $55 = (($53) - ($54))|0;
 $56 = (($55|0) / 12)&-1;
 $57 = (($44) + (($56*12)|0)|0);
 $15 = $22;
 $58 = $15;
 $59 = load4($58);
 $14 = $59;
 $60 = $14;
 $61 = $21;
 $62 = (($60) + (($61*12)|0)|0);
 __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($22,$25,$41,$57,$62);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Vec3ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE8max_sizeEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $3 = sp + 8|0;
 $5 = sp + 77|0;
 $11 = sp;
 $14 = sp + 76|0;
 $19 = sp + 16|0;
 $20 = sp + 12|0;
 $18 = $0;
 $21 = $18;
 $17 = $21;
 $22 = $17;
 $23 = ((($22)) + 8|0);
 $16 = $23;
 $24 = $16;
 $15 = $24;
 $25 = $15;
 $4 = $25;
 $26 = $4;
 ; store1($3,load1($5,1),1);
 $2 = $26;
 $27 = $2;
 $1 = $27;
 store4($19,67108863);
 $28 = (4294967295 / 2)&-1;
 store4($20,$28);
 $12 = $19;
 $13 = $20;
 $29 = $12;
 $30 = $13;
 ; store1($11,load1($14,1),1);
 $9 = $29;
 $10 = $30;
 $31 = $10;
 $32 = $9;
 $6 = $11;
 $7 = $31;
 $8 = $32;
 $33 = $7;
 $34 = load4($33);
 $35 = $8;
 $36 = load4($35);
 $37 = ($34>>>0)<($36>>>0);
 $38 = $10;
 $39 = $9;
 $40 = $37 ? $38 : $39;
 $41 = load4($40);
 STACKTOP = sp;return ($41|0);
}
function __ZNSt3__214__split_bufferIN10ndk_helper4Mat4ERNS_9allocatorIS2_EEEC2EjjS5_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(160|0);
 $11 = sp + 116|0;
 $15 = sp + 100|0;
 $27 = sp + 52|0;
 $34 = sp + 24|0;
 $39 = sp + 4|0;
 $40 = sp;
 $35 = $0;
 $36 = $1;
 $37 = $2;
 $38 = $3;
 $41 = $35;
 $42 = ((($41)) + 12|0);
 $32 = $34;
 $33 = -1;
 $43 = $32;
 store4($43,0);
 $44 = load4($34);
 store4($39,$44);
 $17 = $39;
 $45 = $38;
 $14 = $42;
 store4($15,0);
 $16 = $45;
 $46 = $14;
 $13 = $15;
 $47 = $13;
 $48 = load4($47);
 $49 = $16;
 $7 = $49;
 $50 = $7;
 $10 = $46;
 store4($11,$48);
 $12 = $50;
 $51 = $10;
 $9 = $11;
 $52 = $9;
 $53 = load4($52);
 store4($51,$53);
 $54 = ((($51)) + 4|0);
 $55 = $12;
 $8 = $55;
 $56 = $8;
 store4($54,$56);
 $57 = $36;
 $58 = ($57|0)!=(0);
 do {
  if ($58) {
   $6 = $41;
   $59 = $6;
   $60 = ((($59)) + 12|0);
   $5 = $60;
   $61 = $5;
   $4 = $61;
   $62 = $4;
   $63 = ((($62)) + 4|0);
   $64 = load4($63);
   $65 = $36;
   $23 = $64;
   $24 = $65;
   $66 = $23;
   $67 = $24;
   $20 = $66;
   $21 = $67;
   $22 = 0;
   $68 = $20;
   $69 = $21;
   $19 = $68;
   $70 = ($69>>>0)>(67108863);
   if ($70) {
    ___assert_fail((27624|0),(27661|0),1734,(27731|0));
    // unreachable;
   } else {
    $71 = $21;
    $72 = $71<<6;
    $18 = $72;
    $73 = $18;
    $74 = (__Znwj($73)|0);
    $77 = $74;
    break;
   }
  } else {
   $25 = $27;
   $26 = -1;
   $75 = $25;
   store4($75,0);
   $76 = load4($27);
   store4($40,$76);
   $28 = $40;
   $77 = 0;
  }
 } while(0);
 store4($41,$77);
 $78 = load4($41);
 $79 = $37;
 $80 = (($78) + ($79<<6)|0);
 $81 = ((($41)) + 8|0);
 store4($81,$80);
 $82 = ((($41)) + 4|0);
 store4($82,$80);
 $83 = load4($41);
 $84 = $36;
 $85 = (($83) + ($84<<6)|0);
 $31 = $41;
 $86 = $31;
 $87 = ((($86)) + 12|0);
 $30 = $87;
 $88 = $30;
 $29 = $88;
 $89 = $29;
 store4($89,$85);
 STACKTOP = sp;return;
}
function __ZNSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS2_RS4_EE($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0;
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0;
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0;
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0;
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(144|0);
 $7 = sp + 120|0;
 $13 = sp + 96|0;
 $25 = sp + 48|0;
 $36 = $0;
 $37 = $1;
 $38 = $36;
 __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE17__annotate_deleteEv($38);
 $35 = $38;
 $39 = $35;
 $40 = ((($39)) + 8|0);
 $34 = $40;
 $41 = $34;
 $33 = $41;
 $42 = $33;
 $43 = load4($38);
 $44 = ((($38)) + 4|0);
 $45 = load4($44);
 $46 = $37;
 $47 = ((($46)) + 4|0);
 $27 = $42;
 $28 = $43;
 $29 = $45;
 $30 = $47;
 $48 = $29;
 $49 = $28;
 $50 = $48;
 $51 = $49;
 $52 = (($50) - ($51))|0;
 $53 = (($52|0) / 64)&-1;
 $31 = $53;
 $54 = $31;
 $55 = $30;
 $56 = load4($55);
 $57 = (0 - ($54))|0;
 $58 = (($56) + ($57<<6)|0);
 store4($55,$58);
 $59 = $31;
 $60 = ($59|0)>(0);
 if ($60) {
  $61 = $30;
  $62 = load4($61);
  $63 = $28;
  $64 = $31;
  $65 = $64<<6;
  _memcpy(($62|0),($63|0),($65|0))|0;
 }
 $66 = $37;
 $67 = ((($66)) + 4|0);
 $5 = $38;
 $6 = $67;
 $68 = $5;
 $4 = $68;
 $69 = $4;
 $70 = load4($69);
 store4($7,$70);
 $71 = $6;
 $2 = $71;
 $72 = $2;
 $73 = load4($72);
 $74 = $5;
 store4($74,$73);
 $3 = $7;
 $75 = $3;
 $76 = load4($75);
 $77 = $6;
 store4($77,$76);
 $78 = ((($38)) + 4|0);
 $79 = $37;
 $80 = ((($79)) + 8|0);
 $11 = $78;
 $12 = $80;
 $81 = $11;
 $10 = $81;
 $82 = $10;
 $83 = load4($82);
 store4($13,$83);
 $84 = $12;
 $8 = $84;
 $85 = $8;
 $86 = load4($85);
 $87 = $11;
 store4($87,$86);
 $9 = $13;
 $88 = $9;
 $89 = load4($88);
 $90 = $12;
 store4($90,$89);
 $16 = $38;
 $91 = $16;
 $92 = ((($91)) + 8|0);
 $15 = $92;
 $93 = $15;
 $14 = $93;
 $94 = $14;
 $95 = $37;
 $19 = $95;
 $96 = $19;
 $97 = ((($96)) + 12|0);
 $18 = $97;
 $98 = $18;
 $17 = $98;
 $99 = $17;
 $23 = $94;
 $24 = $99;
 $100 = $23;
 $22 = $100;
 $101 = $22;
 $102 = load4($101);
 store4($25,$102);
 $103 = $24;
 $20 = $103;
 $104 = $20;
 $105 = load4($104);
 $106 = $23;
 store4($106,$105);
 $21 = $25;
 $107 = $21;
 $108 = load4($107);
 $109 = $24;
 store4($109,$108);
 $110 = $37;
 $111 = ((($110)) + 4|0);
 $112 = load4($111);
 $113 = $37;
 store4($113,$112);
 $26 = $38;
 $114 = $26;
 $115 = ((($114)) + 4|0);
 $116 = load4($115);
 $117 = load4($114);
 $118 = $116;
 $119 = $117;
 $120 = (($118) - ($119))|0;
 $121 = (($120|0) / 64)&-1;
 __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE14__annotate_newEj($38,$121);
 $32 = $38;
 STACKTOP = sp;return;
}
function __ZNSt3__214__split_bufferIN10ndk_helper4Mat4ERNS_9allocatorIS2_EEED2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $18 = sp + 8|0;
 $21 = sp + 125|0;
 $27 = sp;
 $30 = sp + 124|0;
 $32 = $0;
 $33 = $32;
 $31 = $33;
 $34 = $31;
 $35 = ((($34)) + 4|0);
 $36 = load4($35);
 $28 = $34;
 $29 = $36;
 $37 = $28;
 $38 = $29;
 ; store1($27,load1($30,1),1);
 $25 = $37;
 $26 = $38;
 $39 = $25;
 while(1) {
  $40 = $26;
  $41 = ((($39)) + 8|0);
  $42 = load4($41);
  $43 = ($40|0)!=($42|0);
  if (!($43)) {
   break;
  }
  $24 = $39;
  $44 = $24;
  $45 = ((($44)) + 12|0);
  $23 = $45;
  $46 = $23;
  $22 = $46;
  $47 = $22;
  $48 = ((($47)) + 4|0);
  $49 = load4($48);
  $50 = ((($39)) + 8|0);
  $51 = load4($50);
  $52 = ((($51)) + -64|0);
  store4($50,$52);
  $15 = $52;
  $53 = $15;
  $19 = $49;
  $20 = $53;
  $54 = $19;
  $55 = $20;
  ; store1($18,load1($21,1),1);
  $16 = $54;
  $17 = $55;
 }
 $56 = load4($33);
 $57 = ($56|0)!=(0|0);
 if (!($57)) {
  STACKTOP = sp;return;
 }
 $7 = $33;
 $58 = $7;
 $59 = ((($58)) + 12|0);
 $6 = $59;
 $60 = $6;
 $5 = $60;
 $61 = $5;
 $62 = ((($61)) + 4|0);
 $63 = load4($62);
 $64 = load4($33);
 $4 = $33;
 $65 = $4;
 $3 = $65;
 $66 = $3;
 $67 = ((($66)) + 12|0);
 $2 = $67;
 $68 = $2;
 $1 = $68;
 $69 = $1;
 $70 = load4($69);
 $71 = load4($65);
 $72 = $70;
 $73 = $71;
 $74 = (($72) - ($73))|0;
 $75 = (($74|0) / 64)&-1;
 $12 = $63;
 $13 = $64;
 $14 = $75;
 $76 = $12;
 $77 = $13;
 $78 = $14;
 $9 = $76;
 $10 = $77;
 $11 = $78;
 $79 = $10;
 $8 = $79;
 $80 = $8;
 __ZdlPv($80);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE17__annotate_deleteEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0;
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $20 = $0;
 $21 = $20;
 $19 = $21;
 $22 = $19;
 $23 = load4($22);
 $18 = $23;
 $24 = $18;
 $17 = $21;
 $25 = $17;
 $26 = load4($25);
 $16 = $26;
 $27 = $16;
 $5 = $21;
 $28 = $5;
 $4 = $28;
 $29 = $4;
 $3 = $29;
 $30 = $3;
 $31 = ((($30)) + 8|0);
 $2 = $31;
 $32 = $2;
 $1 = $32;
 $33 = $1;
 $34 = load4($33);
 $35 = load4($29);
 $36 = $34;
 $37 = $35;
 $38 = (($36) - ($37))|0;
 $39 = (($38|0) / 64)&-1;
 $40 = (($27) + ($39<<6)|0);
 $7 = $21;
 $41 = $7;
 $42 = load4($41);
 $6 = $42;
 $43 = $6;
 $8 = $21;
 $44 = $8;
 $45 = ((($44)) + 4|0);
 $46 = load4($45);
 $47 = load4($44);
 $48 = $46;
 $49 = $47;
 $50 = (($48) - ($49))|0;
 $51 = (($50|0) / 64)&-1;
 $52 = (($43) + ($51<<6)|0);
 $10 = $21;
 $53 = $10;
 $54 = load4($53);
 $9 = $54;
 $55 = $9;
 $15 = $21;
 $56 = $15;
 $14 = $56;
 $57 = $14;
 $13 = $57;
 $58 = $13;
 $59 = ((($58)) + 8|0);
 $12 = $59;
 $60 = $12;
 $11 = $60;
 $61 = $11;
 $62 = load4($61);
 $63 = load4($57);
 $64 = $62;
 $65 = $63;
 $66 = (($64) - ($65))|0;
 $67 = (($66|0) / 64)&-1;
 $68 = (($55) + ($67<<6)|0);
 __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($21,$24,$40,$52,$68);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE14__annotate_newEj($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $20 = $0;
 $21 = $1;
 $22 = $20;
 $19 = $22;
 $23 = $19;
 $24 = load4($23);
 $18 = $24;
 $25 = $18;
 $17 = $22;
 $26 = $17;
 $27 = load4($26);
 $16 = $27;
 $28 = $16;
 $6 = $22;
 $29 = $6;
 $5 = $29;
 $30 = $5;
 $4 = $30;
 $31 = $4;
 $32 = ((($31)) + 8|0);
 $3 = $32;
 $33 = $3;
 $2 = $33;
 $34 = $2;
 $35 = load4($34);
 $36 = load4($30);
 $37 = $35;
 $38 = $36;
 $39 = (($37) - ($38))|0;
 $40 = (($39|0) / 64)&-1;
 $41 = (($28) + ($40<<6)|0);
 $8 = $22;
 $42 = $8;
 $43 = load4($42);
 $7 = $43;
 $44 = $7;
 $13 = $22;
 $45 = $13;
 $12 = $45;
 $46 = $12;
 $11 = $46;
 $47 = $11;
 $48 = ((($47)) + 8|0);
 $10 = $48;
 $49 = $10;
 $9 = $49;
 $50 = $9;
 $51 = load4($50);
 $52 = load4($46);
 $53 = $51;
 $54 = $52;
 $55 = (($53) - ($54))|0;
 $56 = (($55|0) / 64)&-1;
 $57 = (($44) + ($56<<6)|0);
 $15 = $22;
 $58 = $15;
 $59 = load4($58);
 $14 = $59;
 $60 = $14;
 $61 = $21;
 $62 = (($60) + ($61<<6)|0);
 __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($22,$25,$41,$57,$62);
 STACKTOP = sp;return;
}
function __ZNKSt3__26vectorIN10ndk_helper4Mat4ENS_9allocatorIS2_EEE31__annotate_contiguous_containerEPKvS7_S7_S7_($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $0;
 $6 = $1;
 $7 = $2;
 $8 = $3;
 $9 = $4;
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat4aSERKS0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = Math_fround(0), $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $5 = $2;
 $4 = 0;
 while(1) {
  $6 = $4;
  $7 = ($6|0)<(16);
  if (!($7)) {
   break;
  }
  $8 = $4;
  $9 = $3;
  $10 = (($9) + ($8<<2)|0);
  $11 = loadf($10);
  $12 = $4;
  $13 = (($5) + ($12<<2)|0);
  storef($13,$11);
  $14 = $4;
  $15 = (($14) + 1)|0;
  $4 = $15;
 }
 STACKTOP = sp;return ($5|0);
}
function __ZN19MoreTeapotsRenderer6UpdateEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $2 = Math_fround(0), $3 = Math_fround(0), $4 = Math_fround(0), $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(128|0);
 $5 = sp + 40|0;
 $6 = sp + 24|0;
 $7 = sp + 12|0;
 $8 = sp;
 $1 = $0;
 $9 = $1;
 $2 = Math_fround(0.0);
 $3 = Math_fround(0.0);
 $4 = Math_fround(2000.0);
 $10 = ((($9)) + 128|0);
 __ZN10ndk_helper4Vec3C2Efff($6,Math_fround(0.0),Math_fround(0.0),Math_fround(2000.0));
 __ZN10ndk_helper4Vec3C2Efff($7,Math_fround(0.0),Math_fround(0.0),Math_fround(0.0));
 __ZN10ndk_helper4Vec3C2Efff($8,Math_fround(0.0),Math_fround(1.0),Math_fround(0.0));
 __ZN10ndk_helper4Mat46LookAtERKNS_4Vec3ES3_S3_($5,$6,$7,$8);
 (__ZN10ndk_helper4Mat4aSERKS0_($10,$5)|0);
 STACKTOP = sp;return;
}
function __ZN19MoreTeapotsRenderer6RenderEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = 0, $42 = Math_fround(0), $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = Math_fround(0), $48 = 0, $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = 0, $53 = Math_fround(0), $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = Math_fround(0), $77 = Math_fround(0), $78 = Math_fround(0), $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = Math_fround(0), $98 = Math_fround(0), $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 480|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(480|0);
 $13 = sp + 400|0;
 $15 = sp + 392|0;
 $16 = sp + 388|0;
 $17 = sp + 384|0;
 $18 = sp + 320|0;
 $19 = sp + 256|0;
 $20 = sp + 192|0;
 $21 = sp + 128|0;
 $22 = sp + 64|0;
 $23 = sp;
 $11 = $0;
 $24 = $11;
 $25 = ((($24)) + 16|0);
 $26 = load4($25);
 _glBindBuffer(34962,($26|0));
 $12 = 24;
 $27 = $12;
 _glVertexAttribPointer(0,3,5126,0,($27|0),(0|0));
 _glEnableVertexAttribArray(0);
 $28 = $12;
 _glVertexAttribPointer(1,3,5126,0,($28|0),((((0) + 12|0))|0));
 _glEnableVertexAttribArray(1);
 $29 = ((($24)) + 12|0);
 $30 = load4($29);
 _glBindBuffer(34963,($30|0));
 $31 = ((($24)) + 36|0);
 $32 = load4($31);
 _glUseProgram(($32|0));
 ; store8($13,load8(20432,4),4); store8($13+8 | 0,load8(20432+8 | 0,4),4); store8($13+16 | 0,load8(20432+16 | 0,4),4); store4($13+24 | 0,load4(20432+24 | 0,4),4);
 $33 = ((($24)) + 36|0);
 $34 = ((($33)) + 16|0);
 $35 = load4($34);
 $36 = loadf($13);
 $37 = ((($13)) + 4|0);
 $38 = loadf($37);
 $39 = ((($13)) + 8|0);
 $40 = loadf($39);
 $41 = ((($13)) + 12|0);
 $42 = loadf($41);
 _glUniform4f(($35|0),(+$36),(+$38),(+$40),(+$42));
 $43 = ((($24)) + 36|0);
 $44 = ((($43)) + 12|0);
 $45 = load4($44);
 $46 = ((($13)) + 16|0);
 $47 = loadf($46);
 $48 = ((($13)) + 16|0);
 $49 = ((($48)) + 4|0);
 $50 = loadf($49);
 $51 = ((($13)) + 16|0);
 $52 = ((($51)) + 8|0);
 $53 = loadf($52);
 _glUniform3f(($45|0),(+$47),(+$50),(+$53));
 $54 = ((($24)) + 36|0);
 $55 = ((($54)) + 4|0);
 $56 = load4($55);
 _glUniform3f(($56|0),100.0,-200.0,-600.0);
 $14 = 0;
 while(1) {
  $57 = $14;
  $58 = ((($24)) + 240|0);
  $59 = load4($58);
  $60 = ((($24)) + 244|0);
  $61 = load4($60);
  $62 = Math_imul($59, $61)|0;
  $63 = ((($24)) + 248|0);
  $64 = load4($63);
  $65 = Math_imul($62, $64)|0;
  $66 = ($57|0)<($65|0);
  if (!($66)) {
   break;
  }
  $67 = ((($24)) + 204|0);
  $68 = $14;
  $9 = $67;
  $10 = $68;
  $69 = $9;
  $70 = $10;
  $71 = load4($69);
  $72 = (($71) + (($70*12)|0)|0);
  __ZN10ndk_helper4Vec35ValueERfS1_S1_($72,$15,$16,$17);
  $73 = ((($24)) + 36|0);
  $74 = ((($73)) + 8|0);
  $75 = load4($74);
  $76 = loadf($15);
  $77 = loadf($16);
  $78 = loadf($17);
  _glUniform4f(($75|0),(+$76),(+$77),(+$78),1.0);
  $79 = ((($24)) + 228|0);
  $80 = $14;
  $7 = $79;
  $8 = $80;
  $81 = $7;
  $82 = $8;
  $83 = load4($81);
  $84 = (($83) + ($82<<3)|0);
  $85 = ((($24)) + 216|0);
  $86 = $14;
  $5 = $85;
  $6 = $86;
  $87 = $5;
  $88 = $6;
  $89 = load4($87);
  $90 = (($89) + ($88<<3)|0);
  (__ZN10ndk_helper4Vec2pLERKS0_($84,$90)|0);
  $91 = ((($24)) + 228|0);
  $92 = $14;
  $1 = $91;
  $2 = $92;
  $93 = $1;
  $94 = $2;
  $95 = load4($93);
  $96 = (($95) + ($94<<3)|0);
  __ZN10ndk_helper4Vec25ValueERfS1_($96,$15,$16);
  $97 = loadf($15);
  __ZN10ndk_helper4Mat49RotationXEf($19,$97);
  $98 = loadf($16);
  __ZN10ndk_helper4Mat49RotationYEf($20,$98);
  __ZNK10ndk_helper4Mat4mlERKS0_($18,$19,$20);
  $99 = ((($24)) + 128|0);
  $100 = ((($24)) + 192|0);
  $101 = $14;
  $3 = $100;
  $4 = $101;
  $102 = $3;
  $103 = $4;
  $104 = load4($102);
  $105 = (($104) + ($103<<6)|0);
  __ZNK10ndk_helper4Mat4mlERKS0_($22,$99,$105);
  __ZNK10ndk_helper4Mat4mlERKS0_($21,$22,$18);
  $106 = ((($24)) + 64|0);
  __ZNK10ndk_helper4Mat4mlERKS0_($23,$106,$21);
  $107 = ((($24)) + 36|0);
  $108 = ((($107)) + 20|0);
  $109 = load4($108);
  $110 = (__ZN10ndk_helper4Mat43PtrEv($23)|0);
  _glUniformMatrix4fv(($109|0),1,0,($110|0));
  $111 = ((($24)) + 36|0);
  $112 = ((($111)) + 24|0);
  $113 = load4($112);
  $114 = (__ZN10ndk_helper4Mat43PtrEv($21)|0);
  _glUniformMatrix4fv(($113|0),1,0,($114|0));
  $115 = ((($24)) + 4|0);
  $116 = load4($115);
  _glDrawElements(4,($116|0),5123,(0|0));
  $117 = $14;
  $118 = (($117) + 1)|0;
  $14 = $118;
 }
 _glBindBuffer(34962,0);
 _glBindBuffer(34963,0);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec35ValueERfS1_S1_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = 0, $15 = Math_fround(0), $16 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $4;
 $9 = loadf($8);
 $10 = $5;
 storef($10,$9);
 $11 = ((($8)) + 4|0);
 $12 = loadf($11);
 $13 = $6;
 storef($13,$12);
 $14 = ((($8)) + 8|0);
 $15 = loadf($14);
 $16 = $7;
 storef($16,$15);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec2pLERKS0_($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = Math_fround(0), $12 = 0, $13 = Math_fround(0), $14 = Math_fround(0), $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $0;
 $3 = $1;
 $4 = $2;
 $5 = $3;
 $6 = loadf($5);
 $7 = loadf($4);
 $8 = Math_fround($7 + $6);
 storef($4,$8);
 $9 = $3;
 $10 = ((($9)) + 4|0);
 $11 = loadf($10);
 $12 = ((($4)) + 4|0);
 $13 = loadf($12);
 $14 = Math_fround($13 + $11);
 storef($12,$14);
 STACKTOP = sp;return ($4|0);
}
function __ZN10ndk_helper4Vec25ValueERfS1_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = Math_fround(0), $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = Math_fround(0), $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $6 = $3;
 $7 = loadf($6);
 $8 = $4;
 storef($8,$7);
 $9 = ((($6)) + 4|0);
 $10 = loadf($9);
 $11 = $5;
 storef($11,$10);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat43PtrEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 STACKTOP = sp;return ($2|0);
}
function __ZN6shader13CompileShaderEPjjPKci($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$expand_i1_val = 0, $$expand_i1_val5 = 0, $$expand_i1_val7 = 0, $$pre_trunc = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $or$cond = 0, $vararg_buffer = 0, $vararg_buffer2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer2 = sp + 8|0;
 $vararg_buffer = sp;
 $4 = sp + 40|0;
 $7 = sp + 28|0;
 $8 = sp + 24|0;
 $9 = sp + 20|0;
 $11 = sp + 12|0;
 $5 = $0;
 $6 = $1;
 store4($7,$2);
 store4($8,$3);
 $12 = load4($7);
 $13 = ($12|0)==(0|0);
 $14 = load4($8);
 $15 = ($14|0)<=(0);
 $or$cond = $13 | $15;
 if ($or$cond) {
  $$expand_i1_val = 0;
  store1($4,$$expand_i1_val);
  $$pre_trunc = load1($4);
  $41 = $$pre_trunc&1;
  STACKTOP = sp;return ($41|0);
 }
 $16 = $6;
 $17 = (_glCreateShader(($16|0))|0);
 $18 = $5;
 store4($18,$17);
 $19 = $5;
 $20 = load4($19);
 _glShaderSource(($20|0),1,($7|0),($8|0));
 $21 = $5;
 $22 = load4($21);
 _glCompileShader(($22|0));
 $23 = $5;
 $24 = load4($23);
 _glGetShaderiv(($24|0),35716,($9|0));
 $25 = load4($9);
 $26 = ($25|0)>(0);
 if ($26) {
  $27 = load4($9);
  $28 = (_malloc($27)|0);
  $10 = $28;
  $29 = $5;
  $30 = load4($29);
  $31 = load4($9);
  $32 = $10;
  _glGetShaderInfoLog(($30|0),($31|0),($9|0),($32|0));
  $33 = $10;
  store4($vararg_buffer,$33);
  (_printf(27740,$vararg_buffer)|0);
  $34 = $10;
  _free($34);
 }
 $35 = $5;
 $36 = load4($35);
 _glGetShaderiv(($36|0),35713,($11|0));
 $37 = load4($11);
 $38 = ($37|0)==(0);
 if ($38) {
  (_printf(27763,$vararg_buffer2)|0);
  $39 = $5;
  $40 = load4($39);
  _glDeleteShader(($40|0));
  $$expand_i1_val5 = 0;
  store1($4,$$expand_i1_val5);
  $$pre_trunc = load1($4);
  $41 = $$pre_trunc&1;
  STACKTOP = sp;return ($41|0);
 } else {
  $$expand_i1_val7 = 1;
  store1($4,$$expand_i1_val7);
  $$pre_trunc = load1($4);
  $41 = $$pre_trunc&1;
  STACKTOP = sp;return ($41|0);
 }
 return (0)|0;
}
function __ZN6shader11LinkProgramEj($0) {
 $0 = $0|0;
 var $$expand_i1_val = 0, $$expand_i1_val4 = 0, $$pre_trunc = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer1 = sp + 8|0;
 $vararg_buffer = sp;
 $1 = sp + 28|0;
 $3 = sp + 20|0;
 $4 = sp + 16|0;
 $2 = $0;
 $6 = $2;
 _glLinkProgram(($6|0));
 $7 = $2;
 _glGetProgramiv(($7|0),35716,($4|0));
 $8 = load4($4);
 $9 = ($8|0)>(0);
 if ($9) {
  $10 = load4($4);
  $11 = (_malloc($10)|0);
  $5 = $11;
  $12 = $2;
  $13 = load4($4);
  $14 = $5;
  _glGetProgramInfoLog(($12|0),($13|0),($4|0),($14|0));
  $15 = $5;
  store4($vararg_buffer,$15);
  (_printf(27780,$vararg_buffer)|0);
  $16 = $5;
  _free($16);
 }
 $17 = $2;
 _glGetProgramiv(($17|0),35714,($3|0));
 $18 = load4($3);
 $19 = ($18|0)==(0);
 if ($19) {
  (_printf(27801,$vararg_buffer1)|0);
  $$expand_i1_val = 0;
  store1($1,$$expand_i1_val);
  $$pre_trunc = load1($1);
  $20 = $$pre_trunc&1;
  STACKTOP = sp;return ($20|0);
 } else {
  $$expand_i1_val4 = 1;
  store1($1,$$expand_i1_val4);
  $$pre_trunc = load1($1);
  $20 = $$pre_trunc&1;
  STACKTOP = sp;return ($20|0);
 }
 return (0)|0;
}
function __ZN10ndk_helper4Mat4C2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $3 = $1;
 $2 = 0;
 while(1) {
  $4 = $2;
  $5 = ($4|0)<(16);
  if (!($5)) {
   break;
  }
  $6 = $2;
  $7 = (($3) + ($6<<2)|0);
  storef($7,Math_fround(0.0));
  $8 = $2;
  $9 = (($8) + 1)|0;
  $2 = $9;
 }
 STACKTOP = sp;return;
}
function __ZNK10ndk_helper4Mat4mlERKS0_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $100 = 0, $101 = Math_fround(0), $102 = Math_fround(0), $103 = Math_fround(0), $104 = 0, $105 = Math_fround(0), $106 = 0, $107 = 0, $108 = Math_fround(0), $109 = Math_fround(0), $11 = Math_fround(0), $110 = Math_fround(0), $111 = 0, $112 = Math_fround(0), $113 = 0, $114 = 0, $115 = Math_fround(0), $116 = Math_fround(0), $117 = 0;
 var $118 = Math_fround(0), $119 = 0, $12 = 0, $120 = 0, $121 = Math_fround(0), $122 = Math_fround(0), $123 = Math_fround(0), $124 = 0, $125 = Math_fround(0), $126 = 0, $127 = 0, $128 = Math_fround(0), $129 = Math_fround(0), $13 = 0, $130 = Math_fround(0), $131 = 0, $132 = Math_fround(0), $133 = 0, $134 = 0, $135 = Math_fround(0);
 var $136 = Math_fround(0), $137 = Math_fround(0), $138 = 0, $139 = 0, $14 = Math_fround(0), $140 = Math_fround(0), $141 = 0, $142 = 0, $143 = Math_fround(0), $144 = Math_fround(0), $145 = 0, $146 = Math_fround(0), $147 = 0, $148 = 0, $149 = Math_fround(0), $15 = Math_fround(0), $150 = Math_fround(0), $151 = Math_fround(0), $152 = 0, $153 = Math_fround(0);
 var $154 = 0, $155 = 0, $156 = Math_fround(0), $157 = Math_fround(0), $158 = Math_fround(0), $159 = 0, $16 = Math_fround(0), $160 = Math_fround(0), $161 = 0, $162 = 0, $163 = Math_fround(0), $164 = Math_fround(0), $165 = Math_fround(0), $166 = 0, $167 = 0, $168 = Math_fround(0), $169 = 0, $17 = 0, $170 = 0, $171 = Math_fround(0);
 var $172 = Math_fround(0), $173 = 0, $174 = Math_fround(0), $175 = 0, $176 = 0, $177 = Math_fround(0), $178 = Math_fround(0), $179 = Math_fround(0), $18 = Math_fround(0), $180 = 0, $181 = Math_fround(0), $182 = 0, $183 = 0, $184 = Math_fround(0), $185 = Math_fround(0), $186 = Math_fround(0), $187 = 0, $188 = Math_fround(0), $189 = 0, $19 = 0;
 var $190 = 0, $191 = Math_fround(0), $192 = Math_fround(0), $193 = Math_fround(0), $194 = 0, $195 = 0, $196 = Math_fround(0), $197 = 0, $198 = 0, $199 = Math_fround(0), $20 = 0, $200 = Math_fround(0), $201 = 0, $202 = Math_fround(0), $203 = 0, $204 = 0, $205 = Math_fround(0), $206 = Math_fround(0), $207 = Math_fround(0), $208 = 0;
 var $209 = Math_fround(0), $21 = Math_fround(0), $210 = 0, $211 = 0, $212 = Math_fround(0), $213 = Math_fround(0), $214 = Math_fround(0), $215 = 0, $216 = Math_fround(0), $217 = 0, $218 = 0, $219 = Math_fround(0), $22 = Math_fround(0), $220 = Math_fround(0), $221 = Math_fround(0), $222 = 0, $223 = Math_fround(0), $224 = 0, $225 = 0, $226 = Math_fround(0);
 var $227 = Math_fround(0), $228 = 0, $229 = Math_fround(0), $23 = Math_fround(0), $230 = 0, $231 = 0, $232 = Math_fround(0), $233 = Math_fround(0), $234 = Math_fround(0), $235 = 0, $236 = Math_fround(0), $237 = 0, $238 = 0, $239 = Math_fround(0), $24 = 0, $240 = Math_fround(0), $241 = Math_fround(0), $242 = 0, $243 = Math_fround(0), $244 = 0;
 var $245 = 0, $246 = Math_fround(0), $247 = Math_fround(0), $248 = Math_fround(0), $249 = 0, $25 = Math_fround(0), $250 = 0, $251 = Math_fround(0), $252 = 0, $253 = 0, $254 = Math_fround(0), $255 = Math_fround(0), $256 = 0, $257 = Math_fround(0), $258 = 0, $259 = 0, $26 = 0, $260 = Math_fround(0), $261 = Math_fround(0), $262 = Math_fround(0);
 var $263 = 0, $264 = Math_fround(0), $265 = 0, $266 = 0, $267 = Math_fround(0), $268 = Math_fround(0), $269 = Math_fround(0), $27 = 0, $270 = 0, $271 = Math_fround(0), $272 = 0, $273 = 0, $274 = Math_fround(0), $275 = Math_fround(0), $276 = Math_fround(0), $277 = 0, $278 = 0, $279 = Math_fround(0), $28 = Math_fround(0), $280 = 0;
 var $281 = 0, $282 = Math_fround(0), $283 = Math_fround(0), $284 = 0, $285 = Math_fround(0), $286 = 0, $287 = 0, $288 = Math_fround(0), $289 = Math_fround(0), $29 = Math_fround(0), $290 = Math_fround(0), $291 = 0, $292 = Math_fround(0), $293 = 0, $294 = 0, $295 = Math_fround(0), $296 = Math_fround(0), $297 = Math_fround(0), $298 = 0, $299 = Math_fround(0);
 var $3 = 0, $30 = Math_fround(0), $300 = 0, $301 = 0, $302 = Math_fround(0), $303 = Math_fround(0), $304 = Math_fround(0), $305 = 0, $306 = 0, $307 = Math_fround(0), $308 = 0, $309 = 0, $31 = 0, $310 = Math_fround(0), $311 = Math_fround(0), $312 = 0, $313 = Math_fround(0), $314 = 0, $315 = 0, $316 = Math_fround(0);
 var $317 = Math_fround(0), $318 = Math_fround(0), $319 = 0, $32 = Math_fround(0), $320 = Math_fround(0), $321 = 0, $322 = 0, $323 = Math_fround(0), $324 = Math_fround(0), $325 = Math_fround(0), $326 = 0, $327 = Math_fround(0), $328 = 0, $329 = 0, $33 = 0, $330 = Math_fround(0), $331 = Math_fround(0), $332 = Math_fround(0), $333 = 0, $334 = Math_fround(0);
 var $335 = 0, $336 = 0, $337 = Math_fround(0), $338 = Math_fround(0), $339 = 0, $34 = Math_fround(0), $340 = Math_fround(0), $341 = 0, $342 = 0, $343 = Math_fround(0), $344 = Math_fround(0), $345 = Math_fround(0), $346 = 0, $347 = Math_fround(0), $348 = 0, $349 = 0, $35 = Math_fround(0), $350 = Math_fround(0), $351 = Math_fround(0), $352 = Math_fround(0);
 var $353 = 0, $354 = Math_fround(0), $355 = 0, $356 = 0, $357 = Math_fround(0), $358 = Math_fround(0), $359 = Math_fround(0), $36 = 0, $360 = 0, $361 = 0, $362 = Math_fround(0), $363 = 0, $364 = 0, $365 = Math_fround(0), $366 = Math_fround(0), $367 = 0, $368 = Math_fround(0), $369 = 0, $37 = Math_fround(0), $370 = 0;
 var $371 = Math_fround(0), $372 = Math_fround(0), $373 = Math_fround(0), $374 = 0, $375 = Math_fround(0), $376 = 0, $377 = 0, $378 = Math_fround(0), $379 = Math_fround(0), $38 = 0, $380 = Math_fround(0), $381 = 0, $382 = Math_fround(0), $383 = 0, $384 = 0, $385 = Math_fround(0), $386 = Math_fround(0), $387 = Math_fround(0), $388 = 0, $389 = 0;
 var $39 = 0, $390 = Math_fround(0), $391 = 0, $392 = 0, $393 = Math_fround(0), $394 = Math_fround(0), $395 = 0, $396 = Math_fround(0), $397 = 0, $398 = 0, $399 = Math_fround(0), $4 = 0, $40 = Math_fround(0), $400 = Math_fround(0), $401 = Math_fround(0), $402 = 0, $403 = Math_fround(0), $404 = 0, $405 = 0, $406 = Math_fround(0);
 var $407 = Math_fround(0), $408 = Math_fround(0), $409 = 0, $41 = Math_fround(0), $410 = Math_fround(0), $411 = 0, $412 = 0, $413 = Math_fround(0), $414 = Math_fround(0), $415 = Math_fround(0), $416 = 0, $417 = 0, $418 = Math_fround(0), $419 = 0, $42 = Math_fround(0), $420 = 0, $421 = Math_fround(0), $422 = Math_fround(0), $423 = 0, $424 = Math_fround(0);
 var $425 = 0, $426 = 0, $427 = Math_fround(0), $428 = Math_fround(0), $429 = Math_fround(0), $43 = 0, $430 = 0, $431 = Math_fround(0), $432 = 0, $433 = 0, $434 = Math_fround(0), $435 = Math_fround(0), $436 = Math_fround(0), $437 = 0, $438 = Math_fround(0), $439 = 0, $44 = Math_fround(0), $440 = 0, $441 = Math_fround(0), $442 = Math_fround(0);
 var $443 = Math_fround(0), $444 = 0, $45 = 0, $46 = 0, $47 = Math_fround(0), $48 = Math_fround(0), $49 = Math_fround(0), $5 = 0, $50 = 0, $51 = Math_fround(0), $52 = 0, $53 = 0, $54 = Math_fround(0), $55 = Math_fround(0), $56 = Math_fround(0), $57 = 0, $58 = 0, $59 = Math_fround(0), $6 = Math_fround(0), $60 = 0;
 var $61 = Math_fround(0), $62 = Math_fround(0), $63 = 0, $64 = Math_fround(0), $65 = 0, $66 = 0, $67 = Math_fround(0), $68 = Math_fround(0), $69 = Math_fround(0), $7 = 0, $70 = 0, $71 = Math_fround(0), $72 = 0, $73 = 0, $74 = Math_fround(0), $75 = Math_fround(0), $76 = Math_fround(0), $77 = 0, $78 = Math_fround(0), $79 = 0;
 var $8 = Math_fround(0), $80 = 0, $81 = Math_fround(0), $82 = Math_fround(0), $83 = Math_fround(0), $84 = 0, $85 = 0, $86 = Math_fround(0), $87 = 0, $88 = Math_fround(0), $89 = Math_fround(0), $9 = Math_fround(0), $90 = 0, $91 = Math_fround(0), $92 = 0, $93 = 0, $94 = Math_fround(0), $95 = Math_fround(0), $96 = Math_fround(0), $97 = 0;
 var $98 = Math_fround(0), $99 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $1;
 $4 = $2;
 $5 = $3;
 __ZN10ndk_helper4Mat4C2Ev($0);
 $6 = loadf($5);
 $7 = $4;
 $8 = loadf($7);
 $9 = Math_fround($6 * $8);
 $10 = ((($5)) + 16|0);
 $11 = loadf($10);
 $12 = $4;
 $13 = ((($12)) + 4|0);
 $14 = loadf($13);
 $15 = Math_fround($11 * $14);
 $16 = Math_fround($9 + $15);
 $17 = ((($5)) + 32|0);
 $18 = loadf($17);
 $19 = $4;
 $20 = ((($19)) + 8|0);
 $21 = loadf($20);
 $22 = Math_fround($18 * $21);
 $23 = Math_fround($16 + $22);
 $24 = ((($5)) + 48|0);
 $25 = loadf($24);
 $26 = $4;
 $27 = ((($26)) + 12|0);
 $28 = loadf($27);
 $29 = Math_fround($25 * $28);
 $30 = Math_fround($23 + $29);
 storef($0,$30);
 $31 = ((($5)) + 4|0);
 $32 = loadf($31);
 $33 = $4;
 $34 = loadf($33);
 $35 = Math_fround($32 * $34);
 $36 = ((($5)) + 20|0);
 $37 = loadf($36);
 $38 = $4;
 $39 = ((($38)) + 4|0);
 $40 = loadf($39);
 $41 = Math_fround($37 * $40);
 $42 = Math_fround($35 + $41);
 $43 = ((($5)) + 36|0);
 $44 = loadf($43);
 $45 = $4;
 $46 = ((($45)) + 8|0);
 $47 = loadf($46);
 $48 = Math_fround($44 * $47);
 $49 = Math_fround($42 + $48);
 $50 = ((($5)) + 52|0);
 $51 = loadf($50);
 $52 = $4;
 $53 = ((($52)) + 12|0);
 $54 = loadf($53);
 $55 = Math_fround($51 * $54);
 $56 = Math_fround($49 + $55);
 $57 = ((($0)) + 4|0);
 storef($57,$56);
 $58 = ((($5)) + 8|0);
 $59 = loadf($58);
 $60 = $4;
 $61 = loadf($60);
 $62 = Math_fround($59 * $61);
 $63 = ((($5)) + 24|0);
 $64 = loadf($63);
 $65 = $4;
 $66 = ((($65)) + 4|0);
 $67 = loadf($66);
 $68 = Math_fround($64 * $67);
 $69 = Math_fround($62 + $68);
 $70 = ((($5)) + 40|0);
 $71 = loadf($70);
 $72 = $4;
 $73 = ((($72)) + 8|0);
 $74 = loadf($73);
 $75 = Math_fround($71 * $74);
 $76 = Math_fround($69 + $75);
 $77 = ((($5)) + 56|0);
 $78 = loadf($77);
 $79 = $4;
 $80 = ((($79)) + 12|0);
 $81 = loadf($80);
 $82 = Math_fround($78 * $81);
 $83 = Math_fround($76 + $82);
 $84 = ((($0)) + 8|0);
 storef($84,$83);
 $85 = ((($5)) + 12|0);
 $86 = loadf($85);
 $87 = $4;
 $88 = loadf($87);
 $89 = Math_fround($86 * $88);
 $90 = ((($5)) + 28|0);
 $91 = loadf($90);
 $92 = $4;
 $93 = ((($92)) + 4|0);
 $94 = loadf($93);
 $95 = Math_fround($91 * $94);
 $96 = Math_fround($89 + $95);
 $97 = ((($5)) + 44|0);
 $98 = loadf($97);
 $99 = $4;
 $100 = ((($99)) + 8|0);
 $101 = loadf($100);
 $102 = Math_fround($98 * $101);
 $103 = Math_fround($96 + $102);
 $104 = ((($5)) + 60|0);
 $105 = loadf($104);
 $106 = $4;
 $107 = ((($106)) + 12|0);
 $108 = loadf($107);
 $109 = Math_fround($105 * $108);
 $110 = Math_fround($103 + $109);
 $111 = ((($0)) + 12|0);
 storef($111,$110);
 $112 = loadf($5);
 $113 = $4;
 $114 = ((($113)) + 16|0);
 $115 = loadf($114);
 $116 = Math_fround($112 * $115);
 $117 = ((($5)) + 16|0);
 $118 = loadf($117);
 $119 = $4;
 $120 = ((($119)) + 20|0);
 $121 = loadf($120);
 $122 = Math_fround($118 * $121);
 $123 = Math_fround($116 + $122);
 $124 = ((($5)) + 32|0);
 $125 = loadf($124);
 $126 = $4;
 $127 = ((($126)) + 24|0);
 $128 = loadf($127);
 $129 = Math_fround($125 * $128);
 $130 = Math_fround($123 + $129);
 $131 = ((($5)) + 48|0);
 $132 = loadf($131);
 $133 = $4;
 $134 = ((($133)) + 28|0);
 $135 = loadf($134);
 $136 = Math_fround($132 * $135);
 $137 = Math_fround($130 + $136);
 $138 = ((($0)) + 16|0);
 storef($138,$137);
 $139 = ((($5)) + 4|0);
 $140 = loadf($139);
 $141 = $4;
 $142 = ((($141)) + 16|0);
 $143 = loadf($142);
 $144 = Math_fround($140 * $143);
 $145 = ((($5)) + 20|0);
 $146 = loadf($145);
 $147 = $4;
 $148 = ((($147)) + 20|0);
 $149 = loadf($148);
 $150 = Math_fround($146 * $149);
 $151 = Math_fround($144 + $150);
 $152 = ((($5)) + 36|0);
 $153 = loadf($152);
 $154 = $4;
 $155 = ((($154)) + 24|0);
 $156 = loadf($155);
 $157 = Math_fround($153 * $156);
 $158 = Math_fround($151 + $157);
 $159 = ((($5)) + 52|0);
 $160 = loadf($159);
 $161 = $4;
 $162 = ((($161)) + 28|0);
 $163 = loadf($162);
 $164 = Math_fround($160 * $163);
 $165 = Math_fround($158 + $164);
 $166 = ((($0)) + 20|0);
 storef($166,$165);
 $167 = ((($5)) + 8|0);
 $168 = loadf($167);
 $169 = $4;
 $170 = ((($169)) + 16|0);
 $171 = loadf($170);
 $172 = Math_fround($168 * $171);
 $173 = ((($5)) + 24|0);
 $174 = loadf($173);
 $175 = $4;
 $176 = ((($175)) + 20|0);
 $177 = loadf($176);
 $178 = Math_fround($174 * $177);
 $179 = Math_fround($172 + $178);
 $180 = ((($5)) + 40|0);
 $181 = loadf($180);
 $182 = $4;
 $183 = ((($182)) + 24|0);
 $184 = loadf($183);
 $185 = Math_fround($181 * $184);
 $186 = Math_fround($179 + $185);
 $187 = ((($5)) + 56|0);
 $188 = loadf($187);
 $189 = $4;
 $190 = ((($189)) + 28|0);
 $191 = loadf($190);
 $192 = Math_fround($188 * $191);
 $193 = Math_fround($186 + $192);
 $194 = ((($0)) + 24|0);
 storef($194,$193);
 $195 = ((($5)) + 12|0);
 $196 = loadf($195);
 $197 = $4;
 $198 = ((($197)) + 16|0);
 $199 = loadf($198);
 $200 = Math_fround($196 * $199);
 $201 = ((($5)) + 28|0);
 $202 = loadf($201);
 $203 = $4;
 $204 = ((($203)) + 20|0);
 $205 = loadf($204);
 $206 = Math_fround($202 * $205);
 $207 = Math_fround($200 + $206);
 $208 = ((($5)) + 44|0);
 $209 = loadf($208);
 $210 = $4;
 $211 = ((($210)) + 24|0);
 $212 = loadf($211);
 $213 = Math_fround($209 * $212);
 $214 = Math_fround($207 + $213);
 $215 = ((($5)) + 60|0);
 $216 = loadf($215);
 $217 = $4;
 $218 = ((($217)) + 28|0);
 $219 = loadf($218);
 $220 = Math_fround($216 * $219);
 $221 = Math_fround($214 + $220);
 $222 = ((($0)) + 28|0);
 storef($222,$221);
 $223 = loadf($5);
 $224 = $4;
 $225 = ((($224)) + 32|0);
 $226 = loadf($225);
 $227 = Math_fround($223 * $226);
 $228 = ((($5)) + 16|0);
 $229 = loadf($228);
 $230 = $4;
 $231 = ((($230)) + 36|0);
 $232 = loadf($231);
 $233 = Math_fround($229 * $232);
 $234 = Math_fround($227 + $233);
 $235 = ((($5)) + 32|0);
 $236 = loadf($235);
 $237 = $4;
 $238 = ((($237)) + 40|0);
 $239 = loadf($238);
 $240 = Math_fround($236 * $239);
 $241 = Math_fround($234 + $240);
 $242 = ((($5)) + 48|0);
 $243 = loadf($242);
 $244 = $4;
 $245 = ((($244)) + 44|0);
 $246 = loadf($245);
 $247 = Math_fround($243 * $246);
 $248 = Math_fround($241 + $247);
 $249 = ((($0)) + 32|0);
 storef($249,$248);
 $250 = ((($5)) + 4|0);
 $251 = loadf($250);
 $252 = $4;
 $253 = ((($252)) + 32|0);
 $254 = loadf($253);
 $255 = Math_fround($251 * $254);
 $256 = ((($5)) + 20|0);
 $257 = loadf($256);
 $258 = $4;
 $259 = ((($258)) + 36|0);
 $260 = loadf($259);
 $261 = Math_fround($257 * $260);
 $262 = Math_fround($255 + $261);
 $263 = ((($5)) + 36|0);
 $264 = loadf($263);
 $265 = $4;
 $266 = ((($265)) + 40|0);
 $267 = loadf($266);
 $268 = Math_fround($264 * $267);
 $269 = Math_fround($262 + $268);
 $270 = ((($5)) + 52|0);
 $271 = loadf($270);
 $272 = $4;
 $273 = ((($272)) + 44|0);
 $274 = loadf($273);
 $275 = Math_fround($271 * $274);
 $276 = Math_fround($269 + $275);
 $277 = ((($0)) + 36|0);
 storef($277,$276);
 $278 = ((($5)) + 8|0);
 $279 = loadf($278);
 $280 = $4;
 $281 = ((($280)) + 32|0);
 $282 = loadf($281);
 $283 = Math_fround($279 * $282);
 $284 = ((($5)) + 24|0);
 $285 = loadf($284);
 $286 = $4;
 $287 = ((($286)) + 36|0);
 $288 = loadf($287);
 $289 = Math_fround($285 * $288);
 $290 = Math_fround($283 + $289);
 $291 = ((($5)) + 40|0);
 $292 = loadf($291);
 $293 = $4;
 $294 = ((($293)) + 40|0);
 $295 = loadf($294);
 $296 = Math_fround($292 * $295);
 $297 = Math_fround($290 + $296);
 $298 = ((($5)) + 56|0);
 $299 = loadf($298);
 $300 = $4;
 $301 = ((($300)) + 44|0);
 $302 = loadf($301);
 $303 = Math_fround($299 * $302);
 $304 = Math_fround($297 + $303);
 $305 = ((($0)) + 40|0);
 storef($305,$304);
 $306 = ((($5)) + 12|0);
 $307 = loadf($306);
 $308 = $4;
 $309 = ((($308)) + 32|0);
 $310 = loadf($309);
 $311 = Math_fround($307 * $310);
 $312 = ((($5)) + 28|0);
 $313 = loadf($312);
 $314 = $4;
 $315 = ((($314)) + 36|0);
 $316 = loadf($315);
 $317 = Math_fround($313 * $316);
 $318 = Math_fround($311 + $317);
 $319 = ((($5)) + 44|0);
 $320 = loadf($319);
 $321 = $4;
 $322 = ((($321)) + 40|0);
 $323 = loadf($322);
 $324 = Math_fround($320 * $323);
 $325 = Math_fround($318 + $324);
 $326 = ((($5)) + 60|0);
 $327 = loadf($326);
 $328 = $4;
 $329 = ((($328)) + 44|0);
 $330 = loadf($329);
 $331 = Math_fround($327 * $330);
 $332 = Math_fround($325 + $331);
 $333 = ((($0)) + 44|0);
 storef($333,$332);
 $334 = loadf($5);
 $335 = $4;
 $336 = ((($335)) + 48|0);
 $337 = loadf($336);
 $338 = Math_fround($334 * $337);
 $339 = ((($5)) + 16|0);
 $340 = loadf($339);
 $341 = $4;
 $342 = ((($341)) + 52|0);
 $343 = loadf($342);
 $344 = Math_fround($340 * $343);
 $345 = Math_fround($338 + $344);
 $346 = ((($5)) + 32|0);
 $347 = loadf($346);
 $348 = $4;
 $349 = ((($348)) + 56|0);
 $350 = loadf($349);
 $351 = Math_fround($347 * $350);
 $352 = Math_fround($345 + $351);
 $353 = ((($5)) + 48|0);
 $354 = loadf($353);
 $355 = $4;
 $356 = ((($355)) + 60|0);
 $357 = loadf($356);
 $358 = Math_fround($354 * $357);
 $359 = Math_fround($352 + $358);
 $360 = ((($0)) + 48|0);
 storef($360,$359);
 $361 = ((($5)) + 4|0);
 $362 = loadf($361);
 $363 = $4;
 $364 = ((($363)) + 48|0);
 $365 = loadf($364);
 $366 = Math_fround($362 * $365);
 $367 = ((($5)) + 20|0);
 $368 = loadf($367);
 $369 = $4;
 $370 = ((($369)) + 52|0);
 $371 = loadf($370);
 $372 = Math_fround($368 * $371);
 $373 = Math_fround($366 + $372);
 $374 = ((($5)) + 36|0);
 $375 = loadf($374);
 $376 = $4;
 $377 = ((($376)) + 56|0);
 $378 = loadf($377);
 $379 = Math_fround($375 * $378);
 $380 = Math_fround($373 + $379);
 $381 = ((($5)) + 52|0);
 $382 = loadf($381);
 $383 = $4;
 $384 = ((($383)) + 60|0);
 $385 = loadf($384);
 $386 = Math_fround($382 * $385);
 $387 = Math_fround($380 + $386);
 $388 = ((($0)) + 52|0);
 storef($388,$387);
 $389 = ((($5)) + 8|0);
 $390 = loadf($389);
 $391 = $4;
 $392 = ((($391)) + 48|0);
 $393 = loadf($392);
 $394 = Math_fround($390 * $393);
 $395 = ((($5)) + 24|0);
 $396 = loadf($395);
 $397 = $4;
 $398 = ((($397)) + 52|0);
 $399 = loadf($398);
 $400 = Math_fround($396 * $399);
 $401 = Math_fround($394 + $400);
 $402 = ((($5)) + 40|0);
 $403 = loadf($402);
 $404 = $4;
 $405 = ((($404)) + 56|0);
 $406 = loadf($405);
 $407 = Math_fround($403 * $406);
 $408 = Math_fround($401 + $407);
 $409 = ((($5)) + 56|0);
 $410 = loadf($409);
 $411 = $4;
 $412 = ((($411)) + 60|0);
 $413 = loadf($412);
 $414 = Math_fround($410 * $413);
 $415 = Math_fround($408 + $414);
 $416 = ((($0)) + 56|0);
 storef($416,$415);
 $417 = ((($5)) + 12|0);
 $418 = loadf($417);
 $419 = $4;
 $420 = ((($419)) + 48|0);
 $421 = loadf($420);
 $422 = Math_fround($418 * $421);
 $423 = ((($5)) + 28|0);
 $424 = loadf($423);
 $425 = $4;
 $426 = ((($425)) + 52|0);
 $427 = loadf($426);
 $428 = Math_fround($424 * $427);
 $429 = Math_fround($422 + $428);
 $430 = ((($5)) + 44|0);
 $431 = loadf($430);
 $432 = $4;
 $433 = ((($432)) + 56|0);
 $434 = loadf($433);
 $435 = Math_fround($431 * $434);
 $436 = Math_fround($429 + $435);
 $437 = ((($5)) + 60|0);
 $438 = loadf($437);
 $439 = $4;
 $440 = ((($439)) + 60|0);
 $441 = loadf($440);
 $442 = Math_fround($438 * $441);
 $443 = Math_fround($436 + $442);
 $444 = ((($0)) + 60|0);
 storef($444,$443);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat49RotationXEf($0,$1) {
 $0 = $0|0;
 $1 = Math_fround($1);
 var $10 = 0, $11 = 0, $12 = 0, $13 = Math_fround(0), $14 = 0, $15 = Math_fround(0), $16 = 0, $17 = 0, $18 = 0, $19 = Math_fround(0), $2 = Math_fround(0), $20 = Math_fround(0), $21 = 0, $22 = Math_fround(0), $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = Math_fround(0), $4 = Math_fround(0), $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $1;
 __ZN10ndk_helper4Mat4C2Ev($0);
 $5 = $2;
 $6 = (Math_fround(_cosf($5)));
 $3 = $6;
 $7 = $2;
 $8 = (Math_fround(_sinf($7)));
 $4 = $8;
 storef($0,Math_fround(1.0));
 $9 = ((($0)) + 16|0);
 storef($9,Math_fround(0.0));
 $10 = ((($0)) + 32|0);
 storef($10,Math_fround(0.0));
 $11 = ((($0)) + 48|0);
 storef($11,Math_fround(0.0));
 $12 = ((($0)) + 4|0);
 storef($12,Math_fround(0.0));
 $13 = $3;
 $14 = ((($0)) + 20|0);
 storef($14,$13);
 $15 = $4;
 $16 = ((($0)) + 36|0);
 storef($16,$15);
 $17 = ((($0)) + 52|0);
 storef($17,Math_fround(0.0));
 $18 = ((($0)) + 8|0);
 storef($18,Math_fround(0.0));
 $19 = $4;
 $20 = Math_fround(-$19);
 $21 = ((($0)) + 24|0);
 storef($21,$20);
 $22 = $3;
 $23 = ((($0)) + 40|0);
 storef($23,$22);
 $24 = ((($0)) + 56|0);
 storef($24,Math_fround(0.0));
 $25 = ((($0)) + 12|0);
 storef($25,Math_fround(0.0));
 $26 = ((($0)) + 28|0);
 storef($26,Math_fround(0.0));
 $27 = ((($0)) + 44|0);
 storef($27,Math_fround(0.0));
 $28 = ((($0)) + 60|0);
 storef($28,Math_fround(1.0));
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat49RotationYEf($0,$1) {
 $0 = $0|0;
 $1 = Math_fround($1);
 var $10 = 0, $11 = Math_fround(0), $12 = Math_fround(0), $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = Math_fround(0), $2 = Math_fround(0), $20 = 0, $21 = 0, $22 = Math_fround(0), $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = Math_fround(0), $4 = Math_fround(0), $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $1;
 __ZN10ndk_helper4Mat4C2Ev($0);
 $5 = $2;
 $6 = (Math_fround(_cosf($5)));
 $3 = $6;
 $7 = $2;
 $8 = (Math_fround(_sinf($7)));
 $4 = $8;
 $9 = $3;
 storef($0,$9);
 $10 = ((($0)) + 16|0);
 storef($10,Math_fround(0.0));
 $11 = $4;
 $12 = Math_fround(-$11);
 $13 = ((($0)) + 32|0);
 storef($13,$12);
 $14 = ((($0)) + 48|0);
 storef($14,Math_fround(0.0));
 $15 = ((($0)) + 4|0);
 storef($15,Math_fround(0.0));
 $16 = ((($0)) + 20|0);
 storef($16,Math_fround(1.0));
 $17 = ((($0)) + 36|0);
 storef($17,Math_fround(0.0));
 $18 = ((($0)) + 52|0);
 storef($18,Math_fround(0.0));
 $19 = $4;
 $20 = ((($0)) + 8|0);
 storef($20,$19);
 $21 = ((($0)) + 24|0);
 storef($21,Math_fround(0.0));
 $22 = $3;
 $23 = ((($0)) + 40|0);
 storef($23,$22);
 $24 = ((($0)) + 56|0);
 storef($24,Math_fround(0.0));
 $25 = ((($0)) + 12|0);
 storef($25,Math_fround(0.0));
 $26 = ((($0)) + 28|0);
 storef($26,Math_fround(0.0));
 $27 = ((($0)) + 44|0);
 storef($27,Math_fround(0.0));
 $28 = ((($0)) + 60|0);
 storef($28,Math_fround(1.0));
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat411TranslationEfff($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = Math_fround($2);
 $3 = Math_fround($3);
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = Math_fround(0), $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = Math_fround(0), $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $4 = Math_fround(0), $5 = Math_fround(0), $6 = Math_fround(0), $7 = 0, $8 = 0;
 var $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $1;
 $5 = $2;
 $6 = $3;
 __ZN10ndk_helper4Mat4C2Ev($0);
 storef($0,Math_fround(1.0));
 $7 = ((($0)) + 16|0);
 storef($7,Math_fround(0.0));
 $8 = ((($0)) + 32|0);
 storef($8,Math_fround(0.0));
 $9 = $4;
 $10 = ((($0)) + 48|0);
 storef($10,$9);
 $11 = ((($0)) + 4|0);
 storef($11,Math_fround(0.0));
 $12 = ((($0)) + 20|0);
 storef($12,Math_fround(1.0));
 $13 = ((($0)) + 36|0);
 storef($13,Math_fround(0.0));
 $14 = $5;
 $15 = ((($0)) + 52|0);
 storef($15,$14);
 $16 = ((($0)) + 8|0);
 storef($16,Math_fround(0.0));
 $17 = ((($0)) + 24|0);
 storef($17,Math_fround(0.0));
 $18 = ((($0)) + 40|0);
 storef($18,Math_fround(1.0));
 $19 = $6;
 $20 = ((($0)) + 56|0);
 storef($20,$19);
 $21 = ((($0)) + 12|0);
 storef($21,Math_fround(0.0));
 $22 = ((($0)) + 28|0);
 storef($22,Math_fround(0.0));
 $23 = ((($0)) + 44|0);
 storef($23,Math_fround(0.0));
 $24 = ((($0)) + 60|0);
 storef($24,Math_fround(1.0));
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat411PerspectiveEffff($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = Math_fround($2);
 $3 = Math_fround($3);
 $4 = Math_fround($4);
 var $10 = Math_fround(0), $11 = Math_fround(0), $12 = Math_fround(0), $13 = Math_fround(0), $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = Math_fround(0), $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $5 = Math_fround(0), $6 = Math_fround(0);
 var $7 = Math_fround(0), $8 = Math_fround(0), $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $4;
 $11 = $7;
 $12 = Math_fround(Math_fround(2.0) * $11);
 $9 = $12;
 $13 = $7;
 $14 = $8;
 $15 = Math_fround($13 - $14);
 $16 = Math_fround(Math_fround(1.0) / $15);
 $10 = $16;
 __ZN10ndk_helper4Mat4C2Ev($0);
 $17 = $9;
 $18 = $5;
 $19 = Math_fround($17 / $18);
 storef($0,$19);
 $20 = ((($0)) + 16|0);
 storef($20,Math_fround(0.0));
 $21 = ((($0)) + 32|0);
 storef($21,Math_fround(0.0));
 $22 = ((($0)) + 48|0);
 storef($22,Math_fround(0.0));
 $23 = ((($0)) + 4|0);
 storef($23,Math_fround(0.0));
 $24 = $9;
 $25 = $6;
 $26 = Math_fround($24 / $25);
 $27 = ((($0)) + 20|0);
 storef($27,$26);
 $28 = ((($0)) + 36|0);
 storef($28,Math_fround(0.0));
 $29 = ((($0)) + 52|0);
 storef($29,Math_fround(0.0));
 $30 = ((($0)) + 8|0);
 storef($30,Math_fround(0.0));
 $31 = ((($0)) + 24|0);
 storef($31,Math_fround(0.0));
 $32 = $8;
 $33 = $7;
 $34 = Math_fround($32 + $33);
 $35 = $10;
 $36 = Math_fround($34 * $35);
 $37 = ((($0)) + 40|0);
 storef($37,$36);
 $38 = $8;
 $39 = $10;
 $40 = Math_fround($38 * $39);
 $41 = $9;
 $42 = Math_fround($40 * $41);
 $43 = ((($0)) + 56|0);
 storef($43,$42);
 $44 = ((($0)) + 12|0);
 storef($44,Math_fround(0.0));
 $45 = ((($0)) + 28|0);
 storef($45,Math_fround(0.0));
 $46 = ((($0)) + 44|0);
 storef($46,Math_fround(-1.0));
 $47 = ((($0)) + 60|0);
 storef($47,Math_fround(0.0));
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat46LookAtERKNS_4Vec3ES3_S3_($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = 0, $20 = 0, $21 = Math_fround(0), $22 = 0, $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = 0, $28 = 0, $29 = Math_fround(0);
 var $30 = 0, $31 = 0, $32 = Math_fround(0), $33 = Math_fround(0), $34 = 0, $35 = 0, $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = 0, $4 = 0, $40 = 0, $41 = Math_fround(0), $42 = 0, $43 = 0, $44 = Math_fround(0), $45 = 0, $46 = 0, $47 = Math_fround(0), $48 = 0;
 var $49 = 0, $5 = 0, $50 = Math_fround(0), $51 = 0, $52 = 0, $53 = Math_fround(0), $54 = 0, $55 = 0, $56 = Math_fround(0), $57 = 0, $58 = 0, $59 = Math_fround(0), $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0;
 var $67 = Math_fround(0), $68 = Math_fround(0), $69 = 0, $7 = 0, $70 = 0, $71 = Math_fround(0), $72 = Math_fround(0), $73 = 0, $74 = 0, $75 = Math_fround(0), $76 = Math_fround(0), $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(96|0);
 $7 = sp + 72|0;
 $8 = sp + 60|0;
 $9 = sp + 48|0;
 $10 = sp + 36|0;
 $11 = sp + 24|0;
 $12 = sp + 12|0;
 $13 = sp;
 $4 = $1;
 $5 = $2;
 $6 = $3;
 __ZN10ndk_helper4Vec3C2Ev($7);
 __ZN10ndk_helper4Vec3C2Ev($8);
 __ZN10ndk_helper4Vec3C2Ev($9);
 __ZN10ndk_helper4Mat4C2Ev($0);
 $14 = $4;
 $15 = loadf($14);
 $16 = $5;
 $17 = loadf($16);
 $18 = Math_fround($15 - $17);
 storef($7,$18);
 $19 = $4;
 $20 = ((($19)) + 4|0);
 $21 = loadf($20);
 $22 = $5;
 $23 = ((($22)) + 4|0);
 $24 = loadf($23);
 $25 = Math_fround($21 - $24);
 $26 = ((($7)) + 4|0);
 storef($26,$25);
 $27 = $4;
 $28 = ((($27)) + 8|0);
 $29 = loadf($28);
 $30 = $5;
 $31 = ((($30)) + 8|0);
 $32 = loadf($31);
 $33 = Math_fround($29 - $32);
 $34 = ((($7)) + 8|0);
 storef($34,$33);
 __ZN10ndk_helper4Vec39NormalizeEv($10,$7);
 $35 = $6;
 ; store8($8,load8($35,4),4); store4($8+8 | 0,load4($35+8 | 0,4),4);
 __ZN10ndk_helper4Vec39NormalizeEv($11,$8);
 __ZN10ndk_helper4Vec35CrossERKS0_($12,$8,$7);
 ; store8($9,load8($12,4),4); store4($9+8 | 0,load4($12+8 | 0,4),4);
 __ZN10ndk_helper4Vec35CrossERKS0_($13,$7,$9);
 ; store8($8,load8($13,4),4); store4($8+8 | 0,load4($13+8 | 0,4),4);
 $36 = loadf($9);
 storef($0,$36);
 $37 = ((($9)) + 4|0);
 $38 = loadf($37);
 $39 = ((($0)) + 16|0);
 storef($39,$38);
 $40 = ((($9)) + 8|0);
 $41 = loadf($40);
 $42 = ((($0)) + 32|0);
 storef($42,$41);
 $43 = ((($0)) + 48|0);
 storef($43,Math_fround(0.0));
 $44 = loadf($8);
 $45 = ((($0)) + 4|0);
 storef($45,$44);
 $46 = ((($8)) + 4|0);
 $47 = loadf($46);
 $48 = ((($0)) + 20|0);
 storef($48,$47);
 $49 = ((($8)) + 8|0);
 $50 = loadf($49);
 $51 = ((($0)) + 36|0);
 storef($51,$50);
 $52 = ((($0)) + 52|0);
 storef($52,Math_fround(0.0));
 $53 = loadf($7);
 $54 = ((($0)) + 8|0);
 storef($54,$53);
 $55 = ((($7)) + 4|0);
 $56 = loadf($55);
 $57 = ((($0)) + 24|0);
 storef($57,$56);
 $58 = ((($7)) + 8|0);
 $59 = loadf($58);
 $60 = ((($0)) + 40|0);
 storef($60,$59);
 $61 = ((($0)) + 56|0);
 storef($61,Math_fround(0.0));
 $62 = ((($0)) + 12|0);
 storef($62,Math_fround(0.0));
 $63 = ((($0)) + 28|0);
 storef($63,Math_fround(0.0));
 $64 = ((($0)) + 44|0);
 storef($64,Math_fround(0.0));
 $65 = ((($0)) + 60|0);
 storef($65,Math_fround(1.0));
 $66 = $4;
 $67 = loadf($66);
 $68 = Math_fround(-$67);
 $69 = $4;
 $70 = ((($69)) + 4|0);
 $71 = loadf($70);
 $72 = Math_fround(-$71);
 $73 = $4;
 $74 = ((($73)) + 8|0);
 $75 = loadf($74);
 $76 = Math_fround(-$75);
 (__ZN10ndk_helper4Mat413PostTranslateEfff($0,$68,$72,$76)|0);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec3C2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = ((($2)) + 8|0);
 storef($3,Math_fround(0.0));
 $4 = ((($2)) + 4|0);
 storef($4,Math_fround(0.0));
 storef($2,Math_fround(0.0));
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec39NormalizeEv($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = Math_fround(0), $11 = Math_fround(0), $12 = Math_fround(0), $13 = 0, $14 = 0, $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = 0, $2 = 0, $3 = Math_fround(0), $4 = 0, $5 = Math_fround(0), $6 = Math_fround(0), $7 = Math_fround(0), $8 = Math_fround(0), $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $1;
 $4 = $2;
 $5 = (Math_fround(__ZNK10ndk_helper4Vec36LengthEv($4)));
 $3 = $5;
 $6 = loadf($4);
 $7 = $3;
 $8 = Math_fround($6 / $7);
 storef($4,$8);
 $9 = ((($4)) + 4|0);
 $10 = loadf($9);
 $11 = $3;
 $12 = Math_fround($10 / $11);
 $13 = ((($4)) + 4|0);
 storef($13,$12);
 $14 = ((($4)) + 8|0);
 $15 = loadf($14);
 $16 = $3;
 $17 = Math_fround($15 / $16);
 $18 = ((($4)) + 8|0);
 storef($18,$17);
 __ZN10ndk_helper4Vec3C2ERKS0_($0,$4);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Vec35CrossERKS0_($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = Math_fround(0), $11 = Math_fround(0), $12 = 0, $13 = Math_fround(0), $14 = 0, $15 = 0, $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $19 = 0, $20 = Math_fround(0), $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = 0, $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0);
 var $3 = 0, $30 = 0, $31 = Math_fround(0), $32 = 0, $33 = 0, $34 = Math_fround(0), $35 = Math_fround(0), $36 = 0, $37 = Math_fround(0), $38 = 0, $39 = Math_fround(0), $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = 0, $5 = 0, $6 = 0, $7 = Math_fround(0), $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $3 = $1;
 $4 = $2;
 $5 = $3;
 __ZN10ndk_helper4Vec3C2Ev($0);
 $6 = ((($5)) + 4|0);
 $7 = loadf($6);
 $8 = $4;
 $9 = ((($8)) + 8|0);
 $10 = loadf($9);
 $11 = Math_fround($7 * $10);
 $12 = ((($5)) + 8|0);
 $13 = loadf($12);
 $14 = $4;
 $15 = ((($14)) + 4|0);
 $16 = loadf($15);
 $17 = Math_fround($13 * $16);
 $18 = Math_fround($11 - $17);
 storef($0,$18);
 $19 = ((($5)) + 8|0);
 $20 = loadf($19);
 $21 = $4;
 $22 = loadf($21);
 $23 = Math_fround($20 * $22);
 $24 = loadf($5);
 $25 = $4;
 $26 = ((($25)) + 8|0);
 $27 = loadf($26);
 $28 = Math_fround($24 * $27);
 $29 = Math_fround($23 - $28);
 $30 = ((($0)) + 4|0);
 storef($30,$29);
 $31 = loadf($5);
 $32 = $4;
 $33 = ((($32)) + 4|0);
 $34 = loadf($33);
 $35 = Math_fround($31 * $34);
 $36 = ((($5)) + 4|0);
 $37 = loadf($36);
 $38 = $4;
 $39 = loadf($38);
 $40 = Math_fround($37 * $39);
 $41 = Math_fround($35 - $40);
 $42 = ((($0)) + 8|0);
 storef($42,$41);
 STACKTOP = sp;return;
}
function __ZN10ndk_helper4Mat413PostTranslateEfff($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = Math_fround($1);
 $2 = Math_fround($2);
 $3 = Math_fround($3);
 var $10 = Math_fround(0), $11 = Math_fround(0), $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = 0, $19 = Math_fround(0), $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = Math_fround(0);
 var $30 = 0, $31 = Math_fround(0), $32 = Math_fround(0), $33 = Math_fround(0), $34 = Math_fround(0), $35 = 0, $36 = Math_fround(0), $37 = Math_fround(0), $38 = Math_fround(0), $39 = 0, $4 = 0, $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = 0, $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = 0, $48 = Math_fround(0);
 var $49 = Math_fround(0), $5 = Math_fround(0), $50 = Math_fround(0), $51 = Math_fround(0), $52 = 0, $53 = Math_fround(0), $54 = Math_fround(0), $55 = Math_fround(0), $56 = 0, $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0), $6 = Math_fround(0), $60 = 0, $61 = Math_fround(0), $62 = Math_fround(0), $63 = Math_fround(0), $64 = 0, $65 = Math_fround(0), $66 = Math_fround(0);
 var $67 = Math_fround(0), $68 = Math_fround(0), $69 = 0, $7 = Math_fround(0), $70 = Math_fround(0), $71 = Math_fround(0), $72 = Math_fround(0), $73 = 0, $74 = Math_fround(0), $75 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $4 = $0;
 $5 = $1;
 $6 = $2;
 $7 = $3;
 $8 = $4;
 $9 = $5;
 $10 = loadf($8);
 $11 = Math_fround($9 * $10);
 $12 = $6;
 $13 = ((($8)) + 16|0);
 $14 = loadf($13);
 $15 = Math_fround($12 * $14);
 $16 = Math_fround($11 + $15);
 $17 = $7;
 $18 = ((($8)) + 32|0);
 $19 = loadf($18);
 $20 = Math_fround($17 * $19);
 $21 = Math_fround($16 + $20);
 $22 = ((($8)) + 48|0);
 $23 = loadf($22);
 $24 = Math_fround($23 + $21);
 storef($22,$24);
 $25 = $5;
 $26 = ((($8)) + 4|0);
 $27 = loadf($26);
 $28 = Math_fround($25 * $27);
 $29 = $6;
 $30 = ((($8)) + 20|0);
 $31 = loadf($30);
 $32 = Math_fround($29 * $31);
 $33 = Math_fround($28 + $32);
 $34 = $7;
 $35 = ((($8)) + 36|0);
 $36 = loadf($35);
 $37 = Math_fround($34 * $36);
 $38 = Math_fround($33 + $37);
 $39 = ((($8)) + 52|0);
 $40 = loadf($39);
 $41 = Math_fround($40 + $38);
 storef($39,$41);
 $42 = $5;
 $43 = ((($8)) + 8|0);
 $44 = loadf($43);
 $45 = Math_fround($42 * $44);
 $46 = $6;
 $47 = ((($8)) + 24|0);
 $48 = loadf($47);
 $49 = Math_fround($46 * $48);
 $50 = Math_fround($45 + $49);
 $51 = $7;
 $52 = ((($8)) + 40|0);
 $53 = loadf($52);
 $54 = Math_fround($51 * $53);
 $55 = Math_fround($50 + $54);
 $56 = ((($8)) + 56|0);
 $57 = loadf($56);
 $58 = Math_fround($57 + $55);
 storef($56,$58);
 $59 = $5;
 $60 = ((($8)) + 12|0);
 $61 = loadf($60);
 $62 = Math_fround($59 * $61);
 $63 = $6;
 $64 = ((($8)) + 28|0);
 $65 = loadf($64);
 $66 = Math_fround($63 * $65);
 $67 = Math_fround($62 + $66);
 $68 = $7;
 $69 = ((($8)) + 44|0);
 $70 = loadf($69);
 $71 = Math_fround($68 * $70);
 $72 = Math_fround($67 + $71);
 $73 = ((($8)) + 60|0);
 $74 = loadf($73);
 $75 = Math_fround($74 + $72);
 storef($73,$75);
 STACKTOP = sp;return ($8|0);
}
function __ZNK10ndk_helper4Vec36LengthEv($0) {
 $0 = $0|0;
 var $1 = 0, $10 = Math_fround(0), $11 = Math_fround(0), $12 = 0, $13 = Math_fround(0), $14 = 0, $15 = Math_fround(0), $16 = Math_fround(0), $17 = Math_fround(0), $18 = Math_fround(0), $2 = 0, $3 = Math_fround(0), $4 = Math_fround(0), $5 = Math_fround(0), $6 = 0, $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = $0;
 $2 = $1;
 $3 = loadf($2);
 $4 = loadf($2);
 $5 = Math_fround($3 * $4);
 $6 = ((($2)) + 4|0);
 $7 = loadf($6);
 $8 = ((($2)) + 4|0);
 $9 = loadf($8);
 $10 = Math_fround($7 * $9);
 $11 = Math_fround($5 + $10);
 $12 = ((($2)) + 8|0);
 $13 = loadf($12);
 $14 = ((($2)) + 8|0);
 $15 = loadf($14);
 $16 = Math_fround($13 * $15);
 $17 = Math_fround($11 + $16);
 $18 = (Math_fround(Math_sqrt((Math_fround($17)))));
 STACKTOP = sp;return (Math_fround($18));
}
function __ZN6shader13CompileShaderEPjjPKc($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $6 = sp;
 $3 = $0;
 $4 = $1;
 $5 = $2;
 $7 = $5;
 _get_file_data($6,$7);
 $8 = $3;
 $9 = $4;
 $10 = ((($6)) + 4|0);
 $11 = load4($10);
 $12 = load4($6);
 $13 = (__ZN6shader13CompileShaderEPjjPKci($8,$9,$11,$12)|0);
 STACKTOP = sp;return ($13|0);
}
function _get_file_data($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = $1;
 $6 = $2;
 $7 = ($6|0)!=(0|0);
 if (!($7)) {
  ___assert_fail((27822|0),(27835|0),7,(27848|0));
  // unreachable;
 }
 $8 = $2;
 $9 = (_fopen($8,27862)|0);
 $3 = $9;
 $10 = $3;
 $11 = ($10|0)!=(0|0);
 if (!($11)) {
  ___assert_fail((27864|0),(27835|0),10,(27848|0));
  // unreachable;
 }
 $12 = $3;
 (_fseek($12,0,2)|0);
 $13 = $3;
 $14 = (_ftell($13)|0);
 $4 = $14;
 $15 = $3;
 (_fseek($15,0,0)|0);
 $16 = $4;
 $17 = (_malloc($16)|0);
 $5 = $17;
 $18 = $5;
 $19 = $4;
 $20 = $3;
 (_fread($18,$19,1,$20)|0);
 $21 = $3;
 $22 = (_ferror($21)|0);
 $23 = ($22|0)==(0);
 if ($23) {
  $24 = $3;
  (_fclose($24)|0);
  $25 = $4;
  store4($0,$25);
  $26 = ((($0)) + 4|0);
  $27 = $5;
  store4($26,$27);
  $28 = ((($0)) + 8|0);
  store4($28,0);
  STACKTOP = sp;return;
 } else {
  ___assert_fail((27879|0),(27835|0),19,(27848|0));
  // unreachable;
 }
}
function ___stdio_close($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp;
 $1 = ((($0)) + 60|0);
 $2 = load4($1);
 store4($vararg_buffer,$2);
 $3 = (___syscall6(6,($vararg_buffer|0))|0);
 $4 = (___syscall_ret($3)|0);
 STACKTOP = sp;return ($4|0);
}
function ___stdio_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$056 = 0, $$058 = 0, $$059 = 0, $$061 = 0, $$1 = 0, $$157 = 0, $$160 = 0, $$phi$trans$insert = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 $4 = ((($0)) + 28|0);
 $5 = load4($4);
 store4($3,$5);
 $6 = ((($3)) + 4|0);
 $7 = ((($0)) + 20|0);
 $8 = load4($7);
 $9 = (($8) - ($5))|0;
 store4($6,$9);
 $10 = ((($3)) + 8|0);
 store4($10,$1);
 $11 = ((($3)) + 12|0);
 store4($11,$2);
 $12 = (($9) + ($2))|0;
 $13 = ((($0)) + 60|0);
 $14 = ((($0)) + 44|0);
 $$056 = 2;$$058 = $12;$$059 = $3;
 while(1) {
  $15 = load4(30880);
  $16 = ($15|0)==(0|0);
  if ($16) {
   $20 = load4($13);
   store4($vararg_buffer3,$20);
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   store4($vararg_ptr6,$$059);
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   store4($vararg_ptr7,$$056);
   $21 = (___syscall146(146,($vararg_buffer3|0))|0);
   $22 = (___syscall_ret($21)|0);
   $$0 = $22;
  } else {
   _pthread_cleanup_push((27|0),($0|0));
   $17 = load4($13);
   store4($vararg_buffer,$17);
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   store4($vararg_ptr1,$$059);
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   store4($vararg_ptr2,$$056);
   $18 = (___syscall146(146,($vararg_buffer|0))|0);
   $19 = (___syscall_ret($18)|0);
   _pthread_cleanup_pop(0);
   $$0 = $19;
  }
  $23 = ($$058|0)==($$0|0);
  if ($23) {
   label = 6;
   break;
  }
  $30 = ($$0|0)<(0);
  if ($30) {
   label = 8;
   break;
  }
  $38 = (($$058) - ($$0))|0;
  $39 = ((($$059)) + 4|0);
  $40 = load4($39);
  $41 = ($$0>>>0)>($40>>>0);
  if ($41) {
   $42 = load4($14);
   store4($4,$42);
   store4($7,$42);
   $43 = (($$0) - ($40))|0;
   $44 = ((($$059)) + 8|0);
   $45 = (($$056) + -1)|0;
   $$phi$trans$insert = ((($$059)) + 12|0);
   $$pre = load4($$phi$trans$insert);
   $$1 = $43;$$157 = $45;$$160 = $44;$53 = $$pre;
  } else {
   $46 = ($$056|0)==(2);
   if ($46) {
    $47 = load4($4);
    $48 = (($47) + ($$0)|0);
    store4($4,$48);
    $$1 = $$0;$$157 = 2;$$160 = $$059;$53 = $40;
   } else {
    $$1 = $$0;$$157 = $$056;$$160 = $$059;$53 = $40;
   }
  }
  $49 = load4($$160);
  $50 = (($49) + ($$1)|0);
  store4($$160,$50);
  $51 = ((($$160)) + 4|0);
  $52 = (($53) - ($$1))|0;
  store4($51,$52);
  $$056 = $$157;$$058 = $38;$$059 = $$160;
 }
 if ((label|0) == 6) {
  $24 = load4($14);
  $25 = ((($0)) + 48|0);
  $26 = load4($25);
  $27 = (($24) + ($26)|0);
  $28 = ((($0)) + 16|0);
  store4($28,$27);
  $29 = $24;
  store4($4,$29);
  store4($7,$29);
  $$061 = $2;
 }
 else if ((label|0) == 8) {
  $31 = ((($0)) + 16|0);
  store4($31,0);
  store4($4,0);
  store4($7,0);
  $32 = load4($0);
  $33 = $32 | 32;
  store4($0,$33);
  $34 = ($$056|0)==(2);
  if ($34) {
   $$061 = 0;
  } else {
   $35 = ((($$059)) + 4|0);
   $36 = load4($35);
   $37 = (($2) - ($36))|0;
   $$061 = $37;
  }
 }
 STACKTOP = sp;return ($$061|0);
}
function ___stdio_seek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$pre = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer = sp;
 $3 = sp + 20|0;
 $4 = ((($0)) + 60|0);
 $5 = load4($4);
 store4($vararg_buffer,$5);
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 store4($vararg_ptr1,0);
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 store4($vararg_ptr2,$1);
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 store4($vararg_ptr3,$3);
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 store4($vararg_ptr4,$2);
 $6 = (___syscall140(140,($vararg_buffer|0))|0);
 $7 = (___syscall_ret($6)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  store4($3,-1);
  $9 = -1;
 } else {
  $$pre = load4($3);
  $9 = $$pre;
 }
 STACKTOP = sp;return ($9|0);
}
function ___syscall_ret($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0>>>0)>(4294963200);
 if ($1) {
  $2 = (0 - ($0))|0;
  $3 = (___errno_location()|0);
  store4($3,$2);
  $$0 = -1;
 } else {
  $$0 = $0;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(30880);
 $1 = ($0|0)==(0|0);
 if ($1) {
  $$0 = 30924;
 } else {
  $2 = (_pthread_self()|0);
  $3 = ((($2)) + 64|0);
  $4 = load4($3);
  $$0 = $4;
 }
 return ($$0|0);
}
function _cleanup_387($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 68|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 if ($3) {
  ___unlockfile($0);
 }
 return;
}
function ___unlockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdio_read($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$026 = 0, $$cast = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(48|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $3 = sp + 32|0;
 store4($3,$1);
 $4 = ((($3)) + 4|0);
 $5 = ((($0)) + 48|0);
 $6 = load4($5);
 $7 = ($6|0)!=(0);
 $8 = $7&1;
 $9 = (($2) - ($8))|0;
 store4($4,$9);
 $10 = ((($3)) + 8|0);
 $11 = ((($0)) + 44|0);
 $12 = load4($11);
 store4($10,$12);
 $13 = ((($3)) + 12|0);
 store4($13,$6);
 $14 = load4(30880);
 $15 = ($14|0)==(0|0);
 if ($15) {
  $20 = ((($0)) + 60|0);
  $21 = load4($20);
  store4($vararg_buffer3,$21);
  $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
  store4($vararg_ptr6,$3);
  $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
  store4($vararg_ptr7,2);
  $22 = (___syscall145(145,($vararg_buffer3|0))|0);
  $23 = (___syscall_ret($22)|0);
  $$0 = $23;
 } else {
  _pthread_cleanup_push((28|0),($0|0));
  $16 = ((($0)) + 60|0);
  $17 = load4($16);
  store4($vararg_buffer,$17);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,$3);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,2);
  $18 = (___syscall145(145,($vararg_buffer|0))|0);
  $19 = (___syscall_ret($18)|0);
  _pthread_cleanup_pop(0);
  $$0 = $19;
 }
 $24 = ($$0|0)<(1);
 if ($24) {
  $25 = $$0 & 48;
  $26 = $25 ^ 16;
  $27 = load4($0);
  $28 = $27 | $26;
  store4($0,$28);
  $29 = ((($0)) + 8|0);
  store4($29,0);
  $30 = ((($0)) + 4|0);
  store4($30,0);
  $$026 = $$0;
 } else {
  $31 = load4($4);
  $32 = ($$0>>>0)>($31>>>0);
  if ($32) {
   $33 = (($$0) - ($31))|0;
   $34 = load4($11);
   $35 = ((($0)) + 4|0);
   store4($35,$34);
   $$cast = $34;
   $36 = (($$cast) + ($33)|0);
   $37 = ((($0)) + 8|0);
   store4($37,$36);
   $38 = load4($5);
   $39 = ($38|0)==(0);
   if ($39) {
    $$026 = $2;
   } else {
    $40 = ((($$cast)) + 1|0);
    store4($35,$40);
    $41 = load1($$cast);
    $42 = (($2) + -1)|0;
    $43 = (($1) + ($42)|0);
    store1($43,$41);
    $$026 = $2;
   }
  } else {
   $$026 = $$0;
  }
 }
 STACKTOP = sp;return ($$026|0);
}
function _cleanup_382($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 68|0);
 $2 = load4($1);
 $3 = ($2|0)==(0);
 if ($3) {
  ___unlockfile($0);
 }
 return;
}
function ___stdout_write($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(80|0);
 $vararg_buffer = sp;
 $3 = sp + 12|0;
 $4 = ((($0)) + 36|0);
 store4($4,29);
 $5 = load4($0);
 $6 = $5 & 64;
 $7 = ($6|0)==(0);
 if ($7) {
  $8 = ((($0)) + 60|0);
  $9 = load4($8);
  store4($vararg_buffer,$9);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,21505);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,$3);
  $10 = (___syscall54(54,($vararg_buffer|0))|0);
  $11 = ($10|0)==(0);
  if (!($11)) {
   $12 = ((($0)) + 75|0);
   store1($12,-1);
  }
 }
 $13 = (___stdio_write($0,$1,$2)|0);
 STACKTOP = sp;return ($13|0);
}
function ___toread($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = load1($1);
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 store1($1,$6);
 $7 = ((($0)) + 20|0);
 $8 = load4($7);
 $9 = ((($0)) + 44|0);
 $10 = load4($9);
 $11 = ($8>>>0)>($10>>>0);
 if ($11) {
  $12 = ((($0)) + 36|0);
  $13 = load4($12);
  (FUNCTION_TABLE_iiii[$13 & 31]($0,0,0)|0);
 }
 $14 = ((($0)) + 16|0);
 store4($14,0);
 $15 = ((($0)) + 28|0);
 store4($15,0);
 store4($7,0);
 $16 = load4($0);
 $17 = $16 & 20;
 $18 = ($17|0)==(0);
 if ($18) {
  $22 = load4($9);
  $23 = ((($0)) + 8|0);
  store4($23,$22);
  $24 = ((($0)) + 4|0);
  store4($24,$22);
  $$0 = 0;
 } else {
  $19 = $16 & 4;
  $20 = ($19|0)==(0);
  if ($20) {
   $$0 = -1;
  } else {
   $21 = $16 | 32;
   store4($0,$21);
   $$0 = -1;
  }
 }
 return ($$0|0);
}
function _vfprintf($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 224|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(224|0);
 $3 = sp + 120|0;
 $4 = sp + 80|0;
 $5 = sp;
 $6 = sp + 136|0;
 ; store8($4,i64_const(0,0),4); store8($4+8|0,i64_const(0,0),4); store8($4+16|0,i64_const(0,0),4); store8($4+24|0,i64_const(0,0),4); store8($4+32|0,i64_const(0,0),4);
 $vacopy_currentptr = load4($2);
 store4($3,$vacopy_currentptr);
 $7 = (_printf_core(0,$1,$3,$5,$4)|0);
 $8 = ($7|0)<(0);
 if ($8) {
  $$0 = -1;
 } else {
  $9 = ((($0)) + 76|0);
  $10 = load4($9);
  $11 = ($10|0)>(-1);
  if ($11) {
   $12 = (___lockfile($0)|0);
   $40 = $12;
  } else {
   $40 = 0;
  }
  $13 = load4($0);
  $14 = $13 & 32;
  $15 = ((($0)) + 74|0);
  $16 = load1($15);
  $17 = ($16<<24>>24)<(1);
  if ($17) {
   $18 = $13 & -33;
   store4($0,$18);
  }
  $19 = ((($0)) + 48|0);
  $20 = load4($19);
  $21 = ($20|0)==(0);
  if ($21) {
   $23 = ((($0)) + 44|0);
   $24 = load4($23);
   store4($23,$6);
   $25 = ((($0)) + 28|0);
   store4($25,$6);
   $26 = ((($0)) + 20|0);
   store4($26,$6);
   store4($19,80);
   $27 = ((($6)) + 80|0);
   $28 = ((($0)) + 16|0);
   store4($28,$27);
   $29 = (_printf_core($0,$1,$3,$5,$4)|0);
   $30 = ($24|0)==(0|0);
   if ($30) {
    $$1 = $29;
   } else {
    $31 = ((($0)) + 36|0);
    $32 = load4($31);
    (FUNCTION_TABLE_iiii[$32 & 31]($0,0,0)|0);
    $33 = load4($26);
    $34 = ($33|0)==(0|0);
    $$ = $34 ? -1 : $29;
    store4($23,$24);
    store4($19,0);
    store4($28,0);
    store4($25,0);
    store4($26,0);
    $$1 = $$;
   }
  } else {
   $22 = (_printf_core($0,$1,$3,$5,$4)|0);
   $$1 = $22;
  }
  $35 = load4($0);
  $36 = $35 & 32;
  $37 = ($36|0)==(0);
  $$1$ = $37 ? $$1 : -1;
  $38 = $35 | $14;
  store4($0,$38);
  $39 = ($40|0)==(0);
  if (!($39)) {
   ___unlockfile($0);
  }
  $$0 = $$1$;
 }
 STACKTOP = sp;return ($$0|0);
}
function _printf_core($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$3484$i = 0, $$$3484705$i = 0, $$$3484706$i = 0, $$$3501$i = 0, $$$4266 = 0, $$$4502$i = 0, $$$5 = 0, $$$i = 0, $$0 = 0, $$0$i = 0, $$0$lcssa$i300 = 0, $$0$tr$i = 0, $$0228 = 0, $$0229396 = 0, $$0232 = 0, $$0235 = 0;
 var $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa460 = 0, $$0240395 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0, $$0249383 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$ = 0, $$0259 = 0, $$0262342 = 0, $$0262390 = 0, $$0269 = 0, $$0269$phi = 0, $$0321 = 0, $$045$i = i64(), $$0463$lcssa$i = 0;
 var $$0463594$i = 0, $$0464603$i = 0, $$0466$i = 0.0, $$0470$i = 0, $$0471$i = 0.0, $$0479$i = 0, $$0487652$i = 0, $$0488$i = 0, $$0488663$i = 0, $$0488665$i = 0, $$0496$$9$i = 0, $$0497664$i = 0, $$0498$i = 0, $$05$lcssa$i = 0, $$0509592$i = 0.0, $$0510$i = 0, $$0511$i = 0, $$0514647$i = 0, $$0520$i = 0, $$0522$$i = 0;
 var $$0522$i = 0, $$0524$i = 0, $$0526$i = 0, $$0528$i = 0, $$0528639$i = 0, $$0528641$i = 0, $$0531646$i = 0, $$056$i = 0, $$06$i = 0, $$06$i290 = 0, $$06$i298 = 0, $$07$i = i64(), $$1 = 0, $$1230407 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241406 = 0, $$1244394 = 0, $$1248 = 0;
 var $$1250 = 0, $$1255 = 0, $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$1322 = 0, $$1465$i = 0, $$1467$i = 0.0, $$1469$i = 0.0, $$1472$i = 0.0, $$1480$i = 0, $$1482$lcssa$i = 0, $$1482671$i = 0, $$1489651$i = 0, $$1499$lcssa$i = 0, $$1499670$i = 0, $$1508593$i = 0, $$1512$lcssa$i = 0, $$1512617$i = 0;
 var $$1515$i = 0, $$1521$i = 0, $$1525$i = 0, $$1527$i = 0, $$1529624$i = 0, $$1532$lcssa$i = 0, $$1532640$i = 0, $$1607$i = 0, $$2 = 0, $$2$i = 0, $$2234 = 0, $$2239 = 0, $$2242381 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2261 = 0, $$2271 = 0, $$2323$lcssa = 0;
 var $$2323382 = 0, $$2473$i = 0.0, $$2476$$545$i = 0, $$2476$$547$i = 0, $$2476$i = 0, $$2483$ph$i = 0, $$2490$lcssa$i = 0, $$2490632$i = 0, $$2500$i = 0, $$2513$i = 0, $$2516628$i = 0, $$2530$i = 0, $$2533627$i = 0, $$3$i = 0.0, $$3257 = 0, $$3265 = 0, $$3272 = 0, $$331 = 0, $$332 = 0, $$333 = 0;
 var $$3379 = 0, $$3477$i = 0, $$3484$lcssa$i = 0, $$3484658$i = 0, $$3501$lcssa$i = 0, $$3501657$i = 0, $$3534623$i = 0, $$4$i = 0.0, $$4258458 = 0, $$4266 = 0, $$4325 = 0, $$4478$lcssa$i = 0, $$4478600$i = 0, $$4492$i = 0, $$4502$i = 0, $$4518$i = 0, $$5 = 0, $$5$lcssa$i = 0, $$537$i = 0, $$538$$i = 0;
 var $$538$i = 0, $$541$i = 0.0, $$544$i = 0, $$546$i = 0, $$5486$lcssa$i = 0, $$5486633$i = 0, $$5493606$i = 0, $$5519$ph$i = 0, $$553$i = 0, $$554$i = 0, $$557$i = 0.0, $$5611$i = 0, $$6 = 0, $$6$i = 0, $$6268 = 0, $$6494599$i = 0, $$7 = 0, $$7495610$i = 0, $$7505$$i = 0, $$7505$i = 0;
 var $$7505$ph$i = 0, $$8$i = 0, $$9$ph$i = 0, $$lcssa683$i = 0, $$neg$i = 0, $$neg572$i = 0, $$pn$i = 0, $$pr = 0, $$pr$i = 0, $$pr571$i = 0, $$pre = 0, $$pre$i = 0, $$pre$phi704$iZ2D = 0, $$pre452 = 0, $$pre453 = 0, $$pre454 = 0, $$pre456 = i64(), $$pre457 = i64(), $$pre697$i = 0, $$pre700$i = 0;
 var $$pre703$i = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = i64(), $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = i64(), $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = i64(), $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = i64(), $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = i64(), $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0;
 var $19 = 0, $190 = 0, $191 = i64(), $192 = 0, $193 = 0, $194 = i64(), $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = i64(), $20 = 0, $200 = 0, $201 = i64(), $202 = i64(), $203 = 0, $204 = 0, $205 = i64(), $206 = 0, $207 = 0;
 var $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = i64(), $214 = 0, $215 = i64(), $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = i64(), $221 = 0, $222 = 0, $223 = 0, $224 = i64(), $225 = 0;
 var $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = i64(), $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0;
 var $244 = 0, $245 = 0, $246 = 0, $247 = i64(), $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0;
 var $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0.0, $275 = i64(), $276 = 0, $277 = 0.0, $278 = 0, $279 = 0, $28 = 0;
 var $280 = 0, $281 = 0, $282 = i64(), $283 = i64(), $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0;
 var $299 = 0, $30 = 0, $300 = 0.0, $301 = 0.0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0.0;
 var $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0.0, $321 = 0.0, $322 = 0.0, $323 = 0.0, $324 = 0.0, $325 = 0.0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = i64(), $331 = 0, $332 = 0, $333 = 0, $334 = 0;
 var $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0.0, $351 = 0.0, $352 = 0.0;
 var $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0;
 var $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0.0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0.0;
 var $39 = 0, $390 = 0.0, $391 = 0.0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = i64(), $399 = 0, $40 = 0, $400 = i64(), $401 = i64(), $402 = i64(), $403 = i64(), $404 = i64(), $405 = 0, $406 = i64(), $407 = 0;
 var $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0;
 var $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0;
 var $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0;
 var $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0;
 var $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0;
 var $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0.0, $503 = 0.0, $504 = 0, $505 = 0.0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0;
 var $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0;
 var $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0;
 var $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0;
 var $570 = 0, $571 = 0, $572 = 0, $573 = i64(), $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0;
 var $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = i64(), $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0;
 var $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0;
 var $624 = i64(), $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0;
 var $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = i64(), $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0;
 var $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0;
 var $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0;
 var $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = i64(), $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $exitcond$i = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded12 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded16 = 0, $expanded4 = 0, $expanded5 = 0;
 var $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $expanded9 = 0, $isdigit = 0, $isdigit$i = 0, $isdigit$i292 = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigit5$i = 0, $isdigit5$i288 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp$i = 0, $isdigittmp$i291 = 0, $isdigittmp274 = 0, $isdigittmp276 = 0, $isdigittmp4$i = 0, $isdigittmp4$i287 = 0, $isdigittmp7$i = 0;
 var $isdigittmp7$i289 = 0, $notlhs$i = 0, $notrhs$i = 0, $or$cond = 0, $or$cond$i = 0, $or$cond280 = 0, $or$cond282 = 0, $or$cond285 = 0, $or$cond3$not$i = 0, $or$cond412 = 0, $or$cond540$i = 0, $or$cond543$i = 0, $or$cond552$i = 0, $or$cond6$i = 0, $scevgep694$i = 0, $scevgep694695$i = 0, $storemerge = 0, $storemerge273345 = 0, $storemerge273389 = 0, $storemerge278 = 0;
 var $sum = 0, $trunc = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 624|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(624|0);
 $5 = sp + 24|0;
 $6 = sp + 16|0;
 $7 = sp + 588|0;
 $8 = sp + 576|0;
 $9 = sp;
 $10 = sp + 536|0;
 $11 = sp + 8|0;
 $12 = sp + 528|0;
 $13 = ($0|0)!=(0|0);
 $14 = ((($10)) + 40|0);
 $15 = $14;
 $16 = ((($10)) + 39|0);
 $17 = ((($11)) + 4|0);
 $18 = $7;
 $19 = (0 - ($18))|0;
 $20 = ((($8)) + 12|0);
 $21 = ((($8)) + 11|0);
 $22 = $20;
 $23 = (($22) - ($18))|0;
 $24 = (-2 - ($18))|0;
 $25 = (($22) + 2)|0;
 $26 = ((($5)) + 288|0);
 $27 = ((($7)) + 9|0);
 $28 = $27;
 $29 = ((($7)) + 8|0);
 $$0243 = 0;$$0247 = 0;$$0269 = 0;$$0321 = $1;
 L1: while(1) {
  $30 = ($$0247|0)>(-1);
  do {
   if ($30) {
    $31 = (2147483647 - ($$0247))|0;
    $32 = ($$0243|0)>($31|0);
    if ($32) {
     $33 = (___errno_location()|0);
     store4($33,75);
     $$1248 = -1;
     break;
    } else {
     $34 = (($$0243) + ($$0247))|0;
     $$1248 = $34;
     break;
    }
   } else {
    $$1248 = $$0247;
   }
  } while(0);
  $35 = load1($$0321);
  $36 = ($35<<24>>24)==(0);
  if ($36) {
   label = 243;
   break;
  } else {
   $$1322 = $$0321;$37 = $35;
  }
  L9: while(1) {
   switch ($37<<24>>24) {
   case 37:  {
    $$0249383 = $$1322;$$2323382 = $$1322;
    label = 9;
    break L9;
    break;
   }
   case 0:  {
    $$0249$lcssa = $$1322;$$2323$lcssa = $$1322;
    break L9;
    break;
   }
   default: {
   }
   }
   $38 = ((($$1322)) + 1|0);
   $$pre = load1($38);
   $$1322 = $38;$37 = $$pre;
  }
  L12: do {
   if ((label|0) == 9) {
    while(1) {
     label = 0;
     $39 = ((($$2323382)) + 1|0);
     $40 = load1($39);
     $41 = ($40<<24>>24)==(37);
     if (!($41)) {
      $$0249$lcssa = $$0249383;$$2323$lcssa = $$2323382;
      break L12;
     }
     $42 = ((($$0249383)) + 1|0);
     $43 = ((($$2323382)) + 2|0);
     $44 = load1($43);
     $45 = ($44<<24>>24)==(37);
     if ($45) {
      $$0249383 = $42;$$2323382 = $43;
      label = 9;
     } else {
      $$0249$lcssa = $42;$$2323$lcssa = $43;
      break;
     }
    }
   }
  } while(0);
  $46 = $$0249$lcssa;
  $47 = $$0321;
  $48 = (($46) - ($47))|0;
  if ($13) {
   $49 = load4($0);
   $50 = $49 & 32;
   $51 = ($50|0)==(0);
   if ($51) {
    (___fwritex($$0321,$48,$0)|0);
   }
  }
  $52 = ($48|0)==(0);
  if (!($52)) {
   $$0269$phi = $$0269;$$0243 = $48;$$0247 = $$1248;$$0321 = $$2323$lcssa;$$0269 = $$0269$phi;
   continue;
  }
  $53 = ((($$2323$lcssa)) + 1|0);
  $54 = load1($53);
  $55 = $54 << 24 >> 24;
  $isdigittmp = (($55) + -48)|0;
  $isdigit = ($isdigittmp>>>0)<(10);
  if ($isdigit) {
   $56 = ((($$2323$lcssa)) + 2|0);
   $57 = load1($56);
   $58 = ($57<<24>>24)==(36);
   $59 = ((($$2323$lcssa)) + 3|0);
   $$331 = $58 ? $59 : $53;
   $$$0269 = $58 ? 1 : $$0269;
   $isdigittmp$ = $58 ? $isdigittmp : -1;
   $$pre452 = load1($$331);
   $$0253 = $isdigittmp$;$$1270 = $$$0269;$61 = $$pre452;$storemerge = $$331;
  } else {
   $$0253 = -1;$$1270 = $$0269;$61 = $54;$storemerge = $53;
  }
  $60 = $61 << 24 >> 24;
  $62 = (($60) + -32)|0;
  $63 = ($62>>>0)<(32);
  L25: do {
   if ($63) {
    $$0262390 = 0;$65 = $62;$69 = $61;$storemerge273389 = $storemerge;
    while(1) {
     $64 = 1 << $65;
     $66 = $64 & 75913;
     $67 = ($66|0)==(0);
     if ($67) {
      $$0262342 = $$0262390;$79 = $69;$storemerge273345 = $storemerge273389;
      break L25;
     }
     $68 = $69 << 24 >> 24;
     $70 = (($68) + -32)|0;
     $71 = 1 << $70;
     $72 = $71 | $$0262390;
     $73 = ((($storemerge273389)) + 1|0);
     $74 = load1($73);
     $75 = $74 << 24 >> 24;
     $76 = (($75) + -32)|0;
     $77 = ($76>>>0)<(32);
     if ($77) {
      $$0262390 = $72;$65 = $76;$69 = $74;$storemerge273389 = $73;
     } else {
      $$0262342 = $72;$79 = $74;$storemerge273345 = $73;
      break;
     }
    }
   } else {
    $$0262342 = 0;$79 = $61;$storemerge273345 = $storemerge;
   }
  } while(0);
  $78 = ($79<<24>>24)==(42);
  do {
   if ($78) {
    $80 = ((($storemerge273345)) + 1|0);
    $81 = load1($80);
    $82 = $81 << 24 >> 24;
    $isdigittmp276 = (($82) + -48)|0;
    $isdigit277 = ($isdigittmp276>>>0)<(10);
    if ($isdigit277) {
     $83 = ((($storemerge273345)) + 2|0);
     $84 = load1($83);
     $85 = ($84<<24>>24)==(36);
     if ($85) {
      $86 = (($4) + ($isdigittmp276<<2)|0);
      store4($86,10);
      $87 = load1($80);
      $88 = $87 << 24 >> 24;
      $89 = (($88) + -48)|0;
      $90 = (($3) + ($89<<3)|0);
      $91 = load8($90);
      $92 = i64_trunc($91);
      $93 = ((($storemerge273345)) + 3|0);
      $$0259 = $92;$$2271 = 1;$storemerge278 = $93;
     } else {
      label = 24;
     }
    } else {
     label = 24;
    }
    if ((label|0) == 24) {
     label = 0;
     $94 = ($$1270|0)==(0);
     if (!($94)) {
      $$0 = -1;
      break L1;
     }
     if (!($13)) {
      $$1260 = 0;$$1263 = $$0262342;$$3272 = 0;$$4325 = $80;$$pr = $81;
      break;
     }
     $arglist_current = load4($2);
     $95 = $arglist_current;
     $expanded5 = ((0) + 4|0);
     $expanded4 = $expanded5;
     $expanded = (($expanded4) - 1)|0;
     $96 = (($95) + ($expanded))|0;
     $expanded9 = ((0) + 4|0);
     $expanded8 = $expanded9;
     $expanded7 = (($expanded8) - 1)|0;
     $expanded6 = $expanded7 ^ -1;
     $97 = $96 & $expanded6;
     $98 = $97;
     $99 = load4($98);
     $arglist_next = ((($98)) + 4|0);
     store4($2,$arglist_next);
     $$0259 = $99;$$2271 = 0;$storemerge278 = $80;
    }
    $100 = ($$0259|0)<(0);
    $101 = $$0262342 | 8192;
    $102 = (0 - ($$0259))|0;
    $$$0262 = $100 ? $101 : $$0262342;
    $$$0259 = $100 ? $102 : $$0259;
    $$pre453 = load1($storemerge278);
    $$1260 = $$$0259;$$1263 = $$$0262;$$3272 = $$2271;$$4325 = $storemerge278;$$pr = $$pre453;
   } else {
    $103 = $79 << 24 >> 24;
    $isdigittmp4$i = (($103) + -48)|0;
    $isdigit5$i = ($isdigittmp4$i>>>0)<(10);
    if ($isdigit5$i) {
     $$06$i = 0;$107 = $storemerge273345;$isdigittmp7$i = $isdigittmp4$i;
     while(1) {
      $104 = ($$06$i*10)|0;
      $105 = (($104) + ($isdigittmp7$i))|0;
      $106 = ((($107)) + 1|0);
      $108 = load1($106);
      $109 = $108 << 24 >> 24;
      $isdigittmp$i = (($109) + -48)|0;
      $isdigit$i = ($isdigittmp$i>>>0)<(10);
      if ($isdigit$i) {
       $$06$i = $105;$107 = $106;$isdigittmp7$i = $isdigittmp$i;
      } else {
       break;
      }
     }
     $110 = ($105|0)<(0);
     if ($110) {
      $$0 = -1;
      break L1;
     } else {
      $$1260 = $105;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $106;$$pr = $108;
     }
    } else {
     $$1260 = 0;$$1263 = $$0262342;$$3272 = $$1270;$$4325 = $storemerge273345;$$pr = $79;
    }
   }
  } while(0);
  $111 = ($$pr<<24>>24)==(46);
  L45: do {
   if ($111) {
    $112 = ((($$4325)) + 1|0);
    $113 = load1($112);
    $114 = ($113<<24>>24)==(42);
    if (!($114)) {
     $135 = $113 << 24 >> 24;
     $isdigittmp4$i287 = (($135) + -48)|0;
     $isdigit5$i288 = ($isdigittmp4$i287>>>0)<(10);
     if ($isdigit5$i288) {
      $$06$i290 = 0;$139 = $112;$isdigittmp7$i289 = $isdigittmp4$i287;
     } else {
      $$0254 = 0;$$6 = $112;
      break;
     }
     while(1) {
      $136 = ($$06$i290*10)|0;
      $137 = (($136) + ($isdigittmp7$i289))|0;
      $138 = ((($139)) + 1|0);
      $140 = load1($138);
      $141 = $140 << 24 >> 24;
      $isdigittmp$i291 = (($141) + -48)|0;
      $isdigit$i292 = ($isdigittmp$i291>>>0)<(10);
      if ($isdigit$i292) {
       $$06$i290 = $137;$139 = $138;$isdigittmp7$i289 = $isdigittmp$i291;
      } else {
       $$0254 = $137;$$6 = $138;
       break L45;
      }
     }
    }
    $115 = ((($$4325)) + 2|0);
    $116 = load1($115);
    $117 = $116 << 24 >> 24;
    $isdigittmp274 = (($117) + -48)|0;
    $isdigit275 = ($isdigittmp274>>>0)<(10);
    if ($isdigit275) {
     $118 = ((($$4325)) + 3|0);
     $119 = load1($118);
     $120 = ($119<<24>>24)==(36);
     if ($120) {
      $121 = (($4) + ($isdigittmp274<<2)|0);
      store4($121,10);
      $122 = load1($115);
      $123 = $122 << 24 >> 24;
      $124 = (($123) + -48)|0;
      $125 = (($3) + ($124<<3)|0);
      $126 = load8($125);
      $127 = i64_trunc($126);
      $128 = ((($$4325)) + 4|0);
      $$0254 = $127;$$6 = $128;
      break;
     }
    }
    $129 = ($$3272|0)==(0);
    if (!($129)) {
     $$0 = -1;
     break L1;
    }
    if ($13) {
     $arglist_current2 = load4($2);
     $130 = $arglist_current2;
     $expanded12 = ((0) + 4|0);
     $expanded11 = $expanded12;
     $expanded10 = (($expanded11) - 1)|0;
     $131 = (($130) + ($expanded10))|0;
     $expanded16 = ((0) + 4|0);
     $expanded15 = $expanded16;
     $expanded14 = (($expanded15) - 1)|0;
     $expanded13 = $expanded14 ^ -1;
     $132 = $131 & $expanded13;
     $133 = $132;
     $134 = load4($133);
     $arglist_next3 = ((($133)) + 4|0);
     store4($2,$arglist_next3);
     $$0254 = $134;$$6 = $115;
    } else {
     $$0254 = 0;$$6 = $115;
    }
   } else {
    $$0254 = -1;$$6 = $$4325;
   }
  } while(0);
  $$0252 = 0;$$7 = $$6;
  while(1) {
   $142 = load1($$7);
   $143 = $142 << 24 >> 24;
   $144 = (($143) + -65)|0;
   $145 = ($144>>>0)>(57);
   if ($145) {
    $$0 = -1;
    break L1;
   }
   $146 = ((($$7)) + 1|0);
   $147 = ((27899 + (($$0252*58)|0)|0) + ($144)|0);
   $148 = load1($147);
   $149 = $148&255;
   $150 = (($149) + -1)|0;
   $151 = ($150>>>0)<(8);
   if ($151) {
    $$0252 = $149;$$7 = $146;
   } else {
    break;
   }
  }
  $152 = ($148<<24>>24)==(0);
  if ($152) {
   $$0 = -1;
   break;
  }
  $153 = ($148<<24>>24)==(19);
  $154 = ($$0253|0)>(-1);
  do {
   if ($153) {
    if ($154) {
     $$0 = -1;
     break L1;
    } else {
     label = 51;
    }
   } else {
    if ($154) {
     $155 = (($4) + ($$0253<<2)|0);
     store4($155,$149);
     $156 = (($3) + ($$0253<<3)|0);
     $157 = load8($156);
     store8($9,$157);
     label = 51;
     break;
    }
    if (!($13)) {
     $$0 = 0;
     break L1;
    }
    _pop_arg($9,$149,$2);
   }
  } while(0);
  if ((label|0) == 51) {
   label = 0;
   if (!($13)) {
    $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
    continue;
   }
  }
  $158 = load1($$7);
  $159 = $158 << 24 >> 24;
  $160 = ($$0252|0)!=(0);
  $161 = $159 & 15;
  $162 = ($161|0)==(3);
  $or$cond280 = $160 & $162;
  $163 = $159 & -33;
  $$0235 = $or$cond280 ? $163 : $159;
  $164 = $$1263 & 8192;
  $165 = ($164|0)==(0);
  $166 = $$1263 & -65537;
  $$1263$ = $165 ? $$1263 : $166;
  L74: do {
   switch ($$0235|0) {
   case 110:  {
    $trunc = $$0252&255;
    switch ($trunc<<24>>24) {
    case 0:  {
     $167 = load4($9);
     store4($167,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 1:  {
     $168 = load4($9);
     store4($168,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 2:  {
     $169 = i64_sext($$1248);
     $170 = load4($9);
     store8($170,$169);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 3:  {
     $171 = $$1248&65535;
     $172 = load4($9);
     store2($172,$171);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 4:  {
     $173 = $$1248&255;
     $174 = load4($9);
     store1($174,$173);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 6:  {
     $175 = load4($9);
     store4($175,$$1248);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    case 7:  {
     $176 = i64_sext($$1248);
     $177 = load4($9);
     store8($177,$176);
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
     break;
    }
    default: {
     $$0243 = 0;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
     continue L1;
    }
    }
    break;
   }
   case 112:  {
    $178 = ($$0254>>>0)>(8);
    $179 = $178 ? $$0254 : 8;
    $180 = $$1263$ | 8;
    $$1236 = 120;$$1255 = $179;$$3265 = $180;
    label = 63;
    break;
   }
   case 88: case 120:  {
    $$1236 = $$0235;$$1255 = $$0254;$$3265 = $$1263$;
    label = 63;
    break;
   }
   case 111:  {
    $199 = load8($9);
    $200 = i64_eq($199,i64_const(0,0));
    if ($200) {
     $$0$lcssa$i300 = $14;
    } else {
     $$045$i = $199;$$06$i298 = $14;
     while(1) {
      $201 = i64_and($$045$i,i64_const(7,0));
      $202 = i64_or($201,i64_const(48,0));
      $203 = i64_trunc($202)&255;
      $204 = ((($$06$i298)) + -1|0);
      store1($204,$203);
      $205 = i64_lshr($$045$i,i64_const(3,0));
      $206 = i64_eq($205,i64_const(0,0));
      if ($206) {
       $$0$lcssa$i300 = $204;
       break;
      } else {
       $$045$i = $205;$$06$i298 = $204;
      }
     }
    }
    $207 = $$1263$ & 8;
    $208 = ($207|0)==(0);
    if ($208) {
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 28379;$$2256 = $$0254;$$4266 = $$1263$;
     label = 76;
    } else {
     $209 = $$0$lcssa$i300;
     $210 = (($15) - ($209))|0;
     $211 = ($$0254|0)>($210|0);
     $212 = (($210) + 1)|0;
     $$0254$ = $211 ? $$0254 : $212;
     $$0228 = $$0$lcssa$i300;$$1233 = 0;$$1238 = 28379;$$2256 = $$0254$;$$4266 = $$1263$;
     label = 76;
    }
    break;
   }
   case 105: case 100:  {
    $213 = load8($9);
    $214 = i64_slt($213,i64_const(0,0));
    if ($214) {
     $215 = i64_sub(i64_const(0,0),$213);
     store8($9,$215);
     $$0232 = 1;$$0237 = 28379;$220 = $215;
     label = 75;
     break L74;
    }
    $216 = $$1263$ & 2048;
    $217 = ($216|0)==(0);
    if ($217) {
     $218 = $$1263$ & 1;
     $219 = ($218|0)==(0);
     $$ = $219 ? 28379 : (28381);
     $$0232 = $218;$$0237 = $$;$220 = $213;
     label = 75;
    } else {
     $$0232 = 1;$$0237 = (28380);$220 = $213;
     label = 75;
    }
    break;
   }
   case 117:  {
    $$pre456 = load8($9);
    $$0232 = 0;$$0237 = 28379;$220 = $$pre456;
    label = 75;
    break;
   }
   case 99:  {
    $233 = load8($9);
    $234 = i64_trunc($233)&255;
    store1($16,$234);
    $$2 = $16;$$2234 = 0;$$2239 = 28379;$$2251 = $14;$$5 = 1;$$6268 = $166;
    break;
   }
   case 109:  {
    $235 = (___errno_location()|0);
    $236 = load4($235);
    $237 = (_strerror($236)|0);
    $$1 = $237;
    label = 81;
    break;
   }
   case 115:  {
    $238 = load4($9);
    $239 = ($238|0)!=(0|0);
    $240 = $239 ? $238 : 28389;
    $$1 = $240;
    label = 81;
    break;
   }
   case 67:  {
    $247 = load8($9);
    $248 = i64_trunc($247);
    store4($11,$248);
    store4($17,0);
    store4($9,$11);
    $$4258458 = -1;$708 = $11;
    label = 85;
    break;
   }
   case 83:  {
    $$pre454 = load4($9);
    $249 = ($$0254|0)==(0);
    if ($249) {
     _pad($0,32,$$1260,0,$$1263$);
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$4258458 = $$0254;$708 = $$pre454;
     label = 85;
    }
    break;
   }
   case 65: case 71: case 70: case 69: case 97: case 103: case 102: case 101:  {
    $274 = loadd($9);
    store4($6,0);
    $275 = i64_bc2i($274);
    $276 = i64_slt($275,i64_const(0,0));
    if ($276) {
     $277 = -$274;
     $$0471$i = $277;$$0520$i = 1;$$0522$i = 28396;
    } else {
     $278 = $$1263$ & 2048;
     $279 = ($278|0)==(0);
     $280 = $$1263$ & 1;
     if ($279) {
      $281 = ($280|0)==(0);
      $$$i = $281 ? (28397) : (28402);
      $$0471$i = $274;$$0520$i = $280;$$0522$i = $$$i;
     } else {
      $$0471$i = $274;$$0520$i = 1;$$0522$i = (28399);
     }
    }
    $282 = i64_bc2i($$0471$i);
    $283 = i64_and($282,i64_const(0,2146435072));
    $284 = i64_ult($283,i64_const(0,2146435072));
    do {
     if ($284) {
      $300 = (+_frexpl($$0471$i,$6));
      $301 = $300 * 2.0;
      $302 = $301 != 0.0;
      if ($302) {
       $303 = load4($6);
       $304 = (($303) + -1)|0;
       store4($6,$304);
      }
      $305 = $$0235 | 32;
      $306 = ($305|0)==(97);
      if ($306) {
       $307 = $$0235 & 32;
       $308 = ($307|0)==(0);
       $309 = ((($$0522$i)) + 9|0);
       $$0522$$i = $308 ? $$0522$i : $309;
       $310 = $$0520$i | 2;
       $311 = ($$0254>>>0)>(11);
       $312 = (12 - ($$0254))|0;
       $313 = ($312|0)==(0);
       $314 = $311 | $313;
       do {
        if ($314) {
         $$1472$i = $301;
        } else {
         $$0509592$i = 8.0;$$1508593$i = $312;
         while(1) {
          $315 = (($$1508593$i) + -1)|0;
          $316 = $$0509592$i * 16.0;
          $317 = ($315|0)==(0);
          if ($317) {
           break;
          } else {
           $$0509592$i = $316;$$1508593$i = $315;
          }
         }
         $318 = load1($$0522$$i);
         $319 = ($318<<24>>24)==(45);
         if ($319) {
          $320 = -$301;
          $321 = $320 - $316;
          $322 = $316 + $321;
          $323 = -$322;
          $$1472$i = $323;
          break;
         } else {
          $324 = $301 + $316;
          $325 = $324 - $316;
          $$1472$i = $325;
          break;
         }
        }
       } while(0);
       $326 = load4($6);
       $327 = ($326|0)<(0);
       $328 = (0 - ($326))|0;
       $329 = $327 ? $328 : $326;
       $330 = i64_sext($329);
       $331 = (_fmt_u($330,$20)|0);
       $332 = ($331|0)==($20|0);
       if ($332) {
        store1($21,48);
        $$0511$i = $21;
       } else {
        $$0511$i = $331;
       }
       $333 = $326 >> 31;
       $334 = $333 & 2;
       $335 = (($334) + 43)|0;
       $336 = $335&255;
       $337 = ((($$0511$i)) + -1|0);
       store1($337,$336);
       $338 = (($$0235) + 15)|0;
       $339 = $338&255;
       $340 = ((($$0511$i)) + -2|0);
       store1($340,$339);
       $notrhs$i = ($$0254|0)<(1);
       $341 = $$1263$ & 8;
       $342 = ($341|0)==(0);
       $$0524$i = $7;$$2473$i = $$1472$i;
       while(1) {
        $343 = (~~(($$2473$i)));
        $344 = (28363 + ($343)|0);
        $345 = load1($344);
        $346 = $345&255;
        $347 = $346 | $307;
        $348 = $347&255;
        $349 = ((($$0524$i)) + 1|0);
        store1($$0524$i,$348);
        $350 = (+($343|0));
        $351 = $$2473$i - $350;
        $352 = $351 * 16.0;
        $353 = $349;
        $354 = (($353) - ($18))|0;
        $355 = ($354|0)==(1);
        do {
         if ($355) {
          $notlhs$i = $352 == 0.0;
          $or$cond3$not$i = $notrhs$i & $notlhs$i;
          $or$cond$i = $342 & $or$cond3$not$i;
          if ($or$cond$i) {
           $$1525$i = $349;
           break;
          }
          $356 = ((($$0524$i)) + 2|0);
          store1($349,46);
          $$1525$i = $356;
         } else {
          $$1525$i = $349;
         }
        } while(0);
        $357 = $352 != 0.0;
        if ($357) {
         $$0524$i = $$1525$i;$$2473$i = $352;
        } else {
         break;
        }
       }
       $358 = ($$0254|0)!=(0);
       $$pre700$i = $$1525$i;
       $359 = (($24) + ($$pre700$i))|0;
       $360 = ($359|0)<($$0254|0);
       $or$cond412 = $358 & $360;
       $361 = $340;
       $362 = (($25) + ($$0254))|0;
       $363 = (($362) - ($361))|0;
       $364 = (($23) - ($361))|0;
       $365 = (($364) + ($$pre700$i))|0;
       $$0526$i = $or$cond412 ? $363 : $365;
       $366 = (($$0526$i) + ($310))|0;
       _pad($0,32,$$1260,$366,$$1263$);
       $367 = load4($0);
       $368 = $367 & 32;
       $369 = ($368|0)==(0);
       if ($369) {
        (___fwritex($$0522$$i,$310,$0)|0);
       }
       $370 = $$1263$ ^ 65536;
       _pad($0,48,$$1260,$366,$370);
       $371 = (($$pre700$i) - ($18))|0;
       $372 = load4($0);
       $373 = $372 & 32;
       $374 = ($373|0)==(0);
       if ($374) {
        (___fwritex($7,$371,$0)|0);
       }
       $375 = (($22) - ($361))|0;
       $sum = (($371) + ($375))|0;
       $376 = (($$0526$i) - ($sum))|0;
       _pad($0,48,$376,0,0);
       $377 = load4($0);
       $378 = $377 & 32;
       $379 = ($378|0)==(0);
       if ($379) {
        (___fwritex($340,$375,$0)|0);
       }
       $380 = $$1263$ ^ 8192;
       _pad($0,32,$$1260,$366,$380);
       $381 = ($366|0)<($$1260|0);
       $$537$i = $381 ? $$1260 : $366;
       $$0470$i = $$537$i;
       break;
      }
      $382 = ($$0254|0)<(0);
      $$538$i = $382 ? 6 : $$0254;
      if ($302) {
       $383 = $301 * 268435456.0;
       $384 = load4($6);
       $385 = (($384) + -28)|0;
       store4($6,$385);
       $$3$i = $383;$$pr$i = $385;
      } else {
       $$pre697$i = load4($6);
       $$3$i = $301;$$pr$i = $$pre697$i;
      }
      $386 = ($$pr$i|0)<(0);
      $$554$i = $386 ? $5 : $26;
      $$0498$i = $$554$i;$$4$i = $$3$i;
      while(1) {
       $387 = (~~(($$4$i))>>>0);
       store4($$0498$i,$387);
       $388 = ((($$0498$i)) + 4|0);
       $389 = (+($387>>>0));
       $390 = $$4$i - $389;
       $391 = $390 * 1.0E+9;
       $392 = $391 != 0.0;
       if ($392) {
        $$0498$i = $388;$$4$i = $391;
       } else {
        break;
       }
      }
      $393 = ($$pr$i|0)>(0);
      if ($393) {
       $$1482671$i = $$554$i;$$1499670$i = $388;$395 = $$pr$i;
       while(1) {
        $394 = ($395|0)>(29);
        $396 = $394 ? 29 : $395;
        $$0488663$i = ((($$1499670$i)) + -4|0);
        $397 = ($$0488663$i>>>0)<($$1482671$i>>>0);
        do {
         if ($397) {
          $$2483$ph$i = $$1482671$i;
         } else {
          $398 = i64_zext($396>>>0);
          $$0488665$i = $$0488663$i;$$0497664$i = 0;
          while(1) {
           $399 = load4($$0488665$i);
           $400 = i64_zext($399>>>0);
           $401 = i64_shl($400,$398);
           $402 = i64_zext($$0497664$i>>>0);
           $403 = i64_add($401,$402);
           $404 = i64_urem($403,i64_const(1000000000,0));
           $405 = i64_trunc($404);
           store4($$0488665$i,$405);
           $406 = i64_udiv($403,i64_const(1000000000,0));
           $407 = i64_trunc($406);
           $$0488$i = ((($$0488665$i)) + -4|0);
           $408 = ($$0488$i>>>0)<($$1482671$i>>>0);
           if ($408) {
            break;
           } else {
            $$0488665$i = $$0488$i;$$0497664$i = $407;
           }
          }
          $409 = ($407|0)==(0);
          if ($409) {
           $$2483$ph$i = $$1482671$i;
           break;
          }
          $410 = ((($$1482671$i)) + -4|0);
          store4($410,$407);
          $$2483$ph$i = $410;
         }
        } while(0);
        $$2500$i = $$1499670$i;
        while(1) {
         $411 = ($$2500$i>>>0)>($$2483$ph$i>>>0);
         if (!($411)) {
          break;
         }
         $412 = ((($$2500$i)) + -4|0);
         $413 = load4($412);
         $414 = ($413|0)==(0);
         if ($414) {
          $$2500$i = $412;
         } else {
          break;
         }
        }
        $415 = load4($6);
        $416 = (($415) - ($396))|0;
        store4($6,$416);
        $417 = ($416|0)>(0);
        if ($417) {
         $$1482671$i = $$2483$ph$i;$$1499670$i = $$2500$i;$395 = $416;
        } else {
         $$1482$lcssa$i = $$2483$ph$i;$$1499$lcssa$i = $$2500$i;$$pr571$i = $416;
         break;
        }
       }
      } else {
       $$1482$lcssa$i = $$554$i;$$1499$lcssa$i = $388;$$pr571$i = $$pr$i;
      }
      $418 = ($$pr571$i|0)<(0);
      if ($418) {
       $419 = (($$538$i) + 25)|0;
       $420 = (($419|0) / 9)&-1;
       $421 = (($420) + 1)|0;
       $422 = ($305|0)==(102);
       $$3484658$i = $$1482$lcssa$i;$$3501657$i = $$1499$lcssa$i;$424 = $$pr571$i;
       while(1) {
        $423 = (0 - ($424))|0;
        $425 = ($423|0)>(9);
        $426 = $425 ? 9 : $423;
        $427 = ($$3484658$i>>>0)<($$3501657$i>>>0);
        do {
         if ($427) {
          $431 = 1 << $426;
          $432 = (($431) + -1)|0;
          $433 = 1000000000 >>> $426;
          $$0487652$i = 0;$$1489651$i = $$3484658$i;
          while(1) {
           $434 = load4($$1489651$i);
           $435 = $434 & $432;
           $436 = $434 >>> $426;
           $437 = (($436) + ($$0487652$i))|0;
           store4($$1489651$i,$437);
           $438 = Math_imul($435, $433)|0;
           $439 = ((($$1489651$i)) + 4|0);
           $440 = ($439>>>0)<($$3501657$i>>>0);
           if ($440) {
            $$0487652$i = $438;$$1489651$i = $439;
           } else {
            break;
           }
          }
          $441 = load4($$3484658$i);
          $442 = ($441|0)==(0);
          $443 = ((($$3484658$i)) + 4|0);
          $$$3484$i = $442 ? $443 : $$3484658$i;
          $444 = ($438|0)==(0);
          if ($444) {
           $$$3484706$i = $$$3484$i;$$4502$i = $$3501657$i;
           break;
          }
          $445 = ((($$3501657$i)) + 4|0);
          store4($$3501657$i,$438);
          $$$3484706$i = $$$3484$i;$$4502$i = $445;
         } else {
          $428 = load4($$3484658$i);
          $429 = ($428|0)==(0);
          $430 = ((($$3484658$i)) + 4|0);
          $$$3484705$i = $429 ? $430 : $$3484658$i;
          $$$3484706$i = $$$3484705$i;$$4502$i = $$3501657$i;
         }
        } while(0);
        $446 = $422 ? $$554$i : $$$3484706$i;
        $447 = $$4502$i;
        $448 = $446;
        $449 = (($447) - ($448))|0;
        $450 = $449 >> 2;
        $451 = ($450|0)>($421|0);
        $452 = (($446) + ($421<<2)|0);
        $$$4502$i = $451 ? $452 : $$4502$i;
        $453 = load4($6);
        $454 = (($453) + ($426))|0;
        store4($6,$454);
        $455 = ($454|0)<(0);
        if ($455) {
         $$3484658$i = $$$3484706$i;$$3501657$i = $$$4502$i;$424 = $454;
        } else {
         $$3484$lcssa$i = $$$3484706$i;$$3501$lcssa$i = $$$4502$i;
         break;
        }
       }
      } else {
       $$3484$lcssa$i = $$1482$lcssa$i;$$3501$lcssa$i = $$1499$lcssa$i;
      }
      $456 = ($$3484$lcssa$i>>>0)<($$3501$lcssa$i>>>0);
      $457 = $$554$i;
      do {
       if ($456) {
        $458 = $$3484$lcssa$i;
        $459 = (($457) - ($458))|0;
        $460 = $459 >> 2;
        $461 = ($460*9)|0;
        $462 = load4($$3484$lcssa$i);
        $463 = ($462>>>0)<(10);
        if ($463) {
         $$1515$i = $461;
         break;
        } else {
         $$0514647$i = $461;$$0531646$i = 10;
        }
        while(1) {
         $464 = ($$0531646$i*10)|0;
         $465 = (($$0514647$i) + 1)|0;
         $466 = ($462>>>0)<($464>>>0);
         if ($466) {
          $$1515$i = $465;
          break;
         } else {
          $$0514647$i = $465;$$0531646$i = $464;
         }
        }
       } else {
        $$1515$i = 0;
       }
      } while(0);
      $467 = ($305|0)!=(102);
      $468 = $467 ? $$1515$i : 0;
      $469 = (($$538$i) - ($468))|0;
      $470 = ($305|0)==(103);
      $471 = ($$538$i|0)!=(0);
      $472 = $471 & $470;
      $$neg$i = $472 << 31 >> 31;
      $473 = (($469) + ($$neg$i))|0;
      $474 = $$3501$lcssa$i;
      $475 = (($474) - ($457))|0;
      $476 = $475 >> 2;
      $477 = ($476*9)|0;
      $478 = (($477) + -9)|0;
      $479 = ($473|0)<($478|0);
      if ($479) {
       $480 = ((($$554$i)) + 4|0);
       $481 = (($473) + 9216)|0;
       $482 = (($481|0) / 9)&-1;
       $483 = (($482) + -1024)|0;
       $484 = (($480) + ($483<<2)|0);
       $485 = (($481|0) % 9)&-1;
       $$0528639$i = (($485) + 1)|0;
       $486 = ($$0528639$i|0)<(9);
       if ($486) {
        $$0528641$i = $$0528639$i;$$1532640$i = 10;
        while(1) {
         $487 = ($$1532640$i*10)|0;
         $$0528$i = (($$0528641$i) + 1)|0;
         $exitcond$i = ($$0528$i|0)==(9);
         if ($exitcond$i) {
          $$1532$lcssa$i = $487;
          break;
         } else {
          $$0528641$i = $$0528$i;$$1532640$i = $487;
         }
        }
       } else {
        $$1532$lcssa$i = 10;
       }
       $488 = load4($484);
       $489 = (($488>>>0) % ($$1532$lcssa$i>>>0))&-1;
       $490 = ($489|0)==(0);
       $491 = ((($484)) + 4|0);
       $492 = ($491|0)==($$3501$lcssa$i|0);
       $or$cond540$i = $492 & $490;
       do {
        if ($or$cond540$i) {
         $$4492$i = $484;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
        } else {
         $493 = (($488>>>0) / ($$1532$lcssa$i>>>0))&-1;
         $494 = $493 & 1;
         $495 = ($494|0)==(0);
         $$541$i = $495 ? 9007199254740992.0 : 9007199254740994.0;
         $496 = (($$1532$lcssa$i|0) / 2)&-1;
         $497 = ($489>>>0)<($496>>>0);
         if ($497) {
          $$0466$i = 0.5;
         } else {
          $498 = ($489|0)==($496|0);
          $or$cond543$i = $492 & $498;
          $$557$i = $or$cond543$i ? 1.0 : 1.5;
          $$0466$i = $$557$i;
         }
         $499 = ($$0520$i|0)==(0);
         do {
          if ($499) {
           $$1467$i = $$0466$i;$$1469$i = $$541$i;
          } else {
           $500 = load1($$0522$i);
           $501 = ($500<<24>>24)==(45);
           if (!($501)) {
            $$1467$i = $$0466$i;$$1469$i = $$541$i;
            break;
           }
           $502 = -$$541$i;
           $503 = -$$0466$i;
           $$1467$i = $503;$$1469$i = $502;
          }
         } while(0);
         $504 = (($488) - ($489))|0;
         store4($484,$504);
         $505 = $$1469$i + $$1467$i;
         $506 = $505 != $$1469$i;
         if (!($506)) {
          $$4492$i = $484;$$4518$i = $$1515$i;$$8$i = $$3484$lcssa$i;
          break;
         }
         $507 = (($504) + ($$1532$lcssa$i))|0;
         store4($484,$507);
         $508 = ($507>>>0)>(999999999);
         if ($508) {
          $$2490632$i = $484;$$5486633$i = $$3484$lcssa$i;
          while(1) {
           $509 = ((($$2490632$i)) + -4|0);
           store4($$2490632$i,0);
           $510 = ($509>>>0)<($$5486633$i>>>0);
           if ($510) {
            $511 = ((($$5486633$i)) + -4|0);
            store4($511,0);
            $$6$i = $511;
           } else {
            $$6$i = $$5486633$i;
           }
           $512 = load4($509);
           $513 = (($512) + 1)|0;
           store4($509,$513);
           $514 = ($513>>>0)>(999999999);
           if ($514) {
            $$2490632$i = $509;$$5486633$i = $$6$i;
           } else {
            $$2490$lcssa$i = $509;$$5486$lcssa$i = $$6$i;
            break;
           }
          }
         } else {
          $$2490$lcssa$i = $484;$$5486$lcssa$i = $$3484$lcssa$i;
         }
         $515 = $$5486$lcssa$i;
         $516 = (($457) - ($515))|0;
         $517 = $516 >> 2;
         $518 = ($517*9)|0;
         $519 = load4($$5486$lcssa$i);
         $520 = ($519>>>0)<(10);
         if ($520) {
          $$4492$i = $$2490$lcssa$i;$$4518$i = $518;$$8$i = $$5486$lcssa$i;
          break;
         } else {
          $$2516628$i = $518;$$2533627$i = 10;
         }
         while(1) {
          $521 = ($$2533627$i*10)|0;
          $522 = (($$2516628$i) + 1)|0;
          $523 = ($519>>>0)<($521>>>0);
          if ($523) {
           $$4492$i = $$2490$lcssa$i;$$4518$i = $522;$$8$i = $$5486$lcssa$i;
           break;
          } else {
           $$2516628$i = $522;$$2533627$i = $521;
          }
         }
        }
       } while(0);
       $524 = ((($$4492$i)) + 4|0);
       $525 = ($$3501$lcssa$i>>>0)>($524>>>0);
       $$$3501$i = $525 ? $524 : $$3501$lcssa$i;
       $$5519$ph$i = $$4518$i;$$7505$ph$i = $$$3501$i;$$9$ph$i = $$8$i;
      } else {
       $$5519$ph$i = $$1515$i;$$7505$ph$i = $$3501$lcssa$i;$$9$ph$i = $$3484$lcssa$i;
      }
      $526 = (0 - ($$5519$ph$i))|0;
      $$7505$i = $$7505$ph$i;
      while(1) {
       $527 = ($$7505$i>>>0)>($$9$ph$i>>>0);
       if (!($527)) {
        $$lcssa683$i = 0;
        break;
       }
       $528 = ((($$7505$i)) + -4|0);
       $529 = load4($528);
       $530 = ($529|0)==(0);
       if ($530) {
        $$7505$i = $528;
       } else {
        $$lcssa683$i = 1;
        break;
       }
      }
      do {
       if ($470) {
        $531 = $471&1;
        $532 = $531 ^ 1;
        $$538$$i = (($532) + ($$538$i))|0;
        $533 = ($$538$$i|0)>($$5519$ph$i|0);
        $534 = ($$5519$ph$i|0)>(-5);
        $or$cond6$i = $533 & $534;
        if ($or$cond6$i) {
         $535 = (($$0235) + -1)|0;
         $$neg572$i = (($$538$$i) + -1)|0;
         $536 = (($$neg572$i) - ($$5519$ph$i))|0;
         $$0479$i = $535;$$2476$i = $536;
        } else {
         $537 = (($$0235) + -2)|0;
         $538 = (($$538$$i) + -1)|0;
         $$0479$i = $537;$$2476$i = $538;
        }
        $539 = $$1263$ & 8;
        $540 = ($539|0)==(0);
        if (!($540)) {
         $$1480$i = $$0479$i;$$3477$i = $$2476$i;$$pre$phi704$iZ2D = $539;
         break;
        }
        do {
         if ($$lcssa683$i) {
          $541 = ((($$7505$i)) + -4|0);
          $542 = load4($541);
          $543 = ($542|0)==(0);
          if ($543) {
           $$2530$i = 9;
           break;
          }
          $544 = (($542>>>0) % 10)&-1;
          $545 = ($544|0)==(0);
          if ($545) {
           $$1529624$i = 0;$$3534623$i = 10;
          } else {
           $$2530$i = 0;
           break;
          }
          while(1) {
           $546 = ($$3534623$i*10)|0;
           $547 = (($$1529624$i) + 1)|0;
           $548 = (($542>>>0) % ($546>>>0))&-1;
           $549 = ($548|0)==(0);
           if ($549) {
            $$1529624$i = $547;$$3534623$i = $546;
           } else {
            $$2530$i = $547;
            break;
           }
          }
         } else {
          $$2530$i = 9;
         }
        } while(0);
        $550 = $$0479$i | 32;
        $551 = ($550|0)==(102);
        $552 = $$7505$i;
        $553 = (($552) - ($457))|0;
        $554 = $553 >> 2;
        $555 = ($554*9)|0;
        $556 = (($555) + -9)|0;
        if ($551) {
         $557 = (($556) - ($$2530$i))|0;
         $558 = ($557|0)<(0);
         $$544$i = $558 ? 0 : $557;
         $559 = ($$2476$i|0)<($$544$i|0);
         $$2476$$545$i = $559 ? $$2476$i : $$544$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$545$i;$$pre$phi704$iZ2D = 0;
         break;
        } else {
         $560 = (($556) + ($$5519$ph$i))|0;
         $561 = (($560) - ($$2530$i))|0;
         $562 = ($561|0)<(0);
         $$546$i = $562 ? 0 : $561;
         $563 = ($$2476$i|0)<($$546$i|0);
         $$2476$$547$i = $563 ? $$2476$i : $$546$i;
         $$1480$i = $$0479$i;$$3477$i = $$2476$$547$i;$$pre$phi704$iZ2D = 0;
         break;
        }
       } else {
        $$pre703$i = $$1263$ & 8;
        $$1480$i = $$0235;$$3477$i = $$538$i;$$pre$phi704$iZ2D = $$pre703$i;
       }
      } while(0);
      $564 = $$3477$i | $$pre$phi704$iZ2D;
      $565 = ($564|0)!=(0);
      $566 = $565&1;
      $567 = $$1480$i | 32;
      $568 = ($567|0)==(102);
      if ($568) {
       $569 = ($$5519$ph$i|0)>(0);
       $570 = $569 ? $$5519$ph$i : 0;
       $$2513$i = 0;$$pn$i = $570;
      } else {
       $571 = ($$5519$ph$i|0)<(0);
       $572 = $571 ? $526 : $$5519$ph$i;
       $573 = i64_sext($572);
       $574 = (_fmt_u($573,$20)|0);
       $575 = $574;
       $576 = (($22) - ($575))|0;
       $577 = ($576|0)<(2);
       if ($577) {
        $$1512617$i = $574;
        while(1) {
         $578 = ((($$1512617$i)) + -1|0);
         store1($578,48);
         $579 = $578;
         $580 = (($22) - ($579))|0;
         $581 = ($580|0)<(2);
         if ($581) {
          $$1512617$i = $578;
         } else {
          $$1512$lcssa$i = $578;
          break;
         }
        }
       } else {
        $$1512$lcssa$i = $574;
       }
       $582 = $$5519$ph$i >> 31;
       $583 = $582 & 2;
       $584 = (($583) + 43)|0;
       $585 = $584&255;
       $586 = ((($$1512$lcssa$i)) + -1|0);
       store1($586,$585);
       $587 = $$1480$i&255;
       $588 = ((($$1512$lcssa$i)) + -2|0);
       store1($588,$587);
       $589 = $588;
       $590 = (($22) - ($589))|0;
       $$2513$i = $588;$$pn$i = $590;
      }
      $591 = (($$0520$i) + 1)|0;
      $592 = (($591) + ($$3477$i))|0;
      $$1527$i = (($592) + ($566))|0;
      $593 = (($$1527$i) + ($$pn$i))|0;
      _pad($0,32,$$1260,$593,$$1263$);
      $594 = load4($0);
      $595 = $594 & 32;
      $596 = ($595|0)==(0);
      if ($596) {
       (___fwritex($$0522$i,$$0520$i,$0)|0);
      }
      $597 = $$1263$ ^ 65536;
      _pad($0,48,$$1260,$593,$597);
      do {
       if ($568) {
        $598 = ($$9$ph$i>>>0)>($$554$i>>>0);
        $$0496$$9$i = $598 ? $$554$i : $$9$ph$i;
        $$5493606$i = $$0496$$9$i;
        while(1) {
         $599 = load4($$5493606$i);
         $600 = i64_zext($599>>>0);
         $601 = (_fmt_u($600,$27)|0);
         $602 = ($$5493606$i|0)==($$0496$$9$i|0);
         do {
          if ($602) {
           $608 = ($601|0)==($27|0);
           if (!($608)) {
            $$1465$i = $601;
            break;
           }
           store1($29,48);
           $$1465$i = $29;
          } else {
           $603 = ($601>>>0)>($7>>>0);
           if (!($603)) {
            $$1465$i = $601;
            break;
           }
           $604 = $601;
           $605 = (($604) - ($18))|0;
           _memset(($7|0),48,($605|0))|0;
           $$0464603$i = $601;
           while(1) {
            $606 = ((($$0464603$i)) + -1|0);
            $607 = ($606>>>0)>($7>>>0);
            if ($607) {
             $$0464603$i = $606;
            } else {
             $$1465$i = $606;
             break;
            }
           }
          }
         } while(0);
         $609 = load4($0);
         $610 = $609 & 32;
         $611 = ($610|0)==(0);
         if ($611) {
          $612 = $$1465$i;
          $613 = (($28) - ($612))|0;
          (___fwritex($$1465$i,$613,$0)|0);
         }
         $614 = ((($$5493606$i)) + 4|0);
         $615 = ($614>>>0)>($$554$i>>>0);
         if ($615) {
          break;
         } else {
          $$5493606$i = $614;
         }
        }
        $616 = ($564|0)==(0);
        do {
         if (!($616)) {
          $617 = load4($0);
          $618 = $617 & 32;
          $619 = ($618|0)==(0);
          if (!($619)) {
           break;
          }
          (___fwritex(28431,1,$0)|0);
         }
        } while(0);
        $620 = ($614>>>0)<($$7505$i>>>0);
        $621 = ($$3477$i|0)>(0);
        $622 = $621 & $620;
        if ($622) {
         $$4478600$i = $$3477$i;$$6494599$i = $614;
         while(1) {
          $623 = load4($$6494599$i);
          $624 = i64_zext($623>>>0);
          $625 = (_fmt_u($624,$27)|0);
          $626 = ($625>>>0)>($7>>>0);
          if ($626) {
           $627 = $625;
           $628 = (($627) - ($18))|0;
           _memset(($7|0),48,($628|0))|0;
           $$0463594$i = $625;
           while(1) {
            $629 = ((($$0463594$i)) + -1|0);
            $630 = ($629>>>0)>($7>>>0);
            if ($630) {
             $$0463594$i = $629;
            } else {
             $$0463$lcssa$i = $629;
             break;
            }
           }
          } else {
           $$0463$lcssa$i = $625;
          }
          $631 = load4($0);
          $632 = $631 & 32;
          $633 = ($632|0)==(0);
          if ($633) {
           $634 = ($$4478600$i|0)>(9);
           $635 = $634 ? 9 : $$4478600$i;
           (___fwritex($$0463$lcssa$i,$635,$0)|0);
          }
          $636 = ((($$6494599$i)) + 4|0);
          $637 = (($$4478600$i) + -9)|0;
          $638 = ($636>>>0)<($$7505$i>>>0);
          $639 = ($$4478600$i|0)>(9);
          $640 = $639 & $638;
          if ($640) {
           $$4478600$i = $637;$$6494599$i = $636;
          } else {
           $$4478$lcssa$i = $637;
           break;
          }
         }
        } else {
         $$4478$lcssa$i = $$3477$i;
        }
        $641 = (($$4478$lcssa$i) + 9)|0;
        _pad($0,48,$641,9,0);
       } else {
        $642 = ((($$9$ph$i)) + 4|0);
        $$7505$$i = $$lcssa683$i ? $$7505$i : $642;
        $643 = ($$3477$i|0)>(-1);
        if ($643) {
         $644 = ($$pre$phi704$iZ2D|0)==(0);
         $$5611$i = $$3477$i;$$7495610$i = $$9$ph$i;
         while(1) {
          $645 = load4($$7495610$i);
          $646 = i64_zext($645>>>0);
          $647 = (_fmt_u($646,$27)|0);
          $648 = ($647|0)==($27|0);
          if ($648) {
           store1($29,48);
           $$0$i = $29;
          } else {
           $$0$i = $647;
          }
          $649 = ($$7495610$i|0)==($$9$ph$i|0);
          do {
           if ($649) {
            $653 = ((($$0$i)) + 1|0);
            $654 = load4($0);
            $655 = $654 & 32;
            $656 = ($655|0)==(0);
            if ($656) {
             (___fwritex($$0$i,1,$0)|0);
            }
            $657 = ($$5611$i|0)<(1);
            $or$cond552$i = $644 & $657;
            if ($or$cond552$i) {
             $$2$i = $653;
             break;
            }
            $658 = load4($0);
            $659 = $658 & 32;
            $660 = ($659|0)==(0);
            if (!($660)) {
             $$2$i = $653;
             break;
            }
            (___fwritex(28431,1,$0)|0);
            $$2$i = $653;
           } else {
            $650 = ($$0$i>>>0)>($7>>>0);
            if (!($650)) {
             $$2$i = $$0$i;
             break;
            }
            $scevgep694$i = (($$0$i) + ($19)|0);
            $scevgep694695$i = $scevgep694$i;
            _memset(($7|0),48,($scevgep694695$i|0))|0;
            $$1607$i = $$0$i;
            while(1) {
             $651 = ((($$1607$i)) + -1|0);
             $652 = ($651>>>0)>($7>>>0);
             if ($652) {
              $$1607$i = $651;
             } else {
              $$2$i = $651;
              break;
             }
            }
           }
          } while(0);
          $661 = $$2$i;
          $662 = (($28) - ($661))|0;
          $663 = load4($0);
          $664 = $663 & 32;
          $665 = ($664|0)==(0);
          if ($665) {
           $666 = ($$5611$i|0)>($662|0);
           $667 = $666 ? $662 : $$5611$i;
           (___fwritex($$2$i,$667,$0)|0);
          }
          $668 = (($$5611$i) - ($662))|0;
          $669 = ((($$7495610$i)) + 4|0);
          $670 = ($669>>>0)<($$7505$$i>>>0);
          $671 = ($668|0)>(-1);
          $672 = $670 & $671;
          if ($672) {
           $$5611$i = $668;$$7495610$i = $669;
          } else {
           $$5$lcssa$i = $668;
           break;
          }
         }
        } else {
         $$5$lcssa$i = $$3477$i;
        }
        $673 = (($$5$lcssa$i) + 18)|0;
        _pad($0,48,$673,18,0);
        $674 = load4($0);
        $675 = $674 & 32;
        $676 = ($675|0)==(0);
        if (!($676)) {
         break;
        }
        $677 = $$2513$i;
        $678 = (($22) - ($677))|0;
        (___fwritex($$2513$i,$678,$0)|0);
       }
      } while(0);
      $679 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$593,$679);
      $680 = ($593|0)<($$1260|0);
      $$553$i = $680 ? $$1260 : $593;
      $$0470$i = $$553$i;
     } else {
      $285 = $$0235 & 32;
      $286 = ($285|0)!=(0);
      $287 = $286 ? 28415 : 28419;
      $288 = ($$0471$i != $$0471$i) | (0.0 != 0.0);
      $289 = $286 ? 28423 : 28427;
      $$1521$i = $288 ? 0 : $$0520$i;
      $$0510$i = $288 ? $289 : $287;
      $290 = (($$1521$i) + 3)|0;
      _pad($0,32,$$1260,$290,$166);
      $291 = load4($0);
      $292 = $291 & 32;
      $293 = ($292|0)==(0);
      if ($293) {
       (___fwritex($$0522$i,$$1521$i,$0)|0);
       $$pre$i = load4($0);
       $295 = $$pre$i;
      } else {
       $295 = $291;
      }
      $294 = $295 & 32;
      $296 = ($294|0)==(0);
      if ($296) {
       (___fwritex($$0510$i,3,$0)|0);
      }
      $297 = $$1263$ ^ 8192;
      _pad($0,32,$$1260,$290,$297);
      $298 = ($290|0)<($$1260|0);
      $299 = $298 ? $$1260 : $290;
      $$0470$i = $299;
     }
    } while(0);
    $$0243 = $$0470$i;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
    continue L1;
    break;
   }
   default: {
    $$2 = $$0321;$$2234 = 0;$$2239 = 28379;$$2251 = $14;$$5 = $$0254;$$6268 = $$1263$;
   }
   }
  } while(0);
  L310: do {
   if ((label|0) == 63) {
    label = 0;
    $181 = load8($9);
    $182 = $$1236 & 32;
    $183 = i64_eq($181,i64_const(0,0));
    if ($183) {
     $$05$lcssa$i = $14;$194 = i64_const(0,0);
    } else {
     $$056$i = $14;$$07$i = $181;
     while(1) {
      $$0$tr$i = i64_trunc($$07$i);
      $184 = $$0$tr$i & 15;
      $185 = (28363 + ($184)|0);
      $186 = load1($185);
      $187 = $186&255;
      $188 = $187 | $182;
      $189 = $188&255;
      $190 = ((($$056$i)) + -1|0);
      store1($190,$189);
      $191 = i64_lshr($$07$i,i64_const(4,0));
      $192 = i64_eq($191,i64_const(0,0));
      if ($192) {
       break;
      } else {
       $$056$i = $190;$$07$i = $191;
      }
     }
     $$pre457 = load8($9);
     $$05$lcssa$i = $190;$194 = $$pre457;
    }
    $193 = i64_eq($194,i64_const(0,0));
    $195 = $$3265 & 8;
    $196 = ($195|0)==(0);
    $or$cond282 = $196 | $193;
    $197 = $$1236 >> 4;
    $198 = (28379 + ($197)|0);
    $$332 = $or$cond282 ? 28379 : $198;
    $$333 = $or$cond282 ? 0 : 2;
    $$0228 = $$05$lcssa$i;$$1233 = $$333;$$1238 = $$332;$$2256 = $$1255;$$4266 = $$3265;
    label = 76;
   }
   else if ((label|0) == 75) {
    label = 0;
    $221 = (_fmt_u($220,$14)|0);
    $$0228 = $221;$$1233 = $$0232;$$1238 = $$0237;$$2256 = $$0254;$$4266 = $$1263$;
    label = 76;
   }
   else if ((label|0) == 81) {
    label = 0;
    $241 = (_memchr($$1,0,$$0254)|0);
    $242 = ($241|0)==(0|0);
    $243 = $241;
    $244 = $$1;
    $245 = (($243) - ($244))|0;
    $246 = (($$1) + ($$0254)|0);
    $$3257 = $242 ? $$0254 : $245;
    $$1250 = $242 ? $246 : $241;
    $$2 = $$1;$$2234 = 0;$$2239 = 28379;$$2251 = $$1250;$$5 = $$3257;$$6268 = $166;
   }
   else if ((label|0) == 85) {
    label = 0;
    $$0229396 = $708;$$0240395 = 0;$$1244394 = 0;
    while(1) {
     $250 = load4($$0229396);
     $251 = ($250|0)==(0);
     if ($251) {
      $$0240$lcssa = $$0240395;$$2245 = $$1244394;
      break;
     }
     $252 = (_wctomb($12,$250)|0);
     $253 = ($252|0)<(0);
     $254 = (($$4258458) - ($$0240395))|0;
     $255 = ($252>>>0)>($254>>>0);
     $or$cond285 = $253 | $255;
     if ($or$cond285) {
      $$0240$lcssa = $$0240395;$$2245 = $252;
      break;
     }
     $256 = ((($$0229396)) + 4|0);
     $257 = (($252) + ($$0240395))|0;
     $258 = ($$4258458>>>0)>($257>>>0);
     if ($258) {
      $$0229396 = $256;$$0240395 = $257;$$1244394 = $252;
     } else {
      $$0240$lcssa = $257;$$2245 = $252;
      break;
     }
    }
    $259 = ($$2245|0)<(0);
    if ($259) {
     $$0 = -1;
     break L1;
    }
    _pad($0,32,$$1260,$$0240$lcssa,$$1263$);
    $260 = ($$0240$lcssa|0)==(0);
    if ($260) {
     $$0240$lcssa460 = 0;
     label = 96;
    } else {
     $$1230407 = $708;$$1241406 = 0;
     while(1) {
      $261 = load4($$1230407);
      $262 = ($261|0)==(0);
      if ($262) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $263 = ((($$1230407)) + 4|0);
      $264 = (_wctomb($12,$261)|0);
      $265 = (($264) + ($$1241406))|0;
      $266 = ($265|0)>($$0240$lcssa|0);
      if ($266) {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break L310;
      }
      $267 = load4($0);
      $268 = $267 & 32;
      $269 = ($268|0)==(0);
      if ($269) {
       (___fwritex($12,$264,$0)|0);
      }
      $270 = ($265>>>0)<($$0240$lcssa>>>0);
      if ($270) {
       $$1230407 = $263;$$1241406 = $265;
      } else {
       $$0240$lcssa460 = $$0240$lcssa;
       label = 96;
       break;
      }
     }
    }
   }
  } while(0);
  if ((label|0) == 96) {
   label = 0;
   $271 = $$1263$ ^ 8192;
   _pad($0,32,$$1260,$$0240$lcssa460,$271);
   $272 = ($$1260|0)>($$0240$lcssa460|0);
   $273 = $272 ? $$1260 : $$0240$lcssa460;
   $$0243 = $273;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
   continue;
  }
  if ((label|0) == 76) {
   label = 0;
   $222 = ($$2256|0)>(-1);
   $223 = $$4266 & -65537;
   $$$4266 = $222 ? $223 : $$4266;
   $224 = load8($9);
   $225 = i64_ne($224,i64_const(0,0));
   $226 = ($$2256|0)!=(0);
   $or$cond = $226 | $225;
   if ($or$cond) {
    $227 = $$0228;
    $228 = (($15) - ($227))|0;
    $229 = $225&1;
    $230 = $229 ^ 1;
    $231 = (($230) + ($228))|0;
    $232 = ($$2256|0)>($231|0);
    $$2256$ = $232 ? $$2256 : $231;
    $$2 = $$0228;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = $$2256$;$$6268 = $$$4266;
   } else {
    $$2 = $14;$$2234 = $$1233;$$2239 = $$1238;$$2251 = $14;$$5 = 0;$$6268 = $$$4266;
   }
  }
  $681 = $$2251;
  $682 = $$2;
  $683 = (($681) - ($682))|0;
  $684 = ($$5|0)<($683|0);
  $$$5 = $684 ? $683 : $$5;
  $685 = (($$$5) + ($$2234))|0;
  $686 = ($$1260|0)<($685|0);
  $$2261 = $686 ? $685 : $$1260;
  _pad($0,32,$$2261,$685,$$6268);
  $687 = load4($0);
  $688 = $687 & 32;
  $689 = ($688|0)==(0);
  if ($689) {
   (___fwritex($$2239,$$2234,$0)|0);
  }
  $690 = $$6268 ^ 65536;
  _pad($0,48,$$2261,$685,$690);
  _pad($0,48,$$$5,$683,0);
  $691 = load4($0);
  $692 = $691 & 32;
  $693 = ($692|0)==(0);
  if ($693) {
   (___fwritex($$2,$683,$0)|0);
  }
  $694 = $$6268 ^ 8192;
  _pad($0,32,$$2261,$685,$694);
  $$0243 = $$2261;$$0247 = $$1248;$$0269 = $$3272;$$0321 = $146;
 }
 L345: do {
  if ((label|0) == 243) {
   $695 = ($0|0)==(0|0);
   if ($695) {
    $696 = ($$0269|0)==(0);
    if ($696) {
     $$0 = 0;
    } else {
     $$2242381 = 1;
     while(1) {
      $697 = (($4) + ($$2242381<<2)|0);
      $698 = load4($697);
      $699 = ($698|0)==(0);
      if ($699) {
       $$3379 = $$2242381;
       break;
      }
      $700 = (($3) + ($$2242381<<3)|0);
      _pop_arg($700,$698,$2);
      $701 = (($$2242381) + 1)|0;
      $702 = ($701|0)<(10);
      if ($702) {
       $$2242381 = $701;
      } else {
       $$0 = 1;
       break L345;
      }
     }
     while(1) {
      $705 = (($4) + ($$3379<<2)|0);
      $706 = load4($705);
      $707 = ($706|0)==(0);
      $704 = (($$3379) + 1)|0;
      if (!($707)) {
       $$0 = -1;
       break L345;
      }
      $703 = ($704|0)<(10);
      if ($703) {
       $$3379 = $704;
      } else {
       $$0 = 1;
       break;
      }
     }
    }
   } else {
    $$0 = $$1248;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___lockfile($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function ___fwritex($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$032 = 0, $$033 = 0, $$034 = 0, $$1 = 0, $$pre = 0, $$pre38 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($2)) + 16|0);
 $4 = load4($3);
 $5 = ($4|0)==(0|0);
 if ($5) {
  $7 = (___towrite($2)|0);
  $8 = ($7|0)==(0);
  if ($8) {
   $$pre = load4($3);
   $12 = $$pre;
   label = 5;
  } else {
   $$032 = 0;
  }
 } else {
  $6 = $4;
  $12 = $6;
  label = 5;
 }
 L5: do {
  if ((label|0) == 5) {
   $9 = ((($2)) + 20|0);
   $10 = load4($9);
   $11 = (($12) - ($10))|0;
   $13 = ($11>>>0)<($1>>>0);
   $14 = $10;
   if ($13) {
    $15 = ((($2)) + 36|0);
    $16 = load4($15);
    $17 = (FUNCTION_TABLE_iiii[$16 & 31]($2,$0,$1)|0);
    $$032 = $17;
    break;
   }
   $18 = ((($2)) + 75|0);
   $19 = load1($18);
   $20 = ($19<<24>>24)>(-1);
   L10: do {
    if ($20) {
     $$0 = $1;
     while(1) {
      $21 = ($$0|0)==(0);
      if ($21) {
       $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
       break L10;
      }
      $22 = (($$0) + -1)|0;
      $23 = (($0) + ($22)|0);
      $24 = load1($23);
      $25 = ($24<<24>>24)==(10);
      if ($25) {
       break;
      } else {
       $$0 = $22;
      }
     }
     $26 = ((($2)) + 36|0);
     $27 = load4($26);
     $28 = (FUNCTION_TABLE_iiii[$27 & 31]($2,$0,$$0)|0);
     $29 = ($28>>>0)<($$0>>>0);
     if ($29) {
      $$032 = $$0;
      break L5;
     }
     $30 = (($0) + ($$0)|0);
     $31 = (($1) - ($$0))|0;
     $$pre38 = load4($9);
     $$033 = $31;$$034 = $30;$$1 = $$0;$32 = $$pre38;
    } else {
     $$033 = $1;$$034 = $0;$$1 = 0;$32 = $14;
    }
   } while(0);
   _memcpy(($32|0),($$034|0),($$033|0))|0;
   $33 = load4($9);
   $34 = (($33) + ($$033)|0);
   store4($9,$34);
   $35 = (($$1) + ($$033))|0;
   $$032 = $35;
  }
 } while(0);
 return ($$032|0);
}
function _pop_arg($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$mask = 0, $$mask31 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = i64(), $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = i64(), $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = i64(), $26 = 0, $27 = 0;
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = i64(), $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = i64(), $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = i64();
 var $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = i64(), $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0.0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0.0, $7 = 0, $8 = 0;
 var $9 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0, $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0;
 var $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded29 = 0, $expanded30 = 0, $expanded31 = 0, $expanded32 = 0, $expanded33 = 0, $expanded34 = 0, $expanded35 = 0, $expanded36 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded40 = 0, $expanded41 = 0, $expanded42 = 0, $expanded43 = 0, $expanded44 = 0, $expanded45 = 0;
 var $expanded46 = 0, $expanded47 = 0, $expanded48 = 0, $expanded49 = 0, $expanded50 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded54 = 0, $expanded55 = 0, $expanded56 = 0, $expanded57 = 0, $expanded58 = 0, $expanded59 = 0, $expanded60 = 0, $expanded61 = 0, $expanded62 = 0, $expanded63 = 0, $expanded64 = 0, $expanded65 = 0;
 var $expanded66 = 0, $expanded67 = 0, $expanded68 = 0, $expanded69 = 0, $expanded70 = 0, $expanded71 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded75 = 0, $expanded76 = 0, $expanded77 = 0, $expanded78 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded82 = 0, $expanded83 = 0, $expanded84 = 0, $expanded85 = 0;
 var $expanded86 = 0, $expanded87 = 0, $expanded88 = 0, $expanded89 = 0, $expanded90 = 0, $expanded91 = 0, $expanded92 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, $expanded96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($1>>>0)>(20);
 L1: do {
  if (!($3)) {
   do {
    switch ($1|0) {
    case 9:  {
     $arglist_current = load4($2);
     $4 = $arglist_current;
     $expanded29 = ((0) + 4|0);
     $expanded28 = $expanded29;
     $expanded = (($expanded28) - 1)|0;
     $5 = (($4) + ($expanded))|0;
     $expanded33 = ((0) + 4|0);
     $expanded32 = $expanded33;
     $expanded31 = (($expanded32) - 1)|0;
     $expanded30 = $expanded31 ^ -1;
     $6 = $5 & $expanded30;
     $7 = $6;
     $8 = load4($7);
     $arglist_next = ((($7)) + 4|0);
     store4($2,$arglist_next);
     store4($0,$8);
     break L1;
     break;
    }
    case 10:  {
     $arglist_current2 = load4($2);
     $9 = $arglist_current2;
     $expanded36 = ((0) + 4|0);
     $expanded35 = $expanded36;
     $expanded34 = (($expanded35) - 1)|0;
     $10 = (($9) + ($expanded34))|0;
     $expanded40 = ((0) + 4|0);
     $expanded39 = $expanded40;
     $expanded38 = (($expanded39) - 1)|0;
     $expanded37 = $expanded38 ^ -1;
     $11 = $10 & $expanded37;
     $12 = $11;
     $13 = load4($12);
     $arglist_next3 = ((($12)) + 4|0);
     store4($2,$arglist_next3);
     $14 = i64_sext($13);
     store8($0,$14);
     break L1;
     break;
    }
    case 11:  {
     $arglist_current5 = load4($2);
     $15 = $arglist_current5;
     $expanded43 = ((0) + 4|0);
     $expanded42 = $expanded43;
     $expanded41 = (($expanded42) - 1)|0;
     $16 = (($15) + ($expanded41))|0;
     $expanded47 = ((0) + 4|0);
     $expanded46 = $expanded47;
     $expanded45 = (($expanded46) - 1)|0;
     $expanded44 = $expanded45 ^ -1;
     $17 = $16 & $expanded44;
     $18 = $17;
     $19 = load4($18);
     $arglist_next6 = ((($18)) + 4|0);
     store4($2,$arglist_next6);
     $20 = i64_zext($19>>>0);
     store8($0,$20);
     break L1;
     break;
    }
    case 12:  {
     $arglist_current8 = load4($2);
     $21 = $arglist_current8;
     $expanded50 = ((0) + 8|0);
     $expanded49 = $expanded50;
     $expanded48 = (($expanded49) - 1)|0;
     $22 = (($21) + ($expanded48))|0;
     $expanded54 = ((0) + 8|0);
     $expanded53 = $expanded54;
     $expanded52 = (($expanded53) - 1)|0;
     $expanded51 = $expanded52 ^ -1;
     $23 = $22 & $expanded51;
     $24 = $23;
     $25 = load8($24);
     $arglist_next9 = ((($24)) + 8|0);
     store4($2,$arglist_next9);
     store8($0,$25);
     break L1;
     break;
    }
    case 13:  {
     $arglist_current11 = load4($2);
     $26 = $arglist_current11;
     $expanded57 = ((0) + 4|0);
     $expanded56 = $expanded57;
     $expanded55 = (($expanded56) - 1)|0;
     $27 = (($26) + ($expanded55))|0;
     $expanded61 = ((0) + 4|0);
     $expanded60 = $expanded61;
     $expanded59 = (($expanded60) - 1)|0;
     $expanded58 = $expanded59 ^ -1;
     $28 = $27 & $expanded58;
     $29 = $28;
     $30 = load4($29);
     $arglist_next12 = ((($29)) + 4|0);
     store4($2,$arglist_next12);
     $31 = $30&65535;
     $32 = i64_sext($31 << 16 >> 16);
     store8($0,$32);
     break L1;
     break;
    }
    case 14:  {
     $arglist_current14 = load4($2);
     $33 = $arglist_current14;
     $expanded64 = ((0) + 4|0);
     $expanded63 = $expanded64;
     $expanded62 = (($expanded63) - 1)|0;
     $34 = (($33) + ($expanded62))|0;
     $expanded68 = ((0) + 4|0);
     $expanded67 = $expanded68;
     $expanded66 = (($expanded67) - 1)|0;
     $expanded65 = $expanded66 ^ -1;
     $35 = $34 & $expanded65;
     $36 = $35;
     $37 = load4($36);
     $arglist_next15 = ((($36)) + 4|0);
     store4($2,$arglist_next15);
     $$mask31 = $37 & 65535;
     $38 = i64_zext($$mask31>>>0);
     store8($0,$38);
     break L1;
     break;
    }
    case 15:  {
     $arglist_current17 = load4($2);
     $39 = $arglist_current17;
     $expanded71 = ((0) + 4|0);
     $expanded70 = $expanded71;
     $expanded69 = (($expanded70) - 1)|0;
     $40 = (($39) + ($expanded69))|0;
     $expanded75 = ((0) + 4|0);
     $expanded74 = $expanded75;
     $expanded73 = (($expanded74) - 1)|0;
     $expanded72 = $expanded73 ^ -1;
     $41 = $40 & $expanded72;
     $42 = $41;
     $43 = load4($42);
     $arglist_next18 = ((($42)) + 4|0);
     store4($2,$arglist_next18);
     $44 = $43&255;
     $45 = i64_sext($44 << 24 >> 24);
     store8($0,$45);
     break L1;
     break;
    }
    case 16:  {
     $arglist_current20 = load4($2);
     $46 = $arglist_current20;
     $expanded78 = ((0) + 4|0);
     $expanded77 = $expanded78;
     $expanded76 = (($expanded77) - 1)|0;
     $47 = (($46) + ($expanded76))|0;
     $expanded82 = ((0) + 4|0);
     $expanded81 = $expanded82;
     $expanded80 = (($expanded81) - 1)|0;
     $expanded79 = $expanded80 ^ -1;
     $48 = $47 & $expanded79;
     $49 = $48;
     $50 = load4($49);
     $arglist_next21 = ((($49)) + 4|0);
     store4($2,$arglist_next21);
     $$mask = $50 & 255;
     $51 = i64_zext($$mask>>>0);
     store8($0,$51);
     break L1;
     break;
    }
    case 17:  {
     $arglist_current23 = load4($2);
     $52 = $arglist_current23;
     $expanded85 = ((0) + 8|0);
     $expanded84 = $expanded85;
     $expanded83 = (($expanded84) - 1)|0;
     $53 = (($52) + ($expanded83))|0;
     $expanded89 = ((0) + 8|0);
     $expanded88 = $expanded89;
     $expanded87 = (($expanded88) - 1)|0;
     $expanded86 = $expanded87 ^ -1;
     $54 = $53 & $expanded86;
     $55 = $54;
     $56 = loadd($55);
     $arglist_next24 = ((($55)) + 8|0);
     store4($2,$arglist_next24);
     stored($0,$56);
     break L1;
     break;
    }
    case 18:  {
     $arglist_current26 = load4($2);
     $57 = $arglist_current26;
     $expanded92 = ((0) + 8|0);
     $expanded91 = $expanded92;
     $expanded90 = (($expanded91) - 1)|0;
     $58 = (($57) + ($expanded90))|0;
     $expanded96 = ((0) + 8|0);
     $expanded95 = $expanded96;
     $expanded94 = (($expanded95) - 1)|0;
     $expanded93 = $expanded94 ^ -1;
     $59 = $58 & $expanded93;
     $60 = $59;
     $61 = loadd($60);
     $arglist_next27 = ((($60)) + 8|0);
     store4($2,$arglist_next27);
     stored($0,$61);
     break L1;
     break;
    }
    default: {
     break L1;
    }
    }
   } while(0);
  }
 } while(0);
 return;
}
function _fmt_u($0,$1) {
 $0 = i64($0);
 $1 = $1|0;
 var $$010$lcssa$off0 = 0, $$01013 = i64(), $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = i64(), $4 = i64(), $5 = 0, $6 = 0, $7 = i64(), $8 = 0;
 var $9 = 0, $extract$t = 0, $extract$t20 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_ugt($0,i64_const(4294967295,0));
 $extract$t = i64_trunc($0);
 if ($2) {
  $$01013 = $0;$$0914 = $1;
  while(1) {
   $3 = i64_urem($$01013,i64_const(10,0));
   $4 = i64_or($3,i64_const(48,0));
   $5 = i64_trunc($4)&255;
   $6 = ((($$0914)) + -1|0);
   store1($6,$5);
   $7 = i64_udiv($$01013,i64_const(10,0));
   $8 = i64_ugt($$01013,i64_const(4294967295,9));
   if ($8) {
    $$01013 = $7;$$0914 = $6;
   } else {
    break;
   }
  }
  $extract$t20 = i64_trunc($7);
  $$010$lcssa$off0 = $extract$t20;$$09$lcssa = $6;
 } else {
  $$010$lcssa$off0 = $extract$t;$$09$lcssa = $1;
 }
 $9 = ($$010$lcssa$off0|0)==(0);
 if ($9) {
  $$1$lcssa = $$09$lcssa;
 } else {
  $$012 = $$010$lcssa$off0;$$111 = $$09$lcssa;
  while(1) {
   $10 = (($$012>>>0) % 10)&-1;
   $11 = $10 | 48;
   $12 = $11&255;
   $13 = ((($$111)) + -1|0);
   store1($13,$12);
   $14 = (($$012>>>0) / 10)&-1;
   $15 = ($$012>>>0)<(10);
   if ($15) {
    $$1$lcssa = $13;
    break;
   } else {
    $$012 = $14;$$111 = $13;
   }
  }
 }
 return ($$1$lcssa|0);
}
function _strerror($0) {
 $0 = $0|0;
 var $$011$lcssa = 0, $$01113 = 0, $$015 = 0, $$112 = 0, $$114 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$015 = 0;
 while(1) {
  $2 = (28433 + ($$015)|0);
  $3 = load1($2);
  $4 = $3&255;
  $5 = ($4|0)==($0|0);
  if ($5) {
   label = 2;
   break;
  }
  $6 = (($$015) + 1)|0;
  $7 = ($6|0)==(87);
  if ($7) {
   $$01113 = 28521;$$114 = 87;
   label = 5;
   break;
  } else {
   $$015 = $6;
  }
 }
 if ((label|0) == 2) {
  $1 = ($$015|0)==(0);
  if ($1) {
   $$011$lcssa = 28521;
  } else {
   $$01113 = 28521;$$114 = $$015;
   label = 5;
  }
 }
 if ((label|0) == 5) {
  while(1) {
   label = 0;
   $$112 = $$01113;
   while(1) {
    $8 = load1($$112);
    $9 = ($8<<24>>24)==(0);
    $10 = ((($$112)) + 1|0);
    if ($9) {
     break;
    } else {
     $$112 = $10;
    }
   }
   $11 = (($$114) + -1)|0;
   $12 = ($11|0)==(0);
   if ($12) {
    $$011$lcssa = $10;
    break;
   } else {
    $$01113 = $10;$$114 = $11;
    label = 5;
   }
  }
 }
 return ($$011$lcssa|0);
}
function _memchr($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0;
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = $1 & 255;
 $4 = $0;
 $5 = $4 & 3;
 $6 = ($5|0)!=(0);
 $7 = ($2|0)!=(0);
 $or$cond53 = $7 & $6;
 L1: do {
  if ($or$cond53) {
   $8 = $1&255;
   $$03555 = $0;$$03654 = $2;
   while(1) {
    $9 = load1($$03555);
    $10 = ($9<<24>>24)==($8<<24>>24);
    if ($10) {
     $$035$lcssa65 = $$03555;$$036$lcssa64 = $$03654;
     label = 6;
     break L1;
    }
    $11 = ((($$03555)) + 1|0);
    $12 = (($$03654) + -1)|0;
    $13 = $11;
    $14 = $13 & 3;
    $15 = ($14|0)!=(0);
    $16 = ($12|0)!=(0);
    $or$cond = $16 & $15;
    if ($or$cond) {
     $$03555 = $11;$$03654 = $12;
    } else {
     $$035$lcssa = $11;$$036$lcssa = $12;$$lcssa = $16;
     label = 5;
     break;
    }
   }
  } else {
   $$035$lcssa = $0;$$036$lcssa = $2;$$lcssa = $7;
   label = 5;
  }
 } while(0);
 if ((label|0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa;$$036$lcssa64 = $$036$lcssa;
   label = 6;
  } else {
   $$2 = $$035$lcssa;$$3 = 0;
  }
 }
 L8: do {
  if ((label|0) == 6) {
   $17 = load1($$035$lcssa65);
   $18 = $1&255;
   $19 = ($17<<24>>24)==($18<<24>>24);
   if ($19) {
    $$2 = $$035$lcssa65;$$3 = $$036$lcssa64;
   } else {
    $20 = Math_imul($3, 16843009)|0;
    $21 = ($$036$lcssa64>>>0)>(3);
    L11: do {
     if ($21) {
      $$046 = $$035$lcssa65;$$13745 = $$036$lcssa64;
      while(1) {
       $22 = load4($$046);
       $23 = $22 ^ $20;
       $24 = (($23) + -16843009)|0;
       $25 = $23 & -2139062144;
       $26 = $25 ^ -2139062144;
       $27 = $26 & $24;
       $28 = ($27|0)==(0);
       if (!($28)) {
        break;
       }
       $29 = ((($$046)) + 4|0);
       $30 = (($$13745) + -4)|0;
       $31 = ($30>>>0)>(3);
       if ($31) {
        $$046 = $29;$$13745 = $30;
       } else {
        $$0$lcssa = $29;$$137$lcssa = $30;
        label = 11;
        break L11;
       }
      }
      $$140 = $$046;$$23839 = $$13745;
     } else {
      $$0$lcssa = $$035$lcssa65;$$137$lcssa = $$036$lcssa64;
      label = 11;
     }
    } while(0);
    if ((label|0) == 11) {
     $32 = ($$137$lcssa|0)==(0);
     if ($32) {
      $$2 = $$0$lcssa;$$3 = 0;
      break;
     } else {
      $$140 = $$0$lcssa;$$23839 = $$137$lcssa;
     }
    }
    while(1) {
     $33 = load1($$140);
     $34 = ($33<<24>>24)==($18<<24>>24);
     if ($34) {
      $$2 = $$140;$$3 = $$23839;
      break L8;
     }
     $35 = ((($$140)) + 1|0);
     $36 = (($$23839) + -1)|0;
     $37 = ($36|0)==(0);
     if ($37) {
      $$2 = $35;$$3 = 0;
      break;
     } else {
      $$140 = $35;$$23839 = $36;
     }
    }
   }
  }
 } while(0);
 $38 = ($$3|0)!=(0);
 $39 = $38 ? $$2 : 0;
 return ($39|0);
}
function _pad($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$0$lcssa16 = 0, $$012 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 256|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(256|0);
 $5 = sp;
 $6 = $4 & 73728;
 $7 = ($6|0)==(0);
 $8 = ($2|0)>($3|0);
 $or$cond = $8 & $7;
 do {
  if ($or$cond) {
   $9 = (($2) - ($3))|0;
   $10 = ($9>>>0)>(256);
   $11 = $10 ? 256 : $9;
   _memset(($5|0),($1|0),($11|0))|0;
   $12 = ($9>>>0)>(255);
   $13 = load4($0);
   $14 = $13 & 32;
   $15 = ($14|0)==(0);
   if ($12) {
    $16 = (($2) - ($3))|0;
    $$012 = $9;$23 = $13;$24 = $15;
    while(1) {
     if ($24) {
      (___fwritex($5,256,$0)|0);
      $$pre = load4($0);
      $20 = $$pre;
     } else {
      $20 = $23;
     }
     $17 = (($$012) + -256)|0;
     $18 = ($17>>>0)>(255);
     $19 = $20 & 32;
     $21 = ($19|0)==(0);
     if ($18) {
      $$012 = $17;$23 = $20;$24 = $21;
     } else {
      break;
     }
    }
    $22 = $16 & 255;
    if ($21) {
     $$0$lcssa16 = $22;
    } else {
     break;
    }
   } else {
    if ($15) {
     $$0$lcssa16 = $9;
    } else {
     break;
    }
   }
   (___fwritex($5,$$0$lcssa16,$0)|0);
  }
 } while(0);
 STACKTOP = sp;return;
}
function _wctomb($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($0|0)==(0|0);
 if ($2) {
  $$0 = 0;
 } else {
  $3 = (_wcrtomb($0,$1,0)|0);
  $$0 = $3;
 }
 return ($$0|0);
}
function _frexpl($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (+_frexp($0,$1));
 return (+$2);
}
function _frexp($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$0 = 0.0, $$016 = 0.0, $$tr = 0, $10 = 0, $11 = i64(), $12 = i64(), $13 = 0.0, $2 = i64(), $3 = i64(), $4 = 0, $5 = 0.0, $6 = 0.0, $7 = 0, $8 = 0, $9 = 0, $storemerge = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = i64_bc2i($0);
 $3 = i64_lshr($2,i64_const(52,0));
 $trunc = i64_trunc($3)&65535;
 $trunc$clear = $trunc & 2047;
 switch ($trunc$clear<<16>>16) {
 case 0:  {
  $4 = $0 != 0.0;
  if ($4) {
   $5 = $0 * 1.8446744073709552E+19;
   $6 = (+_frexp($5,$1));
   $7 = load4($1);
   $8 = (($7) + -64)|0;
   $$016 = $6;$storemerge = $8;
  } else {
   $$016 = $0;$storemerge = 0;
  }
  store4($1,$storemerge);
  $$0 = $$016;
  break;
 }
 case 2047:  {
  $$0 = $0;
  break;
 }
 default: {
  $$tr = i64_trunc($3);
  $9 = $$tr & 2047;
  $10 = (($9) + -1022)|0;
  store4($1,$10);
  $11 = i64_and($2,i64_const(4294967295,2148532223));
  $12 = i64_or($11,i64_const(0,1071644672));
  $13 = i64_bc2d($12);
  $$0 = $13;
 }
 }
 return (+$$0);
}
function _wcrtomb($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($0|0)==(0|0);
 do {
  if ($3) {
   $$0 = 1;
  } else {
   $4 = ($1>>>0)<(128);
   if ($4) {
    $5 = $1&255;
    store1($0,$5);
    $$0 = 1;
    break;
   }
   $6 = ($1>>>0)<(2048);
   if ($6) {
    $7 = $1 >>> 6;
    $8 = $7 | 192;
    $9 = $8&255;
    $10 = ((($0)) + 1|0);
    store1($0,$9);
    $11 = $1 & 63;
    $12 = $11 | 128;
    $13 = $12&255;
    store1($10,$13);
    $$0 = 2;
    break;
   }
   $14 = ($1>>>0)<(55296);
   $15 = $1 & -8192;
   $16 = ($15|0)==(57344);
   $or$cond = $14 | $16;
   if ($or$cond) {
    $17 = $1 >>> 12;
    $18 = $17 | 224;
    $19 = $18&255;
    $20 = ((($0)) + 1|0);
    store1($0,$19);
    $21 = $1 >>> 6;
    $22 = $21 & 63;
    $23 = $22 | 128;
    $24 = $23&255;
    $25 = ((($0)) + 2|0);
    store1($20,$24);
    $26 = $1 & 63;
    $27 = $26 | 128;
    $28 = $27&255;
    store1($25,$28);
    $$0 = 3;
    break;
   }
   $29 = (($1) + -65536)|0;
   $30 = ($29>>>0)<(1048576);
   if ($30) {
    $31 = $1 >>> 18;
    $32 = $31 | 240;
    $33 = $32&255;
    $34 = ((($0)) + 1|0);
    store1($0,$33);
    $35 = $1 >>> 12;
    $36 = $35 & 63;
    $37 = $36 | 128;
    $38 = $37&255;
    $39 = ((($0)) + 2|0);
    store1($34,$38);
    $40 = $1 >>> 6;
    $41 = $40 & 63;
    $42 = $41 | 128;
    $43 = $42&255;
    $44 = ((($0)) + 3|0);
    store1($39,$43);
    $45 = $1 & 63;
    $46 = $45 | 128;
    $47 = $46&255;
    store1($44,$47);
    $$0 = 4;
    break;
   } else {
    $48 = (___errno_location()|0);
    store4($48,84);
    $$0 = -1;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___towrite($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 74|0);
 $2 = load1($1);
 $3 = $2 << 24 >> 24;
 $4 = (($3) + 255)|0;
 $5 = $4 | $3;
 $6 = $5&255;
 store1($1,$6);
 $7 = load4($0);
 $8 = $7 & 8;
 $9 = ($8|0)==(0);
 if ($9) {
  $11 = ((($0)) + 8|0);
  store4($11,0);
  $12 = ((($0)) + 4|0);
  store4($12,0);
  $13 = ((($0)) + 44|0);
  $14 = load4($13);
  $15 = ((($0)) + 28|0);
  store4($15,$14);
  $16 = ((($0)) + 20|0);
  store4($16,$14);
  $17 = $14;
  $18 = ((($0)) + 48|0);
  $19 = load4($18);
  $20 = (($17) + ($19)|0);
  $21 = ((($0)) + 16|0);
  store4($21,$20);
  $$0 = 0;
 } else {
  $10 = $7 | 32;
  store4($0,$10);
  $$0 = -1;
 }
 return ($$0|0);
}
function _scalbn($0,$1) {
 $0 = +$0;
 $1 = $1|0;
 var $$ = 0, $$0 = 0.0, $$020 = 0, $$1 = 0, $10 = 0.0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = i64(), $18 = i64(), $19 = 0.0, $2 = 0, $20 = 0.0, $3 = 0.0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0.0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($1|0)>(1023);
 if ($2) {
  $3 = $0 * 8.9884656743115795E+307;
  $4 = (($1) + -1023)|0;
  $5 = ($4|0)>(1023);
  $6 = (($1) + -2046)|0;
  if ($5) {
   $7 = $3 * 8.9884656743115795E+307;
   $8 = ($6|0)>(1023);
   $$ = $8 ? 1023 : $6;
   $$0 = $7;$$020 = $$;
  } else {
   $$0 = $3;$$020 = $4;
  }
 } else {
  $9 = ($1|0)<(-1022);
  if ($9) {
   $10 = $0 * 2.2250738585072014E-308;
   $11 = (($1) + 1022)|0;
   $12 = ($11|0)<(-1022);
   $13 = (($1) + 2044)|0;
   if ($12) {
    $14 = $10 * 2.2250738585072014E-308;
    $15 = ($13|0)<(-1022);
    $$1 = $15 ? -1022 : $13;
    $$0 = $14;$$020 = $$1;
   } else {
    $$0 = $10;$$020 = $11;
   }
  } else {
   $$0 = $0;$$020 = $1;
  }
 }
 $16 = (($$020) + 1023)|0;
 $17 = i64_zext($16>>>0);
 $18 = i64_shl($17,i64_const(52,0));
 $19 = i64_bc2d($18);
 $20 = $$0 * $19;
 return (+$20);
}
function _strlen($0) {
 $0 = $0|0;
 var $$0 = 0, $$014 = 0, $$015$lcssa = 0, $$01518 = 0, $$1$lcssa = 0, $$pn = 0, $$pn29 = 0, $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0;
 $2 = $1 & 3;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $$015$lcssa = $0;
   label = 4;
  } else {
   $$01518 = $0;$22 = $1;
   while(1) {
    $4 = load1($$01518);
    $5 = ($4<<24>>24)==(0);
    if ($5) {
     $$pn = $22;
     break L1;
    }
    $6 = ((($$01518)) + 1|0);
    $7 = $6;
    $8 = $7 & 3;
    $9 = ($8|0)==(0);
    if ($9) {
     $$015$lcssa = $6;
     label = 4;
     break;
    } else {
     $$01518 = $6;$22 = $7;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $$0 = $$015$lcssa;
  while(1) {
   $10 = load4($$0);
   $11 = (($10) + -16843009)|0;
   $12 = $10 & -2139062144;
   $13 = $12 ^ -2139062144;
   $14 = $13 & $11;
   $15 = ($14|0)==(0);
   $16 = ((($$0)) + 4|0);
   if ($15) {
    $$0 = $16;
   } else {
    break;
   }
  }
  $17 = $10&255;
  $18 = ($17<<24>>24)==(0);
  if ($18) {
   $$1$lcssa = $$0;
  } else {
   $$pn29 = $$0;
   while(1) {
    $19 = ((($$pn29)) + 1|0);
    $$pre = load1($19);
    $20 = ($$pre<<24>>24)==(0);
    if ($20) {
     $$1$lcssa = $19;
     break;
    } else {
     $$pn29 = $19;
    }
   }
  }
  $21 = $$1$lcssa;
  $$pn = $21;
 }
 $$014 = (($$pn) - ($1))|0;
 return ($$014|0);
}
function ___cosdf($0) {
 $0 = +$0;
 var $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = Math_fround(0), $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0 * $0;
 $2 = $1 * $1;
 $3 = $1 * 2.4390448796277409E-5;
 $4 = $3 + -0.0013886763774609929;
 $5 = $1 * 0.499999997251031;
 $6 = 1.0 - $5;
 $7 = $2 * 0.041666623323739063;
 $8 = $6 + $7;
 $9 = $1 * $2;
 $10 = $9 * $4;
 $11 = $8 + $10;
 $12 = Math_fround($11);
 return (Math_fround($12));
}
function ___rem_pio2_large($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$ = 0, $$0$lcssa = 0.0, $$0248$lcssa = 0.0, $$0248346 = 0.0, $$0250 = 0, $$0250278 = 0, $$0250279 = 0, $$0251 = 0, $$0251$in = 0, $$0253 = 0, $$0256 = 0, $$0258380 = 0, $$0263379 = 0, $$0271 = 0, $$0271277 = 0, $$0273$lcssa = 0, $$0273351 = 0, $$0374 = 0.0, $$1$lcssa = 0.0, $$10311 = 0;
 var $$11329 = 0, $$12327 = 0, $$1249 = 0.0, $$1252 = 0, $$1254 = 0, $$1254$in = 0, $$1257332 = 0, $$1259373 = 0, $$1264378 = 0, $$1272 = 0, $$1274 = 0, $$13322 = 0, $$1363 = 0.0, $$2255 = 0, $$2260345 = 0, $$2265344 = 0, $$2341 = 0.0, $$3261357 = 0, $$3266352 = 0, $$3333 = 0.0;
 var $$4$lcssa = 0.0, $$4262362 = 0, $$4267358 = 0, $$4267358$in = 0, $$4310 = 0.0, $$5$lcssa = 0.0, $$5268370 = 0, $$5268370$in = 0, $$5318 = 0.0, $$6$lcssa = 0.0, $$6269340 = 0, $$6312 = 0.0, $$7$lcssa = 0.0, $$7270337 = 0, $$7323 = 0.0, $$8309 = 0, $$9317 = 0, $$neg = 0, $$neg281 = 0, $$phi$trans$insert = 0;
 var $$phi$trans$insert407 = 0, $$pre = 0.0, $$pre408 = 0.0, $10 = 0, $100 = 0, $101 = 0.0, $102 = 0, $103 = 0.0, $104 = 0.0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0;
 var $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0.0, $123 = 0, $124 = 0, $125 = 0, $126 = 0.0, $127 = 0, $128 = 0, $129 = 0.0, $13 = 0, $130 = 0.0, $131 = 0.0, $132 = 0;
 var $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0.0, $14 = 0, $140 = 0, $141 = 0.0, $142 = 0, $143 = 0.0, $144 = 0.0, $145 = 0.0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0;
 var $151 = 0, $152 = 0, $153 = 0, $154 = 0.0, $155 = 0, $156 = 0, $157 = 0.0, $158 = 0.0, $159 = 0, $16 = 0, $160 = 0.0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0.0, $166 = 0, $167 = 0, $168 = 0.0, $169 = 0.0;
 var $17 = 0, $170 = 0.0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0.0, $18 = 0, $180 = 0.0, $181 = 0, $182 = 0, $183 = 0, $184 = 0.0, $185 = 0.0, $186 = 0, $187 = 0.0;
 var $188 = 0.0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0.0, $193 = 0.0, $194 = 0.0, $195 = 0.0, $196 = 0, $197 = 0, $198 = 0.0, $199 = 0.0, $20 = 0, $200 = 0, $201 = 0.0, $202 = 0.0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0.0, $208 = 0, $209 = 0.0, $21 = 0, $210 = 0.0, $211 = 0.0, $212 = 0.0, $213 = 0, $214 = 0, $215 = 0, $216 = 0.0, $217 = 0, $218 = 0.0, $219 = 0.0, $22 = 0, $220 = 0.0, $221 = 0.0, $222 = 0, $223 = 0;
 var $224 = 0.0, $225 = 0.0, $226 = 0, $227 = 0, $228 = 0, $229 = 0.0, $23 = 0, $230 = 0, $231 = 0.0, $232 = 0, $233 = 0, $234 = 0.0, $235 = 0.0, $236 = 0, $237 = 0.0, $238 = 0, $239 = 0, $24 = 0.0, $25 = 0, $26 = 0.0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0.0, $37 = 0, $38 = 0, $39 = 0.0, $40 = 0.0, $41 = 0.0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0.0, $48 = 0, $49 = 0.0, $5 = 0, $50 = 0, $51 = 0.0, $52 = 0.0, $53 = 0.0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0, $61 = 0, $62 = 0.0, $63 = 0.0, $64 = 0.0;
 var $65 = 0.0, $66 = 0.0, $67 = 0, $68 = 0.0, $69 = 0.0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $exitcond = 0, $exitcond403 = 0;
 var $exitcond404 = 0, $exitcond405 = 0, $exitcond406 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 560|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(560|0);
 $5 = sp + 480|0;
 $6 = sp + 320|0;
 $7 = sp + 160|0;
 $8 = sp;
 $9 = (20580 + ($4<<2)|0);
 $10 = load4($9);
 $11 = (($3) + -1)|0;
 $12 = (($2) + -3)|0;
 $13 = (($12|0) / 24)&-1;
 $14 = ($13|0)<(0);
 $$ = $14 ? 0 : $13;
 $$neg = Math_imul($$, -24)|0;
 $$neg281 = (($2) + -24)|0;
 $15 = (($$neg281) + ($$neg))|0;
 $16 = (($10) + ($11))|0;
 $17 = ($16|0)<(0);
 if (!($17)) {
  $18 = (($$) - ($11))|0;
  $19 = (($10) + ($3))|0;
  $$0258380 = $18;$$0263379 = 0;
  while(1) {
   $21 = ($$0258380|0)<(0);
   if ($21) {
    $26 = 0.0;
   } else {
    $22 = (20596 + ($$0258380<<2)|0);
    $23 = load4($22);
    $24 = (+($23|0));
    $26 = $24;
   }
   $25 = (($6) + ($$0263379<<3)|0);
   stored($25,$26);
   $27 = (($$0263379) + 1)|0;
   $28 = (($$0258380) + 1)|0;
   $exitcond406 = ($27|0)==($19|0);
   if ($exitcond406) {
    break;
   } else {
    $$0258380 = $28;$$0263379 = $27;
   }
  }
 }
 $20 = ($3|0)>(0);
 $$1264378 = 0;
 while(1) {
  if ($20) {
   $29 = (($$1264378) + ($11))|0;
   $$0374 = 0.0;$$1259373 = 0;
   while(1) {
    $35 = (($0) + ($$1259373<<3)|0);
    $36 = loadd($35);
    $37 = (($29) - ($$1259373))|0;
    $38 = (($6) + ($37<<3)|0);
    $39 = loadd($38);
    $40 = $36 * $39;
    $41 = $$0374 + $40;
    $42 = (($$1259373) + 1)|0;
    $exitcond405 = ($42|0)==($3|0);
    if ($exitcond405) {
     $$0$lcssa = $41;
     break;
    } else {
     $$0374 = $41;$$1259373 = $42;
    }
   }
  } else {
   $$0$lcssa = 0.0;
  }
  $43 = (($8) + ($$1264378<<3)|0);
  stored($43,$$0$lcssa);
  $44 = (($$1264378) + 1)|0;
  $45 = ($$1264378|0)<($10|0);
  if ($45) {
   $$1264378 = $44;
  } else {
   break;
  }
 }
 $30 = ($15|0)>(0);
 $31 = (24 - ($15))|0;
 $32 = (23 - ($15))|0;
 $33 = ($3|0)>(0);
 $34 = ($15|0)==(0);
 $$0253 = $10;
 L17: while(1) {
  $46 = (($8) + ($$0253<<3)|0);
  $47 = loadd($46);
  $48 = ($$0253|0)>(0);
  if ($48) {
   $$0248346 = $47;$$2260345 = $$0253;$$2265344 = 0;
   while(1) {
    $49 = $$0248346 * 5.9604644775390625E-8;
    $50 = (~~(($49)));
    $51 = (+($50|0));
    $52 = $51 * 16777216.0;
    $53 = $$0248346 - $52;
    $54 = (~~(($53)));
    $55 = (($5) + ($$2265344<<2)|0);
    store4($55,$54);
    $56 = (($$2260345) + -1)|0;
    $57 = (($8) + ($56<<3)|0);
    $58 = loadd($57);
    $59 = $51 + $58;
    $60 = (($$2265344) + 1)|0;
    $61 = ($$2260345|0)>(1);
    if ($61) {
     $$0248346 = $59;$$2260345 = $56;$$2265344 = $60;
    } else {
     $$0248$lcssa = $59;
     break;
    }
   }
  } else {
   $$0248$lcssa = $47;
  }
  $62 = (+_scalbn($$0248$lcssa,$15));
  $63 = $62 * 0.125;
  $64 = (+Math_floor((+$63)));
  $65 = $64 * 8.0;
  $66 = $62 - $65;
  $67 = (~~(($66)));
  $68 = (+($67|0));
  $69 = $66 - $68;
  do {
   if ($30) {
    $70 = (($$0253) + -1)|0;
    $71 = (($5) + ($70<<2)|0);
    $72 = load4($71);
    $73 = $72 >> $31;
    $74 = (($73) + ($67))|0;
    $75 = $73 << $31;
    $76 = (($72) - ($75))|0;
    store4($71,$76);
    $77 = $76 >> $32;
    $$0250 = $77;$$0271 = $74;
    label = 19;
   } else {
    if ($34) {
     $78 = (($$0253) + -1)|0;
     $79 = (($5) + ($78<<2)|0);
     $80 = load4($79);
     $81 = $80 >> 23;
     $$0250 = $81;$$0271 = $67;
     label = 19;
     break;
    } else {
     $82 = !($69 >= 0.5);
     if ($82) {
      $$0250279 = 0;$$1249 = $69;$$1272 = $67;
      break;
     } else {
      $$0250278 = 2;$$0271277 = $67;
      label = 20;
      break;
     }
    }
   }
  } while(0);
  if ((label|0) == 19) {
   label = 0;
   $83 = ($$0250|0)>(0);
   if ($83) {
    $$0250278 = $$0250;$$0271277 = $$0271;
    label = 20;
   } else {
    $$0250279 = $$0250;$$1249 = $69;$$1272 = $$0271;
   }
  }
  if ((label|0) == 20) {
   label = 0;
   $84 = (($$0271277) + 1)|0;
   if ($48) {
    $$0273351 = 0;$$3266352 = 0;
    while(1) {
     $85 = (($5) + ($$3266352<<2)|0);
     $86 = load4($85);
     $87 = ($$0273351|0)==(0);
     if ($87) {
      $88 = ($86|0)==(0);
      if ($88) {
       $$1274 = 0;
      } else {
       $89 = (16777216 - ($86))|0;
       store4($85,$89);
       $$1274 = 1;
      }
     } else {
      $90 = (16777215 - ($86))|0;
      store4($85,$90);
      $$1274 = $$0273351;
     }
     $91 = (($$3266352) + 1)|0;
     $exitcond403 = ($91|0)==($$0253|0);
     if ($exitcond403) {
      $$0273$lcssa = $$1274;
      break;
     } else {
      $$0273351 = $$1274;$$3266352 = $91;
     }
    }
   } else {
    $$0273$lcssa = 0;
   }
   L42: do {
    if ($30) {
     switch ($15|0) {
     case 1:  {
      $92 = (($$0253) + -1)|0;
      $93 = (($5) + ($92<<2)|0);
      $94 = load4($93);
      $95 = $94 & 8388607;
      store4($93,$95);
      break L42;
      break;
     }
     case 2:  {
      $96 = (($$0253) + -1)|0;
      $97 = (($5) + ($96<<2)|0);
      $98 = load4($97);
      $99 = $98 & 4194303;
      store4($97,$99);
      break L42;
      break;
     }
     default: {
      break L42;
     }
     }
    }
   } while(0);
   $100 = ($$0250278|0)==(2);
   if ($100) {
    $101 = 1.0 - $69;
    $102 = ($$0273$lcssa|0)==(0);
    if ($102) {
     $$0250279 = 2;$$1249 = $101;$$1272 = $84;
    } else {
     $103 = (+_scalbn(1.0,$15));
     $104 = $101 - $103;
     $$0250279 = 2;$$1249 = $104;$$1272 = $84;
    }
   } else {
    $$0250279 = $$0250278;$$1249 = $69;$$1272 = $84;
   }
  }
  $105 = $$1249 == 0.0;
  if (!($105)) {
   label = 43;
   break;
  }
  $106 = ($$0253|0)>($10|0);
  if ($106) {
   $$3261357 = 0;$$4267358$in = $$0253;
   while(1) {
    $$4267358 = (($$4267358$in) + -1)|0;
    $107 = (($5) + ($$4267358<<2)|0);
    $108 = load4($107);
    $109 = $108 | $$3261357;
    $110 = ($$4267358|0)>($10|0);
    if ($110) {
     $$3261357 = $109;$$4267358$in = $$4267358;
    } else {
     break;
    }
   }
   $111 = ($109|0)==(0);
   if ($111) {
    $$0256 = 1;
   } else {
    $$0251$in = $15;$$1254$in = $$0253;
    label = 42;
    break;
   }
  } else {
   $$0256 = 1;
  }
  while(1) {
   $112 = (($10) - ($$0256))|0;
   $113 = (($5) + ($112<<2)|0);
   $114 = load4($113);
   $115 = ($114|0)==(0);
   $116 = (($$0256) + 1)|0;
   if ($115) {
    $$0256 = $116;
   } else {
    break;
   }
  }
  $117 = (($$0256) + ($$0253))|0;
  $118 = ($$0256|0)>(0);
  if ($118) {
   $$5268370$in = $$0253;
  } else {
   $$0253 = $117;
   continue;
  }
  while(1) {
   $$5268370 = (($$5268370$in) + 1)|0;
   $119 = (($$5268370) + ($$))|0;
   $120 = (20596 + ($119<<2)|0);
   $121 = load4($120);
   $122 = (+($121|0));
   $123 = (($$5268370$in) + ($3))|0;
   $124 = (($6) + ($123<<3)|0);
   stored($124,$122);
   if ($33) {
    $$1363 = 0.0;$$4262362 = 0;
    while(1) {
     $125 = (($0) + ($$4262362<<3)|0);
     $126 = loadd($125);
     $127 = (($123) - ($$4262362))|0;
     $128 = (($6) + ($127<<3)|0);
     $129 = loadd($128);
     $130 = $126 * $129;
     $131 = $$1363 + $130;
     $132 = (($$4262362) + 1)|0;
     $exitcond404 = ($132|0)==($3|0);
     if ($exitcond404) {
      $$1$lcssa = $131;
      break;
     } else {
      $$1363 = $131;$$4262362 = $132;
     }
    }
   } else {
    $$1$lcssa = 0.0;
   }
   $133 = (($8) + ($$5268370<<3)|0);
   stored($133,$$1$lcssa);
   $134 = ($$5268370|0)<($117|0);
   if ($134) {
    $$5268370$in = $$5268370;
   } else {
    $$0253 = $117;
    continue L17;
   }
  }
 }
 do {
  if ((label|0) == 42) {
   while(1) {
    label = 0;
    $$0251 = (($$0251$in) + -24)|0;
    $$1254 = (($$1254$in) + -1)|0;
    $135 = (($5) + ($$1254<<2)|0);
    $136 = load4($135);
    $137 = ($136|0)==(0);
    if ($137) {
     $$0251$in = $$0251;$$1254$in = $$1254;
     label = 42;
    } else {
     $$1252 = $$0251;$$2255 = $$1254;
     break;
    }
   }
  }
  else if ((label|0) == 43) {
   $138 = (0 - ($15))|0;
   $139 = (+_scalbn($$1249,$138));
   $140 = !($139 >= 16777216.0);
   if ($140) {
    $151 = (~~(($139)));
    $152 = (($5) + ($$0253<<2)|0);
    store4($152,$151);
    $$1252 = $15;$$2255 = $$0253;
    break;
   } else {
    $141 = $139 * 5.9604644775390625E-8;
    $142 = (~~(($141)));
    $143 = (+($142|0));
    $144 = $143 * 16777216.0;
    $145 = $139 - $144;
    $146 = (~~(($145)));
    $147 = (($5) + ($$0253<<2)|0);
    store4($147,$146);
    $148 = (($$0253) + 1)|0;
    $149 = (($$neg) + ($2))|0;
    $150 = (($5) + ($148<<2)|0);
    store4($150,$142);
    $$1252 = $149;$$2255 = $148;
    break;
   }
  }
 } while(0);
 $153 = ($$2255|0)>(-1);
 if ($153) {
  $154 = (+_scalbn(1.0,$$1252));
  $$2341 = $154;$$6269340 = $$2255;
  while(1) {
   $155 = (($5) + ($$6269340<<2)|0);
   $156 = load4($155);
   $157 = (+($156|0));
   $158 = $$2341 * $157;
   $159 = (($8) + ($$6269340<<3)|0);
   stored($159,$158);
   $160 = $$2341 * 5.9604644775390625E-8;
   $161 = (($$6269340) + -1)|0;
   $162 = ($$6269340|0)>(0);
   if ($162) {
    $$2341 = $160;$$6269340 = $161;
   } else {
    break;
   }
  }
  if ($153) {
   $$7270337 = $$2255;
   while(1) {
    $163 = (($$2255) - ($$7270337))|0;
    $$1257332 = 0;$$3333 = 0.0;
    while(1) {
     $164 = (1024 + ($$1257332<<3)|0);
     $165 = loadd($164);
     $166 = (($$1257332) + ($$7270337))|0;
     $167 = (($8) + ($166<<3)|0);
     $168 = loadd($167);
     $169 = $165 * $168;
     $170 = $$3333 + $169;
     $171 = (($$1257332) + 1)|0;
     $172 = ($$1257332|0)>=($10|0);
     $173 = ($$1257332|0)>=($163|0);
     $or$cond = $172 | $173;
     if ($or$cond) {
      break;
     } else {
      $$1257332 = $171;$$3333 = $170;
     }
    }
    $174 = (($7) + ($163<<3)|0);
    stored($174,$170);
    $175 = (($$7270337) + -1)|0;
    $176 = ($$7270337|0)>(0);
    if ($176) {
     $$7270337 = $175;
    } else {
     break;
    }
   }
  }
 }
 L84: do {
  switch ($4|0) {
  case 0:  {
   if ($153) {
    $$4310 = 0.0;$$8309 = $$2255;
    while(1) {
     $178 = (($7) + ($$8309<<3)|0);
     $179 = loadd($178);
     $180 = $$4310 + $179;
     $181 = (($$8309) + -1)|0;
     $182 = ($$8309|0)>(0);
     if ($182) {
      $$4310 = $180;$$8309 = $181;
     } else {
      $$4$lcssa = $180;
      break;
     }
    }
   } else {
    $$4$lcssa = 0.0;
   }
   $183 = ($$0250279|0)==(0);
   $184 = -$$4$lcssa;
   $185 = $183 ? $$4$lcssa : $184;
   stored($1,$185);
   break;
  }
  case 2: case 1:  {
   if ($153) {
    $$5318 = 0.0;$$9317 = $$2255;
    while(1) {
     $186 = (($7) + ($$9317<<3)|0);
     $187 = loadd($186);
     $188 = $$5318 + $187;
     $189 = (($$9317) + -1)|0;
     $190 = ($$9317|0)>(0);
     if ($190) {
      $$5318 = $188;$$9317 = $189;
     } else {
      $$5$lcssa = $188;
      break;
     }
    }
   } else {
    $$5$lcssa = 0.0;
   }
   $191 = ($$0250279|0)==(0);
   $192 = -$$5$lcssa;
   $193 = $191 ? $$5$lcssa : $192;
   stored($1,$193);
   $194 = loadd($7);
   $195 = $194 - $$5$lcssa;
   $196 = ($$2255|0)<(1);
   if ($196) {
    $$6$lcssa = $195;
   } else {
    $$10311 = 1;$$6312 = $195;
    while(1) {
     $197 = (($7) + ($$10311<<3)|0);
     $198 = loadd($197);
     $199 = $$6312 + $198;
     $200 = (($$10311) + 1)|0;
     $exitcond = ($$10311|0)==($$2255|0);
     if ($exitcond) {
      $$6$lcssa = $199;
      break;
     } else {
      $$10311 = $200;$$6312 = $199;
     }
    }
   }
   $201 = -$$6$lcssa;
   $202 = $191 ? $$6$lcssa : $201;
   $203 = ((($1)) + 8|0);
   stored($203,$202);
   break;
  }
  case 3:  {
   $177 = ($$2255|0)>(0);
   if ($177) {
    $$phi$trans$insert = (($7) + ($$2255<<3)|0);
    $$pre = loadd($$phi$trans$insert);
    $$11329 = $$2255;$210 = $$pre;
    while(1) {
     $205 = (($$11329) + -1)|0;
     $206 = (($7) + ($205<<3)|0);
     $207 = loadd($206);
     $208 = (($7) + ($$11329<<3)|0);
     $209 = $207 + $210;
     $211 = $207 - $209;
     $212 = $210 + $211;
     stored($208,$212);
     stored($206,$209);
     $213 = ($$11329|0)>(1);
     if ($213) {
      $$11329 = $205;$210 = $209;
     } else {
      break;
     }
    }
    $204 = ($$2255|0)>(1);
    if ($204) {
     $$phi$trans$insert407 = (($7) + ($$2255<<3)|0);
     $$pre408 = loadd($$phi$trans$insert407);
     $$12327 = $$2255;$219 = $$pre408;
     while(1) {
      $214 = (($$12327) + -1)|0;
      $215 = (($7) + ($214<<3)|0);
      $216 = loadd($215);
      $217 = (($7) + ($$12327<<3)|0);
      $218 = $216 + $219;
      $220 = $216 - $218;
      $221 = $219 + $220;
      stored($217,$221);
      stored($215,$218);
      $222 = ($214|0)>(1);
      if ($222) {
       $$12327 = $214;$219 = $218;
      } else {
       break;
      }
     }
     if ($204) {
      $$13322 = $$2255;$$7323 = 0.0;
      while(1) {
       $223 = (($7) + ($$13322<<3)|0);
       $224 = loadd($223);
       $225 = $$7323 + $224;
       $226 = (($$13322) + -1)|0;
       $227 = ($226|0)>(1);
       if ($227) {
        $$13322 = $226;$$7323 = $225;
       } else {
        $$7$lcssa = $225;
        break;
       }
      }
     } else {
      $$7$lcssa = 0.0;
     }
    } else {
     $$7$lcssa = 0.0;
    }
   } else {
    $$7$lcssa = 0.0;
   }
   $228 = ($$0250279|0)==(0);
   $229 = loadd($7);
   $230 = ((($7)) + 8|0);
   $231 = loadd($230);
   if ($228) {
    stored($1,$229);
    $232 = ((($1)) + 8|0);
    stored($232,$231);
    $233 = ((($1)) + 16|0);
    stored($233,$$7$lcssa);
    break L84;
   } else {
    $234 = -$229;
    stored($1,$234);
    $235 = -$231;
    $236 = ((($1)) + 8|0);
    stored($236,$235);
    $237 = -$$7$lcssa;
    $238 = ((($1)) + 16|0);
    stored($238,$237);
    break L84;
   }
   break;
  }
  default: {
  }
  }
 } while(0);
 $239 = $$1272 & 7;
 STACKTOP = sp;return ($239|0);
}
function ___rem_pio2f($0,$1) {
 $0 = Math_fround($0);
 $1 = $1|0;
 var $$0 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0.0, $16 = 0, $17 = Math_fround(0), $18 = 0.0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = Math_fround(0), $24 = 0.0, $25 = 0, $26 = 0, $27 = 0.0;
 var $28 = 0.0, $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $2 = sp + 8|0;
 $3 = sp;
 $4 = i32_bc2i($0);
 $5 = $4 & 2147483647;
 $6 = ($5>>>0)<(1305022427);
 do {
  if ($6) {
   $7 = +$0;
   $8 = $7 * 0.63661977236758138;
   $9 = $8 + 6755399441055744.0;
   $10 = $9 + -6755399441055744.0;
   $11 = (~~(($10)));
   $12 = $10 * 1.5707963109016418;
   $13 = $7 - $12;
   $14 = $10 * 1.5893254773528196E-8;
   $15 = $13 - $14;
   stored($1,$15);
   $$0 = $11;
  } else {
   $16 = ($5>>>0)>(2139095039);
   if ($16) {
    $17 = Math_fround($0 - $0);
    $18 = +$17;
    stored($1,$18);
    $$0 = 0;
    break;
   }
   $19 = $5 >>> 23;
   $20 = (($19) + -150)|0;
   $21 = $20 << 23;
   $22 = (($5) - ($21))|0;
   $23 = i32_bc2f($22);
   $24 = +$23;
   stored($2,$24);
   $25 = (___rem_pio2_large($2,$3,$20,1,0)|0);
   $26 = ($4|0)<(0);
   $27 = loadd($3);
   if ($26) {
    $28 = -$27;
    stored($1,$28);
    $29 = (0 - ($25))|0;
    $$0 = $29;
    break;
   } else {
    stored($1,$27);
    $$0 = $25;
    break;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function ___sindf($0) {
 $0 = +$0;
 var $1 = 0.0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = Math_fround(0), $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = $0 * $0;
 $2 = $1 * $1;
 $3 = $1 * 2.7183114939898219E-6;
 $4 = $3 + -1.9839334836096632E-4;
 $5 = $1 * $0;
 $6 = $1 * 0.0083333293858894632;
 $7 = $6 + -0.16666666641626524;
 $8 = $5 * $7;
 $9 = $8 + $0;
 $10 = $5 * $2;
 $11 = $10 * $4;
 $12 = $11 + $9;
 $13 = Math_fround($12);
 return (Math_fround($13));
}
function _strchr($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (___strchrnul($0,$1)|0);
 $3 = load1($2);
 $4 = $1&255;
 $5 = ($3<<24>>24)==($4<<24>>24);
 $6 = $5 ? $2 : 0;
 return ($6|0);
}
function ___strchrnul($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$029$lcssa = 0, $$02936 = 0, $$030$lcssa = 0, $$03039 = 0, $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0;
 var $41 = 0, $42 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond33 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = $1 & 255;
 $3 = ($2|0)==(0);
 L1: do {
  if ($3) {
   $8 = (_strlen($0)|0);
   $9 = (($0) + ($8)|0);
   $$0 = $9;
  } else {
   $4 = $0;
   $5 = $4 & 3;
   $6 = ($5|0)==(0);
   if ($6) {
    $$030$lcssa = $0;
   } else {
    $7 = $1&255;
    $$03039 = $0;
    while(1) {
     $10 = load1($$03039);
     $11 = ($10<<24>>24)==(0);
     $12 = ($10<<24>>24)==($7<<24>>24);
     $or$cond = $11 | $12;
     if ($or$cond) {
      $$0 = $$03039;
      break L1;
     }
     $13 = ((($$03039)) + 1|0);
     $14 = $13;
     $15 = $14 & 3;
     $16 = ($15|0)==(0);
     if ($16) {
      $$030$lcssa = $13;
      break;
     } else {
      $$03039 = $13;
     }
    }
   }
   $17 = Math_imul($2, 16843009)|0;
   $18 = load4($$030$lcssa);
   $19 = (($18) + -16843009)|0;
   $20 = $18 & -2139062144;
   $21 = $20 ^ -2139062144;
   $22 = $21 & $19;
   $23 = ($22|0)==(0);
   L10: do {
    if ($23) {
     $$02936 = $$030$lcssa;$25 = $18;
     while(1) {
      $24 = $25 ^ $17;
      $26 = (($24) + -16843009)|0;
      $27 = $24 & -2139062144;
      $28 = $27 ^ -2139062144;
      $29 = $28 & $26;
      $30 = ($29|0)==(0);
      if (!($30)) {
       $$029$lcssa = $$02936;
       break L10;
      }
      $31 = ((($$02936)) + 4|0);
      $32 = load4($31);
      $33 = (($32) + -16843009)|0;
      $34 = $32 & -2139062144;
      $35 = $34 ^ -2139062144;
      $36 = $35 & $33;
      $37 = ($36|0)==(0);
      if ($37) {
       $$02936 = $31;$25 = $32;
      } else {
       $$029$lcssa = $31;
       break;
      }
     }
    } else {
     $$029$lcssa = $$030$lcssa;
    }
   } while(0);
   $38 = $1&255;
   $$1 = $$029$lcssa;
   while(1) {
    $39 = load1($$1);
    $40 = ($39<<24>>24)==(0);
    $41 = ($39<<24>>24)==($38<<24>>24);
    $or$cond33 = $40 | $41;
    $42 = ((($$1)) + 1|0);
    if ($or$cond33) {
     $$0 = $$1;
     break;
    } else {
     $$1 = $42;
    }
   }
  }
 } while(0);
 return ($$0|0);
}
function _fopen($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $memchr = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(32|0);
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $2 = load1($1);
 $3 = $2 << 24 >> 24;
 $memchr = (_memchr(30325,$3,4)|0);
 $4 = ($memchr|0)==(0|0);
 if ($4) {
  $5 = (___errno_location()|0);
  store4($5,22);
  $$0 = 0;
 } else {
  $6 = (___fmodeflags($1)|0);
  $7 = $6 | 32768;
  store4($vararg_buffer,$0);
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  store4($vararg_ptr1,$7);
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  store4($vararg_ptr2,438);
  $8 = (___syscall5(5,($vararg_buffer|0))|0);
  $9 = (___syscall_ret($8)|0);
  $10 = ($9|0)<(0);
  if ($10) {
   $$0 = 0;
  } else {
   $11 = (___fdopen($9,$1)|0);
   $12 = ($11|0)==(0|0);
   if ($12) {
    store4($vararg_buffer3,$9);
    (___syscall6(6,($vararg_buffer3|0))|0);
    $$0 = 0;
   } else {
    $$0 = $11;
   }
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function ___fmodeflags($0) {
 $0 = $0|0;
 var $$ = 0, $$$4 = 0, $$0 = 0, $$0$ = 0, $$2 = 0, $$2$ = 0, $$4 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (_strchr($0,43)|0);
 $2 = ($1|0)==(0|0);
 $3 = load1($0);
 $not$ = ($3<<24>>24)!=(114);
 $$ = $not$&1;
 $$0 = $2 ? $$ : 2;
 $4 = (_strchr($0,120)|0);
 $5 = ($4|0)==(0|0);
 $6 = $$0 | 128;
 $$0$ = $5 ? $$0 : $6;
 $7 = (_strchr($0,101)|0);
 $8 = ($7|0)==(0|0);
 $9 = $$0$ | 524288;
 $$2 = $8 ? $$0$ : $9;
 $10 = ($3<<24>>24)==(114);
 $11 = $$2 | 64;
 $$2$ = $10 ? $$2 : $11;
 $12 = ($3<<24>>24)==(119);
 $13 = $$2$ | 512;
 $$4 = $12 ? $13 : $$2$;
 $14 = ($3<<24>>24)==(97);
 $15 = $$4 | 1024;
 $$$4 = $14 ? $15 : $$4;
 return ($$$4|0);
}
function ___fdopen($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $$0 = 0, $$cast = 0, $$pre = 0, $$pre34 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0;
 var $43 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $memchr = 0, $vararg_buffer = 0, $vararg_buffer12 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0, $vararg_ptr10 = 0, $vararg_ptr11 = 0, $vararg_ptr15 = 0, $vararg_ptr16 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(112|0);
 $vararg_buffer12 = sp + 40|0;
 $vararg_buffer7 = sp + 24|0;
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $2 = sp + 52|0;
 $3 = load1($1);
 $4 = $3 << 24 >> 24;
 $memchr = (_memchr(30325,$4,4)|0);
 $5 = ($memchr|0)==(0|0);
 if ($5) {
  $6 = (___errno_location()|0);
  store4($6,22);
  $$0 = 0;
 } else {
  $7 = (_malloc(1144)|0);
  $8 = ($7|0)==(0|0);
  if ($8) {
   $$0 = 0;
  } else {
   ; store8($7,i64_const(0,0),4); store8($7+8|0,i64_const(0,0),4); store8($7+16|0,i64_const(0,0),4); store8($7+24|0,i64_const(0,0),4); store8($7+32|0,i64_const(0,0),4); store8($7+40|0,i64_const(0,0),4); store8($7+48|0,i64_const(0,0),4); store8($7+56|0,i64_const(0,0),4); store8($7+64|0,i64_const(0,0),4); store8($7+72|0,i64_const(0,0),4); store8($7+80|0,i64_const(0,0),4); store8($7+88|0,i64_const(0,0),4); store8($7+96|0,i64_const(0,0),4); store8($7+104|0,i64_const(0,0),4);
   $9 = (_strchr($1,43)|0);
   $10 = ($9|0)==(0|0);
   if ($10) {
    $11 = ($3<<24>>24)==(114);
    $12 = $11 ? 8 : 4;
    store4($7,$12);
   }
   $13 = (_strchr($1,101)|0);
   $14 = ($13|0)==(0|0);
   if ($14) {
    $16 = $3;
   } else {
    store4($vararg_buffer,$0);
    $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
    store4($vararg_ptr1,2);
    $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
    store4($vararg_ptr2,1);
    (___syscall221(221,($vararg_buffer|0))|0);
    $$pre = load1($1);
    $16 = $$pre;
   }
   $15 = ($16<<24>>24)==(97);
   if ($15) {
    store4($vararg_buffer3,$0);
    $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
    store4($vararg_ptr6,3);
    $17 = (___syscall221(221,($vararg_buffer3|0))|0);
    $18 = $17 & 1024;
    $19 = ($18|0)==(0);
    if ($19) {
     $20 = $17 | 1024;
     store4($vararg_buffer7,$0);
     $vararg_ptr10 = ((($vararg_buffer7)) + 4|0);
     store4($vararg_ptr10,4);
     $vararg_ptr11 = ((($vararg_buffer7)) + 8|0);
     store4($vararg_ptr11,$20);
     (___syscall221(221,($vararg_buffer7|0))|0);
    }
    $21 = load4($7);
    $22 = $21 | 128;
    store4($7,$22);
    $29 = $22;
   } else {
    $$pre34 = load4($7);
    $29 = $$pre34;
   }
   $23 = ((($7)) + 60|0);
   store4($23,$0);
   $24 = ((($7)) + 120|0);
   $25 = ((($7)) + 44|0);
   store4($25,$24);
   $26 = ((($7)) + 48|0);
   store4($26,1024);
   $27 = ((($7)) + 75|0);
   store1($27,-1);
   $28 = $29 & 8;
   $30 = ($28|0)==(0);
   if ($30) {
    store4($vararg_buffer12,$0);
    $vararg_ptr15 = ((($vararg_buffer12)) + 4|0);
    store4($vararg_ptr15,21505);
    $vararg_ptr16 = ((($vararg_buffer12)) + 8|0);
    store4($vararg_ptr16,$2);
    $31 = (___syscall54(54,($vararg_buffer12|0))|0);
    $32 = ($31|0)==(0);
    if ($32) {
     store1($27,10);
    }
   }
   $33 = ((($7)) + 32|0);
   store4($33,30);
   $34 = ((($7)) + 36|0);
   store4($34,29);
   $35 = ((($7)) + 40|0);
   store4($35,5);
   $36 = ((($7)) + 12|0);
   store4($36,3);
   $37 = load4((30884));
   $38 = ($37|0)==(0);
   if ($38) {
    $39 = ((($7)) + 76|0);
    store4($39,-1);
   }
   ___lock(((30908)|0));
   $40 = load4((30904));
   $41 = ((($7)) + 56|0);
   store4($41,$40);
   $42 = ($40|0)==(0);
   if (!($42)) {
    $$cast = $40;
    $43 = ((($$cast)) + 52|0);
    store4($43,$7);
   }
   store4((30904),$7);
   ___unlock(((30908)|0));
   $$0 = $7;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _fclose($0) {
 $0 = $0|0;
 var $$pre = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 76|0);
 $2 = load4($1);
 $3 = ($2|0)>(-1);
 if ($3) {
 }
 $4 = load4($0);
 $5 = $4 & 1;
 $6 = ($5|0)!=(0);
 if (!($6)) {
  ___lock(((30908)|0));
  $7 = ((($0)) + 52|0);
  $8 = load4($7);
  $9 = ($8|0)==(0|0);
  $10 = $8;
  $$pre = ((($0)) + 56|0);
  if (!($9)) {
   $11 = load4($$pre);
   $12 = ((($8)) + 56|0);
   store4($12,$11);
  }
  $13 = load4($$pre);
  $14 = ($13|0)==(0|0);
  $15 = $13;
  if (!($14)) {
   $16 = ((($13)) + 52|0);
   store4($16,$10);
  }
  $17 = load4((30904));
  $18 = ($17|0)==($0|0);
  if ($18) {
   store4((30904),$15);
  }
  ___unlock(((30908)|0));
 }
 $19 = (_fflush($0)|0);
 $20 = ((($0)) + 12|0);
 $21 = load4($20);
 $22 = (FUNCTION_TABLE_ii[$21 & 31]($0)|0);
 $23 = $22 | $19;
 $24 = ((($0)) + 92|0);
 $25 = load4($24);
 $26 = ($25|0)==(0|0);
 if (!($26)) {
  _free($25);
 }
 if (!($6)) {
  _free($0);
 }
 return ($23|0);
}
function _fflush($0) {
 $0 = $0|0;
 var $$0 = 0, $$023 = 0, $$02325 = 0, $$02327 = 0, $$024$lcssa = 0, $$02426 = 0, $$1 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 do {
  if ($1) {
   $8 = load4(20576);
   $9 = ($8|0)==(0|0);
   if ($9) {
    $28 = 0;
   } else {
    $10 = load4(20576);
    $11 = (_fflush($10)|0);
    $28 = $11;
   }
   ___lock(((30908)|0));
   $$02325 = load4((30904));
   $12 = ($$02325|0)==(0|0);
   if ($12) {
    $$024$lcssa = $28;
   } else {
    $$02327 = $$02325;$$02426 = $28;
    while(1) {
     $13 = ((($$02327)) + 76|0);
     $14 = load4($13);
     $15 = ($14|0)>(-1);
     if ($15) {
      $16 = (___lockfile($$02327)|0);
      $25 = $16;
     } else {
      $25 = 0;
     }
     $17 = ((($$02327)) + 20|0);
     $18 = load4($17);
     $19 = ((($$02327)) + 28|0);
     $20 = load4($19);
     $21 = ($18>>>0)>($20>>>0);
     if ($21) {
      $22 = (___fflush_unlocked($$02327)|0);
      $23 = $22 | $$02426;
      $$1 = $23;
     } else {
      $$1 = $$02426;
     }
     $24 = ($25|0)==(0);
     if (!($24)) {
      ___unlockfile($$02327);
     }
     $26 = ((($$02327)) + 56|0);
     $$023 = load4($26);
     $27 = ($$023|0)==(0|0);
     if ($27) {
      $$024$lcssa = $$1;
      break;
     } else {
      $$02327 = $$023;$$02426 = $$1;
     }
    }
   }
   ___unlock(((30908)|0));
   $$0 = $$024$lcssa;
  } else {
   $2 = ((($0)) + 76|0);
   $3 = load4($2);
   $4 = ($3|0)>(-1);
   if (!($4)) {
    $5 = (___fflush_unlocked($0)|0);
    $$0 = $5;
    break;
   }
   $6 = (___lockfile($0)|0);
   $phitmp = ($6|0)==(0);
   $7 = (___fflush_unlocked($0)|0);
   if ($phitmp) {
    $$0 = $7;
   } else {
    ___unlockfile($0);
    $$0 = $7;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___fflush_unlocked($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 20|0);
 $2 = load4($1);
 $3 = ((($0)) + 28|0);
 $4 = load4($3);
 $5 = ($2>>>0)>($4>>>0);
 if ($5) {
  $6 = ((($0)) + 36|0);
  $7 = load4($6);
  (FUNCTION_TABLE_iiii[$7 & 31]($0,0,0)|0);
  $8 = load4($1);
  $9 = ($8|0)==(0|0);
  if ($9) {
   $$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $10 = ((($0)) + 4|0);
  $11 = load4($10);
  $12 = ((($0)) + 8|0);
  $13 = load4($12);
  $14 = ($11>>>0)<($13>>>0);
  if ($14) {
   $15 = ((($0)) + 40|0);
   $16 = load4($15);
   $17 = $11;
   $18 = $13;
   $19 = (($17) - ($18))|0;
   (FUNCTION_TABLE_iiii[$16 & 31]($0,$19,1)|0);
  }
  $20 = ((($0)) + 16|0);
  store4($20,0);
  store4($3,0);
  store4($1,0);
  store4($12,0);
  store4($10,0);
  $$0 = 0;
 }
 return ($$0|0);
}
function _ferror($0) {
 $0 = $0|0;
 var $$lobit = 0, $$lobit8 = 0, $$lobit9 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 76|0);
 $2 = load4($1);
 $3 = ($2|0)>(-1);
 if ($3) {
  $6 = (___lockfile($0)|0);
  $phitmp = ($6|0)==(0);
  $7 = load4($0);
  $8 = $7 >>> 5;
  $$lobit = $8 & 1;
  if ($phitmp) {
   $$lobit9 = $$lobit;
  } else {
   $$lobit9 = $$lobit;
  }
 } else {
  $4 = load4($0);
  $5 = $4 >>> 5;
  $$lobit8 = $5 & 1;
  $$lobit9 = $$lobit8;
 }
 return ($$lobit9|0);
}
function _fseek($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = (___fseeko($0,$1,$2)|0);
 return ($3|0);
}
function ___fseeko($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ((($0)) + 76|0);
 $4 = load4($3);
 $5 = ($4|0)>(-1);
 if ($5) {
  $7 = (___lockfile($0)|0);
  $phitmp = ($7|0)==(0);
  $8 = (___fseeko_unlocked($0,$1,$2)|0);
  if ($phitmp) {
   $9 = $8;
  } else {
   ___unlockfile($0);
   $9 = $8;
  }
 } else {
  $6 = (___fseeko_unlocked($0,$1,$2)|0);
  $9 = $6;
 }
 return ($9|0);
}
function ___fseeko_unlocked($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$019 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0;
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $3 = ($2|0)==(1);
 if ($3) {
  $4 = ((($0)) + 8|0);
  $5 = load4($4);
  $6 = ((($0)) + 4|0);
  $7 = load4($6);
  $8 = (($1) - ($5))|0;
  $9 = (($8) + ($7))|0;
  $$019 = $9;
 } else {
  $$019 = $1;
 }
 $10 = ((($0)) + 20|0);
 $11 = load4($10);
 $12 = ((($0)) + 28|0);
 $13 = load4($12);
 $14 = ($11>>>0)>($13>>>0);
 if ($14) {
  $15 = ((($0)) + 36|0);
  $16 = load4($15);
  (FUNCTION_TABLE_iiii[$16 & 31]($0,0,0)|0);
  $17 = load4($10);
  $18 = ($17|0)==(0|0);
  if ($18) {
   $$0 = -1;
  } else {
   label = 5;
  }
 } else {
  label = 5;
 }
 if ((label|0) == 5) {
  $19 = ((($0)) + 16|0);
  store4($19,0);
  store4($12,0);
  store4($10,0);
  $20 = ((($0)) + 40|0);
  $21 = load4($20);
  $22 = (FUNCTION_TABLE_iiii[$21 & 31]($0,$$019,$2)|0);
  $23 = ($22|0)<(0);
  if ($23) {
   $$0 = -1;
  } else {
   $24 = ((($0)) + 8|0);
   store4($24,0);
   $25 = ((($0)) + 4|0);
   store4($25,0);
   $26 = load4($0);
   $27 = $26 & -17;
   store4($0,$27);
   $$0 = 0;
  }
 }
 return ($$0|0);
}
function _random() {
 var $$ = 0, $$0 = 0, $$1 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 ___lock((30928|0));
 $0 = load4(20860);
 $1 = ($0|0)==(0);
 if ($1) {
  $2 = load4(20864);
  $3 = load4($2);
  $4 = Math_imul($3, 1103515245)|0;
  $5 = (($4) + 12345)|0;
  $6 = $5 & 2147483647;
  store4($2,$6);
  $$0 = $6;
 } else {
  $7 = load4(30936);
  $8 = load4(20864);
  $9 = (($8) + ($7<<2)|0);
  $10 = load4($9);
  $11 = load4(20868);
  $12 = (($8) + ($11<<2)|0);
  $13 = load4($12);
  $14 = (($13) + ($10))|0;
  store4($12,$14);
  $15 = $14 >>> 1;
  $16 = (($11) + 1)|0;
  $17 = ($16|0)==($0|0);
  $$ = $17 ? 0 : $16;
  store4(20868,$$);
  $18 = (($7) + 1)|0;
  $19 = ($18|0)==($0|0);
  $$1 = $19 ? 0 : $18;
  store4(30936,$$1);
  $$0 = $15;
 }
 ___unlock((30928|0));
 return ($$0|0);
}
function ___ftello($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 76|0);
 $2 = load4($1);
 $3 = ($2|0)>(-1);
 if ($3) {
  $5 = (___lockfile($0)|0);
  $phitmp = ($5|0)==(0);
  $6 = (___ftello_unlocked($0)|0);
  if ($phitmp) {
   $7 = $6;
  } else {
   $7 = $6;
  }
 } else {
  $4 = (___ftello_unlocked($0)|0);
  $7 = $4;
 }
 return ($7|0);
}
function ___ftello_unlocked($0) {
 $0 = $0|0;
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $3 = 0;
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 40|0);
 $2 = load4($1);
 $3 = load4($0);
 $4 = $3 & 128;
 $5 = ($4|0)==(0);
 if ($5) {
  $11 = 1;
 } else {
  $6 = ((($0)) + 20|0);
  $7 = load4($6);
  $8 = ((($0)) + 28|0);
  $9 = load4($8);
  $10 = ($7>>>0)>($9>>>0);
  $phitmp = $10 ? 2 : 1;
  $11 = $phitmp;
 }
 $12 = (FUNCTION_TABLE_iiii[$2 & 31]($0,0,$11)|0);
 $13 = ($12|0)<(0);
 if ($13) {
  $$0 = $12;
 } else {
  $14 = ((($0)) + 8|0);
  $15 = load4($14);
  $16 = ((($0)) + 4|0);
  $17 = load4($16);
  $18 = ((($0)) + 20|0);
  $19 = load4($18);
  $20 = ((($0)) + 28|0);
  $21 = load4($20);
  $22 = (($12) - ($15))|0;
  $23 = (($22) + ($17))|0;
  $24 = (($23) + ($19))|0;
  $25 = (($24) - ($21))|0;
  $$0 = $25;
 }
 return ($$0|0);
}
function _fread($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$0 = 0, $$053$ph = 0, $$05357 = 0, $$054$ph = 0, $$05456 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_imul($2, $1)|0;
 $5 = ((($3)) + 76|0);
 $6 = load4($5);
 $7 = ($6|0)>(-1);
 if ($7) {
  $8 = (___lockfile($3)|0);
  $35 = $8;
 } else {
  $35 = 0;
 }
 $9 = ((($3)) + 74|0);
 $10 = load1($9);
 $11 = $10 << 24 >> 24;
 $12 = (($11) + 255)|0;
 $13 = $12 | $11;
 $14 = $13&255;
 store1($9,$14);
 $15 = ((($3)) + 8|0);
 $16 = load4($15);
 $17 = ((($3)) + 4|0);
 $18 = load4($17);
 $19 = (($16) - ($18))|0;
 $20 = ($19|0)>(0);
 $21 = $18;
 if ($20) {
  $22 = ($19>>>0)<($4>>>0);
  $$ = $22 ? $19 : $4;
  _memcpy(($0|0),($21|0),($$|0))|0;
  $23 = (($21) + ($$)|0);
  store4($17,$23);
  $24 = (($0) + ($$)|0);
  $25 = (($4) - ($$))|0;
  $$053$ph = $25;$$054$ph = $24;
 } else {
  $$053$ph = $4;$$054$ph = $0;
 }
 $26 = ($$053$ph|0)==(0);
 L7: do {
  if ($26) {
   label = 13;
  } else {
   $27 = ((($3)) + 32|0);
   $$05357 = $$053$ph;$$05456 = $$054$ph;
   while(1) {
    $28 = (___toread($3)|0);
    $29 = ($28|0)==(0);
    if (!($29)) {
     break;
    }
    $30 = load4($27);
    $31 = (FUNCTION_TABLE_iiii[$30 & 31]($3,$$05456,$$05357)|0);
    $32 = (($31) + 1)|0;
    $33 = ($32>>>0)<(2);
    if ($33) {
     break;
    }
    $38 = (($$05357) - ($31))|0;
    $39 = (($$05456) + ($31)|0);
    $40 = ($38|0)==(0);
    if ($40) {
     label = 13;
     break L7;
    } else {
     $$05357 = $38;$$05456 = $39;
    }
   }
   $34 = ($35|0)==(0);
   if (!($34)) {
    ___unlockfile($3);
   }
   $36 = (($4) - ($$05357))|0;
   $37 = (($36>>>0) / ($1>>>0))&-1;
   $$0 = $37;
  }
 } while(0);
 if ((label|0) == 13) {
  $41 = ($35|0)==(0);
  if ($41) {
   $$0 = $2;
  } else {
   ___unlockfile($3);
   $$0 = $2;
  }
 }
 return ($$0|0);
}
function _ftell($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (___ftello($0)|0);
 return ($1|0);
}
function _printf($0,$varargs) {
 $0 = $0|0;
 $varargs = $varargs|0;
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 store4($1,$varargs);
 $2 = load4(20460);
 $3 = (_vfprintf($2,$0,$1)|0);
 STACKTOP = sp;return ($3|0);
}
function _malloc($0) {
 $0 = $0|0;
 var $$$0190$i = 0, $$$0191$i = 0, $$$4349$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i17$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0187$i = 0, $$0189$i = 0, $$0190$i = 0, $$0191$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0;
 var $$024370$i = 0, $$0286$i$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0294$i$i = 0, $$0295$i$i = 0, $$0340$i = 0, $$0342$i = 0, $$0343$i = 0, $$0345$i = 0, $$0351$i = 0, $$0356$i = 0, $$0357$$i = 0, $$0357$i = 0, $$0359$i = 0, $$0360$i = 0, $$0366$i = 0, $$1194$i = 0, $$1196$i = 0, $$124469$i = 0;
 var $$1290$i$i = 0, $$1292$i$i = 0, $$1341$i = 0, $$1346$i = 0, $$1361$i = 0, $$1368$i = 0, $$1372$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2353$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3348$i = 0, $$3370$i = 0, $$4$lcssa$i = 0, $$413$i = 0, $$4349$lcssa$i = 0, $$434912$i = 0, $$4355$$4$i = 0;
 var $$4355$ph$i = 0, $$435511$i = 0, $$5256$i = 0, $$723947$i = 0, $$748$i = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i205 = 0, $$pre$i208 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i206Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre9$i$i = 0, $1 = 0;
 var $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0;
 var $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0;
 var $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0;
 var $1053 = 0, $1054 = 0, $1055 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0;
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0;
 var $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0;
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0;
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0;
 var $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0;
 var $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0;
 var $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0;
 var $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0;
 var $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0;
 var $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0;
 var $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0;
 var $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0;
 var $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0;
 var $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0;
 var $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0;
 var $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0;
 var $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0;
 var $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0;
 var $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0;
 var $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0;
 var $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0;
 var $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0;
 var $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0;
 var $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0;
 var $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0;
 var $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0;
 var $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0;
 var $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0;
 var $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0;
 var $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0;
 var $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0;
 var $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0;
 var $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0;
 var $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0;
 var $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0;
 var $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0;
 var $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0;
 var $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0;
 var $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0;
 var $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0;
 var $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0;
 var $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0;
 var $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0;
 var $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0;
 var $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0;
 var $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0;
 var $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0;
 var $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i204 = 0, $exitcond$i$i = 0, $not$$i$i = 0, $not$$i22$i = 0;
 var $not$7$i = 0, $or$cond$i = 0, $or$cond$i211 = 0, $or$cond1$i = 0, $or$cond1$i210 = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond7$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 $2 = ($0>>>0)<(245);
 do {
  if ($2) {
   $3 = ($0>>>0)<(11);
   $4 = (($0) + 11)|0;
   $5 = $4 & -8;
   $6 = $3 ? 16 : $5;
   $7 = $6 >>> 3;
   $8 = load4(30940);
   $9 = $8 >>> $7;
   $10 = $9 & 3;
   $11 = ($10|0)==(0);
   if (!($11)) {
    $12 = $9 & 1;
    $13 = $12 ^ 1;
    $14 = (($13) + ($7))|0;
    $15 = $14 << 1;
    $16 = (30980 + ($15<<2)|0);
    $17 = ((($16)) + 8|0);
    $18 = load4($17);
    $19 = ((($18)) + 8|0);
    $20 = load4($19);
    $21 = ($16|0)==($20|0);
    do {
     if ($21) {
      $22 = 1 << $14;
      $23 = $22 ^ -1;
      $24 = $8 & $23;
      store4(30940,$24);
     } else {
      $25 = load4((30956));
      $26 = ($20>>>0)<($25>>>0);
      if ($26) {
       _abort();
       // unreachable;
      }
      $27 = ((($20)) + 12|0);
      $28 = load4($27);
      $29 = ($28|0)==($18|0);
      if ($29) {
       store4($27,$16);
       store4($17,$20);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $30 = $14 << 3;
    $31 = $30 | 3;
    $32 = ((($18)) + 4|0);
    store4($32,$31);
    $33 = (($18) + ($30)|0);
    $34 = ((($33)) + 4|0);
    $35 = load4($34);
    $36 = $35 | 1;
    store4($34,$36);
    $$0 = $19;
    STACKTOP = sp;return ($$0|0);
   }
   $37 = load4((30948));
   $38 = ($6>>>0)>($37>>>0);
   if ($38) {
    $39 = ($9|0)==(0);
    if (!($39)) {
     $40 = $9 << $7;
     $41 = 2 << $7;
     $42 = (0 - ($41))|0;
     $43 = $41 | $42;
     $44 = $40 & $43;
     $45 = (0 - ($44))|0;
     $46 = $44 & $45;
     $47 = (($46) + -1)|0;
     $48 = $47 >>> 12;
     $49 = $48 & 16;
     $50 = $47 >>> $49;
     $51 = $50 >>> 5;
     $52 = $51 & 8;
     $53 = $52 | $49;
     $54 = $50 >>> $52;
     $55 = $54 >>> 2;
     $56 = $55 & 4;
     $57 = $53 | $56;
     $58 = $54 >>> $56;
     $59 = $58 >>> 1;
     $60 = $59 & 2;
     $61 = $57 | $60;
     $62 = $58 >>> $60;
     $63 = $62 >>> 1;
     $64 = $63 & 1;
     $65 = $61 | $64;
     $66 = $62 >>> $64;
     $67 = (($65) + ($66))|0;
     $68 = $67 << 1;
     $69 = (30980 + ($68<<2)|0);
     $70 = ((($69)) + 8|0);
     $71 = load4($70);
     $72 = ((($71)) + 8|0);
     $73 = load4($72);
     $74 = ($69|0)==($73|0);
     do {
      if ($74) {
       $75 = 1 << $67;
       $76 = $75 ^ -1;
       $77 = $8 & $76;
       store4(30940,$77);
       $98 = $77;
      } else {
       $78 = load4((30956));
       $79 = ($73>>>0)<($78>>>0);
       if ($79) {
        _abort();
        // unreachable;
       }
       $80 = ((($73)) + 12|0);
       $81 = load4($80);
       $82 = ($81|0)==($71|0);
       if ($82) {
        store4($80,$69);
        store4($70,$73);
        $98 = $8;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $83 = $67 << 3;
     $84 = (($83) - ($6))|0;
     $85 = $6 | 3;
     $86 = ((($71)) + 4|0);
     store4($86,$85);
     $87 = (($71) + ($6)|0);
     $88 = $84 | 1;
     $89 = ((($87)) + 4|0);
     store4($89,$88);
     $90 = (($87) + ($84)|0);
     store4($90,$84);
     $91 = ($37|0)==(0);
     if (!($91)) {
      $92 = load4((30960));
      $93 = $37 >>> 3;
      $94 = $93 << 1;
      $95 = (30980 + ($94<<2)|0);
      $96 = 1 << $93;
      $97 = $98 & $96;
      $99 = ($97|0)==(0);
      if ($99) {
       $100 = $98 | $96;
       store4(30940,$100);
       $$pre = ((($95)) + 8|0);
       $$0199 = $95;$$pre$phiZ2D = $$pre;
      } else {
       $101 = ((($95)) + 8|0);
       $102 = load4($101);
       $103 = load4((30956));
       $104 = ($102>>>0)<($103>>>0);
       if ($104) {
        _abort();
        // unreachable;
       } else {
        $$0199 = $102;$$pre$phiZ2D = $101;
       }
      }
      store4($$pre$phiZ2D,$92);
      $105 = ((($$0199)) + 12|0);
      store4($105,$92);
      $106 = ((($92)) + 8|0);
      store4($106,$$0199);
      $107 = ((($92)) + 12|0);
      store4($107,$95);
     }
     store4((30948),$84);
     store4((30960),$87);
     $$0 = $72;
     STACKTOP = sp;return ($$0|0);
    }
    $108 = load4((30944));
    $109 = ($108|0)==(0);
    if ($109) {
     $$0197 = $6;
    } else {
     $110 = (0 - ($108))|0;
     $111 = $108 & $110;
     $112 = (($111) + -1)|0;
     $113 = $112 >>> 12;
     $114 = $113 & 16;
     $115 = $112 >>> $114;
     $116 = $115 >>> 5;
     $117 = $116 & 8;
     $118 = $117 | $114;
     $119 = $115 >>> $117;
     $120 = $119 >>> 2;
     $121 = $120 & 4;
     $122 = $118 | $121;
     $123 = $119 >>> $121;
     $124 = $123 >>> 1;
     $125 = $124 & 2;
     $126 = $122 | $125;
     $127 = $123 >>> $125;
     $128 = $127 >>> 1;
     $129 = $128 & 1;
     $130 = $126 | $129;
     $131 = $127 >>> $129;
     $132 = (($130) + ($131))|0;
     $133 = (31244 + ($132<<2)|0);
     $134 = load4($133);
     $135 = ((($134)) + 4|0);
     $136 = load4($135);
     $137 = $136 & -8;
     $138 = (($137) - ($6))|0;
     $$0189$i = $134;$$0190$i = $134;$$0191$i = $138;
     while(1) {
      $139 = ((($$0189$i)) + 16|0);
      $140 = load4($139);
      $141 = ($140|0)==(0|0);
      if ($141) {
       $142 = ((($$0189$i)) + 20|0);
       $143 = load4($142);
       $144 = ($143|0)==(0|0);
       if ($144) {
        break;
       } else {
        $146 = $143;
       }
      } else {
       $146 = $140;
      }
      $145 = ((($146)) + 4|0);
      $147 = load4($145);
      $148 = $147 & -8;
      $149 = (($148) - ($6))|0;
      $150 = ($149>>>0)<($$0191$i>>>0);
      $$$0191$i = $150 ? $149 : $$0191$i;
      $$$0190$i = $150 ? $146 : $$0190$i;
      $$0189$i = $146;$$0190$i = $$$0190$i;$$0191$i = $$$0191$i;
     }
     $151 = load4((30956));
     $152 = ($$0190$i>>>0)<($151>>>0);
     if ($152) {
      _abort();
      // unreachable;
     }
     $153 = (($$0190$i) + ($6)|0);
     $154 = ($$0190$i>>>0)<($153>>>0);
     if (!($154)) {
      _abort();
      // unreachable;
     }
     $155 = ((($$0190$i)) + 24|0);
     $156 = load4($155);
     $157 = ((($$0190$i)) + 12|0);
     $158 = load4($157);
     $159 = ($158|0)==($$0190$i|0);
     do {
      if ($159) {
       $169 = ((($$0190$i)) + 20|0);
       $170 = load4($169);
       $171 = ($170|0)==(0|0);
       if ($171) {
        $172 = ((($$0190$i)) + 16|0);
        $173 = load4($172);
        $174 = ($173|0)==(0|0);
        if ($174) {
         $$3$i = 0;
         break;
        } else {
         $$1194$i = $173;$$1196$i = $172;
        }
       } else {
        $$1194$i = $170;$$1196$i = $169;
       }
       while(1) {
        $175 = ((($$1194$i)) + 20|0);
        $176 = load4($175);
        $177 = ($176|0)==(0|0);
        if (!($177)) {
         $$1194$i = $176;$$1196$i = $175;
         continue;
        }
        $178 = ((($$1194$i)) + 16|0);
        $179 = load4($178);
        $180 = ($179|0)==(0|0);
        if ($180) {
         break;
        } else {
         $$1194$i = $179;$$1196$i = $178;
        }
       }
       $181 = ($$1196$i>>>0)<($151>>>0);
       if ($181) {
        _abort();
        // unreachable;
       } else {
        store4($$1196$i,0);
        $$3$i = $$1194$i;
        break;
       }
      } else {
       $160 = ((($$0190$i)) + 8|0);
       $161 = load4($160);
       $162 = ($161>>>0)<($151>>>0);
       if ($162) {
        _abort();
        // unreachable;
       }
       $163 = ((($161)) + 12|0);
       $164 = load4($163);
       $165 = ($164|0)==($$0190$i|0);
       if (!($165)) {
        _abort();
        // unreachable;
       }
       $166 = ((($158)) + 8|0);
       $167 = load4($166);
       $168 = ($167|0)==($$0190$i|0);
       if ($168) {
        store4($163,$158);
        store4($166,$161);
        $$3$i = $158;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $182 = ($156|0)==(0|0);
     do {
      if (!($182)) {
       $183 = ((($$0190$i)) + 28|0);
       $184 = load4($183);
       $185 = (31244 + ($184<<2)|0);
       $186 = load4($185);
       $187 = ($$0190$i|0)==($186|0);
       if ($187) {
        store4($185,$$3$i);
        $cond$i = ($$3$i|0)==(0|0);
        if ($cond$i) {
         $188 = 1 << $184;
         $189 = $188 ^ -1;
         $190 = $108 & $189;
         store4((30944),$190);
         break;
        }
       } else {
        $191 = load4((30956));
        $192 = ($156>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($156)) + 16|0);
        $194 = load4($193);
        $195 = ($194|0)==($$0190$i|0);
        if ($195) {
         store4($193,$$3$i);
        } else {
         $196 = ((($156)) + 20|0);
         store4($196,$$3$i);
        }
        $197 = ($$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = load4((30956));
       $199 = ($$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($$3$i)) + 24|0);
       store4($200,$156);
       $201 = ((($$0190$i)) + 16|0);
       $202 = load4($201);
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($$3$i)) + 16|0);
          store4($205,$202);
          $206 = ((($202)) + 24|0);
          store4($206,$$3$i);
          break;
         }
        }
       } while(0);
       $207 = ((($$0190$i)) + 20|0);
       $208 = load4($207);
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = load4((30956));
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($$3$i)) + 20|0);
         store4($212,$208);
         $213 = ((($208)) + 24|0);
         store4($213,$$3$i);
         break;
        }
       }
      }
     } while(0);
     $214 = ($$0191$i>>>0)<(16);
     if ($214) {
      $215 = (($$0191$i) + ($6))|0;
      $216 = $215 | 3;
      $217 = ((($$0190$i)) + 4|0);
      store4($217,$216);
      $218 = (($$0190$i) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = load4($219);
      $221 = $220 | 1;
      store4($219,$221);
     } else {
      $222 = $6 | 3;
      $223 = ((($$0190$i)) + 4|0);
      store4($223,$222);
      $224 = $$0191$i | 1;
      $225 = ((($153)) + 4|0);
      store4($225,$224);
      $226 = (($153) + ($$0191$i)|0);
      store4($226,$$0191$i);
      $227 = ($37|0)==(0);
      if (!($227)) {
       $228 = load4((30960));
       $229 = $37 >>> 3;
       $230 = $229 << 1;
       $231 = (30980 + ($230<<2)|0);
       $232 = 1 << $229;
       $233 = $8 & $232;
       $234 = ($233|0)==(0);
       if ($234) {
        $235 = $8 | $232;
        store4(30940,$235);
        $$pre$i = ((($231)) + 8|0);
        $$0187$i = $231;$$pre$phi$iZ2D = $$pre$i;
       } else {
        $236 = ((($231)) + 8|0);
        $237 = load4($236);
        $238 = load4((30956));
        $239 = ($237>>>0)<($238>>>0);
        if ($239) {
         _abort();
         // unreachable;
        } else {
         $$0187$i = $237;$$pre$phi$iZ2D = $236;
        }
       }
       store4($$pre$phi$iZ2D,$228);
       $240 = ((($$0187$i)) + 12|0);
       store4($240,$228);
       $241 = ((($228)) + 8|0);
       store4($241,$$0187$i);
       $242 = ((($228)) + 12|0);
       store4($242,$231);
      }
      store4((30948),$$0191$i);
      store4((30960),$153);
     }
     $243 = ((($$0190$i)) + 8|0);
     $$0 = $243;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $$0197 = $6;
   }
  } else {
   $244 = ($0>>>0)>(4294967231);
   if ($244) {
    $$0197 = -1;
   } else {
    $245 = (($0) + 11)|0;
    $246 = $245 & -8;
    $247 = load4((30944));
    $248 = ($247|0)==(0);
    if ($248) {
     $$0197 = $246;
    } else {
     $249 = (0 - ($246))|0;
     $250 = $245 >>> 8;
     $251 = ($250|0)==(0);
     if ($251) {
      $$0356$i = 0;
     } else {
      $252 = ($246>>>0)>(16777215);
      if ($252) {
       $$0356$i = 31;
      } else {
       $253 = (($250) + 1048320)|0;
       $254 = $253 >>> 16;
       $255 = $254 & 8;
       $256 = $250 << $255;
       $257 = (($256) + 520192)|0;
       $258 = $257 >>> 16;
       $259 = $258 & 4;
       $260 = $259 | $255;
       $261 = $256 << $259;
       $262 = (($261) + 245760)|0;
       $263 = $262 >>> 16;
       $264 = $263 & 2;
       $265 = $260 | $264;
       $266 = (14 - ($265))|0;
       $267 = $261 << $264;
       $268 = $267 >>> 15;
       $269 = (($266) + ($268))|0;
       $270 = $269 << 1;
       $271 = (($269) + 7)|0;
       $272 = $246 >>> $271;
       $273 = $272 & 1;
       $274 = $273 | $270;
       $$0356$i = $274;
      }
     }
     $275 = (31244 + ($$0356$i<<2)|0);
     $276 = load4($275);
     $277 = ($276|0)==(0|0);
     L123: do {
      if ($277) {
       $$2353$i = 0;$$3$i201 = 0;$$3348$i = $249;
       label = 86;
      } else {
       $278 = ($$0356$i|0)==(31);
       $279 = $$0356$i >>> 1;
       $280 = (25 - ($279))|0;
       $281 = $278 ? 0 : $280;
       $282 = $246 << $281;
       $$0340$i = 0;$$0345$i = $249;$$0351$i = $276;$$0357$i = $282;$$0360$i = 0;
       while(1) {
        $283 = ((($$0351$i)) + 4|0);
        $284 = load4($283);
        $285 = $284 & -8;
        $286 = (($285) - ($246))|0;
        $287 = ($286>>>0)<($$0345$i>>>0);
        if ($287) {
         $288 = ($286|0)==(0);
         if ($288) {
          $$413$i = $$0351$i;$$434912$i = 0;$$435511$i = $$0351$i;
          label = 90;
          break L123;
         } else {
          $$1341$i = $$0351$i;$$1346$i = $286;
         }
        } else {
         $$1341$i = $$0340$i;$$1346$i = $$0345$i;
        }
        $289 = ((($$0351$i)) + 20|0);
        $290 = load4($289);
        $291 = $$0357$i >>> 31;
        $292 = (((($$0351$i)) + 16|0) + ($291<<2)|0);
        $293 = load4($292);
        $294 = ($290|0)==(0|0);
        $295 = ($290|0)==($293|0);
        $or$cond1$i = $294 | $295;
        $$1361$i = $or$cond1$i ? $$0360$i : $290;
        $296 = ($293|0)==(0|0);
        $297 = $296&1;
        $298 = $297 ^ 1;
        $$0357$$i = $$0357$i << $298;
        if ($296) {
         $$2353$i = $$1361$i;$$3$i201 = $$1341$i;$$3348$i = $$1346$i;
         label = 86;
         break;
        } else {
         $$0340$i = $$1341$i;$$0345$i = $$1346$i;$$0351$i = $293;$$0357$i = $$0357$$i;$$0360$i = $$1361$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $299 = ($$2353$i|0)==(0|0);
      $300 = ($$3$i201|0)==(0|0);
      $or$cond$i = $299 & $300;
      if ($or$cond$i) {
       $301 = 2 << $$0356$i;
       $302 = (0 - ($301))|0;
       $303 = $301 | $302;
       $304 = $247 & $303;
       $305 = ($304|0)==(0);
       if ($305) {
        $$0197 = $246;
        break;
       }
       $306 = (0 - ($304))|0;
       $307 = $304 & $306;
       $308 = (($307) + -1)|0;
       $309 = $308 >>> 12;
       $310 = $309 & 16;
       $311 = $308 >>> $310;
       $312 = $311 >>> 5;
       $313 = $312 & 8;
       $314 = $313 | $310;
       $315 = $311 >>> $313;
       $316 = $315 >>> 2;
       $317 = $316 & 4;
       $318 = $314 | $317;
       $319 = $315 >>> $317;
       $320 = $319 >>> 1;
       $321 = $320 & 2;
       $322 = $318 | $321;
       $323 = $319 >>> $321;
       $324 = $323 >>> 1;
       $325 = $324 & 1;
       $326 = $322 | $325;
       $327 = $323 >>> $325;
       $328 = (($326) + ($327))|0;
       $329 = (31244 + ($328<<2)|0);
       $330 = load4($329);
       $$4355$ph$i = $330;
      } else {
       $$4355$ph$i = $$2353$i;
      }
      $331 = ($$4355$ph$i|0)==(0|0);
      if ($331) {
       $$4$lcssa$i = $$3$i201;$$4349$lcssa$i = $$3348$i;
      } else {
       $$413$i = $$3$i201;$$434912$i = $$3348$i;$$435511$i = $$4355$ph$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $332 = ((($$435511$i)) + 4|0);
       $333 = load4($332);
       $334 = $333 & -8;
       $335 = (($334) - ($246))|0;
       $336 = ($335>>>0)<($$434912$i>>>0);
       $$$4349$i = $336 ? $335 : $$434912$i;
       $$4355$$4$i = $336 ? $$435511$i : $$413$i;
       $337 = ((($$435511$i)) + 16|0);
       $338 = load4($337);
       $339 = ($338|0)==(0|0);
       if (!($339)) {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $338;
        label = 90;
        continue;
       }
       $340 = ((($$435511$i)) + 20|0);
       $341 = load4($340);
       $342 = ($341|0)==(0|0);
       if ($342) {
        $$4$lcssa$i = $$4355$$4$i;$$4349$lcssa$i = $$$4349$i;
        break;
       } else {
        $$413$i = $$4355$$4$i;$$434912$i = $$$4349$i;$$435511$i = $341;
        label = 90;
       }
      }
     }
     $343 = ($$4$lcssa$i|0)==(0|0);
     if ($343) {
      $$0197 = $246;
     } else {
      $344 = load4((30948));
      $345 = (($344) - ($246))|0;
      $346 = ($$4349$lcssa$i>>>0)<($345>>>0);
      if ($346) {
       $347 = load4((30956));
       $348 = ($$4$lcssa$i>>>0)<($347>>>0);
       if ($348) {
        _abort();
        // unreachable;
       }
       $349 = (($$4$lcssa$i) + ($246)|0);
       $350 = ($$4$lcssa$i>>>0)<($349>>>0);
       if (!($350)) {
        _abort();
        // unreachable;
       }
       $351 = ((($$4$lcssa$i)) + 24|0);
       $352 = load4($351);
       $353 = ((($$4$lcssa$i)) + 12|0);
       $354 = load4($353);
       $355 = ($354|0)==($$4$lcssa$i|0);
       do {
        if ($355) {
         $365 = ((($$4$lcssa$i)) + 20|0);
         $366 = load4($365);
         $367 = ($366|0)==(0|0);
         if ($367) {
          $368 = ((($$4$lcssa$i)) + 16|0);
          $369 = load4($368);
          $370 = ($369|0)==(0|0);
          if ($370) {
           $$3370$i = 0;
           break;
          } else {
           $$1368$i = $369;$$1372$i = $368;
          }
         } else {
          $$1368$i = $366;$$1372$i = $365;
         }
         while(1) {
          $371 = ((($$1368$i)) + 20|0);
          $372 = load4($371);
          $373 = ($372|0)==(0|0);
          if (!($373)) {
           $$1368$i = $372;$$1372$i = $371;
           continue;
          }
          $374 = ((($$1368$i)) + 16|0);
          $375 = load4($374);
          $376 = ($375|0)==(0|0);
          if ($376) {
           break;
          } else {
           $$1368$i = $375;$$1372$i = $374;
          }
         }
         $377 = ($$1372$i>>>0)<($347>>>0);
         if ($377) {
          _abort();
          // unreachable;
         } else {
          store4($$1372$i,0);
          $$3370$i = $$1368$i;
          break;
         }
        } else {
         $356 = ((($$4$lcssa$i)) + 8|0);
         $357 = load4($356);
         $358 = ($357>>>0)<($347>>>0);
         if ($358) {
          _abort();
          // unreachable;
         }
         $359 = ((($357)) + 12|0);
         $360 = load4($359);
         $361 = ($360|0)==($$4$lcssa$i|0);
         if (!($361)) {
          _abort();
          // unreachable;
         }
         $362 = ((($354)) + 8|0);
         $363 = load4($362);
         $364 = ($363|0)==($$4$lcssa$i|0);
         if ($364) {
          store4($359,$354);
          store4($362,$357);
          $$3370$i = $354;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $378 = ($352|0)==(0|0);
       do {
        if ($378) {
         $470 = $247;
        } else {
         $379 = ((($$4$lcssa$i)) + 28|0);
         $380 = load4($379);
         $381 = (31244 + ($380<<2)|0);
         $382 = load4($381);
         $383 = ($$4$lcssa$i|0)==($382|0);
         if ($383) {
          store4($381,$$3370$i);
          $cond$i204 = ($$3370$i|0)==(0|0);
          if ($cond$i204) {
           $384 = 1 << $380;
           $385 = $384 ^ -1;
           $386 = $247 & $385;
           store4((30944),$386);
           $470 = $386;
           break;
          }
         } else {
          $387 = load4((30956));
          $388 = ($352>>>0)<($387>>>0);
          if ($388) {
           _abort();
           // unreachable;
          }
          $389 = ((($352)) + 16|0);
          $390 = load4($389);
          $391 = ($390|0)==($$4$lcssa$i|0);
          if ($391) {
           store4($389,$$3370$i);
          } else {
           $392 = ((($352)) + 20|0);
           store4($392,$$3370$i);
          }
          $393 = ($$3370$i|0)==(0|0);
          if ($393) {
           $470 = $247;
           break;
          }
         }
         $394 = load4((30956));
         $395 = ($$3370$i>>>0)<($394>>>0);
         if ($395) {
          _abort();
          // unreachable;
         }
         $396 = ((($$3370$i)) + 24|0);
         store4($396,$352);
         $397 = ((($$4$lcssa$i)) + 16|0);
         $398 = load4($397);
         $399 = ($398|0)==(0|0);
         do {
          if (!($399)) {
           $400 = ($398>>>0)<($394>>>0);
           if ($400) {
            _abort();
            // unreachable;
           } else {
            $401 = ((($$3370$i)) + 16|0);
            store4($401,$398);
            $402 = ((($398)) + 24|0);
            store4($402,$$3370$i);
            break;
           }
          }
         } while(0);
         $403 = ((($$4$lcssa$i)) + 20|0);
         $404 = load4($403);
         $405 = ($404|0)==(0|0);
         if ($405) {
          $470 = $247;
         } else {
          $406 = load4((30956));
          $407 = ($404>>>0)<($406>>>0);
          if ($407) {
           _abort();
           // unreachable;
          } else {
           $408 = ((($$3370$i)) + 20|0);
           store4($408,$404);
           $409 = ((($404)) + 24|0);
           store4($409,$$3370$i);
           $470 = $247;
           break;
          }
         }
        }
       } while(0);
       $410 = ($$4349$lcssa$i>>>0)<(16);
       do {
        if ($410) {
         $411 = (($$4349$lcssa$i) + ($246))|0;
         $412 = $411 | 3;
         $413 = ((($$4$lcssa$i)) + 4|0);
         store4($413,$412);
         $414 = (($$4$lcssa$i) + ($411)|0);
         $415 = ((($414)) + 4|0);
         $416 = load4($415);
         $417 = $416 | 1;
         store4($415,$417);
        } else {
         $418 = $246 | 3;
         $419 = ((($$4$lcssa$i)) + 4|0);
         store4($419,$418);
         $420 = $$4349$lcssa$i | 1;
         $421 = ((($349)) + 4|0);
         store4($421,$420);
         $422 = (($349) + ($$4349$lcssa$i)|0);
         store4($422,$$4349$lcssa$i);
         $423 = $$4349$lcssa$i >>> 3;
         $424 = ($$4349$lcssa$i>>>0)<(256);
         if ($424) {
          $425 = $423 << 1;
          $426 = (30980 + ($425<<2)|0);
          $427 = load4(30940);
          $428 = 1 << $423;
          $429 = $427 & $428;
          $430 = ($429|0)==(0);
          if ($430) {
           $431 = $427 | $428;
           store4(30940,$431);
           $$pre$i205 = ((($426)) + 8|0);
           $$0366$i = $426;$$pre$phi$i206Z2D = $$pre$i205;
          } else {
           $432 = ((($426)) + 8|0);
           $433 = load4($432);
           $434 = load4((30956));
           $435 = ($433>>>0)<($434>>>0);
           if ($435) {
            _abort();
            // unreachable;
           } else {
            $$0366$i = $433;$$pre$phi$i206Z2D = $432;
           }
          }
          store4($$pre$phi$i206Z2D,$349);
          $436 = ((($$0366$i)) + 12|0);
          store4($436,$349);
          $437 = ((($349)) + 8|0);
          store4($437,$$0366$i);
          $438 = ((($349)) + 12|0);
          store4($438,$426);
          break;
         }
         $439 = $$4349$lcssa$i >>> 8;
         $440 = ($439|0)==(0);
         if ($440) {
          $$0359$i = 0;
         } else {
          $441 = ($$4349$lcssa$i>>>0)>(16777215);
          if ($441) {
           $$0359$i = 31;
          } else {
           $442 = (($439) + 1048320)|0;
           $443 = $442 >>> 16;
           $444 = $443 & 8;
           $445 = $439 << $444;
           $446 = (($445) + 520192)|0;
           $447 = $446 >>> 16;
           $448 = $447 & 4;
           $449 = $448 | $444;
           $450 = $445 << $448;
           $451 = (($450) + 245760)|0;
           $452 = $451 >>> 16;
           $453 = $452 & 2;
           $454 = $449 | $453;
           $455 = (14 - ($454))|0;
           $456 = $450 << $453;
           $457 = $456 >>> 15;
           $458 = (($455) + ($457))|0;
           $459 = $458 << 1;
           $460 = (($458) + 7)|0;
           $461 = $$4349$lcssa$i >>> $460;
           $462 = $461 & 1;
           $463 = $462 | $459;
           $$0359$i = $463;
          }
         }
         $464 = (31244 + ($$0359$i<<2)|0);
         $465 = ((($349)) + 28|0);
         store4($465,$$0359$i);
         $466 = ((($349)) + 16|0);
         $467 = ((($466)) + 4|0);
         store4($467,0);
         store4($466,0);
         $468 = 1 << $$0359$i;
         $469 = $470 & $468;
         $471 = ($469|0)==(0);
         if ($471) {
          $472 = $470 | $468;
          store4((30944),$472);
          store4($464,$349);
          $473 = ((($349)) + 24|0);
          store4($473,$464);
          $474 = ((($349)) + 12|0);
          store4($474,$349);
          $475 = ((($349)) + 8|0);
          store4($475,$349);
          break;
         }
         $476 = load4($464);
         $477 = ($$0359$i|0)==(31);
         $478 = $$0359$i >>> 1;
         $479 = (25 - ($478))|0;
         $480 = $477 ? 0 : $479;
         $481 = $$4349$lcssa$i << $480;
         $$0342$i = $481;$$0343$i = $476;
         while(1) {
          $482 = ((($$0343$i)) + 4|0);
          $483 = load4($482);
          $484 = $483 & -8;
          $485 = ($484|0)==($$4349$lcssa$i|0);
          if ($485) {
           label = 148;
           break;
          }
          $486 = $$0342$i >>> 31;
          $487 = (((($$0343$i)) + 16|0) + ($486<<2)|0);
          $488 = $$0342$i << 1;
          $489 = load4($487);
          $490 = ($489|0)==(0|0);
          if ($490) {
           label = 145;
           break;
          } else {
           $$0342$i = $488;$$0343$i = $489;
          }
         }
         if ((label|0) == 145) {
          $491 = load4((30956));
          $492 = ($487>>>0)<($491>>>0);
          if ($492) {
           _abort();
           // unreachable;
          } else {
           store4($487,$349);
           $493 = ((($349)) + 24|0);
           store4($493,$$0343$i);
           $494 = ((($349)) + 12|0);
           store4($494,$349);
           $495 = ((($349)) + 8|0);
           store4($495,$349);
           break;
          }
         }
         else if ((label|0) == 148) {
          $496 = ((($$0343$i)) + 8|0);
          $497 = load4($496);
          $498 = load4((30956));
          $499 = ($497>>>0)>=($498>>>0);
          $not$7$i = ($$0343$i>>>0)>=($498>>>0);
          $500 = $499 & $not$7$i;
          if ($500) {
           $501 = ((($497)) + 12|0);
           store4($501,$349);
           store4($496,$349);
           $502 = ((($349)) + 8|0);
           store4($502,$497);
           $503 = ((($349)) + 12|0);
           store4($503,$$0343$i);
           $504 = ((($349)) + 24|0);
           store4($504,0);
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $505 = ((($$4$lcssa$i)) + 8|0);
       $$0 = $505;
       STACKTOP = sp;return ($$0|0);
      } else {
       $$0197 = $246;
      }
     }
    }
   }
  }
 } while(0);
 $506 = load4((30948));
 $507 = ($506>>>0)<($$0197>>>0);
 if (!($507)) {
  $508 = (($506) - ($$0197))|0;
  $509 = load4((30960));
  $510 = ($508>>>0)>(15);
  if ($510) {
   $511 = (($509) + ($$0197)|0);
   store4((30960),$511);
   store4((30948),$508);
   $512 = $508 | 1;
   $513 = ((($511)) + 4|0);
   store4($513,$512);
   $514 = (($511) + ($508)|0);
   store4($514,$508);
   $515 = $$0197 | 3;
   $516 = ((($509)) + 4|0);
   store4($516,$515);
  } else {
   store4((30948),0);
   store4((30960),0);
   $517 = $506 | 3;
   $518 = ((($509)) + 4|0);
   store4($518,$517);
   $519 = (($509) + ($506)|0);
   $520 = ((($519)) + 4|0);
   $521 = load4($520);
   $522 = $521 | 1;
   store4($520,$522);
  }
  $523 = ((($509)) + 8|0);
  $$0 = $523;
  STACKTOP = sp;return ($$0|0);
 }
 $524 = load4((30952));
 $525 = ($524>>>0)>($$0197>>>0);
 if ($525) {
  $526 = (($524) - ($$0197))|0;
  store4((30952),$526);
  $527 = load4((30964));
  $528 = (($527) + ($$0197)|0);
  store4((30964),$528);
  $529 = $526 | 1;
  $530 = ((($528)) + 4|0);
  store4($530,$529);
  $531 = $$0197 | 3;
  $532 = ((($527)) + 4|0);
  store4($532,$531);
  $533 = ((($527)) + 8|0);
  $$0 = $533;
  STACKTOP = sp;return ($$0|0);
 }
 $534 = load4(31412);
 $535 = ($534|0)==(0);
 if ($535) {
  store4((31420),4096);
  store4((31416),4096);
  store4((31424),-1);
  store4((31428),-1);
  store4((31432),0);
  store4((31384),0);
  $536 = $1;
  $537 = $536 & -16;
  $538 = $537 ^ 1431655768;
  store4($1,$538);
  store4(31412,$538);
  $542 = 4096;
 } else {
  $$pre$i208 = load4((31420));
  $542 = $$pre$i208;
 }
 $539 = (($$0197) + 48)|0;
 $540 = (($$0197) + 47)|0;
 $541 = (($542) + ($540))|0;
 $543 = (0 - ($542))|0;
 $544 = $541 & $543;
 $545 = ($544>>>0)>($$0197>>>0);
 if (!($545)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $546 = load4((31380));
 $547 = ($546|0)==(0);
 if (!($547)) {
  $548 = load4((31372));
  $549 = (($548) + ($544))|0;
  $550 = ($549>>>0)<=($548>>>0);
  $551 = ($549>>>0)>($546>>>0);
  $or$cond1$i210 = $550 | $551;
  if ($or$cond1$i210) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $552 = load4((31384));
 $553 = $552 & 4;
 $554 = ($553|0)==(0);
 L255: do {
  if ($554) {
   $555 = load4((30964));
   $556 = ($555|0)==(0|0);
   L257: do {
    if ($556) {
     label = 172;
    } else {
     $$0$i17$i = (31388);
     while(1) {
      $557 = load4($$0$i17$i);
      $558 = ($557>>>0)>($555>>>0);
      if (!($558)) {
       $559 = ((($$0$i17$i)) + 4|0);
       $560 = load4($559);
       $561 = (($557) + ($560)|0);
       $562 = ($561>>>0)>($555>>>0);
       if ($562) {
        break;
       }
      }
      $563 = ((($$0$i17$i)) + 8|0);
      $564 = load4($563);
      $565 = ($564|0)==(0|0);
      if ($565) {
       label = 172;
       break L257;
      } else {
       $$0$i17$i = $564;
      }
     }
     $588 = (($541) - ($524))|0;
     $589 = $588 & $543;
     $590 = ($589>>>0)<(2147483647);
     if ($590) {
      $591 = (_sbrk(($589|0))|0);
      $592 = load4($$0$i17$i);
      $593 = load4($559);
      $594 = (($592) + ($593)|0);
      $595 = ($591|0)==($594|0);
      if ($595) {
       $596 = ($591|0)==((-1)|0);
       if (!($596)) {
        $$723947$i = $589;$$748$i = $591;
        label = 190;
        break L255;
       }
      } else {
       $$2247$ph$i = $591;$$2253$ph$i = $589;
       label = 180;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 172) {
     $566 = (_sbrk(0)|0);
     $567 = ($566|0)==((-1)|0);
     if (!($567)) {
      $568 = $566;
      $569 = load4((31416));
      $570 = (($569) + -1)|0;
      $571 = $570 & $568;
      $572 = ($571|0)==(0);
      $573 = (($570) + ($568))|0;
      $574 = (0 - ($569))|0;
      $575 = $573 & $574;
      $576 = (($575) - ($568))|0;
      $577 = $572 ? 0 : $576;
      $$$i = (($577) + ($544))|0;
      $578 = load4((31372));
      $579 = (($$$i) + ($578))|0;
      $580 = ($$$i>>>0)>($$0197>>>0);
      $581 = ($$$i>>>0)<(2147483647);
      $or$cond$i211 = $580 & $581;
      if ($or$cond$i211) {
       $582 = load4((31380));
       $583 = ($582|0)==(0);
       if (!($583)) {
        $584 = ($579>>>0)<=($578>>>0);
        $585 = ($579>>>0)>($582>>>0);
        $or$cond2$i = $584 | $585;
        if ($or$cond2$i) {
         break;
        }
       }
       $586 = (_sbrk(($$$i|0))|0);
       $587 = ($586|0)==($566|0);
       if ($587) {
        $$723947$i = $$$i;$$748$i = $566;
        label = 190;
        break L255;
       } else {
        $$2247$ph$i = $586;$$2253$ph$i = $$$i;
        label = 180;
       }
      }
     }
    }
   } while(0);
   L274: do {
    if ((label|0) == 180) {
     $597 = (0 - ($$2253$ph$i))|0;
     $598 = ($$2247$ph$i|0)!=((-1)|0);
     $599 = ($$2253$ph$i>>>0)<(2147483647);
     $or$cond7$i = $599 & $598;
     $600 = ($539>>>0)>($$2253$ph$i>>>0);
     $or$cond10$i = $600 & $or$cond7$i;
     do {
      if ($or$cond10$i) {
       $601 = load4((31420));
       $602 = (($540) - ($$2253$ph$i))|0;
       $603 = (($602) + ($601))|0;
       $604 = (0 - ($601))|0;
       $605 = $603 & $604;
       $606 = ($605>>>0)<(2147483647);
       if ($606) {
        $607 = (_sbrk(($605|0))|0);
        $608 = ($607|0)==((-1)|0);
        if ($608) {
         (_sbrk(($597|0))|0);
         break L274;
        } else {
         $609 = (($605) + ($$2253$ph$i))|0;
         $$5256$i = $609;
         break;
        }
       } else {
        $$5256$i = $$2253$ph$i;
       }
      } else {
       $$5256$i = $$2253$ph$i;
      }
     } while(0);
     $610 = ($$2247$ph$i|0)==((-1)|0);
     if (!($610)) {
      $$723947$i = $$5256$i;$$748$i = $$2247$ph$i;
      label = 190;
      break L255;
     }
    }
   } while(0);
   $611 = load4((31384));
   $612 = $611 | 4;
   store4((31384),$612);
   label = 187;
  } else {
   label = 187;
  }
 } while(0);
 if ((label|0) == 187) {
  $613 = ($544>>>0)<(2147483647);
  if ($613) {
   $614 = (_sbrk(($544|0))|0);
   $615 = (_sbrk(0)|0);
   $616 = ($614|0)!=((-1)|0);
   $617 = ($615|0)!=((-1)|0);
   $or$cond5$i = $616 & $617;
   $618 = ($614>>>0)<($615>>>0);
   $or$cond11$i = $618 & $or$cond5$i;
   if ($or$cond11$i) {
    $619 = $615;
    $620 = $614;
    $621 = (($619) - ($620))|0;
    $622 = (($$0197) + 40)|0;
    $$not$i = ($621>>>0)>($622>>>0);
    if ($$not$i) {
     $$723947$i = $621;$$748$i = $614;
     label = 190;
    }
   }
  }
 }
 if ((label|0) == 190) {
  $623 = load4((31372));
  $624 = (($623) + ($$723947$i))|0;
  store4((31372),$624);
  $625 = load4((31376));
  $626 = ($624>>>0)>($625>>>0);
  if ($626) {
   store4((31376),$624);
  }
  $627 = load4((30964));
  $628 = ($627|0)==(0|0);
  do {
   if ($628) {
    $629 = load4((30956));
    $630 = ($629|0)==(0|0);
    $631 = ($$748$i>>>0)<($629>>>0);
    $or$cond12$i = $630 | $631;
    if ($or$cond12$i) {
     store4((30956),$$748$i);
    }
    store4((31388),$$748$i);
    store4((31392),$$723947$i);
    store4((31400),0);
    $632 = load4(31412);
    store4((30976),$632);
    store4((30972),-1);
    $$01$i$i = 0;
    while(1) {
     $633 = $$01$i$i << 1;
     $634 = (30980 + ($633<<2)|0);
     $635 = ((($634)) + 12|0);
     store4($635,$634);
     $636 = ((($634)) + 8|0);
     store4($636,$634);
     $637 = (($$01$i$i) + 1)|0;
     $exitcond$i$i = ($637|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $637;
     }
    }
    $638 = (($$723947$i) + -40)|0;
    $639 = ((($$748$i)) + 8|0);
    $640 = $639;
    $641 = $640 & 7;
    $642 = ($641|0)==(0);
    $643 = (0 - ($640))|0;
    $644 = $643 & 7;
    $645 = $642 ? 0 : $644;
    $646 = (($$748$i) + ($645)|0);
    $647 = (($638) - ($645))|0;
    store4((30964),$646);
    store4((30952),$647);
    $648 = $647 | 1;
    $649 = ((($646)) + 4|0);
    store4($649,$648);
    $650 = (($646) + ($647)|0);
    $651 = ((($650)) + 4|0);
    store4($651,40);
    $652 = load4((31428));
    store4((30968),$652);
   } else {
    $$024370$i = (31388);
    while(1) {
     $653 = load4($$024370$i);
     $654 = ((($$024370$i)) + 4|0);
     $655 = load4($654);
     $656 = (($653) + ($655)|0);
     $657 = ($$748$i|0)==($656|0);
     if ($657) {
      label = 200;
      break;
     }
     $658 = ((($$024370$i)) + 8|0);
     $659 = load4($658);
     $660 = ($659|0)==(0|0);
     if ($660) {
      break;
     } else {
      $$024370$i = $659;
     }
    }
    if ((label|0) == 200) {
     $661 = ((($$024370$i)) + 12|0);
     $662 = load4($661);
     $663 = $662 & 8;
     $664 = ($663|0)==(0);
     if ($664) {
      $665 = ($627>>>0)>=($653>>>0);
      $666 = ($627>>>0)<($$748$i>>>0);
      $or$cond50$i = $666 & $665;
      if ($or$cond50$i) {
       $667 = (($655) + ($$723947$i))|0;
       store4($654,$667);
       $668 = load4((30952));
       $669 = ((($627)) + 8|0);
       $670 = $669;
       $671 = $670 & 7;
       $672 = ($671|0)==(0);
       $673 = (0 - ($670))|0;
       $674 = $673 & 7;
       $675 = $672 ? 0 : $674;
       $676 = (($627) + ($675)|0);
       $677 = (($$723947$i) - ($675))|0;
       $678 = (($677) + ($668))|0;
       store4((30964),$676);
       store4((30952),$678);
       $679 = $678 | 1;
       $680 = ((($676)) + 4|0);
       store4($680,$679);
       $681 = (($676) + ($678)|0);
       $682 = ((($681)) + 4|0);
       store4($682,40);
       $683 = load4((31428));
       store4((30968),$683);
       break;
      }
     }
    }
    $684 = load4((30956));
    $685 = ($$748$i>>>0)<($684>>>0);
    if ($685) {
     store4((30956),$$748$i);
     $749 = $$748$i;
    } else {
     $749 = $684;
    }
    $686 = (($$748$i) + ($$723947$i)|0);
    $$124469$i = (31388);
    while(1) {
     $687 = load4($$124469$i);
     $688 = ($687|0)==($686|0);
     if ($688) {
      label = 208;
      break;
     }
     $689 = ((($$124469$i)) + 8|0);
     $690 = load4($689);
     $691 = ($690|0)==(0|0);
     if ($691) {
      $$0$i$i$i = (31388);
      break;
     } else {
      $$124469$i = $690;
     }
    }
    if ((label|0) == 208) {
     $692 = ((($$124469$i)) + 12|0);
     $693 = load4($692);
     $694 = $693 & 8;
     $695 = ($694|0)==(0);
     if ($695) {
      store4($$124469$i,$$748$i);
      $696 = ((($$124469$i)) + 4|0);
      $697 = load4($696);
      $698 = (($697) + ($$723947$i))|0;
      store4($696,$698);
      $699 = ((($$748$i)) + 8|0);
      $700 = $699;
      $701 = $700 & 7;
      $702 = ($701|0)==(0);
      $703 = (0 - ($700))|0;
      $704 = $703 & 7;
      $705 = $702 ? 0 : $704;
      $706 = (($$748$i) + ($705)|0);
      $707 = ((($686)) + 8|0);
      $708 = $707;
      $709 = $708 & 7;
      $710 = ($709|0)==(0);
      $711 = (0 - ($708))|0;
      $712 = $711 & 7;
      $713 = $710 ? 0 : $712;
      $714 = (($686) + ($713)|0);
      $715 = $714;
      $716 = $706;
      $717 = (($715) - ($716))|0;
      $718 = (($706) + ($$0197)|0);
      $719 = (($717) - ($$0197))|0;
      $720 = $$0197 | 3;
      $721 = ((($706)) + 4|0);
      store4($721,$720);
      $722 = ($714|0)==($627|0);
      do {
       if ($722) {
        $723 = load4((30952));
        $724 = (($723) + ($719))|0;
        store4((30952),$724);
        store4((30964),$718);
        $725 = $724 | 1;
        $726 = ((($718)) + 4|0);
        store4($726,$725);
       } else {
        $727 = load4((30960));
        $728 = ($714|0)==($727|0);
        if ($728) {
         $729 = load4((30948));
         $730 = (($729) + ($719))|0;
         store4((30948),$730);
         store4((30960),$718);
         $731 = $730 | 1;
         $732 = ((($718)) + 4|0);
         store4($732,$731);
         $733 = (($718) + ($730)|0);
         store4($733,$730);
         break;
        }
        $734 = ((($714)) + 4|0);
        $735 = load4($734);
        $736 = $735 & 3;
        $737 = ($736|0)==(1);
        if ($737) {
         $738 = $735 & -8;
         $739 = $735 >>> 3;
         $740 = ($735>>>0)<(256);
         L326: do {
          if ($740) {
           $741 = ((($714)) + 8|0);
           $742 = load4($741);
           $743 = ((($714)) + 12|0);
           $744 = load4($743);
           $745 = $739 << 1;
           $746 = (30980 + ($745<<2)|0);
           $747 = ($742|0)==($746|0);
           do {
            if (!($747)) {
             $748 = ($742>>>0)<($749>>>0);
             if ($748) {
              _abort();
              // unreachable;
             }
             $750 = ((($742)) + 12|0);
             $751 = load4($750);
             $752 = ($751|0)==($714|0);
             if ($752) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $753 = ($744|0)==($742|0);
           if ($753) {
            $754 = 1 << $739;
            $755 = $754 ^ -1;
            $756 = load4(30940);
            $757 = $756 & $755;
            store4(30940,$757);
            break;
           }
           $758 = ($744|0)==($746|0);
           do {
            if ($758) {
             $$pre9$i$i = ((($744)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $759 = ($744>>>0)<($749>>>0);
             if ($759) {
              _abort();
              // unreachable;
             }
             $760 = ((($744)) + 8|0);
             $761 = load4($760);
             $762 = ($761|0)==($714|0);
             if ($762) {
              $$pre$phi10$i$iZ2D = $760;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $763 = ((($742)) + 12|0);
           store4($763,$744);
           store4($$pre$phi10$i$iZ2D,$742);
          } else {
           $764 = ((($714)) + 24|0);
           $765 = load4($764);
           $766 = ((($714)) + 12|0);
           $767 = load4($766);
           $768 = ($767|0)==($714|0);
           do {
            if ($768) {
             $778 = ((($714)) + 16|0);
             $779 = ((($778)) + 4|0);
             $780 = load4($779);
             $781 = ($780|0)==(0|0);
             if ($781) {
              $782 = load4($778);
              $783 = ($782|0)==(0|0);
              if ($783) {
               $$3$i$i = 0;
               break;
              } else {
               $$1290$i$i = $782;$$1292$i$i = $778;
              }
             } else {
              $$1290$i$i = $780;$$1292$i$i = $779;
             }
             while(1) {
              $784 = ((($$1290$i$i)) + 20|0);
              $785 = load4($784);
              $786 = ($785|0)==(0|0);
              if (!($786)) {
               $$1290$i$i = $785;$$1292$i$i = $784;
               continue;
              }
              $787 = ((($$1290$i$i)) + 16|0);
              $788 = load4($787);
              $789 = ($788|0)==(0|0);
              if ($789) {
               break;
              } else {
               $$1290$i$i = $788;$$1292$i$i = $787;
              }
             }
             $790 = ($$1292$i$i>>>0)<($749>>>0);
             if ($790) {
              _abort();
              // unreachable;
             } else {
              store4($$1292$i$i,0);
              $$3$i$i = $$1290$i$i;
              break;
             }
            } else {
             $769 = ((($714)) + 8|0);
             $770 = load4($769);
             $771 = ($770>>>0)<($749>>>0);
             if ($771) {
              _abort();
              // unreachable;
             }
             $772 = ((($770)) + 12|0);
             $773 = load4($772);
             $774 = ($773|0)==($714|0);
             if (!($774)) {
              _abort();
              // unreachable;
             }
             $775 = ((($767)) + 8|0);
             $776 = load4($775);
             $777 = ($776|0)==($714|0);
             if ($777) {
              store4($772,$767);
              store4($775,$770);
              $$3$i$i = $767;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $791 = ($765|0)==(0|0);
           if ($791) {
            break;
           }
           $792 = ((($714)) + 28|0);
           $793 = load4($792);
           $794 = (31244 + ($793<<2)|0);
           $795 = load4($794);
           $796 = ($714|0)==($795|0);
           do {
            if ($796) {
             store4($794,$$3$i$i);
             $cond$i$i = ($$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $797 = 1 << $793;
             $798 = $797 ^ -1;
             $799 = load4((30944));
             $800 = $799 & $798;
             store4((30944),$800);
             break L326;
            } else {
             $801 = load4((30956));
             $802 = ($765>>>0)<($801>>>0);
             if ($802) {
              _abort();
              // unreachable;
             }
             $803 = ((($765)) + 16|0);
             $804 = load4($803);
             $805 = ($804|0)==($714|0);
             if ($805) {
              store4($803,$$3$i$i);
             } else {
              $806 = ((($765)) + 20|0);
              store4($806,$$3$i$i);
             }
             $807 = ($$3$i$i|0)==(0|0);
             if ($807) {
              break L326;
             }
            }
           } while(0);
           $808 = load4((30956));
           $809 = ($$3$i$i>>>0)<($808>>>0);
           if ($809) {
            _abort();
            // unreachable;
           }
           $810 = ((($$3$i$i)) + 24|0);
           store4($810,$765);
           $811 = ((($714)) + 16|0);
           $812 = load4($811);
           $813 = ($812|0)==(0|0);
           do {
            if (!($813)) {
             $814 = ($812>>>0)<($808>>>0);
             if ($814) {
              _abort();
              // unreachable;
             } else {
              $815 = ((($$3$i$i)) + 16|0);
              store4($815,$812);
              $816 = ((($812)) + 24|0);
              store4($816,$$3$i$i);
              break;
             }
            }
           } while(0);
           $817 = ((($811)) + 4|0);
           $818 = load4($817);
           $819 = ($818|0)==(0|0);
           if ($819) {
            break;
           }
           $820 = load4((30956));
           $821 = ($818>>>0)<($820>>>0);
           if ($821) {
            _abort();
            // unreachable;
           } else {
            $822 = ((($$3$i$i)) + 20|0);
            store4($822,$818);
            $823 = ((($818)) + 24|0);
            store4($823,$$3$i$i);
            break;
           }
          }
         } while(0);
         $824 = (($714) + ($738)|0);
         $825 = (($738) + ($719))|0;
         $$0$i18$i = $824;$$0286$i$i = $825;
        } else {
         $$0$i18$i = $714;$$0286$i$i = $719;
        }
        $826 = ((($$0$i18$i)) + 4|0);
        $827 = load4($826);
        $828 = $827 & -2;
        store4($826,$828);
        $829 = $$0286$i$i | 1;
        $830 = ((($718)) + 4|0);
        store4($830,$829);
        $831 = (($718) + ($$0286$i$i)|0);
        store4($831,$$0286$i$i);
        $832 = $$0286$i$i >>> 3;
        $833 = ($$0286$i$i>>>0)<(256);
        if ($833) {
         $834 = $832 << 1;
         $835 = (30980 + ($834<<2)|0);
         $836 = load4(30940);
         $837 = 1 << $832;
         $838 = $836 & $837;
         $839 = ($838|0)==(0);
         do {
          if ($839) {
           $840 = $836 | $837;
           store4(30940,$840);
           $$pre$i19$i = ((($835)) + 8|0);
           $$0294$i$i = $835;$$pre$phi$i20$iZ2D = $$pre$i19$i;
          } else {
           $841 = ((($835)) + 8|0);
           $842 = load4($841);
           $843 = load4((30956));
           $844 = ($842>>>0)<($843>>>0);
           if (!($844)) {
            $$0294$i$i = $842;$$pre$phi$i20$iZ2D = $841;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         store4($$pre$phi$i20$iZ2D,$718);
         $845 = ((($$0294$i$i)) + 12|0);
         store4($845,$718);
         $846 = ((($718)) + 8|0);
         store4($846,$$0294$i$i);
         $847 = ((($718)) + 12|0);
         store4($847,$835);
         break;
        }
        $848 = $$0286$i$i >>> 8;
        $849 = ($848|0)==(0);
        do {
         if ($849) {
          $$0295$i$i = 0;
         } else {
          $850 = ($$0286$i$i>>>0)>(16777215);
          if ($850) {
           $$0295$i$i = 31;
           break;
          }
          $851 = (($848) + 1048320)|0;
          $852 = $851 >>> 16;
          $853 = $852 & 8;
          $854 = $848 << $853;
          $855 = (($854) + 520192)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 4;
          $858 = $857 | $853;
          $859 = $854 << $857;
          $860 = (($859) + 245760)|0;
          $861 = $860 >>> 16;
          $862 = $861 & 2;
          $863 = $858 | $862;
          $864 = (14 - ($863))|0;
          $865 = $859 << $862;
          $866 = $865 >>> 15;
          $867 = (($864) + ($866))|0;
          $868 = $867 << 1;
          $869 = (($867) + 7)|0;
          $870 = $$0286$i$i >>> $869;
          $871 = $870 & 1;
          $872 = $871 | $868;
          $$0295$i$i = $872;
         }
        } while(0);
        $873 = (31244 + ($$0295$i$i<<2)|0);
        $874 = ((($718)) + 28|0);
        store4($874,$$0295$i$i);
        $875 = ((($718)) + 16|0);
        $876 = ((($875)) + 4|0);
        store4($876,0);
        store4($875,0);
        $877 = load4((30944));
        $878 = 1 << $$0295$i$i;
        $879 = $877 & $878;
        $880 = ($879|0)==(0);
        if ($880) {
         $881 = $877 | $878;
         store4((30944),$881);
         store4($873,$718);
         $882 = ((($718)) + 24|0);
         store4($882,$873);
         $883 = ((($718)) + 12|0);
         store4($883,$718);
         $884 = ((($718)) + 8|0);
         store4($884,$718);
         break;
        }
        $885 = load4($873);
        $886 = ($$0295$i$i|0)==(31);
        $887 = $$0295$i$i >>> 1;
        $888 = (25 - ($887))|0;
        $889 = $886 ? 0 : $888;
        $890 = $$0286$i$i << $889;
        $$0287$i$i = $890;$$0288$i$i = $885;
        while(1) {
         $891 = ((($$0288$i$i)) + 4|0);
         $892 = load4($891);
         $893 = $892 & -8;
         $894 = ($893|0)==($$0286$i$i|0);
         if ($894) {
          label = 278;
          break;
         }
         $895 = $$0287$i$i >>> 31;
         $896 = (((($$0288$i$i)) + 16|0) + ($895<<2)|0);
         $897 = $$0287$i$i << 1;
         $898 = load4($896);
         $899 = ($898|0)==(0|0);
         if ($899) {
          label = 275;
          break;
         } else {
          $$0287$i$i = $897;$$0288$i$i = $898;
         }
        }
        if ((label|0) == 275) {
         $900 = load4((30956));
         $901 = ($896>>>0)<($900>>>0);
         if ($901) {
          _abort();
          // unreachable;
         } else {
          store4($896,$718);
          $902 = ((($718)) + 24|0);
          store4($902,$$0288$i$i);
          $903 = ((($718)) + 12|0);
          store4($903,$718);
          $904 = ((($718)) + 8|0);
          store4($904,$718);
          break;
         }
        }
        else if ((label|0) == 278) {
         $905 = ((($$0288$i$i)) + 8|0);
         $906 = load4($905);
         $907 = load4((30956));
         $908 = ($906>>>0)>=($907>>>0);
         $not$$i22$i = ($$0288$i$i>>>0)>=($907>>>0);
         $909 = $908 & $not$$i22$i;
         if ($909) {
          $910 = ((($906)) + 12|0);
          store4($910,$718);
          store4($905,$718);
          $911 = ((($718)) + 8|0);
          store4($911,$906);
          $912 = ((($718)) + 12|0);
          store4($912,$$0288$i$i);
          $913 = ((($718)) + 24|0);
          store4($913,0);
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1044 = ((($706)) + 8|0);
      $$0 = $1044;
      STACKTOP = sp;return ($$0|0);
     } else {
      $$0$i$i$i = (31388);
     }
    }
    while(1) {
     $914 = load4($$0$i$i$i);
     $915 = ($914>>>0)>($627>>>0);
     if (!($915)) {
      $916 = ((($$0$i$i$i)) + 4|0);
      $917 = load4($916);
      $918 = (($914) + ($917)|0);
      $919 = ($918>>>0)>($627>>>0);
      if ($919) {
       break;
      }
     }
     $920 = ((($$0$i$i$i)) + 8|0);
     $921 = load4($920);
     $$0$i$i$i = $921;
    }
    $922 = ((($918)) + -47|0);
    $923 = ((($922)) + 8|0);
    $924 = $923;
    $925 = $924 & 7;
    $926 = ($925|0)==(0);
    $927 = (0 - ($924))|0;
    $928 = $927 & 7;
    $929 = $926 ? 0 : $928;
    $930 = (($922) + ($929)|0);
    $931 = ((($627)) + 16|0);
    $932 = ($930>>>0)<($931>>>0);
    $933 = $932 ? $627 : $930;
    $934 = ((($933)) + 8|0);
    $935 = ((($933)) + 24|0);
    $936 = (($$723947$i) + -40)|0;
    $937 = ((($$748$i)) + 8|0);
    $938 = $937;
    $939 = $938 & 7;
    $940 = ($939|0)==(0);
    $941 = (0 - ($938))|0;
    $942 = $941 & 7;
    $943 = $940 ? 0 : $942;
    $944 = (($$748$i) + ($943)|0);
    $945 = (($936) - ($943))|0;
    store4((30964),$944);
    store4((30952),$945);
    $946 = $945 | 1;
    $947 = ((($944)) + 4|0);
    store4($947,$946);
    $948 = (($944) + ($945)|0);
    $949 = ((($948)) + 4|0);
    store4($949,40);
    $950 = load4((31428));
    store4((30968),$950);
    $951 = ((($933)) + 4|0);
    store4($951,27);
    ; store8($934,load8((31388),4),4); store8($934+8 | 0,load8((31388)+8 | 0,4),4);
    store4((31388),$$748$i);
    store4((31392),$$723947$i);
    store4((31400),0);
    store4((31396),$934);
    $$0$i$i = $935;
    while(1) {
     $952 = ((($$0$i$i)) + 4|0);
     store4($952,7);
     $953 = ((($952)) + 4|0);
     $954 = ($953>>>0)<($918>>>0);
     if ($954) {
      $$0$i$i = $952;
     } else {
      break;
     }
    }
    $955 = ($933|0)==($627|0);
    if (!($955)) {
     $956 = $933;
     $957 = $627;
     $958 = (($956) - ($957))|0;
     $959 = load4($951);
     $960 = $959 & -2;
     store4($951,$960);
     $961 = $958 | 1;
     $962 = ((($627)) + 4|0);
     store4($962,$961);
     store4($933,$958);
     $963 = $958 >>> 3;
     $964 = ($958>>>0)<(256);
     if ($964) {
      $965 = $963 << 1;
      $966 = (30980 + ($965<<2)|0);
      $967 = load4(30940);
      $968 = 1 << $963;
      $969 = $967 & $968;
      $970 = ($969|0)==(0);
      if ($970) {
       $971 = $967 | $968;
       store4(30940,$971);
       $$pre$i$i = ((($966)) + 8|0);
       $$0211$i$i = $966;$$pre$phi$i$iZ2D = $$pre$i$i;
      } else {
       $972 = ((($966)) + 8|0);
       $973 = load4($972);
       $974 = load4((30956));
       $975 = ($973>>>0)<($974>>>0);
       if ($975) {
        _abort();
        // unreachable;
       } else {
        $$0211$i$i = $973;$$pre$phi$i$iZ2D = $972;
       }
      }
      store4($$pre$phi$i$iZ2D,$627);
      $976 = ((($$0211$i$i)) + 12|0);
      store4($976,$627);
      $977 = ((($627)) + 8|0);
      store4($977,$$0211$i$i);
      $978 = ((($627)) + 12|0);
      store4($978,$966);
      break;
     }
     $979 = $958 >>> 8;
     $980 = ($979|0)==(0);
     if ($980) {
      $$0212$i$i = 0;
     } else {
      $981 = ($958>>>0)>(16777215);
      if ($981) {
       $$0212$i$i = 31;
      } else {
       $982 = (($979) + 1048320)|0;
       $983 = $982 >>> 16;
       $984 = $983 & 8;
       $985 = $979 << $984;
       $986 = (($985) + 520192)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 4;
       $989 = $988 | $984;
       $990 = $985 << $988;
       $991 = (($990) + 245760)|0;
       $992 = $991 >>> 16;
       $993 = $992 & 2;
       $994 = $989 | $993;
       $995 = (14 - ($994))|0;
       $996 = $990 << $993;
       $997 = $996 >>> 15;
       $998 = (($995) + ($997))|0;
       $999 = $998 << 1;
       $1000 = (($998) + 7)|0;
       $1001 = $958 >>> $1000;
       $1002 = $1001 & 1;
       $1003 = $1002 | $999;
       $$0212$i$i = $1003;
      }
     }
     $1004 = (31244 + ($$0212$i$i<<2)|0);
     $1005 = ((($627)) + 28|0);
     store4($1005,$$0212$i$i);
     $1006 = ((($627)) + 20|0);
     store4($1006,0);
     store4($931,0);
     $1007 = load4((30944));
     $1008 = 1 << $$0212$i$i;
     $1009 = $1007 & $1008;
     $1010 = ($1009|0)==(0);
     if ($1010) {
      $1011 = $1007 | $1008;
      store4((30944),$1011);
      store4($1004,$627);
      $1012 = ((($627)) + 24|0);
      store4($1012,$1004);
      $1013 = ((($627)) + 12|0);
      store4($1013,$627);
      $1014 = ((($627)) + 8|0);
      store4($1014,$627);
      break;
     }
     $1015 = load4($1004);
     $1016 = ($$0212$i$i|0)==(31);
     $1017 = $$0212$i$i >>> 1;
     $1018 = (25 - ($1017))|0;
     $1019 = $1016 ? 0 : $1018;
     $1020 = $958 << $1019;
     $$0206$i$i = $1020;$$0207$i$i = $1015;
     while(1) {
      $1021 = ((($$0207$i$i)) + 4|0);
      $1022 = load4($1021);
      $1023 = $1022 & -8;
      $1024 = ($1023|0)==($958|0);
      if ($1024) {
       label = 304;
       break;
      }
      $1025 = $$0206$i$i >>> 31;
      $1026 = (((($$0207$i$i)) + 16|0) + ($1025<<2)|0);
      $1027 = $$0206$i$i << 1;
      $1028 = load4($1026);
      $1029 = ($1028|0)==(0|0);
      if ($1029) {
       label = 301;
       break;
      } else {
       $$0206$i$i = $1027;$$0207$i$i = $1028;
      }
     }
     if ((label|0) == 301) {
      $1030 = load4((30956));
      $1031 = ($1026>>>0)<($1030>>>0);
      if ($1031) {
       _abort();
       // unreachable;
      } else {
       store4($1026,$627);
       $1032 = ((($627)) + 24|0);
       store4($1032,$$0207$i$i);
       $1033 = ((($627)) + 12|0);
       store4($1033,$627);
       $1034 = ((($627)) + 8|0);
       store4($1034,$627);
       break;
      }
     }
     else if ((label|0) == 304) {
      $1035 = ((($$0207$i$i)) + 8|0);
      $1036 = load4($1035);
      $1037 = load4((30956));
      $1038 = ($1036>>>0)>=($1037>>>0);
      $not$$i$i = ($$0207$i$i>>>0)>=($1037>>>0);
      $1039 = $1038 & $not$$i$i;
      if ($1039) {
       $1040 = ((($1036)) + 12|0);
       store4($1040,$627);
       store4($1035,$627);
       $1041 = ((($627)) + 8|0);
       store4($1041,$1036);
       $1042 = ((($627)) + 12|0);
       store4($1042,$$0207$i$i);
       $1043 = ((($627)) + 24|0);
       store4($1043,0);
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1045 = load4((30952));
  $1046 = ($1045>>>0)>($$0197>>>0);
  if ($1046) {
   $1047 = (($1045) - ($$0197))|0;
   store4((30952),$1047);
   $1048 = load4((30964));
   $1049 = (($1048) + ($$0197)|0);
   store4((30964),$1049);
   $1050 = $1047 | 1;
   $1051 = ((($1049)) + 4|0);
   store4($1051,$1050);
   $1052 = $$0197 | 3;
   $1053 = ((($1048)) + 4|0);
   store4($1053,$1052);
   $1054 = ((($1048)) + 8|0);
   $$0 = $1054;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1055 = (___errno_location()|0);
 store4($1055,12);
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($0) {
 $0 = $0|0;
 var $$0211$i = 0, $$0211$in$i = 0, $$0381 = 0, $$0382 = 0, $$0394 = 0, $$0401 = 0, $$1 = 0, $$1380 = 0, $$1385 = 0, $$1388 = 0, $$1396 = 0, $$1400 = 0, $$2 = 0, $$3 = 0, $$3398 = 0, $$pre = 0, $$pre$phi439Z2D = 0, $$pre$phi441Z2D = 0, $$pre$phiZ2D = 0, $$pre438 = 0;
 var $$pre440 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0;
 var $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0;
 var $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0;
 var $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0;
 var $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0;
 var $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0;
 var $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0;
 var $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0;
 var $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0;
 var $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0;
 var $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0;
 var $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0;
 var $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $cond418 = 0, $cond419 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0|0);
 if ($1) {
  return;
 }
 $2 = ((($0)) + -8|0);
 $3 = load4((30956));
 $4 = ($2>>>0)<($3>>>0);
 if ($4) {
  _abort();
  // unreachable;
 }
 $5 = ((($0)) + -4|0);
 $6 = load4($5);
 $7 = $6 & 3;
 $8 = ($7|0)==(1);
 if ($8) {
  _abort();
  // unreachable;
 }
 $9 = $6 & -8;
 $10 = (($2) + ($9)|0);
 $11 = $6 & 1;
 $12 = ($11|0)==(0);
 do {
  if ($12) {
   $13 = load4($2);
   $14 = ($7|0)==(0);
   if ($14) {
    return;
   }
   $15 = (0 - ($13))|0;
   $16 = (($2) + ($15)|0);
   $17 = (($13) + ($9))|0;
   $18 = ($16>>>0)<($3>>>0);
   if ($18) {
    _abort();
    // unreachable;
   }
   $19 = load4((30960));
   $20 = ($16|0)==($19|0);
   if ($20) {
    $105 = ((($10)) + 4|0);
    $106 = load4($105);
    $107 = $106 & 3;
    $108 = ($107|0)==(3);
    if (!($108)) {
     $$1 = $16;$$1380 = $17;
     break;
    }
    store4((30948),$17);
    $109 = $106 & -2;
    store4($105,$109);
    $110 = $17 | 1;
    $111 = ((($16)) + 4|0);
    store4($111,$110);
    $112 = (($16) + ($17)|0);
    store4($112,$17);
    return;
   }
   $21 = $13 >>> 3;
   $22 = ($13>>>0)<(256);
   if ($22) {
    $23 = ((($16)) + 8|0);
    $24 = load4($23);
    $25 = ((($16)) + 12|0);
    $26 = load4($25);
    $27 = $21 << 1;
    $28 = (30980 + ($27<<2)|0);
    $29 = ($24|0)==($28|0);
    if (!($29)) {
     $30 = ($24>>>0)<($3>>>0);
     if ($30) {
      _abort();
      // unreachable;
     }
     $31 = ((($24)) + 12|0);
     $32 = load4($31);
     $33 = ($32|0)==($16|0);
     if (!($33)) {
      _abort();
      // unreachable;
     }
    }
    $34 = ($26|0)==($24|0);
    if ($34) {
     $35 = 1 << $21;
     $36 = $35 ^ -1;
     $37 = load4(30940);
     $38 = $37 & $36;
     store4(30940,$38);
     $$1 = $16;$$1380 = $17;
     break;
    }
    $39 = ($26|0)==($28|0);
    if ($39) {
     $$pre440 = ((($26)) + 8|0);
     $$pre$phi441Z2D = $$pre440;
    } else {
     $40 = ($26>>>0)<($3>>>0);
     if ($40) {
      _abort();
      // unreachable;
     }
     $41 = ((($26)) + 8|0);
     $42 = load4($41);
     $43 = ($42|0)==($16|0);
     if ($43) {
      $$pre$phi441Z2D = $41;
     } else {
      _abort();
      // unreachable;
     }
    }
    $44 = ((($24)) + 12|0);
    store4($44,$26);
    store4($$pre$phi441Z2D,$24);
    $$1 = $16;$$1380 = $17;
    break;
   }
   $45 = ((($16)) + 24|0);
   $46 = load4($45);
   $47 = ((($16)) + 12|0);
   $48 = load4($47);
   $49 = ($48|0)==($16|0);
   do {
    if ($49) {
     $59 = ((($16)) + 16|0);
     $60 = ((($59)) + 4|0);
     $61 = load4($60);
     $62 = ($61|0)==(0|0);
     if ($62) {
      $63 = load4($59);
      $64 = ($63|0)==(0|0);
      if ($64) {
       $$3 = 0;
       break;
      } else {
       $$1385 = $63;$$1388 = $59;
      }
     } else {
      $$1385 = $61;$$1388 = $60;
     }
     while(1) {
      $65 = ((($$1385)) + 20|0);
      $66 = load4($65);
      $67 = ($66|0)==(0|0);
      if (!($67)) {
       $$1385 = $66;$$1388 = $65;
       continue;
      }
      $68 = ((($$1385)) + 16|0);
      $69 = load4($68);
      $70 = ($69|0)==(0|0);
      if ($70) {
       break;
      } else {
       $$1385 = $69;$$1388 = $68;
      }
     }
     $71 = ($$1388>>>0)<($3>>>0);
     if ($71) {
      _abort();
      // unreachable;
     } else {
      store4($$1388,0);
      $$3 = $$1385;
      break;
     }
    } else {
     $50 = ((($16)) + 8|0);
     $51 = load4($50);
     $52 = ($51>>>0)<($3>>>0);
     if ($52) {
      _abort();
      // unreachable;
     }
     $53 = ((($51)) + 12|0);
     $54 = load4($53);
     $55 = ($54|0)==($16|0);
     if (!($55)) {
      _abort();
      // unreachable;
     }
     $56 = ((($48)) + 8|0);
     $57 = load4($56);
     $58 = ($57|0)==($16|0);
     if ($58) {
      store4($53,$48);
      store4($56,$51);
      $$3 = $48;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $72 = ($46|0)==(0|0);
   if ($72) {
    $$1 = $16;$$1380 = $17;
   } else {
    $73 = ((($16)) + 28|0);
    $74 = load4($73);
    $75 = (31244 + ($74<<2)|0);
    $76 = load4($75);
    $77 = ($16|0)==($76|0);
    if ($77) {
     store4($75,$$3);
     $cond418 = ($$3|0)==(0|0);
     if ($cond418) {
      $78 = 1 << $74;
      $79 = $78 ^ -1;
      $80 = load4((30944));
      $81 = $80 & $79;
      store4((30944),$81);
      $$1 = $16;$$1380 = $17;
      break;
     }
    } else {
     $82 = load4((30956));
     $83 = ($46>>>0)<($82>>>0);
     if ($83) {
      _abort();
      // unreachable;
     }
     $84 = ((($46)) + 16|0);
     $85 = load4($84);
     $86 = ($85|0)==($16|0);
     if ($86) {
      store4($84,$$3);
     } else {
      $87 = ((($46)) + 20|0);
      store4($87,$$3);
     }
     $88 = ($$3|0)==(0|0);
     if ($88) {
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
    $89 = load4((30956));
    $90 = ($$3>>>0)<($89>>>0);
    if ($90) {
     _abort();
     // unreachable;
    }
    $91 = ((($$3)) + 24|0);
    store4($91,$46);
    $92 = ((($16)) + 16|0);
    $93 = load4($92);
    $94 = ($93|0)==(0|0);
    do {
     if (!($94)) {
      $95 = ($93>>>0)<($89>>>0);
      if ($95) {
       _abort();
       // unreachable;
      } else {
       $96 = ((($$3)) + 16|0);
       store4($96,$93);
       $97 = ((($93)) + 24|0);
       store4($97,$$3);
       break;
      }
     }
    } while(0);
    $98 = ((($92)) + 4|0);
    $99 = load4($98);
    $100 = ($99|0)==(0|0);
    if ($100) {
     $$1 = $16;$$1380 = $17;
    } else {
     $101 = load4((30956));
     $102 = ($99>>>0)<($101>>>0);
     if ($102) {
      _abort();
      // unreachable;
     } else {
      $103 = ((($$3)) + 20|0);
      store4($103,$99);
      $104 = ((($99)) + 24|0);
      store4($104,$$3);
      $$1 = $16;$$1380 = $17;
      break;
     }
    }
   }
  } else {
   $$1 = $2;$$1380 = $9;
  }
 } while(0);
 $113 = ($$1>>>0)<($10>>>0);
 if (!($113)) {
  _abort();
  // unreachable;
 }
 $114 = ((($10)) + 4|0);
 $115 = load4($114);
 $116 = $115 & 1;
 $117 = ($116|0)==(0);
 if ($117) {
  _abort();
  // unreachable;
 }
 $118 = $115 & 2;
 $119 = ($118|0)==(0);
 if ($119) {
  $120 = load4((30964));
  $121 = ($10|0)==($120|0);
  if ($121) {
   $122 = load4((30952));
   $123 = (($122) + ($$1380))|0;
   store4((30952),$123);
   store4((30964),$$1);
   $124 = $123 | 1;
   $125 = ((($$1)) + 4|0);
   store4($125,$124);
   $126 = load4((30960));
   $127 = ($$1|0)==($126|0);
   if (!($127)) {
    return;
   }
   store4((30960),0);
   store4((30948),0);
   return;
  }
  $128 = load4((30960));
  $129 = ($10|0)==($128|0);
  if ($129) {
   $130 = load4((30948));
   $131 = (($130) + ($$1380))|0;
   store4((30948),$131);
   store4((30960),$$1);
   $132 = $131 | 1;
   $133 = ((($$1)) + 4|0);
   store4($133,$132);
   $134 = (($$1) + ($131)|0);
   store4($134,$131);
   return;
  }
  $135 = $115 & -8;
  $136 = (($135) + ($$1380))|0;
  $137 = $115 >>> 3;
  $138 = ($115>>>0)<(256);
  do {
   if ($138) {
    $139 = ((($10)) + 8|0);
    $140 = load4($139);
    $141 = ((($10)) + 12|0);
    $142 = load4($141);
    $143 = $137 << 1;
    $144 = (30980 + ($143<<2)|0);
    $145 = ($140|0)==($144|0);
    if (!($145)) {
     $146 = load4((30956));
     $147 = ($140>>>0)<($146>>>0);
     if ($147) {
      _abort();
      // unreachable;
     }
     $148 = ((($140)) + 12|0);
     $149 = load4($148);
     $150 = ($149|0)==($10|0);
     if (!($150)) {
      _abort();
      // unreachable;
     }
    }
    $151 = ($142|0)==($140|0);
    if ($151) {
     $152 = 1 << $137;
     $153 = $152 ^ -1;
     $154 = load4(30940);
     $155 = $154 & $153;
     store4(30940,$155);
     break;
    }
    $156 = ($142|0)==($144|0);
    if ($156) {
     $$pre438 = ((($142)) + 8|0);
     $$pre$phi439Z2D = $$pre438;
    } else {
     $157 = load4((30956));
     $158 = ($142>>>0)<($157>>>0);
     if ($158) {
      _abort();
      // unreachable;
     }
     $159 = ((($142)) + 8|0);
     $160 = load4($159);
     $161 = ($160|0)==($10|0);
     if ($161) {
      $$pre$phi439Z2D = $159;
     } else {
      _abort();
      // unreachable;
     }
    }
    $162 = ((($140)) + 12|0);
    store4($162,$142);
    store4($$pre$phi439Z2D,$140);
   } else {
    $163 = ((($10)) + 24|0);
    $164 = load4($163);
    $165 = ((($10)) + 12|0);
    $166 = load4($165);
    $167 = ($166|0)==($10|0);
    do {
     if ($167) {
      $178 = ((($10)) + 16|0);
      $179 = ((($178)) + 4|0);
      $180 = load4($179);
      $181 = ($180|0)==(0|0);
      if ($181) {
       $182 = load4($178);
       $183 = ($182|0)==(0|0);
       if ($183) {
        $$3398 = 0;
        break;
       } else {
        $$1396 = $182;$$1400 = $178;
       }
      } else {
       $$1396 = $180;$$1400 = $179;
      }
      while(1) {
       $184 = ((($$1396)) + 20|0);
       $185 = load4($184);
       $186 = ($185|0)==(0|0);
       if (!($186)) {
        $$1396 = $185;$$1400 = $184;
        continue;
       }
       $187 = ((($$1396)) + 16|0);
       $188 = load4($187);
       $189 = ($188|0)==(0|0);
       if ($189) {
        break;
       } else {
        $$1396 = $188;$$1400 = $187;
       }
      }
      $190 = load4((30956));
      $191 = ($$1400>>>0)<($190>>>0);
      if ($191) {
       _abort();
       // unreachable;
      } else {
       store4($$1400,0);
       $$3398 = $$1396;
       break;
      }
     } else {
      $168 = ((($10)) + 8|0);
      $169 = load4($168);
      $170 = load4((30956));
      $171 = ($169>>>0)<($170>>>0);
      if ($171) {
       _abort();
       // unreachable;
      }
      $172 = ((($169)) + 12|0);
      $173 = load4($172);
      $174 = ($173|0)==($10|0);
      if (!($174)) {
       _abort();
       // unreachable;
      }
      $175 = ((($166)) + 8|0);
      $176 = load4($175);
      $177 = ($176|0)==($10|0);
      if ($177) {
       store4($172,$166);
       store4($175,$169);
       $$3398 = $166;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $192 = ($164|0)==(0|0);
    if (!($192)) {
     $193 = ((($10)) + 28|0);
     $194 = load4($193);
     $195 = (31244 + ($194<<2)|0);
     $196 = load4($195);
     $197 = ($10|0)==($196|0);
     if ($197) {
      store4($195,$$3398);
      $cond419 = ($$3398|0)==(0|0);
      if ($cond419) {
       $198 = 1 << $194;
       $199 = $198 ^ -1;
       $200 = load4((30944));
       $201 = $200 & $199;
       store4((30944),$201);
       break;
      }
     } else {
      $202 = load4((30956));
      $203 = ($164>>>0)<($202>>>0);
      if ($203) {
       _abort();
       // unreachable;
      }
      $204 = ((($164)) + 16|0);
      $205 = load4($204);
      $206 = ($205|0)==($10|0);
      if ($206) {
       store4($204,$$3398);
      } else {
       $207 = ((($164)) + 20|0);
       store4($207,$$3398);
      }
      $208 = ($$3398|0)==(0|0);
      if ($208) {
       break;
      }
     }
     $209 = load4((30956));
     $210 = ($$3398>>>0)<($209>>>0);
     if ($210) {
      _abort();
      // unreachable;
     }
     $211 = ((($$3398)) + 24|0);
     store4($211,$164);
     $212 = ((($10)) + 16|0);
     $213 = load4($212);
     $214 = ($213|0)==(0|0);
     do {
      if (!($214)) {
       $215 = ($213>>>0)<($209>>>0);
       if ($215) {
        _abort();
        // unreachable;
       } else {
        $216 = ((($$3398)) + 16|0);
        store4($216,$213);
        $217 = ((($213)) + 24|0);
        store4($217,$$3398);
        break;
       }
      }
     } while(0);
     $218 = ((($212)) + 4|0);
     $219 = load4($218);
     $220 = ($219|0)==(0|0);
     if (!($220)) {
      $221 = load4((30956));
      $222 = ($219>>>0)<($221>>>0);
      if ($222) {
       _abort();
       // unreachable;
      } else {
       $223 = ((($$3398)) + 20|0);
       store4($223,$219);
       $224 = ((($219)) + 24|0);
       store4($224,$$3398);
       break;
      }
     }
    }
   }
  } while(0);
  $225 = $136 | 1;
  $226 = ((($$1)) + 4|0);
  store4($226,$225);
  $227 = (($$1) + ($136)|0);
  store4($227,$136);
  $228 = load4((30960));
  $229 = ($$1|0)==($228|0);
  if ($229) {
   store4((30948),$136);
   return;
  } else {
   $$2 = $136;
  }
 } else {
  $230 = $115 & -2;
  store4($114,$230);
  $231 = $$1380 | 1;
  $232 = ((($$1)) + 4|0);
  store4($232,$231);
  $233 = (($$1) + ($$1380)|0);
  store4($233,$$1380);
  $$2 = $$1380;
 }
 $234 = $$2 >>> 3;
 $235 = ($$2>>>0)<(256);
 if ($235) {
  $236 = $234 << 1;
  $237 = (30980 + ($236<<2)|0);
  $238 = load4(30940);
  $239 = 1 << $234;
  $240 = $238 & $239;
  $241 = ($240|0)==(0);
  if ($241) {
   $242 = $238 | $239;
   store4(30940,$242);
   $$pre = ((($237)) + 8|0);
   $$0401 = $237;$$pre$phiZ2D = $$pre;
  } else {
   $243 = ((($237)) + 8|0);
   $244 = load4($243);
   $245 = load4((30956));
   $246 = ($244>>>0)<($245>>>0);
   if ($246) {
    _abort();
    // unreachable;
   } else {
    $$0401 = $244;$$pre$phiZ2D = $243;
   }
  }
  store4($$pre$phiZ2D,$$1);
  $247 = ((($$0401)) + 12|0);
  store4($247,$$1);
  $248 = ((($$1)) + 8|0);
  store4($248,$$0401);
  $249 = ((($$1)) + 12|0);
  store4($249,$237);
  return;
 }
 $250 = $$2 >>> 8;
 $251 = ($250|0)==(0);
 if ($251) {
  $$0394 = 0;
 } else {
  $252 = ($$2>>>0)>(16777215);
  if ($252) {
   $$0394 = 31;
  } else {
   $253 = (($250) + 1048320)|0;
   $254 = $253 >>> 16;
   $255 = $254 & 8;
   $256 = $250 << $255;
   $257 = (($256) + 520192)|0;
   $258 = $257 >>> 16;
   $259 = $258 & 4;
   $260 = $259 | $255;
   $261 = $256 << $259;
   $262 = (($261) + 245760)|0;
   $263 = $262 >>> 16;
   $264 = $263 & 2;
   $265 = $260 | $264;
   $266 = (14 - ($265))|0;
   $267 = $261 << $264;
   $268 = $267 >>> 15;
   $269 = (($266) + ($268))|0;
   $270 = $269 << 1;
   $271 = (($269) + 7)|0;
   $272 = $$2 >>> $271;
   $273 = $272 & 1;
   $274 = $273 | $270;
   $$0394 = $274;
  }
 }
 $275 = (31244 + ($$0394<<2)|0);
 $276 = ((($$1)) + 28|0);
 store4($276,$$0394);
 $277 = ((($$1)) + 16|0);
 $278 = ((($$1)) + 20|0);
 store4($278,0);
 store4($277,0);
 $279 = load4((30944));
 $280 = 1 << $$0394;
 $281 = $279 & $280;
 $282 = ($281|0)==(0);
 do {
  if ($282) {
   $283 = $279 | $280;
   store4((30944),$283);
   store4($275,$$1);
   $284 = ((($$1)) + 24|0);
   store4($284,$275);
   $285 = ((($$1)) + 12|0);
   store4($285,$$1);
   $286 = ((($$1)) + 8|0);
   store4($286,$$1);
  } else {
   $287 = load4($275);
   $288 = ($$0394|0)==(31);
   $289 = $$0394 >>> 1;
   $290 = (25 - ($289))|0;
   $291 = $288 ? 0 : $290;
   $292 = $$2 << $291;
   $$0381 = $292;$$0382 = $287;
   while(1) {
    $293 = ((($$0382)) + 4|0);
    $294 = load4($293);
    $295 = $294 & -8;
    $296 = ($295|0)==($$2|0);
    if ($296) {
     label = 130;
     break;
    }
    $297 = $$0381 >>> 31;
    $298 = (((($$0382)) + 16|0) + ($297<<2)|0);
    $299 = $$0381 << 1;
    $300 = load4($298);
    $301 = ($300|0)==(0|0);
    if ($301) {
     label = 127;
     break;
    } else {
     $$0381 = $299;$$0382 = $300;
    }
   }
   if ((label|0) == 127) {
    $302 = load4((30956));
    $303 = ($298>>>0)<($302>>>0);
    if ($303) {
     _abort();
     // unreachable;
    } else {
     store4($298,$$1);
     $304 = ((($$1)) + 24|0);
     store4($304,$$0382);
     $305 = ((($$1)) + 12|0);
     store4($305,$$1);
     $306 = ((($$1)) + 8|0);
     store4($306,$$1);
     break;
    }
   }
   else if ((label|0) == 130) {
    $307 = ((($$0382)) + 8|0);
    $308 = load4($307);
    $309 = load4((30956));
    $310 = ($308>>>0)>=($309>>>0);
    $not$ = ($$0382>>>0)>=($309>>>0);
    $311 = $310 & $not$;
    if ($311) {
     $312 = ((($308)) + 12|0);
     store4($312,$$1);
     store4($307,$$1);
     $313 = ((($$1)) + 8|0);
     store4($313,$308);
     $314 = ((($$1)) + 12|0);
     store4($314,$$0382);
     $315 = ((($$1)) + 24|0);
     store4($315,0);
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $316 = load4((30972));
 $317 = (($316) + -1)|0;
 store4((30972),$317);
 $318 = ($317|0)==(0);
 if ($318) {
  $$0211$in$i = (31396);
 } else {
  return;
 }
 while(1) {
  $$0211$i = load4($$0211$in$i);
  $319 = ($$0211$i|0)==(0|0);
  $320 = ((($$0211$i)) + 8|0);
  if ($319) {
   break;
  } else {
   $$0211$in$i = $320;
  }
 }
 store4((30972),-1);
 return;
}
function _cosf($0) {
 $0 = Math_fround($0);
 var $$0 = Math_fround(0), $$v = 0.0, $$v21 = 0.0, $1 = 0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0.0, $17 = Math_fround(0), $18 = 0.0, $19 = Math_fround(0), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0, $24 = 0.0;
 var $25 = Math_fround(0), $26 = Math_fround(0), $27 = 0.0, $28 = 0.0, $29 = Math_fround(0), $3 = 0, $30 = 0.0, $31 = 0.0, $32 = Math_fround(0), $33 = 0, $34 = Math_fround(0), $35 = 0, $36 = 0.0, $37 = Math_fround(0), $38 = 0.0, $39 = 0.0, $4 = 0, $40 = Math_fround(0), $41 = 0.0, $42 = Math_fround(0);
 var $43 = Math_fround(0), $44 = 0.0, $45 = Math_fround(0), $5 = 0, $6 = 0, $7 = 0.0, $8 = Math_fround(0), $9 = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 $2 = i32_bc2i($0);
 $3 = $2 >>> 31;
 $4 = $2 & 2147483647;
 $5 = ($4>>>0)<(1061752795);
 L1: do {
  if ($5) {
   $6 = ($4>>>0)<(964689920);
   if ($6) {
    $$0 = Math_fround(1.0);
   } else {
    $7 = +$0;
    $8 = (Math_fround(___cosdf($7)));
    $$0 = $8;
   }
  } else {
   $9 = ($4>>>0)<(1081824210);
   if ($9) {
    $10 = ($4>>>0)>(1075235811);
    $11 = ($3|0)!=(0);
    $12 = +$0;
    if ($10) {
     $$v21 = $11 ? 3.1415926535897931 : -3.1415926535897931;
     $13 = $12 + $$v21;
     $14 = (Math_fround(___cosdf($13)));
     $15 = Math_fround(-$14);
     $$0 = $15;
     break;
    }
    if ($11) {
     $16 = $12 + 1.5707963267948966;
     $17 = (Math_fround(___sindf($16)));
     $$0 = $17;
     break;
    } else {
     $18 = 1.5707963267948966 - $12;
     $19 = (Math_fround(___sindf($18)));
     $$0 = $19;
     break;
    }
   }
   $20 = ($4>>>0)<(1088565718);
   if ($20) {
    $21 = ($4>>>0)>(1085271519);
    $22 = ($3|0)!=(0);
    if ($21) {
     $23 = +$0;
     $$v = $22 ? 6.2831853071795862 : -6.2831853071795862;
     $24 = $23 + $$v;
     $25 = (Math_fround(___cosdf($24)));
     $$0 = $25;
     break;
    }
    if ($22) {
     $26 = Math_fround(-$0);
     $27 = +$26;
     $28 = $27 + -4.7123889803846897;
     $29 = (Math_fround(___sindf($28)));
     $$0 = $29;
     break;
    } else {
     $30 = +$0;
     $31 = $30 + -4.7123889803846897;
     $32 = (Math_fround(___sindf($31)));
     $$0 = $32;
     break;
    }
   }
   $33 = ($4>>>0)>(2139095039);
   if ($33) {
    $34 = Math_fround($0 - $0);
    $$0 = $34;
    break;
   }
   $35 = (___rem_pio2f($0,$1)|0);
   $trunc = $35&255;
   $trunc$clear = $trunc & 3;
   switch ($trunc$clear<<24>>24) {
   case 0:  {
    $36 = loadd($1);
    $37 = (Math_fround(___cosdf($36)));
    $$0 = $37;
    break L1;
    break;
   }
   case 1:  {
    $38 = loadd($1);
    $39 = -$38;
    $40 = (Math_fround(___sindf($39)));
    $$0 = $40;
    break L1;
    break;
   }
   case 2:  {
    $41 = loadd($1);
    $42 = (Math_fround(___cosdf($41)));
    $43 = Math_fround(-$42);
    $$0 = $43;
    break L1;
    break;
   }
   default: {
    $44 = loadd($1);
    $45 = (Math_fround(___sindf($44)));
    $$0 = $45;
    break L1;
   }
   }
  }
 } while(0);
 STACKTOP = sp;return (Math_fround($$0));
}
function _sinf($0) {
 $0 = Math_fround($0);
 var $$0 = Math_fround(0), $$sink = 0.0, $$sink$v = 0.0, $$v = 0.0, $1 = 0, $10 = 0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0.0, $17 = Math_fround(0), $18 = 0.0, $19 = Math_fround(0), $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0;
 var $24 = 0.0, $25 = Math_fround(0), $26 = 0.0, $27 = Math_fround(0), $28 = Math_fround(0), $29 = 0.0, $3 = 0, $30 = Math_fround(0), $31 = 0, $32 = Math_fround(0), $33 = 0, $34 = 0.0, $35 = Math_fround(0), $36 = 0.0, $37 = Math_fround(0), $38 = 0.0, $39 = 0.0, $4 = 0, $40 = Math_fround(0), $41 = 0.0;
 var $42 = Math_fround(0), $43 = Math_fround(0), $5 = 0, $6 = 0, $7 = 0.0, $8 = Math_fround(0), $9 = 0, $trunc = 0, $trunc$clear = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $1 = sp;
 $2 = i32_bc2i($0);
 $3 = $2 >>> 31;
 $4 = $2 & 2147483647;
 $5 = ($4>>>0)<(1061752795);
 L1: do {
  if ($5) {
   $6 = ($4>>>0)<(964689920);
   if ($6) {
    $$0 = $0;
   } else {
    $7 = +$0;
    $8 = (Math_fround(___sindf($7)));
    $$0 = $8;
   }
  } else {
   $9 = ($4>>>0)<(1081824210);
   if ($9) {
    $10 = ($4>>>0)<(1075235812);
    $11 = ($3|0)!=(0);
    $12 = +$0;
    if (!($10)) {
     $$sink$v = $11 ? 3.1415926535897931 : -3.1415926535897931;
     $$sink = $12 + $$sink$v;
     $18 = -$$sink;
     $19 = (Math_fround(___sindf($18)));
     $$0 = $19;
     break;
    }
    if ($11) {
     $13 = $12 + 1.5707963267948966;
     $14 = (Math_fround(___cosdf($13)));
     $15 = Math_fround(-$14);
     $$0 = $15;
     break;
    } else {
     $16 = $12 + -1.5707963267948966;
     $17 = (Math_fround(___cosdf($16)));
     $$0 = $17;
     break;
    }
   }
   $20 = ($4>>>0)<(1088565718);
   if ($20) {
    $21 = ($4>>>0)<(1085271520);
    $22 = ($3|0)!=(0);
    $23 = +$0;
    if (!($21)) {
     $$v = $22 ? 6.2831853071795862 : -6.2831853071795862;
     $29 = $23 + $$v;
     $30 = (Math_fround(___sindf($29)));
     $$0 = $30;
     break;
    }
    if ($22) {
     $24 = $23 + 4.7123889803846897;
     $25 = (Math_fround(___cosdf($24)));
     $$0 = $25;
     break;
    } else {
     $26 = $23 + -4.7123889803846897;
     $27 = (Math_fround(___cosdf($26)));
     $28 = Math_fround(-$27);
     $$0 = $28;
     break;
    }
   }
   $31 = ($4>>>0)>(2139095039);
   if ($31) {
    $32 = Math_fround($0 - $0);
    $$0 = $32;
    break;
   }
   $33 = (___rem_pio2f($0,$1)|0);
   $trunc = $33&255;
   $trunc$clear = $trunc & 3;
   switch ($trunc$clear<<24>>24) {
   case 0:  {
    $34 = loadd($1);
    $35 = (Math_fround(___sindf($34)));
    $$0 = $35;
    break L1;
    break;
   }
   case 1:  {
    $36 = loadd($1);
    $37 = (Math_fround(___cosdf($36)));
    $$0 = $37;
    break L1;
    break;
   }
   case 2:  {
    $38 = loadd($1);
    $39 = -$38;
    $40 = (Math_fround(___sindf($39)));
    $$0 = $40;
    break L1;
    break;
   }
   default: {
    $41 = loadd($1);
    $42 = (Math_fround(___cosdf($41)));
    $43 = Math_fround(-$42);
    $$0 = $43;
    break L1;
   }
   }
  }
 } while(0);
 STACKTOP = sp;return (Math_fround($$0));
}
function __ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (___cxa_allocate_exception(8)|0);
 __THREW__ = 0;
 invoke_vii(31,($1|0),(30329|0));
 $2 = __THREW__; __THREW__ = 0;
 $3 = $2&1;
 if ($3) {
  $4 = ___cxa_find_matching_catch_2()|0;
  $5 = tempRet0;
  ___cxa_free_exception(($1|0));
  ___resumeException($4|0);
  // unreachable;
 } else {
  store4($1,(21128));
  ___cxa_throw(($1|0),(1184|0),(21|0));
  // unreachable;
 }
}
function __Znwj($0) {
 $0 = $0|0;
 var $$ = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ($0|0)==(0);
 $$ = $1 ? 1 : $0;
 while(1) {
  $2 = (_malloc($$)|0);
  $3 = ($2|0)==(0|0);
  if (!($3)) {
   label = 6;
   break;
  }
  $4 = (__ZSt15get_new_handlerv()|0);
  $5 = ($4|0)==(0|0);
  if ($5) {
   label = 5;
   break;
  }
  FUNCTION_TABLE_v[$4 & 31]();
 }
 if ((label|0) == 5) {
  $6 = (___cxa_allocate_exception(4)|0);
  __ZNSt9bad_allocC2Ev($6);
  ___cxa_throw(($6|0),(1152|0),(18|0));
  // unreachable;
 }
 else if ((label|0) == 6) {
  return ($2|0);
 }
 return (0)|0;
}
function __Znaj($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = (__Znwj($0)|0);
 return ($1|0);
}
function __ZdlPv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 _free($0);
 return;
}
function __ZdaPv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNSt3__218__libcpp_refstringC2EPKc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = (_strlen($1)|0);
 $3 = (($2) + 13)|0;
 $4 = (__Znwj($3)|0);
 store4($4,$2);
 $5 = ((($4)) + 4|0);
 store4($5,$2);
 $6 = ((($4)) + 8|0);
 store4($6,0);
 $7 = ((($4)) + 12|0);
 $8 = (($2) + 1)|0;
 _memcpy(($7|0),($1|0),($8|0))|0;
 store4($0,$7);
 return;
}
function __ZNSt11logic_errorC2EPKc($0,$1) {
 $0 = $0|0;
 $1 = $1|0;
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,(21108));
 $2 = ((($0)) + 4|0);
 __THREW__ = 0;
 invoke_vii(32,($2|0),($1|0));
 $3 = __THREW__; __THREW__ = 0;
 $4 = $3&1;
 if ($4) {
  $5 = ___cxa_find_matching_catch_2()|0;
  $6 = tempRet0;
  ___resumeException($5|0);
  // unreachable;
 } else {
  return;
 }
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($0,$1,$2) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 var $$0 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $3 = sp;
 $4 = ($0|0)==($1|0);
 if ($4) {
  $$2 = 1;
 } else {
  $5 = ($1|0)==(0|0);
  if ($5) {
   $$2 = 0;
  } else {
   $6 = (___dynamic_cast($1,1112,1096,0)|0);
   $7 = ($6|0)==(0|0);
   if ($7) {
    $$2 = 0;
   } else {
    $8 = ((($3)) + 4|0);
    ; store8($8,i64_const(0,0),4); store8($8+8|0,i64_const(0,0),4); store8($8+16|0,i64_const(0,0),4); store8($8+24|0,i64_const(0,0),4); store8($8+32|0,i64_const(0,0),4); store8($8+40|0,i64_const(0,0),4); store4($8+48|0,0,4);
    store4($3,$6);
    $9 = ((($3)) + 8|0);
    store4($9,$0);
    $10 = ((($3)) + 12|0);
    store4($10,-1);
    $11 = ((($3)) + 48|0);
    store4($11,1);
    $12 = load4($6);
    $13 = ((($12)) + 28|0);
    $14 = load4($13);
    $15 = load4($2);
    FUNCTION_TABLE_viiii[$14 & 31]($6,$3,$15,1);
    $16 = ((($3)) + 24|0);
    $17 = load4($16);
    $18 = ($17|0)==(1);
    if ($18) {
     $19 = ((($3)) + 16|0);
     $20 = load4($19);
     store4($2,$20);
     $$0 = 1;
    } else {
     $$0 = 0;
    }
    $$2 = $$0;
   }
  }
 }
 STACKTOP = sp;return ($$2|0);
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if ($15) {
    $16 = ((($1)) + 16|0);
    $17 = load4($16);
    $18 = ($17|0)==($2|0);
    if (!($18)) {
     $19 = ((($1)) + 20|0);
     $20 = load4($19);
     $21 = ($20|0)==($2|0);
     if (!($21)) {
      $24 = ((($1)) + 32|0);
      store4($24,$3);
      store4($19,$2);
      $25 = ((($1)) + 40|0);
      $26 = load4($25);
      $27 = (($26) + 1)|0;
      store4($25,$27);
      $28 = ((($1)) + 36|0);
      $29 = load4($28);
      $30 = ($29|0)==(1);
      if ($30) {
       $31 = ((($1)) + 24|0);
       $32 = load4($31);
       $33 = ($32|0)==(2);
       if ($33) {
        $34 = ((($1)) + 54|0);
        store1($34,1);
       }
      }
      $35 = ((($1)) + 44|0);
      store4($35,4);
      break;
     }
    }
    $22 = ($3|0)==(1);
    if ($22) {
     $23 = ((($1)) + 32|0);
     store4($23,1);
    }
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
 }
 return;
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 16|0);
 $5 = load4($4);
 $6 = ($5|0)==(0|0);
 do {
  if ($6) {
   store4($4,$2);
   $7 = ((($1)) + 24|0);
   store4($7,$3);
   $8 = ((($1)) + 36|0);
   store4($8,1);
  } else {
   $9 = ($5|0)==($2|0);
   if (!($9)) {
    $13 = ((($1)) + 36|0);
    $14 = load4($13);
    $15 = (($14) + 1)|0;
    store4($13,$15);
    $16 = ((($1)) + 24|0);
    store4($16,2);
    $17 = ((($1)) + 54|0);
    store1($17,1);
    break;
   }
   $10 = ((($1)) + 24|0);
   $11 = load4($10);
   $12 = ($11|0)==(2);
   if ($12) {
    store4($10,$3);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond22 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 53|0);
 store1($5,1);
 $6 = ((($1)) + 4|0);
 $7 = load4($6);
 $8 = ($7|0)==($3|0);
 do {
  if ($8) {
   $9 = ((($1)) + 52|0);
   store1($9,1);
   $10 = ((($1)) + 16|0);
   $11 = load4($10);
   $12 = ($11|0)==(0|0);
   if ($12) {
    store4($10,$2);
    $13 = ((($1)) + 24|0);
    store4($13,$4);
    $14 = ((($1)) + 36|0);
    store4($14,1);
    $15 = ((($1)) + 48|0);
    $16 = load4($15);
    $17 = ($16|0)==(1);
    $18 = ($4|0)==(1);
    $or$cond = $17 & $18;
    if (!($or$cond)) {
     break;
    }
    $19 = ((($1)) + 54|0);
    store1($19,1);
    break;
   }
   $20 = ($11|0)==($2|0);
   if (!($20)) {
    $30 = ((($1)) + 36|0);
    $31 = load4($30);
    $32 = (($31) + 1)|0;
    store4($30,$32);
    $33 = ((($1)) + 54|0);
    store1($33,1);
    break;
   }
   $21 = ((($1)) + 24|0);
   $22 = load4($21);
   $23 = ($22|0)==(2);
   if ($23) {
    store4($21,$4);
    $28 = $4;
   } else {
    $28 = $22;
   }
   $24 = ((($1)) + 48|0);
   $25 = load4($24);
   $26 = ($25|0)==(1);
   $27 = ($28|0)==(1);
   $or$cond22 = $26 & $27;
   if ($or$cond22) {
    $29 = ((($1)) + 54|0);
    store1($29,1);
   }
  }
 } while(0);
 return;
}
function ___dynamic_cast($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $$ = 0, $$0 = 0, $$33 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0;
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0;
 var $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond28 = 0, $or$cond30 = 0, $or$cond32 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(64|0);
 $4 = sp;
 $5 = load4($0);
 $6 = ((($5)) + -8|0);
 $7 = load4($6);
 $8 = (($0) + ($7)|0);
 $9 = ((($5)) + -4|0);
 $10 = load4($9);
 store4($4,$2);
 $11 = ((($4)) + 4|0);
 store4($11,$0);
 $12 = ((($4)) + 8|0);
 store4($12,$1);
 $13 = ((($4)) + 12|0);
 store4($13,$3);
 $14 = ((($4)) + 16|0);
 $15 = ((($4)) + 20|0);
 $16 = ((($4)) + 24|0);
 $17 = ((($4)) + 28|0);
 $18 = ((($4)) + 32|0);
 $19 = ((($4)) + 40|0);
 $20 = ($10|0)==($2|0);
 ; store8($14,i64_const(0,0),4); store8($14+8|0,i64_const(0,0),4); store8($14+16|0,i64_const(0,0),4); store8($14+24|0,i64_const(0,0),4); store4($14+32|0,0,4); store2($14+36|0,0,2); store1($14+38|0,0,1);
 L1: do {
  if ($20) {
   $21 = ((($4)) + 48|0);
   store4($21,1);
   $22 = load4($2);
   $23 = ((($22)) + 20|0);
   $24 = load4($23);
   FUNCTION_TABLE_viiiiii[$24 & 15]($2,$4,$8,$8,1,0);
   $25 = load4($16);
   $26 = ($25|0)==(1);
   $$ = $26 ? $8 : 0;
   $$0 = $$;
  } else {
   $27 = ((($4)) + 36|0);
   $28 = load4($10);
   $29 = ((($28)) + 24|0);
   $30 = load4($29);
   FUNCTION_TABLE_viiiii[$30 & 31]($10,$4,$8,1,0);
   $31 = load4($27);
   switch ($31|0) {
   case 0:  {
    $32 = load4($19);
    $33 = ($32|0)==(1);
    $34 = load4($17);
    $35 = ($34|0)==(1);
    $or$cond = $33 & $35;
    $36 = load4($18);
    $37 = ($36|0)==(1);
    $or$cond28 = $or$cond & $37;
    $38 = load4($15);
    $$33 = $or$cond28 ? $38 : 0;
    $$0 = $$33;
    break L1;
    break;
   }
   case 1:  {
    break;
   }
   default: {
    $$0 = 0;
    break L1;
   }
   }
   $39 = load4($16);
   $40 = ($39|0)==(1);
   if (!($40)) {
    $41 = load4($19);
    $42 = ($41|0)==(0);
    $43 = load4($17);
    $44 = ($43|0)==(1);
    $or$cond30 = $42 & $44;
    $45 = load4($18);
    $46 = ($45|0)==(1);
    $or$cond32 = $or$cond30 & $46;
    if (!($or$cond32)) {
     $$0 = 0;
     break;
    }
   }
   $47 = load4($14);
   $$0 = $47;
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0,$1,$2,$3,$4,$5) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 $5 = $5|0;
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $6 = ((($1)) + 8|0);
 $7 = load4($6);
 $8 = ($0|0)==($7|0);
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0,$1,$2,$3,$4);
 } else {
  $9 = ((($0)) + 8|0);
  $10 = load4($9);
  $11 = load4($10);
  $12 = ((($11)) + 20|0);
  $13 = load4($12);
  FUNCTION_TABLE_viiiiii[$13 & 15]($10,$1,$2,$3,$4,$5);
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0,$1,$2,$3,$4) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 $4 = $4|0;
 var $$037$off039 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0;
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $5 = ((($1)) + 8|0);
 $6 = load4($5);
 $7 = ($0|0)==($6|0);
 do {
  if ($7) {
   $8 = ((($1)) + 4|0);
   $9 = load4($8);
   $10 = ($9|0)==($2|0);
   if ($10) {
    $11 = ((($1)) + 28|0);
    $12 = load4($11);
    $13 = ($12|0)==(1);
    if (!($13)) {
     store4($11,$3);
    }
   }
  } else {
   $14 = load4($1);
   $15 = ($0|0)==($14|0);
   if (!($15)) {
    $49 = ((($0)) + 8|0);
    $50 = load4($49);
    $51 = load4($50);
    $52 = ((($51)) + 24|0);
    $53 = load4($52);
    FUNCTION_TABLE_viiiii[$53 & 31]($50,$1,$2,$3,$4);
    break;
   }
   $16 = ((($1)) + 16|0);
   $17 = load4($16);
   $18 = ($17|0)==($2|0);
   if (!($18)) {
    $19 = ((($1)) + 20|0);
    $20 = load4($19);
    $21 = ($20|0)==($2|0);
    if (!($21)) {
     $24 = ((($1)) + 32|0);
     store4($24,$3);
     $25 = ((($1)) + 44|0);
     $26 = load4($25);
     $27 = ($26|0)==(4);
     if ($27) {
      break;
     }
     $28 = ((($1)) + 52|0);
     store1($28,0);
     $29 = ((($1)) + 53|0);
     store1($29,0);
     $30 = ((($0)) + 8|0);
     $31 = load4($30);
     $32 = load4($31);
     $33 = ((($32)) + 20|0);
     $34 = load4($33);
     FUNCTION_TABLE_viiiiii[$34 & 15]($31,$1,$2,$2,1,$4);
     $35 = load1($29);
     $36 = ($35<<24>>24)==(0);
     if ($36) {
      $$037$off039 = 0;
      label = 13;
     } else {
      $37 = load1($28);
      $not$ = ($37<<24>>24)==(0);
      if ($not$) {
       $$037$off039 = 1;
       label = 13;
      } else {
       label = 17;
      }
     }
     do {
      if ((label|0) == 13) {
       store4($19,$2);
       $38 = ((($1)) + 40|0);
       $39 = load4($38);
       $40 = (($39) + 1)|0;
       store4($38,$40);
       $41 = ((($1)) + 36|0);
       $42 = load4($41);
       $43 = ($42|0)==(1);
       if ($43) {
        $44 = ((($1)) + 24|0);
        $45 = load4($44);
        $46 = ($45|0)==(2);
        if ($46) {
         $47 = ((($1)) + 54|0);
         store1($47,1);
         if ($$037$off039) {
          label = 17;
          break;
         } else {
          $48 = 4;
          break;
         }
        }
       }
       if ($$037$off039) {
        label = 17;
       } else {
        $48 = 4;
       }
      }
     } while(0);
     if ((label|0) == 17) {
      $48 = 3;
     }
     store4($25,$48);
     break;
    }
   }
   $22 = ($3|0)==(1);
   if ($22) {
    $23 = ((($1)) + 32|0);
    store4($23,1);
   }
  }
 } while(0);
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0,$1,$2,$3) {
 $0 = $0|0;
 $1 = $1|0;
 $2 = $2|0;
 $3 = $3|0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $4 = ((($1)) + 8|0);
 $5 = load4($4);
 $6 = ($0|0)==($5|0);
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0,$1,$2,$3);
 } else {
  $7 = ((($0)) + 8|0);
  $8 = load4($7);
  $9 = load4($8);
  $10 = ((($9)) + 28|0);
  $11 = load4($10);
  FUNCTION_TABLE_viiii[$11 & 31]($8,$1,$2,$3);
 }
 return;
}
function __ZNSt9type_infoD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt9bad_allocD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZdlPv($0);
 return;
}
function __ZNKSt9bad_alloc4whatEv($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return (30466|0);
}
function __ZNSt9exceptionD2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function __ZNSt11logic_errorD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,(21108));
 $1 = ((($0)) + 4|0);
 __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($1);
 return;
}
function __ZNSt11logic_errorD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($0);
 __ZdlPv($0);
 return;
}
function __ZNKSt11logic_error4whatEv($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = ((($0)) + 4|0);
 $2 = load4($1);
 return ($2|0);
}
function __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($0) {
 $0 = $0|0;
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $1 = load4($0);
 $2 = ((($1)) + -4|0);
 $3 = load4($2);
 $4 = (($3) + -1)|0;
 store4($2,$4);
 $5 = (($3) + -1)|0;
 $6 = ($5|0)<(0);
 if ($6) {
  $7 = load4($0);
  $8 = ((($7)) + -12|0);
  __ZdlPv($8);
 }
 return;
}
function __ZNSt12length_errorD0Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 __ZNSt11logic_errorD2Ev($0);
 __ZdlPv($0);
 return;
}
function __ZNSt9bad_allocC2Ev($0) {
 $0 = $0|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 store4($0,(21088));
 return;
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = load4(31436);
 $1 = (($0) + 0)|0;
 store4(31436,$1);
 $2 = $0;
 return ($2|0);
}
function runPostSets() {
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    ret = dest|0;
    if ((dest&3) == (src&3)) {
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      while ((num|0) >= 4) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
        num = (num-4)|0;
      }
    }
    while ((num|0) > 0) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
      num = (num-1)|0;
    }
    return ret|0;
}
function _sbrk(increment) {
    increment = increment|0;
    var oldDynamicTop = 0;
    var oldDynamicTopOnChange = 0;
    var newDynamicTop = 0;
    var totalMemory = 0;
    increment = ((increment + 15) & -16)|0;
    oldDynamicTop = HEAP32[DYNAMICTOP_PTR>>2]|0;
    newDynamicTop = oldDynamicTop + increment | 0;

    if (((increment|0) > 0 & (newDynamicTop|0) < (oldDynamicTop|0)) // Detect and fail if we would wrap around signed 32-bit int.
      | (newDynamicTop|0) < 0) { // Also underflow, sbrk() should be able to be used to subtract.
      abortOnCannotGrowMemory()|0;
      ___setErrNo(12);
      return -1;
    }

    HEAP32[DYNAMICTOP_PTR>>2] = newDynamicTop;
    totalMemory = getTotalMemory()|0;
    if ((newDynamicTop|0) > (totalMemory|0)) {
      if ((enlargeMemory()|0) == 0) {
        ___setErrNo(12);
        HEAP32[DYNAMICTOP_PTR>>2] = oldDynamicTop;
        return -1;
      }
    }
    return oldDynamicTop|0;
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
    stop = (ptr + num)|0;
    if ((num|0) >= 20) {
      // This is unaligned, but quite large, so work hard to get to aligned settings
      value = value & 0xff;
      unaligned = ptr & 3;
      value4 = value | (value << 8) | (value << 16) | (value << 24);
      stop4 = stop & ~3;
      if (unaligned) {
        unaligned = (ptr + 4 - unaligned)|0;
        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
          HEAP8[((ptr)>>0)]=value;
          ptr = (ptr+1)|0;
        }
      }
      while ((ptr|0) < (stop4|0)) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    while ((ptr|0) < (stop|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (ptr-num)|0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&31](a1|0,a2|0,a3|0)|0;
}


function dynCall_vif(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=Math_fround(a2);
  FUNCTION_TABLE_vif[index&0](a1|0,Math_fround(a2));
}


function dynCall_viiiii(index,a1,a2,a3,a4,a5) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0;
  FUNCTION_TABLE_viiiii[index&31](a1|0,a2|0,a3|0,a4|0,a5|0);
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&31](a1|0);
}


function dynCall_vii(index,a1,a2) {
  index = index|0;
  a1=a1|0; a2=a2|0;
  FUNCTION_TABLE_vii[index&63](a1|0,a2|0);
}


function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&31](a1|0)|0;
}


function dynCall_v(index) {
  index = index|0;
  
  FUNCTION_TABLE_v[index&31]();
}


function dynCall_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0; a5=a5|0; a6=a6|0;
  FUNCTION_TABLE_viiiiii[index&15](a1|0,a2|0,a3|0,a4|0,a5|0,a6|0);
}


function dynCall_viiii(index,a1,a2,a3,a4) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0; a4=a4|0;
  FUNCTION_TABLE_viiii[index&31](a1|0,a2|0,a3|0,a4|0);
}

function b0(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(0);return 0;
}
function b1(p0,p1) {
 p0 = p0|0;p1 = Math_fround(p1); nullFunc_vif(1);
}
function b2(p0,p1,p2,p3,p4) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0; nullFunc_viiiii(2);
}
function b3(p0) {
 p0 = p0|0; nullFunc_vi(3);
}
function b4(p0,p1) {
 p0 = p0|0;p1 = p1|0; nullFunc_vii(4);
}
function b5(p0) {
 p0 = p0|0; nullFunc_ii(5);return 0;
}
function b6() {
 ; nullFunc_v(6);
}
function b7(p0,p1,p2,p3,p4,p5) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0;p4 = p4|0;p5 = p5|0; nullFunc_viiiiii(7);
}
function b8(p0,p1,p2,p3) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0;p3 = p3|0; nullFunc_viiii(8);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,b0,b0,b0,___stdout_write,___stdio_seek,b0,b0,b0,b0,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,___stdio_write,___stdio_read,b0];
var FUNCTION_TABLE_vif = [b1];
var FUNCTION_TABLE_viiiii = [b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2,b2,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2];
var FUNCTION_TABLE_vi = [b3,__ZN19MoreTeapotsRendererD2Ev,__ZN19MoreTeapotsRendererD0Ev,b3,b3,b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,b3,b3,b3,b3,__ZN10__cxxabiv120__si_class_type_infoD0Ev,b3,b3,b3,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,b3,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,b3,__ZNSt12length_errorD0Ev,__ZN6EngineD2Ev,b3,_cleanup_387,_cleanup_382
,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
,b4,b4,__ZNSt11logic_errorC2EPKc,__ZNSt3__218__libcpp_refstringC2EPKc,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
,b4,b4,b4,b4,b4];
var FUNCTION_TABLE_ii = [b5,b5,b5,___stdio_close,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,__ZNKSt9bad_alloc4whatEv,b5,b5,__ZNKSt11logic_error4whatEv,b5,b5,b5,b5,b5
,b5,b5,b5];
var FUNCTION_TABLE_v = [b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,__Z9drawFramev,b6,b6
,b6,b6,b6];
var FUNCTION_TABLE_viiiiii = [b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b7,b7,b7,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib];
var FUNCTION_TABLE_viiii = [b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b8,b8,b8,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
,b8,b8,b8];

  return { _sbrk: _sbrk, _free: _free, _main: _main, _pthread_self: _pthread_self, _memset: _memset, _malloc: _malloc, _memcpy: _memcpy, _fflush: _fflush, ___errno_location: ___errno_location, __GLOBAL__sub_I_MoreTeapots_wasm_cpp: __GLOBAL__sub_I_MoreTeapots_wasm_cpp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_iiii: dynCall_iiii, dynCall_vif: dynCall_vif, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiii: dynCall_viiii };
})
;