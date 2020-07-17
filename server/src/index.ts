/* eslint linebreak-style: ["error", "windows"] */
import express, {
  Application,
  Response,
  Request,
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

// interface IncomingRequest {
//   r: number;
//   g: number;
//   b: number;
//   a: number,
// }

// "smooth" | "sudden"

// ping
// yeelight.once("ping", (data) => {
//   console.log("commandSuccesss fire everytime the command finish", data);
// });

app.post('/changeLight', (req: Request) => {
  const { r, g, b } = req.body as any;
  if (r === undefined || g === undefined || b === undefined) throw new Error('No Color Found');
  console.log(r, g, b);
  const yeelight = new Yeelight({ lightIp: myDevice.host, lightPort: myDevice.port });

  yeelight.connect().then((light) => {
    light.setRGB(new Color(r, g, b), 'smooth', 2000).then(() => {
      light.disconnect();
      console.log('Color has been set');
    });
  }).catch((e) => {
    console.log(e.message);
  });
});

app.post('/getStatus', (req: Request, response: Response) => {
  const { parms } = req.body as any;
  if (parms === undefined) throw new Error('No Color Found');
  const yeelight = new Yeelight({ lightIp: myDevice.host, lightPort: myDevice.port });
  yeelight.connect().then((light) => {
    light.getProperty(parms).then((data) => {
      response.send(data.result.result);
      light.disconnect();
      console.log('Incoming Result', data.result.result);
    }).catch((e) => {
      console.log(e);
    });
  }).catch((e) => {
    console.log(e);
  });
});

app.post('/setBrightness', (req: Request) => {
  console.log(req.body);
  const { currentBrightnessSlide } = req.body as any;
  if (currentBrightnessSlide === undefined) throw new Error('No Color Found');
  const yeelight = new Yeelight({ lightIp: myDevice.host, lightPort: myDevice.port });
  yeelight.connect().then((light) => {
    light.setBright(parseInt(currentBrightnessSlide, 10), 'smooth', 500).then(() => {
      light.disconnect();
      console.log(`Brightness has been set to: ${currentBrightnessSlide}`);
    });
  }).catch((e) => {
    console.log(e);
  });
});

app.post('/setPower', (req: Request) => {
  console.log(req.body);
  const { powerStatus } = req.body as any;
  if (powerStatus === undefined) throw new Error('No Color Found');
  const yeelight = new Yeelight({ lightIp: myDevice.host, lightPort: myDevice.port });
  yeelight.connect().then((light) => {
    light.setPower(powerStatus, 'smooth', 500).then(() => {
      light.disconnect();
      console.log(`Power Status: ${powerStatus}`);
    });
  }).catch((e) => {
    console.log(e.message);
  });
});

app.post('/setColorFlow', (req: Request) => {
  const { r, g, b } = req.body as any;
  if (r === undefined || g === undefined || b === undefined) throw new Error('No Color Found');
  console.log(r, g, b);
  const yeelight = new Yeelight({ lightIp: myDevice.host, lightPort: myDevice.port });

  yeelight.connect().then((light) => {
    light.setRGB(new Color(r, g, b), 'smooth', 2000).then(() => {
      light.disconnect();
      console.log('Color has been set');
    });
  }).catch((e) => {
    console.log(e.message);
  });
});

app.post('/discoverLight', (req: Request) => {
  console.log('triggered');
  console.log(req.body);

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
