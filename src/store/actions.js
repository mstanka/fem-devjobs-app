export default {
  setMode(context, payload) {
    if (!payload) {
      localStorage.theme = "";
      context.commit("setMode", "");
    } else {
      localStorage.theme = "dark";
      context.commit("setMode", "dark");
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  filterJobs(context, payload) {
    context.commit("setFilteredJobs", payload);
  },
};
