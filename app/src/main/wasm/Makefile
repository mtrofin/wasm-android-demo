CPPFLAGS = -I. -Iems_helper -I../common -Wall -fno-exceptions -fno-rtti -s BINARYEN=1
LDFLAGS = --embed-file ../assets@/

SOURCES = emsMain.cpp \
	ems_helper/esUtil.c \
	../common/MoreTeapotsRenderer.cpp \
	../common/gl3stub.c \
	../common/shader.cpp \
	../common/vecmath.cpp \
	../common/platform_asset_utils.c \
	../common/platform_file_utils.c

OBJECTS = emsMain.o \
	ems_helper/esUtil.o \
	../common/MoreTeapotsRenderer.o \
	../common/gl3stub.o \
	../common/shader.o \
	../common/vecmath.o \
	../common/platform_asset_utils.o \
	../common/platform_file_utils.o

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

emsMain.o: emsMain.cpp ems_helper/esUtil.h ../common/MoreTeapotsRenderer.h

ems_helper/esUtil.o: ems_helper/esUtil.c ems_helper/esUtil.h

../common/MoreTeapotsRenderer.o: ../common/MoreTeapotsRenderer.cpp ../common/MoreTeapotsRenderer.h ../common/gl3stub.h ../common/shader.h ../common/vecmath.h ../common/platform_file_utils.h ../common/platform_asset_utils.h

../common/gl3stub.o: ../common/gl3stub.c ../common/gl3stub.h

../common/shader.o: ../common/shader.cpp ../common/shader.h

../common/vecmath.o: ../common/vecmath.cpp ../common/vecmath.h

../common/platform_file_utils.o: ../common/platform_file_utils.c ../common/platform_file_utils.h

../common/platform_asset_utils.o: ../common/platform_asset_utils.c ../common/platform_asset_utils.h ../common/platform_file_utils.h
