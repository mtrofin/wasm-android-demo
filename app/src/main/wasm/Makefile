CPPFLAGS = -I. -Iems_helper -I../jni -I../jni/ndk_helper -Wall -fno-exceptions -fno-rtti -s BINARYEN=1
LDFLAGS = --embed-file ../assets@/

SOURCES = emsMain.cpp \
	ems_helper/esUtil.c \
	../jni/MoreTeapotsRenderer.cpp \
	../jni/ndk_helper/gl3stub.c \
	../jni/ndk_helper/shader.cpp \
	../jni/ndk_helper/vecmath.cpp \
	../jni/ndk_helper/platform_asset_utils.c \
	../jni/ndk_helper/platform_file_utils.c

OBJECTS = emsMain.o \
	ems_helper/esUtil.o \
	../jni/MoreTeapotsRenderer.o \
	../jni/ndk_helper/gl3stub.o \
	../jni/ndk_helper/shader.o \
	../jni/ndk_helper/vecmath.o \
	../jni/ndk_helper/platform_asset_utils.o \
	../jni/ndk_helper/platform_file_utils.o

TARGET = teapots.html

#targets start here
all: $(TARGET)

$(TARGET): $(OBJECTS)
	$(CC) $(CPPFLAGS) -o $@ $(LDFLAGS) $(OBJECTS)

clean:
	$(RM) $(TARGET) $(OBJECTS) *.wasm* *.wast* *.js*

depend:
	@$(CC) $(CPPFLAGS) -MM $(SOURCES)
	
# list targets that do not create files (but not all makes understand .PHONY)
.PHONY:	all clean depend

emsMain.o: emsMain.cpp ems_helper/esUtil.h ../jni/MoreTeapotsRenderer.h

ems_helper/esUtil.o: ems_helper/esUtil.c ems_helper/esUtil.h

../jni/MoreTeapotsRenderer.o: ../jni/MoreTeapotsRenderer.cpp ../jni/MoreTeapotsRenderer.h ../jni/ndk_helper/gl3stub.h ../jni/ndk_helper/shader.h ../jni/ndk_helper/vecmath.h ../jni/ndk_helper/platform_file_utils.h ../jni/ndk_helper/platform_asset_utils.h

../jni/ndk_helper/gl3stub.o: ../jni/ndk_helper/gl3stub.c ../jni/ndk_helper/gl3stub.h

../jni/ndk_helper/shader.o: ../jni/ndk_helper/shader.cpp ../jni/ndk_helper/shader.h

../jni/ndk_helper/vecmath.o: ../jni/ndk_helper/vecmath.cpp ../jni/ndk_helper/vecmath.h

../jni/ndk_helper/platform_file_utils.o: ../jni/ndk_helper/platform_file_utils.c ../jni/ndk_helper/platform_file_utils.h

../jni/ndk_helper/platform_asset_utils.o: ../jni/ndk_helper/platform_asset_utils.c ../jni/ndk_helper/platform_asset_utils.h ../jni/ndk_helper/platform_file_utils.h
