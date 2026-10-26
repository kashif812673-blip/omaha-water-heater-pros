export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    // Short alias: /terms/ -> /terms-of-service/
    if (url.pathname === "/terms/") {
      return Response.redirect("https://omahawaterheaterpros.com/terms-of-service/", 301);
    }
    return env.ASSETS.fetch(request);
  },
};
