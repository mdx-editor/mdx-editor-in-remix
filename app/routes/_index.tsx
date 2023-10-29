import React from "react";
import type { MetaFunction } from "@remix-run/node";

import '@mdxeditor/editor/style.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const LazyMDXEditor = React.lazy(() => import("@mdxeditor/editor").then(mod => ({default:mod.MDXEditor})));

export default function Index() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyMDXEditor markdown="Hello world" />
    </React.Suspense>      
  );
}
