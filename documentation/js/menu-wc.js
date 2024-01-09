'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-training documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-38e62c825dc2762d0c69f048575fe0ed822d8699cfabc70272d16012a7135e1bb81af6d293d6f7873d22840999ed07138a476c86fac037babc9e6bee434e82cf"' : 'data-bs-target="#xs-components-links-module-AppModule-38e62c825dc2762d0c69f048575fe0ed822d8699cfabc70272d16012a7135e1bb81af6d293d6f7873d22840999ed07138a476c86fac037babc9e6bee434e82cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-38e62c825dc2762d0c69f048575fe0ed822d8699cfabc70272d16012a7135e1bb81af6d293d6f7873d22840999ed07138a476c86fac037babc9e6bee434e82cf"' :
                                            'id="xs-components-links-module-AppModule-38e62c825dc2762d0c69f048575fe0ed822d8699cfabc70272d16012a7135e1bb81af6d293d6f7873d22840999ed07138a476c86fac037babc9e6bee434e82cf"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' : 'data-bs-target="#xs-components-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' :
                                            'id="xs-components-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' }>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductPaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductPaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' :
                                        'id="xs-injectables-links-module-ProductModule-4c1ecee45a226e91f8d41f7579cad9da0976d94cb4f66501366d6d86ef2f20cf181f70b877e651f8d74a2207728756edbcc9f105f5adff497ec6a5bae25b64c1"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});