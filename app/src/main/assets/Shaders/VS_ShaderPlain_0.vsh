  attribute highp vec3 myVertex;
  attribute highp vec3 aVertexPosition;

  uniform highp mat4 uNormalMatrix;
  uniform highp mat4 uMVMatrix;
  uniform highp mat4 uPMatrix;

  varying highp vec3 vLighting;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

    // Apply lighting effect

    highp vec3 ambientLight = vec3(0.6, 0.6, 0.6);
    highp vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
    highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);

    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);

    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);
    vLighting = ambientLight + (directionalLightColor * directional);
  }