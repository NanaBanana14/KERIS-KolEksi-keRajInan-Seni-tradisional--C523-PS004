/* eslint-disable */
const createEventTemplate = (event) => `
  <div class="card mb-3 col-md-4 position-relative p-0" id="event-${event.id}">
    <img src="${event['image-url']}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
      <h5 class="card-title mb-5">${event.name}</h5>
      <p class="card-text position-absolute bottom-0 start-0 mb-3 mx-3"><i class="bi bi-calendar-event"></i> ${event.date}</p>
      <a href="#" class="btn btn-brown-white position-absolute bottom-0 end-0 mb-3 mx-3" data-event-id="${event.id}">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>
  </div>
`;


const createNewsTemplate = (news) => `
  <div class="card mb-3 col-md-4 position-relative p-0">
    <img src="${news['image-url']}" class="card-img-top" alt="${news.title}">
    <div class="card-body">
      <h5 class="card-title mb-5">${news.title}</h5>
      <p class="card-text position-absolute bottom-0 start-0 mb-3 mx-3"><i class="bi bi-calendar-event"></i> ${news['publish-date']}</p>
      <a href="${news.source}" class="btn btn-brown-white position-absolute bottom-0 end-0 mb-3 mx-3" target="_blank">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
    </div>
  </div>
`;

export {
  createEventTemplate,
  createNewsTemplate,
};
