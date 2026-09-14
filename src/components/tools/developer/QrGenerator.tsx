'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Upload,
  Circle,
  Triangle,
  Square,
  Eye,
  EyeOff,
  Trash2,
  KeyRound,
  Image as ImageIcon,
} from 'lucide-react';

type LogoShape = 'circle' | 'triangle' | 'square';
type QrType = 'url' | 'wifi' | 'credentials' | 'text' | 'phone' | 'email' | 'contact';

interface LogoPreset {
  id: string;
  label: string;
  icon: string;
  src: string;
}

const LOGO_PRESETS: LogoPreset[] = [
  {
    id: 'none',
    label: 'None',
    icon: '🚫',
    src: '',
  },
  {
    id: 'cambodia',
    label: '🇰🇭 Cambodia',
    icon: '🇰🇭',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23032ea1"/><rect y="50" width="300" height="100" fill="%23e00025"/><g fill="%23ffffff" transform="translate(100,55) scale(1.0)"><path d="M50 5 L62 30 L38 30 Z M25 20 L32 40 L18 40 Z M75 20 L82 40 L68 40 Z M12 40 H88 V60 H12 Z M5 60 H95 V75 H5 Z"/></g></svg>',
  },
  {
    id: 'wifi',
    label: 'Wi-Fi',
    icon: '📶',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="%234F46E5"/><path d="M25 45 A40 40 0 0 1 75 45" stroke="white" stroke-width="8" stroke-linecap="round"/><path d="M35 60 A25 25 0 0 1 65 60" stroke="white" stroke-width="8" stroke-linecap="round"/><circle cx="50" cy="74" r="6" fill="white"/></svg>',
  },
  {
    id: 'link',
    label: 'Link',
    icon: '🔗',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="%232563EB"/><path d="M42 58 A15 15 0 0 0 63 58 L72 49 A15 15 0 0 0 51 28 L46 33" stroke="white" stroke-width="8" stroke-linecap="round"/><path d="M58 42 A15 15 0 0 0 37 42 L28 51 A15 15 0 0 0 49 72 L54 67" stroke="white" stroke-width="8" stroke-linecap="round"/></svg>',
  },
  {
    id: 'lock',
    label: 'Security',
    icon: '🔐',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="%23059669"/><rect x="24" y="44" width="52" height="40" rx="8" fill="white"/><path d="M34 44 V32 A16 16 0 0 1 66 32 V44" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="50" cy="62" r="5" fill="%23059669"/><path d="M50 67 V74" stroke="%23059669" stroke-width="4" stroke-linecap="round"/></svg>',
  },
  {
    id: 'user',
    label: 'User',
    icon: '👤',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="20" fill="%237C3AED"/><circle cx="50" cy="40" r="18" fill="white"/><path d="M22 84 C22 68 34 62 50 62 C66 62 78 68 78 84" fill="white"/></svg>',
  },
];

