import Arts from '../../../network/arts';

function showEventDetail(Id) {
  const eventDetailContainer = document.getElementById('event-detail-container');
  const eventDetail = Arts.getEventById(Id);

  // Perbarui konten event-detail-container dengan detail acara
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
  // Implementasikan logika atau perubahan tampilan tambahan sesuai kebutuhan.
}

export default showEventDetail;
