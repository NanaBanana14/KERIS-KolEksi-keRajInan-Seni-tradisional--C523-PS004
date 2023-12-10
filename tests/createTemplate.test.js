/* eslint-disable */
import {
  createArtTemplate,
  createNewsTemplate,
  createEventTemplate,
} from '../src/scripts/views/templates/template-creator';

describe('Art Template Creation', () => {
  it('should create a valid art template', () => {
    const art = {
      id: 1,
      name: 'Art Name',
      image_url: 'path/to/image.jpg',
      description: 'Art description.',
    };

    const template = createArtTemplate(art);

    expect(template).toContain(art.name);
    expect(template).toContain(art.image_url);
    expect(template).toContain(art.description);
  });
});

describe('News Template Creation', () => {
  it('should create a valid news template', () => {
    const news = {
      id: 1,
      title: 'News Title',
      'image-url': 'path/to/image.jpg',
      'publish-date': '2023-01-01',
      source: 'https://example.com/news',
    };

    const template = createNewsTemplate(news);

    expect(template).toContain(news.title);
    expect(template).toContain(news['image-url']);
    expect(template).toContain(news['publish-date']);
    expect(template).toContain(news.source);
  });
});

describe('Event Template Creation', () => {
  it('should create a valid event template', () => {
    const event = {
      id: 1,
      name: 'Event Name',
      'image-url': 'path/to/image.jpg',
      date: '2023-01-01',
      'detail-url': 'path/to/event-detail',
    };

    const template = createEventTemplate(event);

    expect(template).toContain(event.name);
    expect(template).toContain(event['image-url']);
    expect(template).toContain(event.date);
    expect(template).toContain(event['detail-url']);
  });
});

