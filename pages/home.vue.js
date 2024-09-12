const projects = [
  {
    title: "Formula 1",
    subtitle: "Mid-Season recap 2024",
    folderName: "F1",
    lien: "formula_1",
  },
  {
    title: "Apex legends",
    subtitle: "new legends annoncement",
    folderName: "ApexAlter",
    lien: "apex_legends",
  },
  {
    title: "Apex legends",
    subtitle: "new legends annoncement",
    folderName: "ApexAlter",
    lien: "apex_legends",
  },
  {
    title: "Formula 1",
    subtitle: "Mid-Season recap 2024",
    folderName: "F1",
    lien: "formula_1",
  },
  {
    title: "Formula 1",
    subtitle: "Mid-Season recap 2024",
    folderName: "F1",
    lien: "formula_1",
  },
  {
    title: "Apex legends",
    subtitle: "new legends annoncement",
    folderName: "ApexAlter",
    lien: "apex_legends",
  },
  {
    title: "Apex legends",
    subtitle: "new legends annoncement",
    folderName: "ApexAlter",
    lien: "apex_legends",
  },
  {
    title: "Formula 1",
    subtitle: "Mid-Season recap 2024",
    folderName: "F1",
    lien: "formula_1",
  },
];

var template = `
  <div class="home-page-feed-pp__feed" data-turbolinks-permanent="">
    <div class="home-page-feed-pp__feed-page" data-page="1">
`;

for (var index = 0; index < projects.length; index++) {
  template += `
    <div
      class="home-page-feed-pp__feed-item feed-item feed-item--workPage feed-item--with-image animate-on-scroll animated"
    >
      <router-link
        to = "/project/${projects[index].lien}"
        class="feed-item__link"
      >
        <div class="feed-item__image">
          <figure class="image objFit">
            <picture class="image__image">
              <img
                sizes="(min-width: 1020px) 50vw, 100vw"
                alt="Alt"
                crossorigin="anonymous"
                srcset="
                  /assets/project/${projects[index].folderName}/miniature.PNG
                "
              />
            </picture>
          </figure>
        </div>

        <div class="feed-item__client-container">
          <div class="feed-item__icon">
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
                fill="#000000"
                data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #ffffff"
              ></path>
            </svg>
          </div>
          <h5 class="feed-item__client">${projects[index].title}</h5>
        </div>

        <div class="feed-item__title-container">
          <div class="feed-item__icon">
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
                fill="#000000"
                data-darkreader-inline-fill=""
                style="--darkreader-inline-fill: #ffffff"
              ></path>
            </svg>
          </div>
          <h4 class="feed-item__title">
            <span data-name="${projects[index].subtitle}">${projects[index].subtitle}</span>
          </h4>
        </div>
      </router-link>
    </div>
  `;
}

template += `</div></div>`;

var Home = {
  template: template,
};
