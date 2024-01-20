export function getCurrentTheme() {
  if (typeof localStorage === "undefined") {
    return "light";
  }

  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    return "dark";
  }
  return "light";
}
