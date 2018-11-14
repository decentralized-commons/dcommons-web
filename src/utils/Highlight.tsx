import React from "react";

const Highlight = ({children, backgroundColor}: { children: string, backgroundColor: string }) => <span
    style={{backgroundColor}}>{children}</span>;


const HighlightDifference = (props:any) => <Highlight backgroundColor="gold">{props.children}</Highlight>;
const HighlightWarning = (props:any) => <Highlight backgroundColor="rgba(255,65,54, 0.5)">{props.children}</Highlight>;

export {Highlight, HighlightDifference, HighlightWarning};