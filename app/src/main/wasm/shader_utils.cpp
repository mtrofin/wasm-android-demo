//
// Created by clarkchenwang on 8/25/16.
//

#include "platform.h"

#include <EGL/egl.h>
#include <GLES2/gl2.h>

#include "shader.h"

extern "C" {
  #include "file_utils.h"
}

bool shader::CompileShader(GLuint *shader, const GLenum type, const char *strFileName) {

  const FileData shader_source = get_file_data(strFileName);

  return shader::CompileShader(shader, type, (const GLchar* )shader_source.data, shader_source.data_length);
}
