/* eslint-disable */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createArtTemplate = (art) => `
  <div class="card position-relative" style="width: 18rem">
    <img
      data-src="${art.image_url}"
      class="lazyload card-img-top"
      alt="${art.name}"
      style="height: 200px; object-fit: cover"
    />
    <p class="card-text text-white p-2 rounded bg-brown position-absolute top-0 end-0">${art.category}</p>
    <div class="card-body d-flex flex-column" style="height: 170px">
      <h5 class="card-title">${art.name}</h5>
      <p class="card-text flex-grow-1" style="overflow: hidden">${art.description}</p>
      <a href="./detail-galeri-seni.html#${art.id}" class="btn btn-brown-darkbrown">Read More</a>
    </div>
  </div>
`;

const createDetailArt = (art) => `
    <div class="bg-brown mb-3 p-4">
        <div class="container">
            <div class="row">
                 <div class="col d-flex align-items-center">
                     <img
                        class="lazyload img-fluid rounded"
                        data-src="${art.image_url}"
                        alt="${art.name}"
                        style="min-width: 200px; max-width: 500px"
                    />
                    </div>
                    <div class="col d-flex align-items-center">
                    <h2 class="text-white fw-bold">${art.name}</h2>
                 </div>
             </div>
        </div>
     </div>

    <div class="container mb-5">
        <h3>Ringkasan</h3>
        <hr />
        <div class="container p-0">
            <div class="row mb-3">
                <div class="col fw-bold">Deskripsi</div>
                <div class="col-10">${art.description}</div>
            </div>
            <div class="row">
                <div class="col fw-bold">Seller</div>
                <div class="col-10">
                    <ul id="seller-container" style="list-style: none; padding: 0"></ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container col-md-8 mb-5">
        <h3>Ulasan</h3>
        <hr />
        <div id="reviews-container" style="max-height: 300px; overflow: auto"></div>
        <hr class="mb-3" />

        <h3>Tulis Ulasan</h3>
        <div class="form-group">
            <label for="nama">Nama:</label>
            <input id="name-input" type="text" class="form-control" id="nama" placeholder="Masukkan Nama" />
        </div>
        <div class="form-group mb-3">
            <label for="ulasan">Ulasan:</label>
            <textarea id="text-input" class="form-control" id="ulasan" rows="3" placeholder="Tulis ulasan Anda"></textarea>
        </div>

        <button id="button-submit-review" type="submit" class="btn btn-brown-darkbrown">Kirim Ulasan</button>
    </div>
`;

const createSeller = (seller) => `
    <li>- <a href="${seller.link}">${seller.name}</a></li>
`;

const createReview = (review) => `
    <div class="mb-3">
        <p class="m-0">
            <span class="fw-bold">${review.name}</span>
            <span class="text-black-50"> - ${review.date}</span>
        </p>
        <p class="m-0">${review.text}</p>
    </div>
`;

const createEventTemplate = (event) => `
  <div class="event-item card mb-3 col-md-4 position-relative p-0" id="event-${event.id}">
    <div class="position-relative">
      <img data-src="${event['image-url']}" class="lazyload card-img-top" alt="${event['name']}" style="height: 200px; object-fit: cover">
      <p class="card-text text-white p-2 rounded bg-brown position-absolute bottom-0 start-0 bi bi-calendar-event"> ${event['date']}</p>
    </div>
    <div class="card-body">
      <h5 class="card-title mb-5">${event['name']}</h5>
      <p class="card-text text-white p-2 rounded bg-brown position-absolute top-0 end-0"> ${event['status']}</p>
      <a href="#" class="btn btn-brown-white btn-event-detail position-absolute bottom-0 end-0 mb-3 mx-3" data-toggle="modal" data-detail-url=" ${event['detail-url']}">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>
  </div>
`;

const createEventDetailTemplate = (eventDetail) => `
  <div class="card mb-3 col-md-12">
    <div class="d-flex">
      <img data-src="${eventDetail['image-url']}" class="lazyload card-img-left w-50" alt="${eventDetail.name}">
      <div class="card-body ms-3">
      <h5 class="card-title text-center">${eventDetail.name}</h5>
        <div class="d-flex justify-content-between mt-3 gap-3">
          <p class="card-text bi bi-calendar-event p-2"> ${eventDetail.date}</p>
          <p class="card-text bi bi-geo-alt-fill p-2"> ${eventDetail.location}</p>
        </div>
        <p class="card-text">${eventDetail.description}</p>
      </div>
    </div>
  </div>

`;

const createNewsTemplate = (news) => `
  <div class="news-item card mb-3 col-md-4 position-relative p-0">
    <img data-src="${news['image-url']}" class="lazyload card-img-top" alt="${news['title']}" style="height: 200px; object-fit: cover">
    <div class="card-body">
      <h5 class="card-title mb-5">${news['title']}</h5>
      <p class="card-text position-absolute bottom-0 start-0 mb-3 mx-3"><i class="bi bi-calendar-event"></i> ${news['publish-date']}</p>
      <a href="${news['source']}" class="btn btn-brown-white position-absolute bottom-0 end-0 mb-3 mx-3" target="_blank">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>
  </div>
`;

export { createArtTemplate, createDetailArt, createSeller, createReview, createEventTemplate, createEventDetailTemplate, createNewsTemplate };
