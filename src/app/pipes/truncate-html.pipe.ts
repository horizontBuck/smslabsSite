import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateHtml',
  standalone: true
})
export class TruncateHtmlPipe implements PipeTransform {
  transform(html: string, limit: number = 50): string {
    if (!html) return '';
    let div = document.createElement('div');
    div.innerHTML = html;
    let textLength = 0;
    let result = '';
    function traverse(node: Node): boolean {
      if (textLength >= limit) return false;
      if (node.nodeType === Node.TEXT_NODE) {
        let needed = limit - textLength;
        let text = node.textContent || '';
        if (text.length > needed) {
          result += text.slice(0, needed);
          textLength += needed;
          return false;
        } else {
          result += text;
          textLength += text.length;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        let el = node as HTMLElement;
        result += `<${el.tagName.toLowerCase()}`;
        for (let attr of Array.from(el.attributes)) {
          result += ` ${attr.name}="${attr.value}"`;
        }
        result += '>';
        for (let child of Array.from(node.childNodes)) {
          if (!traverse(child)) break;
        }
        result += `</${el.tagName.toLowerCase()}>`;
      }
      return textLength < limit;
    }
    for (let child of Array.from(div.childNodes)) {
      if (!traverse(child)) break;
    }
    // Add ellipsis if truncated
    if (textLength >= limit) {
      result += '...';
    }
    return result;
  }
}
