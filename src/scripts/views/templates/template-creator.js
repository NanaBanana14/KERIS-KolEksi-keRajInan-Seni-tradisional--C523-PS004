const createEventTemplate = (event) => `
  <div class="card mb-3 col-md-4 mx-3">
    <img src="${event['image-url']}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text"><small class="text-muted">Location: ${event.location}</small></p>
    </div>
  </div>
`;

const createNewsTemplate = (news) => `
  <div class="card mb-3 col-md-4 mx-3">
    <img src="${news['image-url']}" class="card-img-top" alt="${news.title}">
    <div class="card-body">
      <h5 class="card-title">${news.title}</h5>
      <p class="card-text"><small class="text-muted">Published on: ${news['publish-date']}</small></p>
      <a href="${news.source}" class="btn btn-primary" target="_blank">Read more</a>
    </div>
  </div>
`;

export {
  createEventTemplate,
  createNewsTemplate,
};

{/* <p class="card-text">${event.description}</p>
<p class="card-text">${news.description}</p> */}