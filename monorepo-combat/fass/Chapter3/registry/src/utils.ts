// 工具文件
import { brightRed } from "../../dep";
export function printError(msg: string) {
  console.log(`${brightRed('错误: ')} ${msg}`);
}