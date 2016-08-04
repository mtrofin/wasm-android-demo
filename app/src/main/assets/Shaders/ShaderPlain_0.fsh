      uniform lowp vec4       vMaterialDiffuse;

      void main(void) {
        gl_FragColor = vMaterialDiffuse;
        //gl_FragColor = vec4(0, 1, 0, 1);
      }