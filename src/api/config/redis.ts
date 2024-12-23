import RedisStore from 'connect-redis';
import { createClient } from 'redis';

import { env } from './env';
import { DatabaseConnectionError } from '../errors/data-base-connections';

export const redisConnection = (url: string) => {
  const client = createClient({ url });
  client
    .connect()
    .then(() => console.log('redis connected in : localhost'))
    .catch(() => {
      throw new DatabaseConnectionError('cannot connect to redis');
    });
  return client;
};

export const sessionStore = () => new RedisStore({ client: redisConnection(env.redis.url) });
