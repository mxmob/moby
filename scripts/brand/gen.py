"""Genera los SVG de la marca MobyApp (cachalote de línea continua, cian -> violeta).

Uso (desde esta carpeta):
  python3 -m venv venv && ./venv/bin/pip install fonttools brotli uharfbuzz pillow
  cp <Space Grotesk variable woff2 (p. ej. moby3d/src/app/fonts/space-grotesk-latin-wght-normal.woff2)> sg.woff2
  ./venv/bin/python gen.py      # -> svg/*.svg
  ./venv/bin/python render.py   # -> raster/*.png|webp|ico (Chrome headless del sistema)
Luego copia a public/brand/ y src/app/ (icon.svg = svg/moby-favicon.svg). La geometría de la
ballena vive en whale.py y está duplicada en src/lib/brand.ts: mantenlas iguales.
"""
import os
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from whale import BODY, JAW, INNER, SMALL

OUT = 'svg'
os.makedirs(OUT, exist_ok=True)
CYAN, VIOLET, NAVY = '#22d3ee', '#8b5cf6', '#050510'
CYAN_D, VIOLET_D, INK = '#0891b2', '#7c3aed', '#0b1024'
FONT = 'sg.woff2'

# ---------- wordmark (Space Grotesk convertida a trazados) ----------
_fonts = {}

def text_path(text, wght, size, x0, baseline, tracking=0.0):
    """Devuelve (d, ancho) del texto en Space Grotesk al peso dado."""
    if wght not in _fonts:
        f = TTFont(FONT)
        inst = instantiateVariableFont(f, {'wght': wght})
        inst.flavor = None
        tmp = f'sg_{wght}.ttf'
        inst.save(tmp)
        _fonts[wght] = (TTFont(tmp), open(tmp, 'rb').read())
    font, blob = _fonts[wght]
    face = hb.Face(blob)
    hbf = hb.Font(face)
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(hbf, buf, {'kern': True, 'liga': True})
    gs = font.getGlyphSet()
    order = font.getGlyphOrder()
    s = size / font['head'].unitsPerEm
    x = 0.0
    ds = []
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        name = order[info.codepoint]
        pen = SVGPathPen(gs, ntos=lambda v: f'{v:.2f}'.rstrip('0').rstrip('.'))
        tp = TransformPen(pen, (s, 0, 0, -s, x0 + x * s, baseline))
        gs[name].draw(tp)
        ds.append(pen.getCommands())
        x += pos.x_advance + tracking * font['head'].unitsPerEm
    width = (x - tracking * font['head'].unitsPerEm) * s
    return ' '.join(d for d in ds if d), width


def cap_height(size):
    f = TTFont(FONT)
    return f['OS/2'].sCapHeight * size / f['head'].unitsPerEm


# ---------- piezas ----------
def grad(id_, x1, y1, x2, y2, c1=CYAN, c2=VIOLET):
    return (f'<linearGradient id="{id_}" x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" gradientUnits="userSpaceOnUse">'
            f'<stop offset="0" stop-color="{c1}"/><stop offset="1" stop-color="{c2}"/></linearGradient>')


WHALE_GRAD = (140, 330, 380, 180)  # diagonal: abajo-izquierda cian, arriba-derecha violeta


def whale_group(paths, sw, stroke, glow=True, glow_id='mg-glow', extra=''):
    ps = ''.join(f'<path d="{d}"/>' for d in paths)
    g = ''
    if glow:
        g = f'<g filter="url(#{glow_id})" opacity=".55" stroke-width="{sw * 2:g}">{ps}</g>'
    return (f'<g fill="none" stroke="{stroke}" stroke-linecap="round" stroke-linejoin="round"{extra}>'
            f'{g}<g stroke-width="{sw:g}">{ps}</g></g>')


def glow_filter(id_, sd):
    return (f'<filter id="{id_}" x="-25%" y="-35%" width="150%" height="170%" color-interpolation-filters="sRGB">'
            f'<feGaussianBlur stdDeviation="{sd:g}"/></filter>')


def svg(vb, body, defs='', title='MobyApp', w=None, h=None, extra_attr=''):
    size = f' width="{w:g}" height="{h:g}"' if w else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}"{size} role="img" aria-label="{title}"{extra_attr}>'
            f'<title>{title}</title><defs>{defs}</defs>{body}</svg>\n')


DETAIL = [BODY, JAW, INNER]
# Caja de la ballena con margen para el brillo
MARK_VB = (111, 161, 290, 191)  # x, y, w, h


def mark(glow=True, mono=None, sw=7):
    vb = ' '.join(map(str, MARK_VB))
    if mono:
        return svg(vb, whale_group(DETAIL, sw, mono, glow=False))
    defs = grad('mg', *WHALE_GRAD) + (glow_filter('mg-glow', 6) if glow else '')
    return svg(vb, whale_group(DETAIL, sw, 'url(#mg)', glow=glow), defs)


def tile(detail=True, size=512, rx=112, scale=1.45, sw=7, bg=NAVY, border='#1e1b4b', glow=True, maskable=False):
    """Icono sobre tile azul noche. maskable: sin esquinas (el SO recorta) y ballena dentro de la zona segura."""
    paths = DETAIL if detail else [SMALL]
    tr = f'translate(256 256) scale({scale:g}) translate(-256 -256.5)'
    defs = grad('tg', *WHALE_GRAD) + glow_filter('tg-glow', sw * 0.9) + \
        '<radialGradient id="tbg" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#0c0c2a"/><stop offset="1" stop-color="' + bg + '"/></radialGradient>'
    r = 0 if maskable else rx
    body = f'<rect width="512" height="512" rx="{r}" fill="url(#tbg)"/>'
    if border and not maskable:
        body += f'<rect x="2" y="2" width="508" height="508" rx="{r - 2}" fill="none" stroke="{border}" stroke-width="4"/>'
    body += f'<g transform="{tr}">' + whale_group(paths, sw, 'url(#tg)', glow=glow, glow_id='tg-glow') + '</g>'
    return svg('0 0 512 512', body, defs, w=size, h=size)


