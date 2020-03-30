# Creative Coding

What is **creative coding**? *Using code to create something expressive, rather than functional*.

What is **generative art**? *Artworks created in part by an autonomous or rule-based system.*

### FEM

Unicode compositions

To make a circle:
```js
context.beginPath()
context.arc(0, 0, 50, 0, 360)
```

Gaussian randomness

canvas-sketch-ffmpeg

What is a shader? It's a small program. GLSL.

Shaders work on each individual pixel. It doesn't have context of the other pixels.

Left to right, black to white shader:
```
prcision highp float;
varying vec2 vUv;

void main() {
  vec3 color = vec3(vUv.x);
  
  float alpha = 1.0;
  
  gl_FragColor = vec4(color, alpha);
}
```

`varying` means it can change/be different.
`uniform` means the value is the same across all pixels.

#### Threejs

material = surface quality

## Processing

### Globals

- `mousePressed`
- `mouseX`
- `mouseY`