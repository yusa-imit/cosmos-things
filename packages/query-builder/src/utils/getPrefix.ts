export function getPrefix(): string {
  var prefix
  if (window) {
    prefix = Array.from(
      window.crypto.getRandomValues(new Uint8Array(10)),
      (v) => {
        v.toString(16).padStart(2, "0")
      }
    ).join()
  } else {
    prefix = require("node:crypto").randomBytes(5).toString("hex")
  }
  return prefix
}
