import { createEventDetailTemplate } from '../../templates/template-creator';

function hideEventDetailModal() {
  const modalElement = document.getElementById('eventDetailModal');

  // Sembunyikan modal
  modalElement.style.display = 'none';
  modalElement.classList.remove('show');
}

function showEventDetailModal(eventDetail) {
  const modalElement = document.getElementById('eventDetailModal');

  // Manually show the modal
  modalElement.style.display = 'block';
  modalElement.classList.add('show');

  // Isi konten modal dengan detail acara
  modalElement.querySelector('.modal-title').textContent = eventDetail.name;

  // Gunakan template untuk mengisi konten modal
  const eventDetailTemplate = createEventDetailTemplate(eventDetail);
  modalElement.querySelector('.modal-body').innerHTML = eventDetailTemplate;

  // Atur fokus ke modal
  modalElement.focus();

  // Tambahkan event listener untuk tombol close modal
  modalElement.querySelector('.close').addEventListener('click', hideEventDetailModal);
}

async function showEventDetailByUrl(detailUrl) {
  try {
    const response = await fetch(detailUrl);
    const eventDetail = await response.json();

    if (!eventDetail) {
      console.error(`Error: No data found for event with URL ${detailUrl}`);
      return;
    }

    // Panggil fungsi showEventDetailModal untuk menampilkan detail acara dalam modal
    showEventDetailModal(eventDetail);
  } catch (error) {
    console.error(`Error fetching event detail: ${error.message}`);
  }
}

export default showEventDetailByUrl;
