const html = require('choo/html')
const viewLayout = require('../../elements/view-layout')
const Layout = require('../../elements/layout')

module.exports = Layout(NotFound)

function NotFound () {
  return (state, emit) => {
    return viewLayout((state, emit) => html`
      <div class="flex flex-column flex-auto justify-center items-center pb6">
        <div class="measure">
          <h1 class="flex flex-column lh-title tc f2">
            404
            <small>Page not found</small>
          </h1>
        </div>
        <a href="/" class="link color-inherit dim dib grow">Go back to /</a>
      </div>
    `)(state, emit)
  }
}
