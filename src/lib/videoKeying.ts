const KEY_LUMINANCE = 55; // "dark" threshold used only to find background touching the edge

// Removes a solid dark video background baked into a canvas frame's pixel data, in place. A flat
// luminance key would also erase dark subject pixels (e.g. black hair) — instead, flood-fill from
// the frame's border and only clear dark pixels connected to it, same approach as the
// border-touching cutout technique already used for photos on this project (see LESSONS.md).
export function keyOutBackground(data: Uint8ClampedArray, size: number) {
  const luminance = (idx: number) => (data[idx * 4] + data[idx * 4 + 1] + data[idx * 4 + 2]) / 3;
  const visited = new Uint8Array(size * size);
  const stack: number[] = [];
  const seed = (x: number, y: number) => {
    const idx = y * size + x;
    if (!visited[idx] && luminance(idx) < KEY_LUMINANCE) {
      visited[idx] = 1;
      stack.push(idx);
    }
  };
  for (let x = 0; x < size; x++) {
    seed(x, 0);
    seed(x, size - 1);
  }
  for (let y = 0; y < size; y++) {
    seed(0, y);
    seed(size - 1, y);
  }
  while (stack.length > 0) {
    const idx = stack.pop() as number;
    data[idx * 4 + 3] = 0;
    const x = idx % size;
    const y = (idx / size) | 0;
    if (x > 0) seed(x - 1, y);
    if (x < size - 1) seed(x + 1, y);
    if (y > 0) seed(x, y - 1);
    if (y < size - 1) seed(x, y + 1);
  }
}
