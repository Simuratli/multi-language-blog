import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity";

type CodeBlock = {
  _type: "code";
  code: string;
  language?: string;
  filename?: string;
};

export const CustomCodeBlock: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeBlock }) => {
      console.log(value, "valie");
      const { code, language, filename } = value || {};

      return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg my-4">
          {filename && <p className="text-gray-400 mb-2 text-sm">{filename}</p>}
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            customStyle={{
              backgroundColor: "transparent",
              padding: 0,
              fontSize: "0.875rem",
              lineHeight: "1.5",
              fontFamily: "monospace",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
    image: ({ value }: { value: any }) => {
      return (
        <div className="relative text-white rounded-lg">
          <Image
            id="innerImage"
            className=" shadow-lg"
            width={200}
            height={200}
            alt={value.alt}
            src={urlFor(value).url()}
          />
        </div>
      );
    },
  },
  marks: {
    code: ({ children }) => (
      <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded-md text-sm font-mono">
        {children}
      </code>
    ),
    strong: ({ children }) => <strong>{children}</strong>,
  },
  block: {
    h1: ({ children, value }) => (
      <h1 className="text-3xl font-bold mb-4 mt-6">{children}</h1>
    ),
  },
};
