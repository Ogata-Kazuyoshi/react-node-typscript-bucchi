import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

const temp = {
  1: 100,
  2: 200,
  3: 300,
};

app.get('/data', (req: Request, res: Response) => {
  req.query.city;
  req.query;
  res.send(temp);
});

app.use(express.static('./dist/public/'));

app.listen(3000, () => {
  console.log('server is runnign');
});
