import { rest } from 'msw';

export const handler = [
  rest.get(`http://127.0.0.1:8000/snippets/`, (res, req, ctx) => {
    return res(ctx.status(200), req.body);
  }),
];
