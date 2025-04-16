import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'

import Counter from '@/components/counter'

// This function processes code to fix line spacing
function processCodeContent(code: string): string {
  return code
    .replace(/\r\n/g, '\n')       // Normalize line endings
    .replace(/\n\n\n+/g, '\n\n')  // Replace 3+ blank lines with 1 blank line
}

function Code({ children, ...props }: any) {
  // Process the code content
  const processedCode = typeof children === 'string' 
    ? processCodeContent(children)
    : children;
  
  const codeHTML = highlight(processedCode);
  
  // For Python code specifically, add a class
  const isPython = props.className?.includes('language-python');
  const className = `font-mono text-sm ${isPython ? 'python-code' : ''}`;
  
  return (
    <code 
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
      className={className}
      style={{ 
        lineHeight: 1.5,  // Increased line height for better readability
        whiteSpace: 'pre',
      }}
    />
  );
}

const components = {
  code: Code,
  Counter,
  // Add markdown-specific components
  h1: (props: any) => <h1 {...props} className="text-3xl font-bold mt-8 mb-4" />,
  h2: (props: any) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3" />,
  h3: (props: any) => <h3 {...props} className="text-xl font-bold mt-5 mb-2" />,
  h4: (props: any) => <h4 {...props} className="text-lg font-bold mt-4 mb-2" />,
  p: (props: any) => <p {...props} className="my-4 leading-relaxed" />,
  ul: (props: any) => <ul {...props} className="list-disc pl-6 my-4" />,
  ol: (props: any) => <ol {...props} className="list-decimal pl-6 my-4" />,
  li: (props: any) => <li {...props} className="mb-2" />,
  blockquote: (props: any) => <blockquote {...props} className="border-l-4 border-primary/30 pl-4 italic my-4" />,
  a: (props: any) => <a {...props} className="text-primary hover:underline font-medium" />,
  hr: (props: any) => <hr {...props} className="my-6 border-t border-muted" />,
  img: (props: any) => {
    // For Next.js Image component, we need width and height
    // Since MDX might not provide them, we'll use reasonable defaults
    return (
      <div className="relative my-4 overflow-hidden rounded-md">
        <Image
          src={props.src}
          alt={props.alt || ''}
          width={props.width || 1200}
          height={props.height || 800}
          className="rounded-md max-w-full"
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  },
  pre: (props: any) => {
    // Check if the code is Python to add specific class
    const isPython = props.children?.props?.className?.includes('language-python');
    const className = `overflow-auto p-4 bg-gray-100 dark:bg-zinc-900 rounded-md my-4 border border-gray-200 dark:border-zinc-800 code-block ${isPython ? 'python-code-block' : ''}`;
    
    return (
      <pre 
        {...props}
        className={className}
        style={{ 
          lineHeight: 1.5,
          whiteSpace: 'pre',
        }}
      />
    );
  },
  table: (props: any) => <table {...props} className="min-w-full divide-y divide-border my-4" />,
  th: (props: any) => <th {...props} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" />,
  td: (props: any) => <td {...props} className="px-4 py-3 text-sm" />
}

export default function MDXContent({
  source,
  ...props
}: JSX.IntrinsicAttributes & MDXRemoteProps) {
  // Process the source to fix code blocks before rendering
  let processedSource = source;
  
  // Try to fix code blocks directly in the markdown source
  if (typeof source === 'string') {
    // Replace python code blocks to ensure they don't have extra newlines while maintaining normal spacing
    processedSource = source.replace(
      /```python([\s\S]*?)```/g, 
      (match, codeContent) => {
        const cleanedCode = processCodeContent(codeContent);
        return "```python" + cleanedCode + "```";
      }
    );
  }
  
  return (
    <div className="mdx-content">
      <MDXRemote
        source={processedSource}
        {...props}
        components={{ ...components, ...(props.components || {}) }}
        options={{
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
            format: 'mdx'
          },
        }}
      />
    </div>
  )
}