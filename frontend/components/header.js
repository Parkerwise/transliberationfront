class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
	<header>
			<div class="bar-container">
			<nav>
				<h1>Parker Wise</h1>
				<ul id="sidemenu">	
					<li><a href="./index.html">About</a></li>
					<li><a href="./projects.html">Projects</a></li>
					<li><a href="./outreach.html">Outreach</a></li>
					<li><a href="./parkerwise.pdf">Resume</a></li>
					<li><a href="./blog.html">Blog</a></li>
					<i class="fas fa-times" onclick="closemenu()"></i>
				</ul>
				<i class="fas fa-bars" onclick="openmenu()"></i>
			</nav>
			</div>
		</header>
    `;
  }
}

customElements.define('header-component', Header);
