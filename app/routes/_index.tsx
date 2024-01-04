import React from "react";
import {ClientOnly} from "remix-utils";
import { MDXEditor } from "~/components/editor.client";
import type { V2_MetaFunction } from "@remix-run/node";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ClientOnly fallback={<p>Loading...</p>}>
      {() => <MDXEditor markdown="Hello world" />}
    </ClientOnly>
  );
}
