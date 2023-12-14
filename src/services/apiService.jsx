import axios from "axios";

const API_URL = "/arm-screen/api/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const realtimeMetroStatisticsEndpoint = "metro/realtime_statistics/";
const realtimeMcdStatisticsEndpoint = "mcd/realtime_statistics/";
const realtimeTramwaySpeedStatistics = "tramway/realtime_avg_speed/";
const realtimeTramwayCount = "tramway/realtime_tramway_count/";
const realtimeTramwayShedule = "tramway/schedule_completion/";

const getMetroStatistics = async () => {
  try {
    const response = await api.get(realtimeMetroStatisticsEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

const getMcdStatistics = async () => {
  try {
    const response = await api.get(realtimeMcdStatisticsEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

const getTramwaySpeedStatistics = async () => {
  try {
    const response = await api.get(realtimeTramwaySpeedStatistics);
    return response.data;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

const getTramwayCount = async () => {
  try {
    const response = await api.get(realtimeTramwayCount);
    return response.data;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

const getTramwayShedule = async () => {
  try {
    const response = await api.get(realtimeTramwayShedule);
    return response.data;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

export {
  getMetroStatistics,
  getMcdStatistics,
  getTramwaySpeedStatistics,
  getTramwayCount,
  getTramwayShedule,
};
