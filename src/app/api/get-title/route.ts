export async function GET(request: any) {
  const url = new URL(request.url).searchParams.get('url');
  console.log('url', url);
  if (!url) {
    return new Response(JSON.stringify({ error: 'URL is required' }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/);

    if (!titleMatch) {
      throw new Error('Title not found');
    }

    const title = titleMatch[1];

    return new Response(JSON.stringify({ title }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error fetching the title' }), {
      status: 500,
    });
  }
}
