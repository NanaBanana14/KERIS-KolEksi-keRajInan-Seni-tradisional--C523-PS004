import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

const Arts = {
  async getAll() {
    try {
      const response = await axios.get(API_ENDPOINT.ARTS);
      return response.data;
    } catch (error) {
      console.error('Error fetching arts:', error);
      throw error;
    }
  },

  async getById(id) {
    try {
      const response = await axios.get(API_ENDPOINT.ART_DETAIL(id));
      return response.data;
    } catch (error) {
      console.error('Error fetching art by id:', error);
      throw error;
    }
  },

  async getReviewsById(id) {
    try {
      const response = await axios.get(API_ENDPOINT.REVIEWS(id));
      return response.data;
    } catch (error) {
      console.error('Error fetching reviews for art:', error);
      throw error;
    }
  },

  async search(query) {
    try {
      const response = await axios.get(API_ENDPOINT.ARTS_SEARCH(query));
      return response.data;
    } catch (error) {
      console.error('Error searching arts:', error);
      throw error;
    }
  },

  async getAllNews() {
    try {
      const response = await axios.get(API_ENDPOINT.NEWS);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },

  async getNewsById(id) {
    try {
      const response = await axios.get(API_ENDPOINT.NEWS_DETAIL(id));
      return response.data;
    } catch (error) {
      console.error('Error fetching news by id:', error);
      throw error;
    }
  },

  async getAllEvents() {
    try {
      const response = await axios.get(API_ENDPOINT.EVENTS);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  async getEventById(id) {
    try {
      const response = await axios.get(API_ENDPOINT.EVENT_DETAIL(id));
      return response.data;
    } catch (error) {
      console.error('Error fetching event by id:', error);
      throw error;
    }
  },

};

export default Arts;
