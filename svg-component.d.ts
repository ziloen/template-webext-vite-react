
declare module '~virtual/svg-component' {
  const SvgIcon: (props: {
    name: "CarbonLaunch" | "CarbonLink",
    className?:string
    style?: React.CSSProperties
  })=> JSX.Element;
  export const svgNames: ["CarbonLaunch" , "CarbonLink"];
  export type SvgName = "CarbonLaunch" | "CarbonLink";
  export default SvgIcon;
}
