// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Getting Started</a></li><li class="chapter-item expanded affix "><li class="part-title">Calyx Language</li><li class="chapter-item expanded "><a href="tutorial/language-tut.html"><strong aria-hidden="true">1.</strong> Language Tutorial</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lang/multi-component.html"><strong aria-hidden="true">1.1.</strong> Multi-Component Designs</a></li><li class="chapter-item expanded "><a href="lang/memories-by-reference.html"><strong aria-hidden="true">1.2.</strong> Passing Memories by Reference</a></li></ol></li><li class="chapter-item expanded "><a href="lang/ref.html"><strong aria-hidden="true">2.</strong> Language Reference</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lang/data-format.html"><strong aria-hidden="true">2.1.</strong> Data Format</a></li><li class="chapter-item expanded "><a href="lang/static.html"><strong aria-hidden="true">2.2.</strong> Static Timing</a></li><li class="chapter-item expanded "><a href="lang/sync.html"><strong aria-hidden="true">2.3.</strong> Experimental: Synchronization</a></li><li class="chapter-item expanded "><a href="lang/undefined.html"><strong aria-hidden="true">2.4.</strong> Undefined Behaviors</a></li></ol></li><li class="chapter-item expanded "><a href="lang/attributes.html"><strong aria-hidden="true">3.</strong> Attributes</a></li><li class="chapter-item expanded affix "><li class="part-title">Running Calyx Programs</li><li class="chapter-item expanded "><a href="running-calyx/fud/index.html"><strong aria-hidden="true">4.</strong> fud: The Calyx Driver</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="running-calyx/fud/examples.html"><strong aria-hidden="true">4.1.</strong> Examples</a></li><li class="chapter-item expanded "><a href="running-calyx/fud/xilinx.html"><strong aria-hidden="true">4.2.</strong> Xilinx Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="running-calyx/fud/axi-gen.html"><strong aria-hidden="true">4.2.1.</strong> AXI Generation</a></li></ol></li><li class="chapter-item expanded "><a href="running-calyx/fud/external.html"><strong aria-hidden="true">4.3.</strong> External Stages</a></li><li class="chapter-item expanded "><a href="running-calyx/fud/multiple-paths.html"><strong aria-hidden="true">4.4.</strong> Multiple Paths</a></li><li class="chapter-item expanded "><a href="running-calyx/fud/circt.html"><strong aria-hidden="true">4.5.</strong> CIRCT</a></li><li class="chapter-item expanded "><a href="running-calyx/fud/resource-estimation.html"><strong aria-hidden="true">4.6.</strong> Resource Estimation</a></li></ol></li><li class="chapter-item expanded "><a href="running-calyx/fud2/index.html"><strong aria-hidden="true">5.</strong> fud2: Experimental Driver</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="running-calyx/fud2/rhai-api.html"><strong aria-hidden="true">5.1.</strong> fud2 Internals: Rhai API</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="running-calyx/fud2/high-level-rhai.html"><strong aria-hidden="true">5.1.1.</strong> High Level Rhai</a></li><li class="chapter-item expanded "><a href="running-calyx/fud2/low-level-rhai.html"><strong aria-hidden="true">5.1.2.</strong> Low Level Rhai</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="running-calyx/interfacing.html"><strong aria-hidden="true">6.</strong> Interfacing with Calyx RTL</a></li><li class="chapter-item expanded "><a href="running-calyx/interpreter.html"><strong aria-hidden="true">7.</strong> The Calyx Interpreter</a></li><li class="chapter-item expanded "><a href="running-calyx/profiler.html"><strong aria-hidden="true">8.</strong> The Calyx Profiler</a></li><li class="chapter-item expanded "><a href="running-calyx/firrtl.html"><strong aria-hidden="true">9.</strong> FIRRTL Backend</a></li><li class="chapter-item expanded affix "><li class="part-title">Compiler Development Guide</li><li class="chapter-item expanded "><a href="compiler.html"><strong aria-hidden="true">10.</strong> The Calyx Compiler</a></li><li class="chapter-item expanded "><a href="new-pass.html"><strong aria-hidden="true">11.</strong> Adding a New Pass</a></li><li class="chapter-item expanded "><a href="libraries/core.html"><strong aria-hidden="true">12.</strong> Primitive Library</a></li><li class="chapter-item expanded "><a href="compiler-as-library.html"><strong aria-hidden="true">13.</strong> The calyx Library</a></li><li class="chapter-item expanded "><a href="optimizations/dataflow.html"><strong aria-hidden="true">14.</strong> Dataflow Analysis</a></li><li class="chapter-item expanded "><a href="debug/index.html"><strong aria-hidden="true">15.</strong> Debugging</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="debug/cider.html"><strong aria-hidden="true">15.1.</strong> Logical Bugs</a></li><li class="chapter-item expanded "><a href="debug/debug.html"><strong aria-hidden="true">15.2.</strong> Compilation Bugs</a></li></ol></li><li class="chapter-item expanded "><a href="github.html"><strong aria-hidden="true">16.</strong> Contributing to Calyx</a></li><li class="chapter-item expanded affix "><li class="part-title">Generating Calyx</li><li class="chapter-item expanded "><a href="builder/calyx-py.html"><strong aria-hidden="true">17.</strong> Emitting Calyx from Python</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="builder/walkthrough.html"><strong aria-hidden="true">17.1.</strong> Builder Library Walkthrough</a></li></ol></li><li class="chapter-item expanded "><a href="tutorial/frontend-tut.html"><strong aria-hidden="true">18.</strong> Frontend Tutorial</a></li><li class="chapter-item expanded "><a href="frontends/index.html"><strong aria-hidden="true">19.</strong> Frontend Compilers</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="frontends/dahlia.html"><strong aria-hidden="true">19.1.</strong> Dahlia</a></li><li class="chapter-item expanded "><a href="frontends/systolic-array.html"><strong aria-hidden="true">19.2.</strong> Systolic Array Generator</a></li><li class="chapter-item expanded "><a href="frontends/tvm-relay.html"><strong aria-hidden="true">19.3.</strong> TVM Relay</a></li><li class="chapter-item expanded "><a href="frontends/ntt.html"><strong aria-hidden="true">19.4.</strong> NTT Pipeline Generator</a></li><li class="chapter-item expanded "><a href="frontends/queues.html"><strong aria-hidden="true">19.5.</strong> Queues</a></li><li class="chapter-item expanded "><a href="frontends/mrxl.html"><strong aria-hidden="true">19.6.</strong> MrXL</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Tools</li><li class="chapter-item expanded "><a href="tools/runt.html"><strong aria-hidden="true">20.</strong> Runt</a></li><li class="chapter-item expanded "><a href="tools/data-gen.html"><strong aria-hidden="true">21.</strong> Data Gen</a></li><li class="chapter-item expanded "><a href="tools/exp-generator.html"><strong aria-hidden="true">22.</strong> exp Generator</a></li><li class="chapter-item expanded "><a href="tools/editor-highlighting.html"><strong aria-hidden="true">23.</strong> Editor Highlighting</a></li><li class="chapter-item expanded "><a href="tools/language-server.html"><strong aria-hidden="true">24.</strong> Language Server</a></li><li class="chapter-item expanded "><a href="dev/calyx-pass-explorer.html"><strong aria-hidden="true">25.</strong> Visualizing Compiler Passes</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
