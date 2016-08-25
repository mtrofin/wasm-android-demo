//
// Created by clarkchenwang on 8/25/16.
//
#include "platform.h"

#include <EGL/egl.h>
#include <GLES2/gl2.h>

#include "JNIHelper.h"
#include "shader.h"

namespace ndk_helper {

    bool shader::CompileShader(GLuint *shader, const GLenum type,
                               const char *strFileName) {
      std::vector<uint8_t> data;
      bool b = JNIHelper::GetInstance()->ReadFile(strFileName, &data);
      if (!b) {
        PRINT("Can not open a file:%s", strFileName);
        return false;
      }

      return shader::CompileShader(shader, type, data);
    }

    bool shader::CompileShader(
            GLuint *shader, const GLenum type, const char *str_file_name,
            const std::map<std::string, std::string> &map_parameters) {
      std::vector<uint8_t> data;
      if (!JNIHelper::GetInstance()->ReadFile(str_file_name, &data)) {
        PRINT("Can not open a file:%s", str_file_name);
        return false;
      }

      const char REPLACEMENT_TAG = '*';
      // Fill-in parameters
      std::string str(data.begin(), data.end());
      std::string str_replacement_map(data.size(), ' ');

      std::map<std::string, std::string>::const_iterator it =
              map_parameters.begin();
      std::map<std::string, std::string>::const_iterator itEnd =
              map_parameters.end();
      while (it != itEnd) {
        size_t pos = 0;
        while ((pos = str.find(it->first, pos)) != std::string::npos) {
          // Check if the sub string is already touched

          size_t replaced_pos = str_replacement_map.find(REPLACEMENT_TAG, pos);
          if (replaced_pos == std::string::npos || replaced_pos > pos) {

            str.replace(pos, it->first.length(), it->second);
            str_replacement_map.replace(pos, it->first.length(), it->first.length(),
                                        REPLACEMENT_TAG);
            pos += it->second.length();
          } else {
            // The replacement target has been touched by other tag, skipping them
            pos += it->second.length();
          }
        }
        it++;
      }

      PRINT("Patched Shdader:\n%s", str.c_str());

      std::vector<uint8_t> v(str.begin(), str.end());
      str.clear();
      return shader::CompileShader(shader, type, v);
    }
}