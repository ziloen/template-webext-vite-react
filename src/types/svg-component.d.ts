
declare module '~virtual/svg-component' {
  const SvgIcon: (props: {
    name: "CarbonLink",
    className?:string
    style?: React.CSSProperties
  })=> JSX.Element;
  export const svgNames: ["CarbonLink"];
  export type SvgName = "CarbonLink";
  export default SvgIcon;
}
