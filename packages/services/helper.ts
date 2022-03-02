const ERR_CODE_OK = 200

export async function normalizeRes<R>(res: any) {
  try {
    res = await res
  } catch (err) {
    return Promise.reject(new Error(err.message || 'Unknown error'))
  }
  if (res.code !== ERR_CODE_OK) {
    return Promise.reject(new Error(res.message || 'Unknown error'))
  }
  return res.data as Promise<R>
}
