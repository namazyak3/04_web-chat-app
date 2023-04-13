export default function logger(label: string, content: string, color?:string) {
  console.log(`${color}[${label}] ${content}]\x1b[39m`)
}