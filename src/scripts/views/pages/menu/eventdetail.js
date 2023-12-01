async function showEventDetailByUrl(detailUrl) {
  try {
    const eventDetailContainer = document.getElementById('event-detail-container');
    const response = await fetch(detailUrl);
    const eventDetail = await response.json();

    if (!eventDetail) {
      console.error(`Error: No data found for event with URL ${detailUrl}`);
      return;
    }

    eventDetailContainer.innerHTML = `
      <div class="card mb-3 col-md-8">
        <img src="${eventDetail['image-url']}" class="card-img-top" alt="${eventDetail.name}">
        <div class="card-body">
          <h5 class="card-title">${eventDetail.name}</h5>
          <p class="card-text"><strong>Tanggal:</strong> ${eventDetail.date}</p>
          <p class="card-text"><strong>Deskripsi:</strong> ${eventDetail.description}</p>
          <!-- Tambahkan elemen lain sesuai kebutuhan -->
        </div>
      </div>
    `;
    // dikasih custom tamplian pas dah selesai
  } catch (error) {
    console.error(`Error fetching event detail: ${error.message}`);
  }
}

export default showEventDetailByUrl;
