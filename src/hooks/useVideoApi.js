import { useState } from 'react';
import axiosClient from '../config/axios';
import { buildQueryParams } from '../helpers/helpers';

const useVideoApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async (data) => {
    setLoading(true);
    const key="AIzaSyCp6_KOyqGwTy63od7Qvk32NRbwoSD_4Bw"
    try {
      const queryParams = buildQueryParams({
        ...data.params,
        key,
        part: 'snippet',
        maxResults: 24,
      });
      const res = await axiosClient(`search?${queryParams}`);
      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchVideos,
  };
};

export default useVideoApi;
