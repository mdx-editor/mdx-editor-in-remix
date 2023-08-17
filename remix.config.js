/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  serverDependenciesToBundle: [
    "@mdxeditor/editor",
    "react-diff-view",
    /^mdast.*/,
    /^micromark.*/,
    /^zwitch.*/,
    /^unist.*/,
    /^estree-util-.*/,
    /^character-.*/,
    /^is-.*/,
    "parse-entities",
    "stringify-entities",
    "markdown-table",
    "decode-named-character-reference",
    "fault",
    "ccount",
    "vfile-message",
    "longest-streak"
  ]
};