export function QrGenerator() {
  const { locale, t } = useApp();
  const [qrType, setQrType] = useState<QrType>('url');

  // Input Fields
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

  // Dedicated Login / Credentials Mode
  const [credUsername, setCredUsername] = useState<string>('admin@khmertools.com');
  const [credPassword, setCredPassword] = useState<string>('P@ssword2026!');
  const [credService, setCredService] = useState<string>('Company Wi-Fi / Portal');

  // Center Logo & Shape Options
  const [logoSrc, setLogoSrc] = useState<string>('');
  const [logoShape, setLogoShape] = useState<LogoShape>('circle');
  const [logoSizePercent, setLogoSizePercent] = useState<number>(22);
  const [customLogoName, setCustomLogoName] = useState<string>('');

  // Show Username & Password Directly ON the QR Image
  const [showCredentialsOnImage, setShowCredentialsOnImage] = useState<boolean>(false);
  const [cardUsername, setCardUsername] = useState<string>('KhmerTools_Guest');
  const [cardPassword, setCardPassword] = useState<string>('khmer123456');
  const [cardTitle, setCardTitle] = useState<string>('Wi-Fi Network Access');
  const [showPasswordText, setShowPasswordText] = useState<boolean>(true);
  const [copiedCreds, setCopiedCreds] = useState<boolean>(false);

  // Styling & Options
  const [qrColor, setQrColor] = useState<string>('#0F172A');
  const [qrBg, setQrBg] = useState<string>('#FFFFFF');
  const [errorCorrection, setErrorCorrection] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedImage, setCopiedImage] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync credentials when switching to wifi or credentials mode
  useEffect(() => {
    if (qrType === 'wifi') {
      setShowCredentialsOnImage(true);
      setCardTitle(locale === 'km' ? '📶 ការតភ្ជាប់បណ្តាញ Wi-Fi' : '📶 Wi-Fi Network Access');
      setCardUsername(wifiSsid);
      setCardPassword(wifiPass);
    } else if (qrType === 'credentials') {
      setShowCredentialsOnImage(true);
      setCardTitle(locale === 'km' ? '🔐 ព័ត៌មានគណនី និងពាក្យសម្ងាត់' : '🔐 Login & Account Access');
      setCardUsername(credUsername);
      setCardPassword(credPassword);
    }
  }, [qrType, wifiSsid, wifiPass, credUsername, credPassword, locale]);

  // Compute QR Payload
  let payload = url;
  if (qrType === 'wifi') {
    payload = `WIFI:T:${wifiType};S:${wifiSsid};P:${wifiPass};;`;
  } else if (qrType === 'credentials') {
    payload = `Service: ${credService}\nUsername: ${credUsername}\nPassword: ${credPassword}`;
  } else if (qrType === 'text') {
    payload = text;
  } else if (qrType === 'phone') {
    payload = `tel:${phone}`;
  } else if (qrType === 'email') {
    payload = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`;
  } else if (qrType === 'contact') {
    payload = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL:${contactPhone}\nEMAIL:${contactEmail}\nEND:VCARD`;
  }

  // Draw Path Helpers for Center Logo Shapes
  const drawTrianglePath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    const height = (size * Math.sqrt(3)) / 2;
    const topY = cy - (height * 2) / 3;
    const bottomY = cy + height / 3;
    const halfBase = size / 2;
    ctx.beginPath();
    ctx.moveTo(cx, topY);
    ctx.lineTo(cx + halfBase, bottomY);
    ctx.lineTo(cx - halfBase, bottomY);
    ctx.closePath();
  };

  const drawCirclePath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) => {
    ctx.beginPath();
    ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);
    ctx.closePath();
  };

  const drawSquarePath = (ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, radius = 16) => {
    const x = cx - size / 2;
    const y = cy - size / 2;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, size, size, radius);
    } else {
      ctx.rect(x, y, size, size);
    }
    ctx.closePath();
  };

  const drawShapePath = (
    ctx: CanvasRenderingContext2D,
    shape: LogoShape,
    cx: number,
    cy: number,
    size: number,
    radius = 16
  ) => {
    if (shape === 'triangle') {
      drawTrianglePath(ctx, cx, cy, size);
    } else if (shape === 'square') {
      drawSquarePath(ctx, cx, cy, size, radius);
    } else {
      drawCirclePath(ctx, cx, cy, size);
    }
  };

  // Render QR Code (with Center Logo + Optional Username & Password Drawn Directly on Image)
  const renderQrCanvas = async (exportWidth = 720): Promise<HTMLCanvasElement> => {
    const isCard = showCredentialsOnImage;

    const canvas = document.createElement('canvas');
    const qrPadding = 32;
    const qrSize = exportWidth - qrPadding * 2;

    const headerHeight = isCard ? 100 : 0;
    const footerHeight = isCard ? 190 : 0;
    const canvasHeight = isCard ? qrSize + headerHeight + footerHeight + qrPadding * 2 : exportWidth;

    canvas.width = exportWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // 1. Fill canvas background
    ctx.fillStyle = qrBg;
    ctx.fillRect(0, 0, exportWidth, canvasHeight);

    // 2. If showing credentials on image, draw Header Title
    let qrY = qrPadding;
    if (isCard) {
      qrY = headerHeight + 10;

      // Header Title
      ctx.fillStyle = qrColor;
      ctx.font = `bold ${Math.round(exportWidth * 0.046)}px "Kantumruy Pro", sans-serif, system-ui`;
      ctx.textAlign = 'center';
      ctx.fillText(cardTitle || 'Wi-Fi & Login Credentials', exportWidth / 2, 52);

      // Subtitle
      ctx.fillStyle = qrColor + '99';
      ctx.font = `${Math.round(exportWidth * 0.024)}px sans-serif, system-ui`;
      ctx.fillText('Scan with camera or enter credentials below', exportWidth / 2, 82);
    }

    // 3. Generate QR code onto temporary canvas
    const tempQrCanvas = document.createElement('canvas');
    tempQrCanvas.width = qrSize;
    tempQrCanvas.height = qrSize;

    const effectiveEc = logoSrc ? 'H' : errorCorrection;
    await QRCode.toCanvas(tempQrCanvas, payload || 'https://khmertools.com', {
      width: qrSize,
      margin: 1,
      errorCorrectionLevel: effectiveEc,
      color: {
        dark: qrColor,
        light: qrBg,
      },
    });

    // 4. If Center Logo is selected, draw it in the center with chosen shape
    if (logoSrc) {
      const tempCtx = tempQrCanvas.getContext('2d');
      if (tempCtx) {
        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = (e) => reject(e);
            img.src = logoSrc;
          });

          const cx = qrSize / 2;
          const cy = qrSize / 2;
          const logoSize = qrSize * (logoSizePercent / 100);
          const bgPaddingSize = logoSize + 16;

          // Draw solid background patch matching the QR background
          tempCtx.save();
          drawShapePath(tempCtx, logoShape, cx, cy, bgPaddingSize, 18);
          tempCtx.fillStyle = qrBg;
          tempCtx.fill();
          tempCtx.lineWidth = 4;
          tempCtx.strokeStyle = qrColor + '20';
          tempCtx.stroke();
          tempCtx.restore();

          // Clip and draw image inside selected shape (Circle, Triangle, or Square)
          tempCtx.save();
          drawShapePath(tempCtx, logoShape, cx, cy, logoSize, 14);
          tempCtx.clip();
          tempCtx.drawImage(img, cx - logoSize / 2, cy - logoSize / 2, logoSize, logoSize);
          tempCtx.restore();

          // Draw clean border around the logo shape
          tempCtx.save();
          drawShapePath(tempCtx, logoShape, cx, cy, logoSize, 14);
          tempCtx.lineWidth = 3;
          tempCtx.strokeStyle = qrColor;
          tempCtx.stroke();
          tempCtx.restore();
        } catch (err) {
          console.error('Failed to draw logo: ', err);
        }
      }
    }

    // Draw QR code onto main canvas
    const qrX = (exportWidth - qrSize) / 2;
    ctx.drawImage(tempQrCanvas, qrX, qrY, qrSize, qrSize);

    // 5. If showing credentials on image, draw Username & Password Footer Box
    if (isCard) {
      const boxY = qrY + qrSize + 15;
      const boxWidth = exportWidth - qrPadding * 2;
      const boxHeight = footerHeight - 20;
      const boxX = qrPadding;

      // Credentials Box Background
      ctx.save();
      ctx.fillStyle = qrColor + '0D'; // 5% tint
      ctx.strokeStyle = qrColor + '30'; // subtle border
      ctx.lineWidth = 2;
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 18);
      } else {
        ctx.rect(boxX, boxY, boxWidth, boxHeight);
      }
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Username / SSID row
      ctx.textAlign = 'left';
      ctx.fillStyle = qrColor + '99';
      ctx.font = `bold ${Math.round(exportWidth * 0.022)}px sans-serif, system-ui`;
      const label1 = qrType === 'wifi' ? 'NETWORK (SSID):' : 'USERNAME:';
      ctx.fillText(label1, boxX + 24, boxY + 36);

      ctx.fillStyle = qrColor;
      ctx.font = `bold ${Math.round(exportWidth * 0.034)}px monospace, sans-serif`;
      ctx.fillText(cardUsername || '—', boxX + 24, boxY + 66);

      // Divider line
      ctx.strokeStyle = qrColor + '20';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(boxX + 24, boxY + 86);
      ctx.lineTo(boxX + boxWidth - 24, boxY + 86);
      ctx.stroke();

      // Password row
      ctx.fillStyle = qrColor + '99';
      ctx.font = `bold ${Math.round(exportWidth * 0.022)}px sans-serif, system-ui`;
      ctx.fillText('PASSWORD:', boxX + 24, boxY + 116);

      ctx.fillStyle = qrColor;
      ctx.font = `bold ${Math.round(exportWidth * 0.034)}px monospace, sans-serif`;
      const pwdDisplay = showPasswordText ? (cardPassword || '—') : '••••••••';
      ctx.fillText(pwdDisplay, boxX + 24, boxY + 146);

      // Subtle branding note
      ctx.textAlign = 'center';
      ctx.fillStyle = qrColor + '55';
      ctx.font = `${Math.round(exportWidth * 0.018)}px sans-serif`;
      ctx.fillText('KhmerTools.com • 100% Free & Private', exportWidth / 2, canvasHeight - 10);
    }

    return canvas;
  };

  // Generate Preview Data URL whenever inputs change
  useEffect(() => {
    let isCancelled = false;

    renderQrCanvas(520)
      .then((canvas) => {
        if (!isCancelled) {
          setQrDataUrl(canvas.toDataURL('image/png'));
        }
      })
      .catch((err) => console.error(err));

    return () => {
      isCancelled = true;
    };
  }, [
    payload,
    qrColor,
    qrBg,
    errorCorrection,
    logoSrc,
    logoShape,
    logoSizePercent,
    showCredentialsOnImage,
    cardUsername,
    cardPassword,
    cardTitle,
    showPasswordText,
  ]);

  // Handle Custom Logo Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCustomLogoName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setLogoSrc(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const removeLogo = () => {
    setLogoSrc('');
    setCustomLogoName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Download High-Res PNG (Includes Username & Password on the image if toggled!)
  const downloadPng = async () => {
    const canvas = await renderQrCanvas(1080);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `khmertools-qr-${qrType}-${showCredentialsOnImage ? 'with-credentials-' : ''}${Date.now()}.png`;
    a.click();
  };

  // Copy Image directly to clipboard
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

  const copyCredentialsText = () => {
    const textToCopy = `Title: ${cardTitle}\nUsername/SSID: ${cardUsername}\nPassword: ${cardPassword}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCreds(true);
    setTimeout(() => setCopiedCreds(false), 2500);
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
            { id: 'credentials', label: locale === 'km' ? 'គណនី & Password' : 'Login / Credentials', icon: KeyRound },
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
                onClick={() => setQrType(tab.id as QrType)}
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

      {/* Main Grid: Inputs on Left, Big Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Inputs & Customizations (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: Content Inputs */}
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
                    {locale === 'km' ? 'ឈ្មោះបណ្តាញ Wi-Fi (SSID)' : 'Wi-Fi Network Name (SSID)'}
                  </label>
                  <input
                    type="text"
                    value={wifiSsid}
                    onChange={(e) => {
                      setWifiSsid(e.target.value);
                      setCardUsername(e.target.value);
                    }}
                    placeholder="MyHome_WiFi"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    {locale === 'km' ? 'ពាក្យសម្ងាត់ Wi-Fi' : 'Wi-Fi Password'}
                  </label>
                  <input
                    type="text"
                    value={wifiPass}
                    onChange={(e) => {
                      setWifiPass(e.target.value);
                      setCardPassword(e.target.value);
                    }}
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
                        className={`px-3 py-1.5 rounded-lg border font-semibold cursor-pointer ${
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

            {/* Login / Credentials Mode */}
            {qrType === 'credentials' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    {locale === 'km' ? 'ឈ្មោះសេវាកម្ម / ប្រព័ន្ធ' : 'Service or System Name'}
                  </label>
                  <input
                    type="text"
                    value={credService}
                    onChange={(e) => {
                      setCredService(e.target.value);
                      setCardTitle(e.target.value);
                    }}
                    placeholder="e.g. Office Wi-Fi, Customer Portal, Admin Access"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {locale === 'km' ? 'ឈ្មោះគណនី (Username)' : 'Username / Account ID'}
                    </label>
                    <input
                      type="text"
                      value={credUsername}
                      onChange={(e) => {
                        setCredUsername(e.target.value);
                        setCardUsername(e.target.value);
                      }}
                      placeholder="admin@example.com"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {locale === 'km' ? 'ពាក្យសម្ងាត់ (Password)' : 'Password'}
                    </label>
                    <input
                      type="text"
                      value={credPassword}
                      onChange={(e) => {
                        setCredPassword(e.target.value);
                        setCardPassword(e.target.value);
                      }}
                      placeholder="P@ssword123"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
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

          {/* Card 2: Center Logo & Shape Customization (Circle / Triangle / Square) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-500" />
                <span>
                  {locale === 'km'
                    ? '២. ឡូហ្គោ ឬរូបភាពកណ្តាល QR Code (Circle / Triangle / Square)'
                    : '2. Center Logo & Image Shape'}
                </span>
              </h3>
              {logoSrc && (
                <button
                  type="button"
                  onClick={removeLogo}
                  className="text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{locale === 'km' ? 'លុបឡូហ្គោ' : 'Remove Logo'}</span>
                </button>
              )}
            </div>

            {/* Shape Selector (Circle, Triangle, Square) */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                {locale === 'km' ? 'ជ្រើសរើសរាងឡូហ្គោ (Logo Shape):' : 'Select Logo Shape:'}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'circle', label: locale === 'km' ? 'រង្វង់ (Circle)' : 'Circle', icon: Circle },
                  { id: 'triangle', label: locale === 'km' ? 'ត្រីកោណ (Triangle)' : 'Triangle', icon: Triangle },
                  { id: 'square', label: locale === 'km' ? 'ការ៉េ (Square)' : 'Rounded Square', icon: Square },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = logoShape === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLogoShape(item.id as LogoShape)}
                      className={`py-3 px-3 rounded-xl border flex flex-col items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs ring-2 ring-indigo-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Logo Presets */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                {locale === 'km' ? 'ឡូហ្គោគំរូ (Quick Presets):' : 'Logo Presets:'}
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {LOGO_PRESETS.map((preset) => {
                  const isActive = logoSrc === preset.src && preset.id !== 'none';
                  const isNone = preset.id === 'none' && !logoSrc;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setLogoSrc(preset.src);
                        setCustomLogoName('');
                      }}
                      className={`p-2.5 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        isActive || isNone
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-xl">{preset.icon}</span>
                      <span className="text-[10px] font-medium truncate w-full text-center">
                        {preset.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Logo Upload Dropzone */}
            <div className="pt-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                {locale === 'km' ? 'ឬបង្ហោះរូបភាពផ្ទាល់ខ្លួន (Upload Image/Logo):' : 'Or Upload Your Own Logo / Image:'}
              </label>
              <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-2xl p-4 text-center transition-colors bg-slate-50/50 dark:bg-slate-800/30">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/svg+xml, image/webp"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      {customLogoName ? (
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                          ✓ {customLogoName}
                        </span>
                      ) : (
                        <span>Click or Drag & Drop image here</span>
                      )}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      PNG, JPG, SVG, WebP (Square image recommended)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Size Slider (Active when logo is chosen) */}
            {logoSrc && (
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {locale === 'km' ? 'ទំហំឡូហ្គោ (Logo Scale):' : 'Logo Scale Size:'}
                  </span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {logoSizePercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min={16}
                  max={28}
                  value={logoSizePercent}
                  onChange={(e) => setLogoSizePercent(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>
                    {locale === 'km'
                      ? 'Error Correction ត្រូវបានកំណត់ដោយស្វ័យប្រវត្តិកម្រិត High (30%) ដើម្បីធានាការស្កេនបានងាយស្រួល។'
                      : 'High (30%) error correction is auto-applied to guarantee 100% reliable camera scanning.'}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Card 3: Show Username & Password Directly ON the QR Image */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-indigo-500" />
                  <span>
                    {locale === 'km'
                      ? '៣. បង្ហាញ Username & Password លើរូបភាព QR (Show on Image)'
                      : '3. Show Username & Password on QR Image'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {locale === 'km'
                    ? 'គូសព័ត៌មាន Username និង Password ផ្ទាល់លើរូបភាព QR Code សម្រាប់ងាយស្រួលព្រីន ឬចែករំលែក'
                    : 'Draws Username and Password directly onto the exported QR image canvas for instant printing or sharing'}
                </p>
              </div>

              {/* Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showCredentialsOnImage}
                  onChange={(e) => setShowCredentialsOnImage(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600" />
              </label>
            </div>

            {showCredentialsOnImage && (
              <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    {locale === 'km' ? 'ចំណងជើងកាត (Card Title):' : 'Card Header Title:'}
                  </label>
                  <input
                    type="text"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    placeholder="e.g. Wi-Fi Access, Guest Login"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      {locale === 'km' ? 'ឈ្មោះគណនី ឬ Network (SSID):' : 'Username / Network (SSID):'}
                    </label>
                    <input
                      type="text"
                      value={cardUsername}
                      onChange={(e) => setCardUsername(e.target.value)}
                      placeholder="e.g. Cafe_WiFi_5G"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {locale === 'km' ? 'ពាក្យសម្ងាត់ (Password):' : 'Password:'}
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPasswordText(!showPasswordText)}
                        className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {showPasswordText ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        <span>{showPasswordText ? 'Hide' : 'Show'}</span>
                      </button>
                    </div>
                    <input
                      type={showPasswordText ? 'text' : 'password'}
                      value={cardPassword}
                      onChange={(e) => setCardPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card 4: Colors & Error Correction */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-500" />
              <span>
                {locale === 'km' ? '៤. រចនាពណ៌ និងកម្រិត Error Correction' : '4. Colors & Themes'}
              </span>
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
            {!logoSrc && (
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
            )}
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

              <div className="flex items-center gap-2">
                {showCredentialsOnImage && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50">
                    + Credentials
                  </span>
                )}
                {logoSrc && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    {logoShape.toUpperCase()}
                  </span>
                )}
              </div>
            </div>

            {/* Live QR Image Swatch Box (Shows the exact generated image!) */}
            <div
              className="p-3 sm:p-4 rounded-2xl shadow-md inline-block max-w-full mx-auto transition-all duration-200 border border-slate-200/60 dark:border-slate-800"
              style={{ backgroundColor: qrBg }}
            >
              {qrDataUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code with Credentials"
                  className="w-64 sm:w-72 object-contain mx-auto select-none rounded-xl"
                />
              ) : (
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
              )}
            </div>

            {/* Quick Copy Credentials Helper Bar (If credentials enabled) */}
            {showCredentialsOnImage && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs flex items-center justify-between gap-2">
                <div className="text-left truncate">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">
                    {cardUsername}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px] block truncate">
                    {showPasswordText ? cardPassword : '••••••••'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyCredentialsText}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                >
                  {copiedCreds ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCreds ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            )}

            {/* Embedded Raw Payload Preview */}
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
              {/* Primary Download Button: Downloads the image exactly as shown in preview! */}
              <button
                type="button"
                onClick={downloadPng}
                className="w-full py-3.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>
                  {showCredentialsOnImage
                    ? locale === 'km'
                      ? 'ទាញយករូបភាព PNG (QR + Username & Password)'
                      : 'Download PNG (QR + Credentials)'
                    : locale === 'km'
                    ? 'ទាញយក QR Code PNG កម្រិតច្បាស់'
                    : 'Download High-Res QR PNG'}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={copyImageToClipboard}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedImage ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>
                    {copiedImage
                      ? locale === 'km'
                        ? 'បានចម្លងរូបភាព!'
                        : 'Image Copied!'
                      : locale === 'km'
                      ? 'ចម្លងរូបភាព'
                      : 'Copy Image'}
                  </span>
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
              <span>Static QR Code: Never expires, 100% private client-side processing.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
