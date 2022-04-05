const TTL = 10 * 60 * 1000;

const performTransform = (data, transform) =>
  Array.isArray(data) ? data.map(transform) : transform(data);

const handleRequestCache = async (cacheKey, request, transform) => {
  const cache = localStorage.getItem(cacheKey);
  if (cache !== null) {
    const val = JSON.parse(cache);
    if (val.expireAt >= Date.now()) {
      return [performTransform(val.data, transform), null];
    }
  }

  const res = await request();
  if (res.status !== 200) {
    return [null, res.status];
  }

  const data = performTransform(res.data, transform);
  localStorage.setItem(
    cacheKey,
    JSON.stringify({
      expireAt: Date.now() + TTL,
      data,
    }),
  );

  return [data, null];
};

export default handleRequestCache;
