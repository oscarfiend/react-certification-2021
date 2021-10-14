import { renderHook, act } from '@testing-library/react-hooks';
import useVideoApi from '../hooks/useVideoApi';
import axios from '../config/axios';

import videosMock from '../mocks/youtube-videos-mock.json';

jest.mock('../config/axios');
describe('UseVideoApi tests', () => {
  beforeEach(() => {
    axios.mockReturnValue(
      Promise.resolve({
        data: { ...videosMock },
      })
    );
  });
  test('shouldn´t return any videos', async () => {
    const { result } = renderHook(() => useVideoApi());
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });

  test('should return a video array', async () => {
    const params = { q: 'wizeline' };
    const { result, waitForNextUpdate } = renderHook(() => useVideoApi());
    const { fetchVideos } = result.current;
    await act(async () => fetchVideos({ params }));
    waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data.items.length).toBe(videosMock.items.length);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });

  test('should return a video array with the related videos', async () => {
    const params = { relatedToVideoId: 'lWQ69WX7-hA', type: 'video' };
    const { result, waitForNextUpdate } = renderHook(() => useVideoApi());
    const { fetchVideos } = result.current;
    await act(async () => fetchVideos({ params }));
    waitForNextUpdate();
    const { data, error, loading } = result.current;
    expect(data.items.length).toBe(videosMock.items.length);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });
});
