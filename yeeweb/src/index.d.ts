export interface colorData {
  hex: string;
  hsl: {
    a: number;
    h: number;
    l: number;
    s: number;
  };
  hsv: {
    a: number;
    h: number;
    s: number;
    v: number;
  };
  oldHue: number;
  rgb: {
    a: number;
    b: number;
    g: number;
    r: numebr;
  };
  source: string;
}


export interface FlowColor {
  color: colorData
}

export interface LightData {
  IpAddress: string,
  Name: string,
  lightSelected: boolean,
}
