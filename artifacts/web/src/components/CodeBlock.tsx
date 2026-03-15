export default function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="code-preview">
      <code>{code.trim()}</code>
    </pre>
  );
}
