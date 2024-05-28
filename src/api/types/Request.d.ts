export {};

declare global {
  namespace Express {
    interface Request {
      locale: string;
    }
  }
}
