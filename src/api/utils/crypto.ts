import crypto from 'crypto';

export const hashCode = (code: string) => crypto.createHash('sha256').update(code).digest('hex');

export const generateCode = (length: number = 3) => crypto.randomBytes(length).toString('hex');
