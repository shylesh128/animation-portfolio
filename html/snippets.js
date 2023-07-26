// HTML snippets
const htmlSnippets = [
  { label: "<div>", value: "<div>\n\t\n</div>" },
  { label: "<h1>", value: "<h1></h1>" },
  { label: "<p>", value: "<p></p>" },
  { label: "<a>", value: '<a href=""></a>' },
  { label: "<img>", value: '<img src="" alt="">' },
  { label: "<h2>", value: "<h2></h2>" },
  { label: "<ul>", value: "<ul>\n\t<li></li>\n\t<li></li>\n</ul>" },
  { label: "<ol>", value: "<ol>\n\t<li></li>\n\t<li></li>\n</ol>" },
  { label: "<li>", value: "<li></li>" },
  { label: "<input>", value: '<input type="" />' },
  { label: "<button>", value: "<button></button>" },
  { label: "<form>", value: "<form>\n\t\n</form>" },
  { label: "<label>", value: "<label for=''></label>" },
  { label: "<textarea>", value: "<textarea></textarea>" },
  {
    label: "<select>",
    value:
      "<select>\n\t<option value=''></option>\n\t<option value=''></option>\n</select>",
  },
  { label: "<span>", value: "<span></span>" },
  { label: "<strong>", value: "<strong></strong>" },
  { label: "<em>", value: "<em></em>" },
  { label: "<section>", value: "<section>\n\t\n</section>" },
  { label: "<article>", value: "<article>\n\t\n</article>" },
  { label: "<header>", value: "<header>\n\t\n</header>" },
  { label: "<footer>", value: "<footer>\n\t\n</footer>" },
  { label: "<nav>", value: "<nav>\n\t\n</nav>" },
  { label: "<main>", value: "<main>\n\t\n</main>" },
  { label: "<aside>", value: "<aside>\n\t\n</aside>" },
  { label: "<iframe>", value: '<iframe src="" frameborder="0"></iframe>' },
  { label: "<div class=''>", value: "<div class=''>\n\t\n</div>" },
  { label: "<h3>", value: "<h3></h3>" },
  { label: "<h4>", value: "<h4></h4>" },
  { label: "<h5>", value: "<h5></h5>" },
  { label: "<h6>", value: "<h6></h6>" },
  {
    label: "<table>",
    value:
      "<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th></th>\n\t\t\t<th></th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td></td>\n\t\t</tr>\n\t</tbody>\n</table>",
  },
  { label: "<tr>", value: "<tr>\n\t<td></td>\n\t<td></td>\n</tr>" },
  { label: "<th>", value: "<th></th>" },
  { label: "<td>", value: "<td></td>" },
  {
    label: "<thead>",
    value: "<thead>\n\t<tr>\n\t\t<th></th>\n\t\t<th></th>\n\t</tr>\n</thead>",
  },
  {
    label: "<tbody>",
    value: "<tbody>\n\t<tr>\n\t\t<td></td>\n\t\t<td></td>\n\t</tr>\n</tbody>",
  },
  { label: "<button type='submit'>", value: "<button type='submit'></button>" },
  { label: "<button type='reset'>", value: "<button type='reset'></button>" },
  { label: "<button type='button'>", value: "<button type='button'></button>" },
  { label: "<meta>", value: '<meta charset="UTF-8">' },
  { label: "<head>", value: "<head>\n\t\n</head>" },
  { label: "<body>", value: "<body>\n\t\n</body>" },
  { label: "<title>", value: "<title></title>" },
  { label: "<link>", value: '<link rel="stylesheet" href="">' },
  { label: "<script>", value: "<script>\n\t\n</script>" },
  { label: "<noscript>", value: "<noscript>\n\t\n</noscript>" },
  { label: "<br>", value: "<br>" },
  { label: "<hr>", value: "<hr>" },
  { label: "<abbr>", value: "<abbr title=''></abbr>" },
  { label: "<address>", value: "<address></address>" },
  { label: "<blockquote>", value: "<blockquote>\n\t\n</blockquote>" },
  { label: "<cite>", value: "<cite></cite>" },
  { label: "<code>", value: "<code></code>" },
  { label: "<del>", value: "<del></del>" },
  { label: "<ins>", value: "<ins></ins>" },
  { label: "<kbd>", value: "<kbd></kbd>" },
  { label: "<mark>", value: "<mark></mark>" },
  { label: "<q>", value: "<q></q>" },
  { label: "<small>", value: "<small></small>" },
  { label: "<sub>", value: "<sub></sub>" },
  { label: "<sup>", value: "<sup></sup>" },
];

