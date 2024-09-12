const formula_1 = {
  title: "Formula 1",
  subtitle: "Mid-Season recap 2024",
  folderName: "F1",
  intro: "“Behold! The World of <strong>Mind Haze</strong>!...”",
  content:
    "Come with us on a cosmic <strong>Mind Haze</strong> of the mind as we wander through the world of Mind Haze! Working directly with Firestone Walker Brewing Company, we've crafted a 360° campaign inviting IPA drinkers to elevate their perceptions and transcend to new realms of flavor. From the hazy 'Brain Melter' to the juicy 'Cosmic Crusher,' we showcase each of Mind Haze's euphoric new IPAs, guiding the next generation of craft beer enthusiasts on a mind-bending journey of the senses!",
  nombreDeSerieDePhoto: 2,
};

var template_formula_1 = `
<div class="body-container">
  <main role="main" id="main-content" class="main">
    <section class="work-page-header">
      <div class="work-page-header__container container container--flex">
        <div class="work-page-header__client-container">
          <div class="work-page-header__icon">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 5.72928L6.02214 5.72928L6.02214 0L10.9779 0V5.72928L17 5.72928L17 11.2707L10.9779 11.2707L10.9779 17L6.02214 17L6.02214 11.2707L0 11.2707L0 5.72928Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <h3 class="work-page-header__client">${formula_1.title}</h3>
        </div>

        <div class="work-page-header__title-container">
          <div class="work-page-header__icon">
            <svg
              width="116"
              height="76"
              viewBox="0 0 116 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.5429 75.1378L80.554 48.99H0.0151367V26.8996H80.554L57.5429 0.756836H83.8413L115.813 37.8747L83.8413 75.1378H57.5429Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <h1 class="work-page-header__title">${formula_1.subtitle}</h1>
        </div>

        <ul class="work-page-header__categories-list"></ul>

        <div class="work-page-header__overview">
          <div
            class="work-page-header__column work-page-header__column--left"
          ></div>

          <div
            class="work-page-header__column work-page-header__column--right"
          >
            <div class="work-page-header__overview-content">
              <p>${formula_1.intro}</p>

              <p>
                ${formula_1.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="work-content-pp work-content-pp--dark">`;

for (var i = 0; i < formula_1.nombreDeSerieDePhoto; i++) {
  template_formula_1 += `
    <div
      class="work-content-pp__container container animate-on-scroll animated" style="margin-top:9px;"
    >
      <div
        class="work-content-pp__row work-content-pp__row--height-large work-content-pp__row--columns-one animate-on-scroll animated"
      >
        <div
          class="work-content-pp__row__block work-content-block work-content-block--column-span-one"
        >
          <div class="work-content-block__image">
            <figure class="image objFit">
              <picture class="image__image">
                <img
                  sizes="(min-width: 1020px) 100vw, 100vw"
                  crossorigin="anonymous"
                  srcset="
                    /assets/project/${formula_1.folderName}/images/${
    1 + 5 * i
  }.PNG
                  "
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
      <div
        class="work-content-pp__row work-content-pp__row--height-medium work-content-pp__row--columns-two animate-on-scroll animated"
      >
  `;
  for (var j = 0; j < 4; j++) {
    template_formula_1 += `
      <div
        class="work-content-pp__row__block work-content-block work-content-block--column-span-one"
      >
        <div class="work-content-block__image">
          <figure class="image objFit">
            <picture class="image__image">
              <img
                sizes="(min-width: 1020px) 50vw, 100vw"
                crossorigin="anonymous"
                srcset="
                  /assets/project/${formula_1.folderName}/images/${
      2 + j + 5 * i
    }.PNG
                "
              />
            </picture>
          </figure>
        </div>
      </div>
    `;
  }

  template_formula_1 += `</div></div>`;
}

template_formula_1 += `
    </section></main></div>`;

const component_formula_1 = {
  template: template_formula_1,
};
