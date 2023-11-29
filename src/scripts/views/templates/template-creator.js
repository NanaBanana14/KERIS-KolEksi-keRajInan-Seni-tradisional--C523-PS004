const createEventTemplate = (event) => `
  <div class="card mb-3 col-md-4">
    <img src="${event['image-url']}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text"><small class="text-muted">Location: ${event.location}</small></p>
    </div>
  </div>
`;

const createNewsTemplate = (news) => `
  <div class="card mb-3 col-md-4">
    <img src="${news['image-url']}" class="card-img-top" alt="${news.title}">
    <div class="card-body">
      <h5 class="card-title">${news.title}</h5>
      <p class="card-text"><small class="text-muted">Published on: ${news['publish-date']}</small></p>
      <a href="${news.source}" class="btn btn-primary" target="_blank">Read more</a>
    </div>
  </div>
`;

const createDetailEventTemplate = (event) => `
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="${event['image-url']}" class="img-fluid" alt="${event.name}">
      </div>
      <div class="col-md-6">
        <h2>${event.name}</h2>
        <p>${event.description}</p>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
      </div>
    </div>
  </div>
`;

const createDetailNewsTemplate = (news) => `
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="${news['image-url']}" class="img-fluid" alt="${news.title}">
      </div>
      <div class="col-md-6">
        <h2>${news.title}</h2>
        <p>${news.description}</p>
        <p><strong>Publish Date:</strong> ${news['publish-date']}</p>
        <p><strong>Source:</strong> <a href="${news.source}" target="_blank">${news.source}</a></p>
      </div>
    </div>
  </div>
`;

export {
  createEventTemplate,
  createNewsTemplate,
  createDetailEventTemplate,
  createDetailNewsTemplate,
};
