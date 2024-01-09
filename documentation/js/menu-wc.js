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
                                            'data-bs-target="#components-links-module-AppModule-e21acbd111a9126b106e06f14797bbd48f2be6797f2456212b5d712a8077f98b712b3730f8dbad5fda0486c58309442677c3b37cf4f40c464cd91e49a99f2208"' : 'data-bs-target="#xs-components-links-module-AppModule-e21acbd111a9126b106e06f14797bbd48f2be6797f2456212b5d712a8077f98b712b3730f8dbad5fda0486c58309442677c3b37cf4f40c464cd91e49a99f2208"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e21acbd111a9126b106e06f14797bbd48f2be6797f2456212b5d712a8077f98b712b3730f8dbad5fda0486c58309442677c3b37cf4f40c464cd91e49a99f2208"' :
                                            'id="xs-components-links-module-AppModule-e21acbd111a9126b106e06f14797bbd48f2be6797f2456212b5d712a8077f98b712b3730f8dbad5fda0486c58309442677c3b37cf4f40c464cd91e49a99f2208"' }>
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
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' : 'data-bs-target="#xs-components-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' :
                                            'id="xs-components-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' }>
                                            <li class="link">
                                                <a href="components/PostActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostConsultationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostConsultationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostCreationFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostCreationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostListPaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostListPaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostListSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostListSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostViewConsultationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostViewConsultationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostViewCreationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostViewCreationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostViewListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostViewListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' : 'data-bs-target="#xs-injectables-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' :
                                        'id="xs-injectables-links-module-PostModule-7ce8f5051627f2c026956e36b40dfb8098907963bcd555f9de69bf5c20d353d84ebed0da05139b19efd02d5765128ece3dc20f56adbcd8b1677930b3830b7cb6"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostRoutingModule.html" data-type="entity-link" >PostRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' : 'data-bs-target="#xs-components-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' :
                                            'id="xs-components-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' }>
                                            <li class="link">
                                                <a href="components/ProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductPaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductPaginationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' : 'data-bs-target="#xs-directives-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' :
                                        'id="xs-directives-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' }>
                                        <li class="link">
                                            <a href="directives/ProductConsumerBase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductConsumerBase</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' : 'data-bs-target="#xs-injectables-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' :
                                        'id="xs-injectables-links-module-ProductModule-06ddc67d2bbcb5a885e244708741c9ac90bab0c35466b83b1eb8958a16c50b948296013ec4c043c1b60bcc4e1a1027ec0b9e94dd17f0b7294022815539eea141"' }>
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
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
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
                                <a href="interfaces/Command.html" data-type="entity-link" >Command</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServerResponse.html" data-type="entity-link" >ServerResponse</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
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