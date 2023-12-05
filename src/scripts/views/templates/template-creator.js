/* eslint-disable */

const createArtTemplate = (art) => `
  <div class="card" style="width: 18rem">
    <img
      src="${art.image_url}"
      class="card-img-top"
      alt="${art.name}"
      style="height: 200px; object-fit: cover"
    />
    <div class="card-body d-flex flex-column" style="height: 170px">
      <h5 class="card-title">${art.name}</h5>
      <p class="card-text flex-grow-1" style="overflow: hidden">${art.description}</p>
      <a href="./detail-galeri-seni.html#${art.id}" class="btn btn-brown-darkbrown">Read More</a>
    </div>
  </div>
`;

const createEventTemplate = (event) => `
  <div class="card mb-3 col-md-4 position-relative p-0" id="event-${event.id}">
    <img src="${event['image-url']}" class="card-img-top" alt="${event['name']}">
    <div class="card-body">
      <h5 class="card-title mb-5">${event['name']}</h5>
      <p class="card-text position-absolute bottom-0 start-0 mb-3 mx-3 bi bi-calendar-event"> ${event['date']}</p>
      <a href="#" class="btn btn-brown-white btn-event-detail position-absolute bottom-0 end-0 mb-3 mx-3" data-toggle="modal" data-detail-url=" ${event['detail-url']}">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>
  </div>
`;

const createEventDetailTemplate = (eventDetail) => `
  <div class="card mb-3 col-md-12">
    <div class="d-flex">
      <img src="${eventDetail['image-url']}" class="card-img-left w-50" alt="${eventDetail.name}">
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
  <div class="card mb-3 col-md-4 position-relative p-0">
    <img src="${news['image-url']}" class="card-img-top" alt="${news['title']}">
    <div class="card-body">
      <h5 class="card-title mb-5">${news['title']}</h5>
      <p class="card-text position-absolute bottom-0 start-0 mb-3 mx-3"><i class="bi bi-calendar-event"></i> ${news['publish-date']}</p>
      <a href="${news['source']}" class="btn btn-brown-white position-absolute bottom-0 end-0 mb-3 mx-3" target="_blank">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>
  </div>
`;

export { 
  createArtTemplate, 
  createEventTemplate, 
  createEventDetailTemplate, 
  createNewsTemplate 
};