def favicon(tiny=False):
    """Favicon: tile con el degradado de marca y la ballena simplificada en blanco.
    tiny: versión para 16 px (trazo más grueso, sin aleta pectoral, ballena más grande)."""
    paths = [SMALL.split(' M')[0]] if tiny else [SMALL]
    sw, sc = (30, 1.72) if tiny else (20, 1.6)
    tr = f'translate(256 256) scale({sc}) translate(-257 -250)'
    defs = grad('fg', 0, 512, 512, 0)
    body = ('<rect width="512" height="512" rx="116" fill="url(#fg)"/>'
            f'<g transform="{tr}">' + whale_group(paths, sw, '#fff', glow=False) + '</g>')
    return svg('0 0 512 512', body, defs)


def wordmark_parts(size, light=False):
    """'Moby' (500) + 'App' (300, degradado). Devuelve (body, defs, ancho, alto_caja)."""
    ch = cap_height(size)
    base = ch  # la caja empieza en la altura de mayúscula
    d1, w1 = text_path('Moby', 450, size, 0, base, tracking=-0.01)
    gap = size * 0.24
    d2, w2 = text_path('App', 300, size, w1 + gap, base, tracking=0.0)
    total = w1 + gap + w2
    c1, c2 = (CYAN_D, VIOLET_D) if light else (CYAN, VIOLET)
    defs = grad('wg', w1 + gap, 0, total, 0, c1, c2)
    ink = INK if light else '#f5f7ff'
    body = f'<path fill="{ink}" d="{d1}"/><path fill="url(#wg)" d="{d2}"/>'
    descent = size * 0.22  # 'y', 'p'
    return body, defs, total, ch + descent


def wordmark(light=False, size=100):
    body, defs, w, h = wordmark_parts(size, light)
    return svg(f'0 0 {w:.1f} {h:.1f}', body, defs)


def lockup(light=False, stacked=False, mono=None):
    """Logo completo: ballena + wordmark."""
    size = 100
    wbody, wdefs, ww, wh = wordmark_parts(size, light)
    mx, my, mw, mh = MARK_VB
    c1, c2 = (CYAN_D, VIOLET_D) if light else (CYAN, VIOLET)
    if mono:
        wbody = wbody.replace('url(#wg)', mono).replace('#f5f7ff', mono).replace(INK, mono)
    if stacked:
        s = ww * 0.78 / mw  # ballena un poco más estrecha que el texto
        W = max(ww, mw * s)
        mark_h = mh * s
        gap = 6
        H = mark_h + gap + wh
        mt = f'translate({(W - mw * s) / 2:.2f} 0) scale({s:.4f}) translate({-mx} {-my})'
        wt = f'translate({(W - ww) / 2:.2f} {mark_h + gap:.2f})'
    else:
        s = wh * 1.7 / mh
        mark_w = mw * s
        gap = 4
        W = mark_w + gap + ww
        H = max(mh * s, wh)
        mt = f'translate(0 {(H - mh * s) / 2:.2f}) scale({s:.4f}) translate({-mx} {-my})'
        wt = f'translate({mark_w + gap:.2f} {(H - wh) / 2 + 2:.2f})'
    stroke = mono or 'url(#mg)'
    defs = wdefs + ('' if mono else grad('mg', *WHALE_GRAD, c1, c2) + glow_filter('mg-glow', 6))
    body = (f'<g transform="{mt}">' + whale_group(DETAIL, 7, stroke, glow=not mono and not light) + '</g>'
            f'<g transform="{wt}">{wbody}</g>')
    return svg(f'0 0 {W:.1f} {H:.1f}', body, defs)


FILES = {
    'moby-mark.svg': mark(),
    'moby-mark-flat.svg': mark(glow=False),
    'moby-mark-mono-white.svg': mark(mono='#ffffff'),
    'moby-mark-mono-black.svg': mark(mono=NAVY),
    'moby-mark-tile.svg': tile(),
    'moby-mark-tile-maskable.svg': tile(maskable=True, scale=1.25),
    'moby-favicon.svg': favicon(),
    'moby-favicon-16.svg': favicon(tiny=True),
    'moby-app-icon.svg': tile(maskable=True, scale=1.55, sw=9),
    'moby-wordmark.svg': wordmark(),
    'moby-wordmark-on-light.svg': wordmark(light=True),
    'moby-logo-horizontal.svg': lockup(),
    'moby-logo-horizontal-on-light.svg': lockup(light=True),
    'moby-logo-stacked.svg': lockup(stacked=True),
    'moby-logo-stacked-on-light.svg': lockup(light=True, stacked=True),
    'moby-logo-mono-white.svg': lockup(mono='#ffffff'),
    'moby-logo-mono-black.svg': lockup(mono=NAVY),
}

if __name__ == '__main__':
    for name, content in FILES.items():
        with open(os.path.join(OUT, name), 'w') as fh:
            fh.write(content)
    print('\n'.join(f'{n} {len(c)}B' for n, c in FILES.items()))
