import React from "react";

const Highlight = ({ children, backgroundColor }: { children: string; backgroundColor: string }) => (
  <span style={{ backgroundColor }}>{children}</span>
);

const HighlightDifference = ({ children }: { children: string }) => (
  <Highlight backgroundColor="gold">{children}</Highlight>
);
const HighlightWarning = ({ children }: { children: string }) => (
  <Highlight backgroundColor="rgba(255,65,54, 0.5)">{children}</Highlight>
);

export { Highlight, HighlightDifference, HighlightWarning };
