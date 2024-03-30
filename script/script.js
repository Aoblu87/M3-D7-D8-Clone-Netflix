document.addEventListener('DOMContentLoaded', function () {
  generateCards('.carousel-trending');
  generateCards('.carousel-actions');
  generateCards('.carousel-watch-again');
  generateCards('.carousel-new-releases');
  generateCards('.carousel-comedy');
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateCards(selector) {
  const shuffledMovies = shuffleArray([...movies]);

  const moviesHTML = shuffledMovies
    .map(
      (movie, index) => ` 
    <div class="card box col-6 mb-4 border-0 p-0">
      <img
        src="${movie.image}"
        class="card-img-top"
        alt="film"
      />
      <div class="card-body ">
        <div class="card-text d-flex flex-column">
          <div class="row m-0 p-0 justify-content-between">
            <div class="col-2">
              <button
                class="btn btn-outline-light rounded-circle border-0"
              >
                <i class="bi bi-play-circle-fill"></i>
              </button>
            </div>
            <div class="col-2">
              <button
                class="btn btn-outline-light rounded-circle border-0"
              >
                <i class="bi bi-plus-circle"></i>
              </button>
            </div>
            <div class="col-4">
              <button
                class="btn btn-outline-light rounded-circle border-0"
              >
                <i class="bi bi-hand-thumbs-up"></i>
              </button>
            </div>
            <div class="col-3">
              <button
                class="btn btn-outline-light rounded-circle border-0 px-0"
              >
                <i class="bi bi-arrow-down-circle"></i>
              </button>
            </div>
          </div>
          <div class="row-2 text-success font-weight-bold">
            <div class="col d-flex">
              <p>73% compatible</p>
            </div>
          </div>
          <div class="row text-white justify-content-center">
            <div class="col d-flex justify-content-center">
              <span class="genres px-2">Nostalgic</span>
              <span class="genres px-2">Arguto</span>
              <span class="genres px-2">Sitcom</span>
            </div>
          </div>
        </div>
      </div>
    </div> `
    )
    .join('');
  const containers = document.querySelectorAll(selector);
  for (const container of containers) {
    container.innerHTML = moviesHTML;
  }
  // Trigger dell'evento personalizzato 'destinationsRendered' una volta terminato il rendering
  window.dispatchEvent(new CustomEvent('cardsRendered'));
}
