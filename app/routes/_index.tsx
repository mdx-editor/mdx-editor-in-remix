import type { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import { Editor } from "../components/editor.client";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <Editor markdown="Hello world" />}
    </ClientOnly>
  );
}
