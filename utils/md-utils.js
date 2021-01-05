import showdown from 'showdown'

export function md2html(content) {
  const converter = new showdown.Converter()

  return converter.makeHtml(content)
}
