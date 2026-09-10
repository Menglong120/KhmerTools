'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import {
  Palette,
  Check,
  Sparkles,
  Shuffle,
  Eye,
  Sliders,
  CheckCircle2,
  XCircle,
  Sun,
  Moon,
} from 'lucide-react';

export function ColorConverter() {
  const { locale, t } = useApp();
  const [hex, setHex] = useState<string>('#4F46E5');

  // Convert Hex to RGB
  const hexToRgb = (h: string) => {
    let clean = h.replace('#', '').trim();
    if (clean.length === 3) {
      clean = clean.split('').map((c) => c + c).join('');
    }
    const num = parseInt(clean, 16);
    if (isNaN(num) || clean.length !== 6) return { r: 79, g: 70, b: 229 };
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  };

  const rgb = hexToRgb(hex);

  // RGB to Hex
  const rgbToHex = (r: number, g: number, b: number) => {
    const toHex = (n: number) => {
      const clamped = Math.max(0, Math.min(255, Math.round(n)));
      return clamped.toString(16).padStart(2, '0');
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  // RGB to HSL
  const rgbToHsl = (r: number, g: number, b: number) => {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm:
          h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
          break;
        case gNorm:
          h = (bNorm - rNorm) / d + 2;
          break;
        case bNorm:
          h = (rNorm - gNorm) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  // HSL to RGB
  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {
      r: Math.round(f(0) * 255),
      g: Math.round(f(8) * 255),
      b: Math.round(f(4) * 255),
    };
  };

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // RGB to CMYK
  const rgbToCmyk = (r: number, g: number, b: number) => {
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const k = 1 - Math.max(rNorm, gNorm, bNorm);
    if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
    const c = (1 - rNorm - k) / (1 - k);
    const m = (1 - gNorm - k) / (1 - k);
    const y = (1 - bNorm - k) / (1 - k);
    return {
      c: Math.round(c * 100),
      m: Math.round(m * 100),
      y: Math.round(y * 100),
      k: Math.round(k * 100),
    };
  };

  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  // Formatting strings
  const hexStr = hex.startsWith('#') ? hex.toUpperCase() : `#${hex}`.toUpperCase();
  const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslStr = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  const cmykStr = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;

  // Relative Luminance for WCAG Contrast
  const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const colorLum = getLuminance(rgb.r, rgb.g, rgb.b);
  const whiteLum = 1.0;
  const blackLum = 0.0;

  const contrastWithWhite = (whiteLum + 0.05) / (colorLum + 0.05);
  const contrastWithBlack = (colorLum + 0.05) / (blackLum + 0.05);

  const isLight = colorLum > 0.35;

  // Random color generator
  const handleRandomColor = () => {
    const randomHex =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase();
    setHex(randomHex);
  };

  // Preset Palettes
  const khmerPalettes = [
    { name: 'Angkor Gold', hex: '#D4AF37' },
    { name: 'Krama Red', hex: '#D32F2F' },
    { name: 'Kampot Green', hex: '#2E7D32' },
    { name: 'Mekong Blue', hex: '#1976D2' },
    { name: 'Lotus Pink', hex: '#E91E63' },
    { name: 'Silk Purple', hex: '#7B1FA2' },
    { name: 'Palm Orange', hex: '#F57C00' },
    { name: 'Basalt Charcoal', hex: '#263238' },
  ];

  const popularPalette = [
    { name: 'Indigo', hex: '#4F46E5' },
    { name: 'Emerald', hex: '#10B981' },
    { name: 'Rose', hex: '#F43F5E' },
    { name: 'Amber', hex: '#F59E0B' },
    { name: 'Cyan', hex: '#06B6D4' },
    { name: 'Violet', hex: '#8B5CF6' },
    { name: 'Fuchsia', hex: '#D946EF' },
    { name: 'Sky', hex: '#0284C7' },
  ];

  // Generate 10 Shades & Tints (Lightness from 10% to 90%)
  const shadeSteps = [95, 85, 75, 65, 55, 45, 35, 25, 15, 10];
  const shades = shadeSteps.map((lightness) => {
    const sRgb = hslToRgb(hsl.h, hsl.s, lightness);
    return {
      lightness,
      hex: rgbToHex(sRgb.r, sRgb.g, sRgb.b),
    };
  });

  return (
    <div className="space-y-8">
      {/* Clean Live Preview Banner with Swatch */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/* Swatch Box */}
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-md border border-black/10 dark:border-white/10 shrink-0 relative flex items-center justify-center transition-transform hover:scale-105"
            style={{ backgroundColor: hexStr }}
          />

          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-1">
              {locale === 'km' ? 'កូដពណ៌បច្ចុប្បន្ន' : 'Current Selected Color'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-slate-900 dark:text-slate-100 select-all">
              {hexStr}
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
              {rgbStr} • {hslStr}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <input
              type="color"
              value={hexStr}
              onChange={(e) => setHex(e.target.value.toUpperCase())}
              className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
              title="Click to pick color"
            />
            <input
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="w-24 px-2.5 py-1.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg font-mono text-sm font-bold border border-slate-200 dark:border-slate-700 uppercase"
            />
          </div>

          <button
            type="button"
            onClick={handleRandomColor}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <Shuffle className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'ពណ៌ចៃដន្យ' : 'Random Color'}</span>
          </button>
        </div>
      </div>

      {/* Main Conversion Cards (Click-to-Copy with Labels) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'ទម្រង់កូដពណ៌ទាំងអស់ (All Color Formats)' : 'Color Code Conversions'}</span>
          </h3>
          <span className="text-xs text-slate-400">
            {locale === 'km' ? 'ចុចលើប្រអប់ដើម្បីចម្លង' : 'Click Copy to get values'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* HEX */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-indigo-600 dark:text-indigo-400">
                  HEX Format
                </span>
                <CopyButton textToCopy={hexStr} label={t.copy} copiedLabel={t.copied} />
              </div>
              <p className="text-xl sm:text-2xl font-mono font-black text-slate-900 dark:text-slate-100 select-all">
                {hexStr}
              </p>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">CSS: {`#${hex.replace('#', '')}`}</p>
          </div>

          {/* RGB */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400">
                  RGB Format
                </span>
                <CopyButton textToCopy={rgbStr} label={t.copy} copiedLabel={t.copied} />
              </div>
              <p className="text-xl sm:text-2xl font-mono font-black text-slate-900 dark:text-slate-100 select-all">
                {rgbStr}
              </p>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Red: {rgb.r}, Green: {rgb.g}, Blue: {rgb.b}
            </p>
          </div>

          {/* HSL */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-amber-600 dark:text-amber-400">
                  HSL Format
                </span>
                <CopyButton textToCopy={hslStr} label={t.copy} copiedLabel={t.copied} />
              </div>
              <p className="text-xl sm:text-2xl font-mono font-black text-slate-900 dark:text-slate-100 select-all">
                {hslStr}
              </p>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              Hue: {hsl.h}°, Sat: {hsl.s}%, Light: {hsl.l}%
            </p>
          </div>

          {/* CMYK */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-rose-600 dark:text-rose-400">
                  CMYK (Print)
                </span>
                <CopyButton textToCopy={cmykStr} label={t.copy} copiedLabel={t.copied} />
              </div>
              <p className="text-xl sm:text-2xl font-mono font-black text-slate-900 dark:text-slate-100 select-all">
                {cmykStr}
              </p>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              C:{cmyk.c}% M:{cmyk.m}% Y:{cmyk.y}% K:{cmyk.k}%
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Color Sliders (R, G, B) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-6">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-indigo-500" />
          <span>{locale === 'km' ? 'កែតម្រូវកម្រិតពណ៌ (RGB Fine Tuning Sliders)' : 'RGB Color Sliders'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Red */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-rose-600 dark:text-rose-400">Red (R)</span>
              <span className="font-mono text-sm">{rgb.r}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.r}
              onChange={(e) => {
                const newR = parseInt(e.target.value, 10);
                setHex(rgbToHex(newR, rgb.g, rgb.b));
              }}
              className="w-full accent-rose-500 cursor-pointer"
            />
          </div>

          {/* Green */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-emerald-600 dark:text-emerald-400">Green (G)</span>
              <span className="font-mono text-sm">{rgb.g}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.g}
              onChange={(e) => {
                const newG = parseInt(e.target.value, 10);
                setHex(rgbToHex(rgb.r, newG, rgb.b));
              }}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          {/* Blue */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-blue-600 dark:text-blue-400">Blue (B)</span>
              <span className="font-mono text-sm">{rgb.b}</span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={rgb.b}
              onChange={(e) => {
                const newB = parseInt(e.target.value, 10);
                setHex(rgbToHex(rgb.r, rgb.g, newB));
              }}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Monochromatic Shades & Tints Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>{locale === 'km' ? 'កម្រិតស្រមោលពណ៌ (10 Tints & Shades)' : 'Color Tints & Shades Palette'}</span>
          </h3>
          <span className="text-xs text-slate-400">{locale === 'km' ? 'ចុចដើម្បីចម្លង HEX' : 'Click any swatch to copy'}</span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {shades.map((shade, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setHex(shade.hex)}
              className="group flex flex-col items-center gap-1.5 p-1 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              title={`Lightness: ${shade.lightness}%\nHEX: ${shade.hex}`}
            >
              <div
                className="w-full h-14 rounded-xl shadow-xs border border-black/10 dark:border-white/10 relative flex items-center justify-center"
                style={{ backgroundColor: shade.hex }}
              >
                {shade.hex.toUpperCase() === hexStr && (
                  <Check className={`w-4 h-4 ${shade.lightness > 50 ? 'text-black' : 'text-white'}`} />
                )}
              </div>
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-semibold">
                {shade.hex}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* WCAG Contrast Checker Accessibility */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Eye className="w-5 h-5 text-indigo-500" />
          <span>{locale === 'km' ? 'កម្រិត Contrast សម្រាប់រចនាគេហទំព័រ (WCAG Accessibility)' : 'WCAG Text Contrast Accessibility'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Contrast with White Text */}
          <div
            className="p-5 rounded-2xl shadow-xs flex flex-col justify-between"
            style={{ backgroundColor: hexStr, color: '#FFFFFF' }}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider opacity-80 block">
                White Text on Color
              </span>
              <p className="text-lg font-bold mt-1">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <span>Ratio: {contrastWithWhite.toFixed(2)}:1</span>
              <span className="px-2 py-0.5 rounded-full bg-white/20">
                {contrastWithWhite >= 4.5 ? '✓ Pass AA (Normal)' : '✕ Fail AA'}
              </span>
            </div>
          </div>

          {/* Contrast with Black Text */}
          <div
            className="p-5 rounded-2xl shadow-xs flex flex-col justify-between"
            style={{ backgroundColor: hexStr, color: '#000000' }}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider opacity-80 block">
                Black Text on Color
              </span>
              <p className="text-lg font-bold mt-1">
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/20 flex items-center justify-between text-xs font-bold">
              <span>Ratio: {contrastWithBlack.toFixed(2)}:1</span>
              <span className="px-2 py-0.5 rounded-full bg-black/20">
                {contrastWithBlack >= 4.5 ? '✓ Pass AA (Normal)' : '✕ Fail AA'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Color Palettes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Khmer Heritage Colors */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span>🇰🇭</span>
            <span>{locale === 'km' ? 'ពណ៌ប្រពៃណីខ្មែរ (Khmer Heritage Colors)' : 'Cambodian Heritage Palette'}</span>
          </h4>
          <div className="grid grid-cols-4 gap-2.5">
            {khmerPalettes.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setHex(item.hex)}
                className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer"
              >
                <div
                  className="w-full h-10 rounded-lg shadow-2xs border border-black/10"
                  style={{ backgroundColor: item.hex }}
                />
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate w-full text-center">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Modern Tech Colors */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>{locale === 'km' ? 'ពណ៌ពេញនិយមទំនើប (Modern UI Colors)' : 'Modern Tech Palette'}</span>
          </h4>
          <div className="grid grid-cols-4 gap-2.5">
            {popularPalette.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setHex(item.hex)}
                className="flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left cursor-pointer"
              >
                <div
                  className="w-full h-10 rounded-lg shadow-2xs border border-black/10"
                  style={{ backgroundColor: item.hex }}
                />
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 truncate w-full text-center">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
