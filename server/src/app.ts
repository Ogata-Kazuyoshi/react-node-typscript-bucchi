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
  res.send(temp);
});
app.use(express.static('../public/index.html'));

app.listen(3000, () => {
  console.log('server is runnign');
});
