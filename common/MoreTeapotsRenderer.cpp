/*
 * Copyright 2013 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//--------------------------------------------------------------------------------
// MoreTeapotsRenderer.cpp
// Render teapots
//--------------------------------------------------------------------------------
#include "platform.h"
//--------------------------------------------------------------------------------
// Define macros
//--------------------------------------------------------------------------------
#define TEAPOT
//--------------------------------------------------------------------------------
// Include files
//--------------------------------------------------------------------------------
#include "MoreTeapotsRenderer.h"
//--------------------------------------------------------------------------------
// Check macros
//--------------------------------------------------------------------------------
#define NUM_OPTIONS defined(TEAPOT) + defined(TRIANGLE) + defined(ZERO)

#if NUM_OPTIONS < 1
#error you must define one macro from TEAPOT, TRIANGLE or ZERO
#elif NUM_OPTIONS > 1
#error you cannot define more than one macro from TEAPOT, TRIANGLE or ZERO
#endif

//--------------------------------------------------------------------------------
// Teapot model data
//--------------------------------------------------------------------------------
#ifdef ZERO
#include "teapot_zeros.inl"
#endif

#ifdef TRIANGLE
#include "teapot_triangle.inl"
#endif

#ifdef TEAPOT
#include "teapot.inl"
#endif

//--------------------------------------------------------------------------------
// Ctor
//--------------------------------------------------------------------------------
MoreTeapotsRenderer::MoreTeapotsRenderer()
    : geometry_instancing_support_(false) {}

//--------------------------------------------------------------------------------
// Dtor
//--------------------------------------------------------------------------------
MoreTeapotsRenderer::~MoreTeapotsRenderer() { Unload(); }

//--------------------------------------------------------------------------------
// Init
//--------------------------------------------------------------------------------
void MoreTeapotsRenderer::Init(const int32_t numX, const int32_t numY,
                               const int32_t numZ) {
  // Settings
  glFrontFace(GL_CCW);

  size_instance_ = 1;

  // Create VBO
  origin_num_vertices_ = sizeof(teapotPositions) / sizeof(teapotPositions[0]) / 3;
  num_vertices_ = size_instance_ * origin_num_vertices_;

  int32_t stride = sizeof(TEAPOT_VERTEX);
  int32_t index = 0;
  TEAPOT_VERTEX* p = new TEAPOT_VERTEX[num_vertices_];

  float off = 0.5;

  for (int32_t round = 0; round < size_instance_; ++round) {
      for (int32_t i = 0; i < origin_num_vertices_; ++i) {
          p[i + round*origin_num_vertices_].pos[0] = teapotPositions[index] + round * off;
          p[i + round*origin_num_vertices_].pos[1] = teapotPositions[index + 1] + round * off;
          p[i + round*origin_num_vertices_].pos[2] = teapotPositions[index + 2] + round * off;

          p[i + round*origin_num_vertices_].normal[0] = teapotNormals[index];
          p[i + round*origin_num_vertices_].normal[1] = teapotNormals[index + 1];
          p[i + round*origin_num_vertices_].normal[2] = teapotNormals[index + 2];
          index += 3;
          index = index % (sizeof(teapotPositions)/ sizeof(teapotPositions[0]));
      }
  }
  glGenBuffers(1, &vbo_);
  glBindBuffer(GL_ARRAY_BUFFER, vbo_);
  glBufferData(GL_ARRAY_BUFFER, stride * num_vertices_, p, GL_STATIC_DRAW);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  delete[] p;

  // Create Index buffer
  origin_num_indices_ = sizeof(teapotIndices) / sizeof(teapotIndices[0]);
  num_indices_ = size_instance_ * origin_num_indices_;
  PRINT("Number of indices is %d \n", num_indices_);

  index = 0;
  uint16_t* q = new uint16_t[num_indices_];
  for (int32_t round = 0; round < size_instance_; ++round) {
      for (int32_t i = 0; i < origin_num_indices_; ++i) {
          q[i + round*origin_num_indices_] = teapotIndices[index]
                                             + round * origin_num_vertices_;
          index++;
          index = index % origin_num_indices_;
      }
  }

  glGenBuffers(1, &ibo_);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ibo_);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, num_indices_ * sizeof(q[0]), q, GL_STATIC_DRAW);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);

  delete[] q;

  // Init Projection matrices
  teapot_x_ = numX;
  teapot_y_ = numY;
  teapot_z_ = numZ;
  vec_mat_models_.reserve(teapot_x_ * teapot_y_ * teapot_z_);

  UpdateViewport();

#ifdef DRAW_ALL_IN_MIDDLE
  const float total_width = 0.f;
  float gap_x = 0.f;
  float gap_y = 0.f;
  float gap_z = 0.f;
#else
  const float total_width = 100.f;
  float gap_x = total_width / (teapot_x_ - 1);
  float gap_y = total_width / (teapot_y_ - 1);
  float gap_z = total_width / (teapot_z_ - 1);
#endif

  float offset_x = -total_width / 2.f;
  float offset_y = -total_width / 2.f;
  float offset_z = -total_width / 2.f;

  for (int32_t x = 0; x < teapot_x_; ++x)
    for (int32_t y = 0; y < teapot_y_; ++y)
      for (int32_t z = 0; z < teapot_z_; ++z) {
        vec_mat_models_.push_back(ndk_helper::Mat4::Translation(
            x * gap_x + offset_x, y * gap_y + offset_y,
            z * gap_z + offset_z));
        vec_colors_.push_back(ndk_helper::Vec3(
            random() / float(RAND_MAX * 1.1), random() / float(RAND_MAX * 1.1),
            random() / float(RAND_MAX * 1.1)));

        float rotation_x = random() / float(RAND_MAX) - 0.5f;
        float rotation_y = random() / float(RAND_MAX) - 0.5f;
        vec_rotations_.push_back(ndk_helper::Vec2(rotation_x * 0.05f, rotation_y * 0.05f));
        vec_current_rotations_.push_back(
            ndk_helper::Vec2(rotation_x * M_PI, rotation_y * M_PI));
      }
    // Load shader for GLES2.0
#ifdef SIMPLE_SHADER
    LoadShaders(&shader_param_, "Shaders/VS_ShaderPlain_simple.vsh",
                "Shaders/ShaderPlain_simple.fsh");
#else
    LoadShaders(&shader_param_, "Shaders/VS_ShaderPlain.vsh",
                "Shaders/ShaderPlain.fsh");
#endif
}

void MoreTeapotsRenderer::UpdateViewport() {
  int32_t viewport[4];
  glGetIntegerv(GL_VIEWPORT, viewport);

  const float CAM_NEAR = 5.f;
  const float CAM_FAR = 10000.f;
  if (viewport[2] < viewport[3]) {
    float aspect =
            static_cast<float>(viewport[2]) / static_cast<float>(viewport[3]);
    mat_projection_ =
            ndk_helper::Mat4::Perspective(aspect, 1.0f, CAM_NEAR, CAM_FAR);
  } else {
    float aspect =
            static_cast<float>(viewport[3]) / static_cast<float>(viewport[2]);
    mat_projection_ =
            ndk_helper::Mat4::Perspective(1.0f, aspect, CAM_NEAR, CAM_FAR);
  }
}

//--------------------------------------------------------------------------------
// Unload
//--------------------------------------------------------------------------------
void MoreTeapotsRenderer::Unload() {
  if (vbo_) {
    glDeleteBuffers(1, &vbo_);
    vbo_ = 0;
  }
  if (ubo_) {
    glDeleteBuffers(1, &ubo_);
    ubo_ = 0;
  }
  if (ibo_) {
    glDeleteBuffers(1, &ibo_);
    ibo_ = 0;
  }
  if (shader_param_.program_) {
    glDeleteProgram(shader_param_.program_);
    shader_param_.program_ = 0;
  }
}

//--------------------------------------------------------------------------------
// Update
//--------------------------------------------------------------------------------
void MoreTeapotsRenderer::Update(float fTime) {
  const float CAM_X = 0.f;
  const float CAM_Y = 0.f;
  const float CAM_Z = 2000.f;

  mat_view_ = ndk_helper::Mat4::LookAt(ndk_helper::Vec3(CAM_X, CAM_Y, CAM_Z),
                                       ndk_helper::Vec3(0.f, 0.f, 0.f),
                                       ndk_helper::Vec3(0.f, 1.f, 0.f));
}

//--------------------------------------------------------------------------------
// Render
//--------------------------------------------------------------------------------
void MoreTeapotsRenderer::Render() {
  // Bind the VBO
  glBindBuffer(GL_ARRAY_BUFFER, vbo_);

  int32_t iStride = sizeof(TEAPOT_VERTEX);
  // Pass the vertex data
  glVertexAttribPointer(ATTRIB_VERTEX, 3, GL_FLOAT, GL_FALSE, iStride,
                        BUFFER_OFFSET(0));
  glEnableVertexAttribArray(ATTRIB_VERTEX);

  glVertexAttribPointer(ATTRIB_NORMAL, 3, GL_FLOAT, GL_FALSE, iStride,
                        BUFFER_OFFSET(3 * sizeof(GLfloat)));
  glEnableVertexAttribArray(ATTRIB_NORMAL);

  // Bind the IB
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ibo_);

  glUseProgram(shader_param_.program_);

  TEAPOT_MATERIALS material = {{1.0f, 1.0f, 1.0f, 10.f}, {0.1f, 0.1f, 0.1f}, };

  // Update uniforms
  //
  // using glUniform3fv here was troublesome..
  //
  glUniform4f(shader_param_.material_specular_, material.specular_color[0],
              material.specular_color[1], material.specular_color[2],
              material.specular_color[3]);
  glUniform3f(shader_param_.material_ambient_, material.ambient_color[0],
              material.ambient_color[1], material.ambient_color[2]);

  glUniform3f(shader_param_.light0_, 100.f, -200.f, -600.f);
  // Regular rendering pass
  for (int32_t i = 0; i < teapot_x_ * teapot_y_ * teapot_z_; ++i) {
    // Set diffuse
    float x, y, z;
    vec_colors_[i].Value(x, y, z);

#ifdef MULTI_GL_SET_UNIFORM
      for (int32_t j = 0; j < 500; ++j)
          glUniform4f(shader_param_.material_diffuse_, x, y, z, 1.f);
#else
    glUniform4f(shader_param_.material_diffuse_, x, y, z, 1.f);
#endif
    // Rotation
    vec_current_rotations_[i] += vec_rotations_[i];
    vec_current_rotations_[i].Value(x, y);
    ndk_helper::Mat4 mat_rotation =
        ndk_helper::Mat4::RotationX(x) * ndk_helper::Mat4::RotationY(y);

    // Feed Projection and Model View matrices to the shaders
    ndk_helper::Mat4 mat_v = mat_view_ * vec_mat_models_[i] * mat_rotation;
    ndk_helper::Mat4 mat_vp = mat_projection_ * mat_v;

    glUniformMatrix4fv(shader_param_.matrix_projection_, 1, GL_FALSE,
                       mat_vp.Ptr());
    glUniformMatrix4fv(shader_param_.matrix_view_, 1, GL_FALSE, mat_v.Ptr());

    glDrawElements(GL_TRIANGLES, num_indices_, GL_UNSIGNED_SHORT,
                   BUFFER_OFFSET(0));
  }
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, 0);
}

//--------------------------------------------------------------------------------
// LoadShaders
//--------------------------------------------------------------------------------
bool MoreTeapotsRenderer::LoadShaders(SHADER_PARAMS* params, const char* strVsh,
                                      const char* strFsh) {
  //
  // Shader load for GLES2
  // In GLES2.0, shader attribute locations need to be explicitly specified
  // before linking
  //
  GLuint program;
  GLuint vertShader, fragShader;

  // Create shader program
  program = glCreateProgram();

  // Create and compile vertex shader
  if (!shader::CompileShader(&vertShader, GL_VERTEX_SHADER, strVsh)){
    PRINT("Failed to compile vertex shader");
    glDeleteProgram(program);
    return false;
  }

  // Create and compile fragment shader
  if (!shader::CompileShader(&fragShader, GL_FRAGMENT_SHADER, strFsh)){
    PRINT("Failed to compile fragment shader");
    glDeleteProgram(program);
    return false;
  }

  // Attach vertex shader to program
  glAttachShader(program, vertShader);

  // Attach fragment shader to program
  glAttachShader(program, fragShader);

  // Bind attribute locations
  // this needs to be done prior to linking
  glBindAttribLocation(program, ATTRIB_VERTEX, "myVertex");
  glBindAttribLocation(program, ATTRIB_NORMAL, "myNormal");

  // Link program
  if (!shader::LinkProgram(program)) {

    PRINT("Failed to link program: %d", program);

    if (vertShader) {
      glDeleteShader(vertShader);
      vertShader = 0;
    }
    if (fragShader) {
      glDeleteShader(fragShader);
      fragShader = 0;
    }
    if (program) {
      glDeleteProgram(program);
    }
    return false;
  }

  // Get uniform locations
  params->matrix_projection_ = glGetUniformLocation(program, "uPMatrix");
  params->matrix_view_ = glGetUniformLocation(program, "uMVMatrix");

  params->light0_ = glGetUniformLocation(program, "vLight0");
  params->material_diffuse_ = glGetUniformLocation(program, "vMaterialDiffuse");
  params->material_ambient_ = glGetUniformLocation(program, "vMaterialAmbient");
  params->material_specular_ =
      glGetUniformLocation(program, "vMaterialSpecular");

  // Release vertex and fragment shaders
  if (vertShader) glDeleteShader(vertShader);
  if (fragShader) glDeleteShader(fragShader);

  params->program_ = program;
  return true;
}

//--------------------------------------------------------------------------------
// Helper functions
//--------------------------------------------------------------------------------
std::string MoreTeapotsRenderer::ToString(const int32_t i) {
  char str[64];
  snprintf(str, sizeof(str), "%d", i);
  return std::string(str);
}
