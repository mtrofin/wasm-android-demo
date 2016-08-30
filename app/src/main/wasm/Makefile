CPPFLAGS = -I. -Iems_helper -I../common -Wall -fno-exceptions -fno-rtti -s BINARYEN=1
LDFLAGS = --embed-file ../assets@/

SOURCES = MoreTeapots-wasm.cpp \
	ems_helper/esUtil.c \
	../common/MoreTeapotsRenderer.cpp \
	../common/shader.cpp \
	../common/vecmath.cpp \
	shader_utils.cpp \
	file_utils.c

OBJECTS = MoreTeapots-wasm.o \
	ems_helper/esUtil.o \
	../common/MoreTeapotsRenderer.o \
	../common/shader.o \
	../common/vecmath.o \
	shader_utils.o \
	file_utils.o

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

MoreTeapots-wasm.o: MoreTeapots-wasm.cpp ems_helper/esUtil.h ../common/MoreTeapotsRenderer.h platform.h

ems_helper/esUtil.o: ems_helper/esUtil.c ems_helper/esUtil.h

../common/MoreTeapotsRenderer.o: ../common/MoreTeapotsRenderer.cpp ../common/MoreTeapotsRenderer.h ../common/shader.h ../common/vecmath.h

../common/shader.o: ../common/shader.cpp ../common/shader.h

../common/vecmath.o: ../common/vecmath.cpp ../common/vecmath.h

shader_utils.o: shader_utils.cpp platform.h file_utils.h ../common/shader.h

file_utils.o: file_utils.c file_utils.h
