"""Rasteriza los SVG con Chrome headless y genera PNG/WebP/ICO."""
import os, subprocess, sys
from PIL import Image
HERE = os.path.dirname(os.path.abspath(__file__))
R = os.path.join(HERE, 'raster'); os.makedirs(R, exist_ok=True)
CH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

def shot(svgname, W, H, out, pad=0.0, bg='transparent'):
    """Centra el SVG (contain) en un lienzo WxH con margen relativo pad."""
    html = os.path.join(R, '_t.html')
    open(html, 'w').write(f'''<html><body style="margin:0;width:{W}px;height:{H}px;display:flex;align-items:center;justify-content:center;background:{bg}">
<img src="file://{HERE}/svg/{svgname}" style="width:{W*(1-2*pad)}px;height:{H*(1-2*pad)}px;object-fit:contain"></body></html>''')
    subprocess.run([CH, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
                    f'--user-data-dir={HERE}/prof', '--default-background-color=00000000',
                    f'--window-size={W},{H}', f'--screenshot={out}', f'file://{html}'],
                   check=True, capture_output=True)
    im = Image.open(out)
    assert im.size == (W, H), (out, im.size)
    return im

def save(im, name, webp=False):
    im.save(os.path.join(R, name + '.png'), optimize=True)
    if webp: im.save(os.path.join(R, name + '.webp'), quality=92, method=6)

# public/brand (mismos nombres y proporciones que los antiguos, al doble de resolución)
save(shot('moby-logo-stacked.svg', 792, 742, R+'/a.png', pad=.04), 'moby-logo', True)
save(shot('moby-logo-stacked-on-light.svg', 792, 754, R+'/a.png', pad=.04), 'moby-logo-on-light', True)
save(shot('moby-mark.svg', 712, 552, R+'/a.png'), 'moby-mark', True)
save(shot('moby-mark-flat.svg', 712, 552, R+'/a.png'), 'moby-mark-solid', True)
save(shot('moby-mark.svg', 512, 512, R+'/a.png', pad=.04), 'moby-mark-512', True)
save(shot('moby-mark-tile.svg', 512, 512, R+'/a.png'), 'moby-icon-512')
save(shot('moby-mark-tile.svg', 192, 192, R+'/a.png'), 'moby-icon-192')
save(shot('moby-mark-tile-maskable.svg', 512, 512, R+'/a.png'), 'moby-icon-maskable-512')
save(shot('moby-logo-horizontal.svg', 1200, 300, R+'/a.png', pad=.02), 'moby-logo-horizontal')
save(shot('moby-logo-horizontal-on-light.svg', 1200, 300, R+'/a.png', pad=.02), 'moby-logo-horizontal-on-light')
# app/
save(shot('moby-favicon.svg', 512, 512, R+'/a.png'), 'icon')
save(shot('moby-app-icon.svg', 180, 180, R+'/a.png'), 'apple-icon')
def small(svgname, s):
    """Rasteriza a tamaño real (s px) para que Chrome ajuste el antialias a la rejilla."""
    im = shot(svgname, 64, 64, R + '/a.png', pad=(64 - s) / 128)
    o = (64 - s) // 2
    return im.convert('RGBA').crop((o, o, o + s, o + s))
icos = {16: small('moby-favicon-16.svg', 16), 32: small('moby-favicon.svg', 32), 48: small('moby-favicon.svg', 48)}
for s, im in icos.items():
    im.save(os.path.join(R, f'favicon-{s}.png'))
icos[48].save(os.path.join(R, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)], append_images=[icos[16], icos[32]])
os.remove(R + '/a.png'); os.remove(R + '/_t.html')
print(sorted(os.listdir(R)))