// CSS snippets
const cssSnippets = [
  { label: "h2 {...}", value: "h2 {\n\t\n}" },
  { label: "h3 {...}", value: "h3 {\n\t\n}" },
  { label: "h4 {...}", value: "h4 {\n\t\n}" },
  { label: "h5 {...}", value: "h5 {\n\t\n}" },
  { label: "h6 {...}", value: "h6 {\n\t\n}" },
  {
    label: "ul {...}",
    value: "ul {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n}",
  },
  {
    label: "ol {...}",
    value: "ol {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n}",
  },
  { label: "li {...}", value: "li {\n\t\n}" },
  {
    label: "img {...}",
    value: "img {\n\tdisplay: block;\n\tmax-width: 100%;\n\theight: auto;\n}",
  },
  { label: "input {...}", value: "input {\n\t\n}" },
  { label: "button {...}", value: "button {\n\t\n}" },
  { label: "a:hover {...}", value: "a:hover {\n\t\n}" },
  { label: "form {...}", value: "form {\n\t\n}" },
  { label: "label {...}", value: "label {\n\t\n}" },
  { label: "textarea {...}", value: "textarea {\n\t\n}" },
  { label: "select {...}", value: "select {\n\t\n}" },
  { label: "span {...}", value: "span {\n\t\n}" },
  { label: ".container {...}", value: ".container {\n\t\n}" },
  { label: ".header {...}", value: ".header {\n\t\n}" },
  { label: ".footer {...}", value: ".footer {\n\t\n}" },
  { label: ".nav {...}", value: ".nav {\n\t\n}" },
  { label: ".main {...}", value: ".main {\n\t\n}" },
  { label: ".sidebar {...}", value: ".sidebar {\n\t\n}" },
  { label: ".btn {...}", value: ".btn {\n\t\n}" },
  { label: ".btn:hover {...}", value: ".btn:hover {\n\t\n}" },
  {
    label: ".link {...}",
    value: ".link {\n\ttext-decoration: none;\n\tcolor: #007BFF;\n}",
  },
  {
    label: ".link:hover {...}",
    value: ".link:hover {\n\ttext-decoration: underline;\n}",
  },
  { label: ".hidden {...}", value: ".hidden {\n\tdisplay: none;\n}" },
  { label: ".visible {...}", value: ".visible {\n\tdisplay: block;\n}" },
  { label: ".center {...}", value: ".center {\n\ttext-align: center;\n}" },
  { label: ".bold {...}", value: ".bold {\n\tfont-weight: bold;\n}" },
  { label: ".italic {...}", value: ".italic {\n\tfont-style: italic;\n}" },
  {
    label: ".underline {...}",
    value: ".underline {\n\ttext-decoration: underline;\n}",
  },
  { label: ".flex {...}", value: ".flex {\n\tdisplay: flex;\n}" },
  {
    label: ".flex-row {...}",
    value: ".flex-row {\n\tdisplay: flex;\n\tflex-direction: row;\n}",
  },
  {
    label: ".flex-column {...}",
    value: ".flex-column {\n\tdisplay: flex;\n\tflex-direction: column;\n}",
  },
  {
    label: ".justify-center {...}",
    value: ".justify-center {\n\tjustify-content: center;\n}",
  },
  {
    label: ".align-center {...}",
    value: ".align-center {\n\talign-items: center;\n}",
  },
  {
    label: ".bg-color {...}",
    value: ".bg-color {\n\tbackground-color: #f0f0f0;\n}",
  },
  { label: ".text-color {...}", value: ".text-color {\n\tcolor: #333;\n}" },
  { label: ".font-size {...}", value: ".font-size {\n\tfont-size: 16px;\n}" },
  { label: ".border {...}", value: ".border {\n\tborder: 1px solid #ccc;\n}" },
  {
    label: ".border-radius {...}",
    value: ".border-radius {\n\tborder-radius: 4px;\n}",
  },
  {
    label: "@media screen and (max-width: 768px) {...}",
    value: "@media screen and (max-width: 768px) {\n\t\n}",
  },
  {
    label: "@keyframes fadeIn {...}",
    value:
      "@keyframes fadeIn {\n\t0% { opacity: 0; }\n\t100% { opacity: 1; }\n}",
  },
  {
    label: "@font-face {...}",
    value:
      "@font-face {\n\tfont-family: 'CustomFont';\n\tsrc: url('path/to/font.woff2') format('woff2'), url('path/to/font.woff') format('woff');\n}",
  },
  {
    label: "::before {...}",
    value:
      "content: '';\n\tdisplay: block;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: #000;\n\t/* Other properties here */",
  },
  {
    label: "::after {...}",
    value:
      "content: '';\n\tdisplay: block;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: #000;\n\t/* Other properties here */",
  },
];

window.htmlSnippets = htmlSnippets;
window.cssSnippets = cssSnippets;
