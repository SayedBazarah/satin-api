export {};

declare global {
  namespace Express {
    interface Request {
      locals: {
        uid: string;
      };
    }
  }
}
