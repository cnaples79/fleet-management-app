// utils/bodyParser.ts
import { NextApiRequest } from 'next';

export async function parseBody(req: NextApiRequest): Promise<any> {
    if (!req.body) {
      return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (error) {
            reject(error);
          }
        });
      });
    }
    return req.body;
  }
  