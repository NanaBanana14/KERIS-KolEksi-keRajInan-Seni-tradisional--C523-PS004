import { createEventDetailTemplate } from '../../templates/template-creator';

function hideEventDetailModal() {
  const modalElement = document.getElementById('eventDetailModal');

  // Hidden modal
  modalElement.style.display = 'none';
  modalElement.classList.remove('show');
}

function showEventDetailModal(eventDetail) {
  const modalElement = document.getElementById('eventDetailModal');

  // Show Modal
  modalElement.style.display = 'block';
  modalElement.classList.add('show');

  // content
  const eventDetailTemplate = createEventDetailTemplate(eventDetail);
  modalElement.querySelector('.modal-body').innerHTML = eventDetailTemplate;

  modalElement.focus();

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

    showEventDetailModal(eventDetail);
  } catch (error) {
    console.error(`Error fetching event detail: ${error.message}`);
  }
}

export default showEventDetailByUrl;
