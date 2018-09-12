import $ from 'jquery';

class Search {
  // 1. describe and create/initiate our object
  constructor() {
    this.resultsDiv = $("#search-overlay__results");
    this.openButton = $(".js-search-trigger");
    this.closeButton = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.searchField = $("#search-term");
    this.events();
    this.isOverlayOpen = false;
    this.isSpinnerVisable = false;
    this.previousValue;
    this.typingTimer;
  }

  // 2. events, event listeners
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keydown", this.keyPressDispatcher.bind(this));
    this.searchField.on("keyup", this.typingLogic.bind(this));
}

  // 3. methods (function, action...)
  typingLogic() {
    if (this.searchField.val() != this.previousValue) {
      clearTimeout(this.typingTimer);
      if (this.searchField.val()) {
        if (!this.isSpinnerVisable) {
          this.resultsDiv.html('<div class="spinner-loader"></div>');
          this.isSpinnerVisable = true;
        }
        this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
      } else {
        this.resultsDiv.html('');
        this.isSpinnerVisable = false;
      }
    }
    this.previousValue = this.searchField.val();
  }
  getResults(){
    $.getJSON(universityData.root_url + '/wp-json/university/v1/search?term=' + this.searchField.val(), (results) => {
      this.resultsDiv.html(`
          <div class="row">
            <div class="one-third">
              <h2 class="search-overlay__section-title">General Info</h2>
              ${results.generalInfo.length ? '<ul class="link-list min-list">' : '<p>No general information match that search</p>'}
                ${results.generalInfo.map(item => `<li><a href="${item.permalink}">${item.title}</a> ${item.postType == 'post' ? `by ${item.authorName}` : ''}</li>`).join('')}
              ${results.generalInfo.length ? '</ul>' : ''}
            </div>
            <div class="one-third">
              <h2 class="search-overlay__section-title">Programs</h2>
              ${results.programs.length ? '<ul class="link-list min-list">' : '<p>No programs match that search</p>'}
                ${results.programs.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`).join('')}
              ${results.programs.length ? '</ul>' : ''}

              <h2 class="search-overlay__section-title">Professors</h2>
              ${results.professors.length ? '<ul class="professor-cards">' : '<p>No professors match that search</p>'}
                ${results.professors.map(item => `
                  <li class="professor-card__list-item">
                    <a class="professor-card" href="${item.permalink}">
                      <img class="professor-card__image" src="${item.image}">
                      <span class="professor-card__name">${item.title}</span>
                    </a>
                  </li>
                  `).join('')}
              ${results.professors.length ? '</ul>' : ''}

            </div>
            <div class="one-third">
              <h2 class="search-overlay__section-title">Campuses</h2>
              ${results.campuses.length ? '<ul class="link-list min-list">' : '<p>No campuses match that search</p>'}
                ${results.campuses.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`).join('')}
              ${results.campuses.length ? '</ul>' : ''}

              <h2 class="search-overlay__section-title">Events</h2>
              ${results.events.length ? '' : '<p>No events match that search</p>'}
                ${results.events.map(item => `
                  <div class="event-summary">
                    <a class="event-summary__date t-center" href="${item.permalink}">
                      <span class="event-summary__month">${item.month}</span>
                      <span class="event-summary__day">${item.day}</span>
                    </a>
                    <div class="event-summary__content">
                      <h5 class="event-summary__title headline headline--tiny"><a href="${item.permalink}">${item.title}</a></h5>
                      <p>${item.description}<a href="${item.permalink}" class="nu gray"> Learn more</a></p>
                    </div>
                  </div>
                  `).join('')}

            </div>
          </div>
        `);
        this.isSpinnerVisable = false;
    });
  }
  keyPressDispatcher(e) {

    if (e.keyCode == 83 && !this.isOverlayOpen && !$("input, textarea").is(':focus')) {
      this.openOverlay();
    }
    if (e.keyCode == 27 && !this.isOverlayClosed) {
      this.closeOverlay();
    }
  }
  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
    this.isOverlayOpen = true;
    return false;
  }
  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
        $("body").removeClass("body-no-scroll");
        this.isOverlayOpen = false;
  }
}

export default Search;