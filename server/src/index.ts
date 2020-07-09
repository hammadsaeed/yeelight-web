/* eslint linebreak-style: ["error", "windows"] */
import express, {
  Application,
  // Request,
  // Response,
  // NextFunction,
} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
  Discover,
  IDevice,
  Color,
  Yeelight,
} from 'yeelight-awesome';

const app: Application = express();

const myDevice = {
  port: 55443,
  host: '192.168.1.2',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/changeLight', (req: Request) => {
  console.log('triggered');
  console.log(req.body);

  const yeelight = new Yeelight({ lightIp: myDevice.host, lightPort: myDevice.port });
  yeelight.connect().then((l) => {
    l.setRGB(new Color(66, 87, 23), 'smooth', 5000).then(() => {
      l.disconnect();
      console.log('Color has been set');
    });
  }).catch((e) => {
    console.log(e.message);
  });
});

app.post('/discoverLight', (req: Request) => {
  console.log('triggered');
  console.log(req.body);

  // const yeelight = new Yeelight({ lightIp: device.host, lightPort: device.port });

  const discover = new Discover({});

  discover.scanByIp().then((devices) => console.log('scan finished: ', devices));

  discover.on('deviceAdded', (device: IDevice) => {
    console.log('found device', device);
  });
});

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// const requestListener: RequestListener = (_request, response) => {
//   response.writeHead(200, {
//     'content-type': 'application/json',
//   });

//   response.end(JSON.stringify({
//     status: 'ok',
//     message: 'OK',
//     data: {},
//   }));
// };

// const server = http.createServer(requestListener);

// server.listen(port, () => console.log(`Listening on http://localhost:${port}`));

// app.get('/changeLight', (req: Request, res: Response, _next: NextFunction) => {
//   console.log('triggered');
//   console.log(req);
// });
