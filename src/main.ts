import { Plugin } from "obsidian";
import { SYMBOL } from "./symbols";

export default class APLPlugin extends Plugin {

  key = "`"

  APLTranslate (source: string): string{
    if (source.length == 0) return ''
    if (source[0] == this.key) {
      return ( SYMBOL[source[1]] ?? source[0] + source[1] ) + this.APLTranslate(source.slice(2))
    }
    return source[0] + this.APLTranslate(source.slice(1))
  }

  async onload() {
    this.registerMarkdownCodeBlockProcessor("apl", (source: string, el: HTMLElement, _) => {
      let cls = "language-apl"
      let text = this.APLTranslate(source)
      el.createEl("pre", { cls }).createEl("code", { cls, text })
    })
  }
}
