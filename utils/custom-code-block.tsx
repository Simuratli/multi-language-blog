import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; //

type CodeBlock = {
  _type: "code";
  code: string;
  language?: string;
  filename?: string;
};

export const CustomCodeBlock = {
  types: {
    code: ({ value }: { value: CodeBlock }) => {
      const { code, language, filename } = value || {};

      return (
        <div className="bg-black text-white p-4 rounded-lg shadow-lg my-4">
          {filename && <p className="text-gray-400 mb-2 text-sm">{filename}</p>}
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            customStyle={{
              backgroundColor: "transparent", // Matches Tailwind's black background
              padding: 0,
              fontSize: "0.875rem", // Tailwind's text-sm
              lineHeight: "1.5",
              fontFamily: "monospace",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  marks: {
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded-md text-sm font-mono">
        {children}
      </code>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong>{children}</strong>
    ), // Bold text rendering
  },
};
