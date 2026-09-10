'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { useApp } from '@/context/AppContext';
import { CopyButton } from '@/components/common/CopyButton';
import {
  QrCode,
  Download,
  Link2,
  Wifi,
  FileText,
  Phone,
  Mail,
  User,
  Copy,
  Check,
  Sparkles,
  Sliders,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export function QrGenerator() {
  const { locale, t } = useApp();
  const [qrType, setQrType] = useState<'url' | 'wifi' | 'text' | 'phone' | 'email' | 'contact'>('url');

  // Fields
  const [url, setUrl] = useState<string>('https://khmertools.com');
  const [text, setText] = useState<string>('KhmerTools 🇰🇭 - Fast, Free & Useful Online Utilities');
  const [wifiSsid, setWifiSsid] = useState<string>('KhmerTools_Guest');
  const [wifiPass, setWifiPass] = useState<string>('khmer123456');
  const [wifiType, setWifiType] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [phone, setPhone] = useState<string>('+85512345678');
  const [emailTo, setEmailTo] = useState<string>('hello@khmertools.com');
  const [emailSubject, setEmailSubject] = useState<string>('Inquiry from KhmerTools');
  const [contactName, setContactName] = useState<string>('Sokha Chan');
  const [contactPhone, setContactPhone] = useState<string>('+85512345678');
  const [contactEmail, setContactEmail] = useState<string>('sokha@example.com');

  // Styling & Options
  const [qrColor, setQrColor] = useState<string>('#0F172A');
  const [qrBg, setQrBg] = useState<string>('#FFFFFF');
  const [size, setSize] = useState<number>(360);
  const [errorCorrection, setErrorCorrection] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedImage, setCopiedImage] = useState(false);

  // Compute payload
  let payload = url;
  if (qrType === 'wifi') {
    payload = `WIFI:T:${wifiType};S:${wifiSsid};P:${wifiPass};;`;
  } else if (qrType === 'text') {
    payload = text;
  } else if (qrType === 'phone') {
    payload = `tel:${phone}`;
  } else if (qrType === 'email') {
    payload = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`;
  } else if (qrType === 'contact') {
    payload = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL:${contactPhone}\nEMAIL:${contactEmail}\nEND:VCARD`;
  }

  useEffect(() => {
    if (!payload) return;
    QRCode.toDataURL(payload, {
      width: size,
      margin: 2,
      errorCorrectionLevel: errorCorrection,
      color: {
        dark: qrColor,
        light: qrBg,
      },
    })
      .then((dataUrl) => setQrDataUrl(dataUrl))
      .catch((err) => console.error(err));
  }, [payload, qrColor, qrBg, size, errorCorrection]);

  const downloadPng = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `khmertools-qr-${qrType}-${Date.now()}.png`;
    a.click();
  };

  const copyImageToClipboard = async () => {
    if (!qrDataUrl) return;
    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob,
        }),
      ]);
      setCopiedImage(true);
      setTimeout(() => setCopiedImage(false), 2500);
    } catch (err) {
      console.error('Failed to copy image: ', err);
    }
  };

  const colorPresets = [
    { label: 'Classic Black', fg: '#0F172A', bg: '#FFFFFF' },
    { label: 'Khmer Indigo', fg: '#3730A3', bg: '#EEF2FF' },
    { label: 'Angkor Gold', fg: '#92400E', bg: '#FEF3C7' },
    { label: 'Forest Emerald', fg: '#065F46', bg: '#ECFDF5' },
    { label: 'Crimson Krama', fg: '#991B1B', bg: '#FEF2F2' },
    { label: 'Dark Mode', fg: '#F8FAFC', bg: '#090D16' },
  ];

  return (
    <div className="space-y-8">
      {/* Type Selector Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex-wrap gap-1">
          {[
            { id: 'url', label: 'Website / URL', icon: Link2 },
            { id: 'wifi', label: 'Wi-Fi Network', icon: Wifi },
            { id: 'text', label: locale === 'km' ? 'អត្ថបទ' : 'Plain Text', icon: FileText },
            { id: 'phone', label: locale === 'km' ? 'ទូរស័ព្ទ' : 'Phone Call', icon: Phone },
            { id: 'email', label: 'Email', icon: Mail },
            { id: 'contact', label: locale === 'km' ? 'ទំនាក់ទំនង vCard' : 'Contact Card', icon: User },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = qrType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setQrType(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Inputs on Left, Big Live QR Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Inputs & Customization (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Input details card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>
                {locale === 'km' ? '១. បញ្ចូលព័ត៌មាន QR Code' : '1. Enter QR Code Content'}
              </span>
            </h3>

            {/* URL */}
            {qrType === 'url' && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Website URL
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full text-base px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            )}

            {/* Wi-Fi */}
            {qrType === 'wifi' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Wi-Fi Network Name (SSID)
                  </label>
                  <input
                    type="text"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    placeholder="MyHome_WiFi"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Wi-Fi Password
                  </label>
                  <input
                    type="text"
                    value={wifiPass}
                    onChange={(e) => setWifiPass(e.target.value)}
                    placeholder="SecretPassword"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Security Type
                  </label>
                  <div className="flex gap-2 text-xs">
                    {['WPA', 'WEP', 'nopass'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setWifiType(t as any)}
                        className={`px-3 py-1.5 rounded-lg border font-semibold ${
                          wifiType === t
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {t === 'nopass' ? 'Open / No Password' : t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Plain Text */}
            {qrType === 'text' && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {locale === 'km' ? 'អត្ថបទធម្មតា' : 'Text Content'}
                </label>
                <textarea
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type any message..."
                  className="w-full text-sm p-3.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            )}

            {/* Phone */}
            {qrType === 'phone' && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+85512345678"
                  className="w-full text-base px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                />
              </div>
            )}

            {/* Email */}
            {qrType === 'email' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Recipient Email
                  </label>
                  <input
                    type="email"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Contact Card */}
            {qrType === 'contact' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Customization Card: Colors, Size, Correction */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-500" />
              <span>{locale === 'km' ? '២. រចនា និងកែប្រែទម្រង់ QR Code' : '2. Styling & Customization'}</span>
            </h3>

            {/* Quick Color Presets */}
            <div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Color Themes
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {colorPresets.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => {
                      setQrColor(p.fg);
                      setQrBg(p.bg);
                    }}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-colors cursor-pointer"
                  >
                    <div
                      className="w-7 h-7 rounded-full shadow-xs border flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: p.bg, color: p.fg }}
                    >
                      QR
                    </div>
                    <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400 truncate w-full text-center">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Foreground Color:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={qrColor}
                    onChange={(e) => setQrColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs font-bold">{qrColor.toUpperCase()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Background Color:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={qrBg}
                    onChange={(e) => setQrBg(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="font-mono text-xs font-bold">{qrBg.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Error Correction Level */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Error Correction Level
                </label>
                <span className="text-xs text-slate-400">Higher = more resilient to damage</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { level: 'L', percent: '7% (Low)' },
                  { level: 'M', percent: '15% (Medium)' },
                  { level: 'Q', percent: '25% (Quartile)' },
                  { level: 'H', percent: '30% (High)' },
                ].map((item) => (
                  <button
                    key={item.level}
                    type="button"
                    onClick={() => setErrorCorrection(item.level as any)}
                    className={`p-2 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                      errorCorrection === item.level
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span className="block font-bold">{item.level}</span>
                    <span className="text-[10px] opacity-80">{item.percent}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Super Prominent Live Preview & Action Hub (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xs text-center space-y-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                <QrCode className="w-3.5 h-3.5" />
                <span>{locale === 'km' ? 'រូបភាព QR Code បច្ចុប្បន្ន' : 'Live Generated QR'}</span>
              </span>

              <span className="text-xs font-mono text-slate-400">
                {size}x{size}px
              </span>
            </div>

            {/* QR Swatch Box */}
            <div
              className="p-6 rounded-2xl shadow-md inline-block max-w-full mx-auto transition-all duration-200 border border-slate-200/50"
              style={{ backgroundColor: qrBg }}
            >
              {qrDataUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code"
                  className="w-64 h-64 sm:w-72 sm:h-72 object-contain mx-auto select-none"
                />
              ) : (
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
              )}
            </div>

            {/* Payload Preview */}
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-left">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Embedded Raw Content
              </span>
              <p className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate select-all">
                {payload}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={downloadPng}
                className="w-full py-3.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>{locale === 'km' ? 'ទាញយករូបភាព PNG កម្រិតច្បាស់' : 'Download High-Res PNG'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={copyImageToClipboard}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedImage ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedImage ? (locale === 'km' ? 'បានចម្លងរូបភាព!' : 'Image Copied!') : (locale === 'km' ? 'ចម្លងរូបភាព' : 'Copy Image')}</span>
                </button>

                <CopyButton
                  textToCopy={payload}
                  label={locale === 'km' ? 'ចម្លងតំណ' : 'Copy Content'}
                  copiedLabel={t.copied}
                  className="w-full justify-center py-2.5 rounded-xl text-xs"
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Static QR Code: Never expires, 100% private.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
