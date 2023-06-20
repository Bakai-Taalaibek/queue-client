import { create } from 'zustand';
import { API } from '../../utils/variables';
import axios from 'axios';

// Возможно будут ошибки, в процессе буду фиксить

export const useModule_1_6 = create((set, get) => ({
  clients: [],
  appointments: [],
  queue: [],
  error: [],
  breakTime: {},
  serviceTime: {},
  shiftTime: {},
  loading: false,

  // Getting initial data:
  getDataStore: async (email) => {
    set({ loading: true });
    try {
      const res = await axios(`${API}/operator/${email}`);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Send a client to the end of queue:
  sendToEndOfQueueStore: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/clients/end/${id}`);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Remove from queue:
  removeFromQueueStore: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/clients/remove/${id}`);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Transfer to another queue:
  transferToQueueStore: async (id, queue_id) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/clients/transfer/${queue_id}`, id);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Move to start of queue:
  moveToStartOfQueueStore: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/clients/start/`, id);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Delay queue:
  setDelayOfQueueStore: async (minutes, id) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/clients/delay/${id}`, minutes);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Appointments:
  getAppointmentsStore: async () => {
    set({ loading: true });
    try {
      const res = await axios(`${API}/clients/appointments/data`);
      set({ appointments: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Edit information on appointment:
  editAppointmentInfoStore: async (data) => {
    set({ loading: true });
    try {
      const res = await axios.put(`${API}/clients/appointments/`, data);
      set({ clients: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Save start time:
  setStartTimeStore: async (time, id) => {
    set({ loading: true });
    try {
      await axios.post(`${API}/clients/time/start${id}`, time);
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Set up who can pass talons:
  setTalonAccessStore: async (email, queue) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/employee/queues/${email}`, queue);
      set({ queue: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Setting up break time:
  setBreakTimeStore: async (time, email) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/employee/break/${email}`, time);
      set({ breakTime: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Service time alert:
  serviceTimeAlertStore: async (id) => {
    set({ loading: true });
    try {
      const res = await axios(`${API}/clients/time/alert/${id}`);
      set({ serviceTime: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },

  // Setting up shift time:
  setShiftTimeStore: async (email, time) => {
    set({ loading: true });
    try {
      const res = await axios.post(`${API}/employee/shift/${email}`, time);
      set({ shiftTime: res.data });
    } catch (err) {
      set({ error: err });
    } finally {
      set({ loading: false });
    }
  },
}));