import { useCallback, useState } from 'react';
import axiosClient from '../config/axios';
import { buildQueryParams } from '../helpers/helpers';

const useVideoApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos=useCallback(
    async (data) => {
    setLoading(true);
    const key = process.env.REACT_APP_APY_KEY;
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
    },
    [],
  )

  return {
    data,
    loading,
    error,
    fetchVideos,
  };
};

export default useVideoApi;
