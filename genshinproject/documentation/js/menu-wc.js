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
                    <a href="index.html" data-type="index-link">com.example.genshin documentation</a>
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
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' : 'data-target="#xs-components-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' :
                                            'id="xs-components-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtifactsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtifactsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuilderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuildsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuildsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharactersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharactersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnemiesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnemiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WeaponsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeaponsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' : 'data-target="#xs-pipes-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' :
                                            'id="xs-pipes-links-module-AppModule-795643313c55d3557fdfaeaec0e9a888"' }>
                                            <li class="link">
                                                <a href="pipes/ArtifactPartsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtifactPartsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ArtifactSetPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtifactSetPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/BuildArtifactsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuildArtifactsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CharacterimagePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharacterimagePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ConstellationPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConstellationPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DropsImgPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DropsImgPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ElementsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ElementsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EnemyImgPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EnemyImgPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TypesPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypesPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WeaponiconPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeaponiconPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WeaponsImgPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WeaponsImgPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ArtifactsService.html" data-type="entity-link">ArtifactsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BuildServiceService.html" data-type="entity-link">BuildServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CharacterService.html" data-type="entity-link">CharacterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnemiesService.html" data-type="entity-link">EnemiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link">TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeaponsService.html" data-type="entity-link">WeaponsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ArtifactPart.html" data-type="entity-link">ArtifactPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArtifactPartBuild.html" data-type="entity-link">ArtifactPartBuild</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Artifacts.html" data-type="entity-link">Artifacts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArtifactSet.html" data-type="entity-link">ArtifactSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArtifactStat.html" data-type="entity-link">ArtifactStat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Build.html" data-type="entity-link">Build</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BuildShow.html" data-type="entity-link">BuildShow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Character.html" data-type="entity-link">Character</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Constellations.html" data-type="entity-link">Constellations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Description.html" data-type="entity-link">Description</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Drop.html" data-type="entity-link">Drop</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ElementalDescription.html" data-type="entity-link">ElementalDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Enemy.html" data-type="entity-link">Enemy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/idSet.html" data-type="entity-link">idSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PassiveTalents.html" data-type="entity-link">PassiveTalents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseArtifact.html" data-type="entity-link">ResponseArtifact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseArtifactBuild.html" data-type="entity-link">ResponseArtifactBuild</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseArtifactPart.html" data-type="entity-link">ResponseArtifactPart</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseArtifactStat.html" data-type="entity-link">ResponseArtifactStat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseBuild.html" data-type="entity-link">ResponseBuild</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseCharacter.html" data-type="entity-link">ResponseCharacter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseEnemies.html" data-type="entity-link">ResponseEnemies</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseUpdate.html" data-type="entity-link">ResponseUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseUser.html" data-type="entity-link">ResponseUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseWeapon.html" data-type="entity-link">ResponseWeapon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SkillTalents.html" data-type="entity-link">SkillTalents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Weapon.html" data-type="entity-link">Weapon</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});