// Anything exported from this file is importable by other in-browser modules.

export function emitEvent(name, data) {
  dispatchEvent(new CustomEvent(name, { detail: data }));
}

export function listenEvent(name, callback) {
  window.addEventListener(name, callback);
}
