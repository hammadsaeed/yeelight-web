import tinycolor from 'tinycolor2'

export const toState = (data: string) => {
  const color = tinycolor(data);
  const hsl = color.toHsl()
  const hsv = color.toHsv()
  const rgb = color.toRgb()
  const hex = color.toHex()

  const transparent = hex === '000000' && rgb.a === 0

  return {
    hsl,
    hex: transparent ? 'transparent' : `#${ hex }`,
    rgb,
    hsv,
    oldHue: 5,
    source: 'hex',
  }
}
export const toDecimal = (data: string) => {
  const color = tinycolor(data);

  const hsl = color.toHsl()
  const hsv = color.toHsv()
  const rgb = color.toRgb()
  const hex = color.toHex()
  const transparent = hex === '000000' && rgb.a === 0

  return {
    hsl,
    hex: transparent ? 'transparent' : `#${ hex }`,
    rgb,
    hsv,
    oldHue: 5,
    source: 'hex',
  }
}

export const toMonochromatic = (data: string): string[]=> {
  const colors = tinycolor(data).monochromatic();

  const getColors = colors.map(function(t) {
    return t.toHexString()
    })
  return getColors.slice(1);
}

export const decimalColorToHTMLcolor = (number: number) => {
  let intnumber = number - 0;

  const red = (intnumber&0x0000ff) << 16;
  const green = intnumber&0x00ff00;
  const blue = (intnumber&0xff0000) >>> 16;

  intnumber = blue|red|green;

  let HTMLcolor = intnumber.toString(16);
  const last2 = HTMLcolor.slice(-2);
  const newHTMLColor = HTMLcolor.substring(0,6 - 2 );
  const toHex = `#${last2}${newHTMLColor}`
  return toState(toHex)
}

export const toColor = (data: string) => {
  const color = tinycolor(data);
  const hsl = color.toHsl()
  const hsv = color.toHsv()
  const rgb = color.toRgb()
  const hex = color.toHex()

  const transparent = hex === '000000' && rgb.a === 0

  return {
    hsl,
    hex: transparent ? 'transparent' : `#${ hex }`,
    rgb,
    hsv,
    oldHue: 5,
    source: 'hex',
  }
}
