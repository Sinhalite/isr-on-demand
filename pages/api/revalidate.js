export default async function handler(req, res) {
  try {
    await res.unstable_revalidate('/')
    return res.status(200).send()
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
