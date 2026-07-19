interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === 'www.phxsugarwaxing.com') {
      return Response.redirect(
        `https://phxsugarwaxing.com${url.pathname}${url.search}`,
        301,
      );
    }

    return env.ASSETS.fetch(request);
  },
};
