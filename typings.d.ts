declare module '*.css'
declare module '*.less' {
  const resource: { [key: string]: string }
  export = resource
}
declare module '*.png'
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement
  const url: string
  export default url
}
