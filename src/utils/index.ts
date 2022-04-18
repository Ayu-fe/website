// const safeParse = (json: string, def = []) => {
//   try {
//     console.log(json, 898989)
//     return JSON.parse(json)
//   } catch (error) {
//     return def
//   }
// }

const stringify = (params: Record<string, any>, paramsString?: string) => {
  const sp = new URLSearchParams(paramsString)
  Object.entries(params).forEach(([key, value]) => {
    sp.append(key, value)
  })
  return sp.toString()
}

export const request = async (url: string, options: Record<string, any>) => {
  return fetch(url, {
    ...options,
    headers: {
      ...(options && options.headers),
    },
  }).then((res) => res.json())
}

export const post = (url: string, body: Record<string, any>) => {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify(body),
  }).then((json) => json.data)
}

export const get = (url = '', params = {}) => {
  const [, paramsString] = url.split('?')
  const str = stringify(params, paramsString)
  const newurl = url + '?' + str
  return request(newurl, {
    method: 'GET',
  }).then((json) => json.data)
}
