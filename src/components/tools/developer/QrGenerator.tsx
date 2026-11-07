'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  Palette,
  Send,
  MessageSquare,
  MessageCircle,
  MapPin,
  Printer,
  Layers,
} from 'lucide-react';

type LogoShape = 'circle' | 'triangle' | 'square' | 'rounded';
type QrType =
  | 'url'
  | 'wifi'
  | 'telegram'
  | 'whatsapp'
  | 'credentials'
  | 'contact'
  | 'phone'
  | 'sms'
  | 'email'
  | 'location'
  | 'text';

type ModuleStyle = 'square' | 'rounded' | 'dots';
type EyeStyle = 'square' | 'rounded' | 'circle';
type FrameStyle = 'none' | 'scan-me-bottom' | 'scan-me-top' | 'card' | 'credentials';
type GradientDirection = 'diagonal' | 'vertical' | 'horizontal';

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
    id: 'telegram',
    label: 'Telegram',
    icon: '✈️',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23229ED9"/><path d="M22 49 L76 28 C79 27 82 30 81 33 L71 78 C70 82 66 83 63 81 L48 70 L41 77 C40 78 38 79 37 79 L38 65 L64 41 C65 40 64 39 63 40 L31 60 L20 56 C17 55 17 51 22 49 Z" fill="white"/></svg>',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: '💬',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2325D366"/><path d="M72 61 C71 61 65 58 63 57 C62 56 61 56 60 58 C59 59 57 62 56 63 C55 64 54 64 52 63 C47 61 43 57 40 52 C39 50 40 49 41 48 C42 47 43 45 44 44 C44 43 44 42 43 41 C42 40 39 33 37 30 C36 26 35 27 34 27 L31 27 C30 27 28 27 26 29 C24 31 19 36 19 46 C19 55 26 65 27 66 C28 67 40 85 60 85 C77 85 80 72 80 66 C80 64 79 63 78 62 L72 61 Z" fill="white"/></svg>',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: '📘',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%231877F2"/><path d="M57 98 V54 H71 L73 37 H57 V27 C57 22 59 19 66 19 H74 V4 C72 4 67 3 61 3 C48 3 39 11 39 25 V37 H24 V54 H39 V98 Z" fill="white"/></svg>',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: '🎵',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23010101"/><path d="M75 42 C68 42 63 37 62 30 V20 H50 V66 C50 73 45 78 38 78 C31 78 26 73 26 66 C26 59 31 54 38 54 C40 54 42 54 43 55 V42 C41 42 40 41 38 41 C24 41 13 52 13 66 C13 80 24 91 38 91 C52 91 63 80 63 66 V46 C67 49 71 51 76 52 Z" fill="white"/></svg>',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    icon: '▶️',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23FF0000"/><path d="M40 35 L68 50 L40 65 Z" fill="white"/></svg>',
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

// Draw Path Helpers for Center Logo Shapes (Pure Helpers)
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

const drawRoundedRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  fill?: string | CanvasGradient
) => {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.rect(x, y, w, h);
  }
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
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
    drawRoundedRect(ctx, cx - size / 2, cy - size / 2, size, size, 0);
  } else if (shape === 'rounded') {
    drawRoundedRect(ctx, cx - size / 2, cy - size / 2, size, size, radius);
  } else {
    drawCirclePath(ctx, cx, cy, size);
  }
};

// Helper to test if a row and col belong to the 3 corner eyes (7x7 modules)
const isEyeModule = (row: number, col: number, count: number): boolean => {
  if (row < 7 && col < 7) return true; // Top-left
  if (row < 7 && col >= count - 7) return true; // Top-right
  if (row >= count - 7 && col < 7) return true; // Bottom-left
  return false;
};

export function QrGenerator() {
  const { locale, t } = useApp();
  const [qrType, setQrType] = useState<QrType>('url');

  // Input Data States
  const [url, setUrl] = useState<string>('https://khmertools.com');
  const [text, setText] = useState<string>('KhmerTools 🇰🇭 - Fast, Free & Useful Online Utilities');
  const [wifiSsid, setWifiSsid] = useState<string>('KhmerTools_Guest');
  const [wifiPass, setWifiPass] = useState<string>('khmer123456');
  const [wifiType, setWifiType] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [wifiHidden, setWifiHidden] = useState<boolean>(false);
  const [telegramUsername, setTelegramUsername] = useState<string>('khmertools');
  const [waPhone, setWaPhone] = useState<string>('+85512345678');
  const [waText, setWaText] = useState<string>('Hello! I scanned your QR Code.');
  const [phone, setPhone] = useState<string>('+85512345678');
  const [smsPhone, setSmsPhone] = useState<string>('+85512345678');
  const [smsBody, setSmsBody] = useState<string>('Hello from KhmerTools!');
  const [emailTo, setEmailTo] = useState<string>('hello@khmertools.com');
  const [emailSubject, setEmailSubject] = useState<string>('Inquiry from KhmerTools');
  const [emailBody, setEmailBody] = useState<string>('Hello KhmerTools team,');
  const [contactName, setContactName] = useState<string>('Sokha Chan');
  const [contactPhone, setContactPhone] = useState<string>('+85512345678');
  const [contactEmail, setContactEmail] = useState<string>('sokha@example.com');
  const [contactOrg, setContactOrg] = useState<string>('KhmerTools');
  const [contactTitle, setContactTitle] = useState<string>('Founder');
  const [contactUrl, setContactUrl] = useState<string>('https://khmertools.com');
  const [locationQuery, setLocationQuery] = useState<string>('Phnom Penh, Cambodia');

  // Dedicated Login / Credentials Mode
  const [credUsername, setCredUsername] = useState<string>('admin@khmertools.com');
  const [credPassword, setCredPassword] = useState<string>('P@ssword2026!');
  const [credService, setCredService] = useState<string>('Company Wi-Fi / Portal');

  // Styling & Options
  const [moduleStyle, setModuleStyle] = useState<ModuleStyle>('square');
  const [eyeStyle, setEyeStyle] = useState<EyeStyle>('square');
  const [qrColor, setQrColor] = useState<string>('#0F172A');
  const [qrColor2, setQrColor2] = useState<string>('#4F46E5');
  const [useGradient, setUseGradient] = useState<boolean>(false);
  const [gradientDir, setGradientDir] = useState<GradientDirection>('diagonal');
  const [qrBg, setQrBg] = useState<string>('#FFFFFF');
  const [isTransparentBg, setIsTransparentBg] = useState<boolean>(false);
  const [errorCorrection, setErrorCorrection] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [qrMargin, setQrMargin] = useState<number>(1);

  // Frames & Templates
  const [frameStyle, setFrameStyle] = useState<FrameStyle>('none');
  const [frameText, setFrameText] = useState<string>('SCAN ME');
  const [frameColor, setFrameColor] = useState<string>('#4F46E5');
  const [cardTitle, setCardTitle] = useState<string>('Wi-Fi Network Access');
  const [cardUsername, setCardUsername] = useState<string>('KhmerTools_Guest');
  const [cardPassword, setCardPassword] = useState<string>('khmer123456');
  const [showPasswordText, setShowPasswordText] = useState<boolean>(true);
  const [copiedCreds, setCopiedCreds] = useState<boolean>(false);

  // Center Logo & Shape Options
  const [logoSrc, setLogoSrc] = useState<string>('');
  const [logoShape, setLogoShape] = useState<LogoShape>('circle');
  const [logoSizePercent, setLogoSizePercent] = useState<number>(22);
  const [customLogoName, setCustomLogoName] = useState<string>('');

  // Export & Preview States
  const [exportResolution, setExportResolution] = useState<number>(1200);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedImage, setCopiedImage] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Automatically sync titles and default frames when switching types
  const handleTypeChange = (newType: QrType) => {
    setQrType(newType);
    if (newType === 'wifi') {
      setFrameStyle('credentials');
      setCardTitle(locale === 'km' ? '📶 ការតភ្ជាប់បណ្តាញ Wi-Fi' : '📶 Wi-Fi Network Access');
      setCardUsername(wifiSsid);
      setCardPassword(wifiPass);
    } else if (newType === 'credentials') {
      setFrameStyle('credentials');
      setCardTitle(locale === 'km' ? '🔐 ព័ត៌មានគណនី និងពាក្យសម្ងាត់' : '🔐 Login & Account Access');
      setCardUsername(credUsername);
      setCardPassword(credPassword);
    }
  };

  // Compute Raw QR Payload
  let payload = url;
  if (qrType === 'wifi') {
    payload = `WIFI:T:${wifiType};S:${wifiSsid};P:${wifiPass};H:${wifiHidden ? 'true' : 'false'};;`;
  } else if (qrType === 'telegram') {
    const cleanUser = telegramUsername.replace(/^@/, '').trim();
    payload = cleanUser.startsWith('http') ? cleanUser : `https://t.me/${cleanUser}`;
  } else if (qrType === 'whatsapp') {
    const cleanNumber = waPhone.replace(/[^\d+]/g, '');
    payload = waText
      ? `https://wa.me/${cleanNumber}?text=${encodeURIComponent(waText)}`
      : `https://wa.me/${cleanNumber}`;
  } else if (qrType === 'credentials') {
    payload = `Service: ${credService}\nUsername: ${credUsername}\nPassword: ${credPassword}`;
  } else if (qrType === 'contact') {
    payload = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nORG:${contactOrg}\nTITLE:${contactTitle}\nTEL:${contactPhone}\nEMAIL:${contactEmail}\nURL:${contactUrl}\nEND:VCARD`;
  } else if (qrType === 'text') {
    payload = text;
  } else if (qrType === 'phone') {
    payload = `tel:${phone}`;
  } else if (qrType === 'sms') {
    payload = smsBody ? `sms:${smsPhone}?body=${encodeURIComponent(smsBody)}` : `sms:${smsPhone}`;
  } else if (qrType === 'email') {
    const params = new URLSearchParams();
    if (emailSubject) params.set('subject', emailSubject);
    if (emailBody) params.set('body', emailBody);
    const paramStr = params.toString();
    payload = `mailto:${emailTo}${paramStr ? `?${paramStr}` : ''}`;
  } else if (qrType === 'location') {
    payload = `https://maps.google.com/?q=${encodeURIComponent(locationQuery)}`;
  }

  // Render High-Quality QR Code Canvas
  const renderQrCanvas = useCallback(
    async (exportWidth = 720): Promise<HTMLCanvasElement> => {
    const isCredentials = frameStyle === 'credentials';
    const isScanMeBottom = frameStyle === 'scan-me-bottom';
    const isScanMeTop = frameStyle === 'scan-me-top';
    const isCard = frameStyle === 'card';

    const canvas = document.createElement('canvas');
    const qrPadding = Math.round(exportWidth * 0.05);

    let headerHeight = 0;
    let footerHeight = 0;

    if (isCredentials) {
      headerHeight = Math.round(exportWidth * 0.14);
      footerHeight = Math.round(exportWidth * 0.26);
    } else if (isScanMeBottom) {
      footerHeight = Math.round(exportWidth * 0.16);
    } else if (isScanMeTop) {
      headerHeight = Math.round(exportWidth * 0.14);
    } else if (isCard) {
      headerHeight = Math.round(exportWidth * 0.12);
      footerHeight = Math.round(exportWidth * 0.08);
    }

    const qrSize = exportWidth - qrPadding * 2;
    const canvasHeight = qrSize + headerHeight + footerHeight + qrPadding * 2;

    canvas.width = exportWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // 1. Canvas Background
    if (!isTransparentBg) {
      ctx.fillStyle = qrBg;
      ctx.fillRect(0, 0, exportWidth, canvasHeight);
    }

    // 2. Generate QR matrix data
    const effectiveEc = logoSrc ? 'H' : errorCorrection;
    const qrData = QRCode.create(payload || 'https://khmertools.com', {
      errorCorrectionLevel: effectiveEc,
    });
    const moduleCount = qrData.modules.size;
    const cellSize = qrSize / moduleCount;

    // Temporary canvas for custom styled QR modules
    const tempQrCanvas = document.createElement('canvas');
    tempQrCanvas.width = qrSize;
    tempQrCanvas.height = qrSize;
    const tempCtx = tempQrCanvas.getContext('2d');
    if (!tempCtx) return canvas;

    // Setup fill style (Solid or Linear Gradient)
    let fillStyle: string | CanvasGradient = qrColor;
    if (useGradient) {
      let grad: CanvasGradient;
      if (gradientDir === 'vertical') {
        grad = tempCtx.createLinearGradient(0, 0, 0, qrSize);
      } else if (gradientDir === 'horizontal') {
        grad = tempCtx.createLinearGradient(0, 0, qrSize, 0);
      } else {
        grad = tempCtx.createLinearGradient(0, 0, qrSize, qrSize);
      }
      grad.addColorStop(0, qrColor);
      grad.addColorStop(1, qrColor2);
      fillStyle = grad;
    }

    // 3. Draw Corner Eyes (Position Detection Patterns)
    const corners = [
      { r: 0, c: 0 },
      { r: 0, c: moduleCount - 7 },
      { r: moduleCount - 7, c: 0 },
    ];

    corners.forEach(({ r, c }) => {
      const ox = c * cellSize;
      const oy = r * cellSize;
      const eyeSize = 7 * cellSize;

      if (eyeStyle === 'circle') {
        const cx = ox + eyeSize / 2;
        const cy = oy + eyeSize / 2;

        // Outer circle
        tempCtx.fillStyle = fillStyle;
        tempCtx.beginPath();
        tempCtx.arc(cx, cy, 3.5 * cellSize, 0, Math.PI * 2);
        tempCtx.fill();

        // Inner hollow cutout
        if (isTransparentBg) {
          tempCtx.save();
          tempCtx.globalCompositeOperation = 'destination-out';
          tempCtx.beginPath();
          tempCtx.arc(cx, cy, 2.5 * cellSize, 0, Math.PI * 2);
          tempCtx.fill();
          tempCtx.restore();
        } else {
          tempCtx.fillStyle = qrBg;
          tempCtx.beginPath();
          tempCtx.arc(cx, cy, 2.5 * cellSize, 0, Math.PI * 2);
          tempCtx.fill();
        }

        // Center dot
        tempCtx.fillStyle = fillStyle;
        tempCtx.beginPath();
        tempCtx.arc(cx, cy, 1.5 * cellSize, 0, Math.PI * 2);
        tempCtx.fill();
      } else if (eyeStyle === 'rounded') {
        // Outer rounded rect
        drawRoundedRect(tempCtx, ox, oy, eyeSize, eyeSize, 2.4 * cellSize, fillStyle);

        // Inner hollow cutout
        if (isTransparentBg) {
          tempCtx.save();
          tempCtx.globalCompositeOperation = 'destination-out';
          drawRoundedRect(
            tempCtx,
            ox + cellSize,
            oy + cellSize,
            5 * cellSize,
            5 * cellSize,
            1.6 * cellSize,
            '#000'
          );
          tempCtx.restore();
        } else {
          drawRoundedRect(
            tempCtx,
            ox + cellSize,
            oy + cellSize,
            5 * cellSize,
            5 * cellSize,
            1.6 * cellSize,
            qrBg
          );
        }

        // Center rounded dot
        drawRoundedRect(
          tempCtx,
          ox + 2 * cellSize,
          oy + 2 * cellSize,
          3 * cellSize,
          3 * cellSize,
          0.9 * cellSize,
          fillStyle
        );
      } else {
        // Standard square eye
        tempCtx.fillStyle = fillStyle;
        tempCtx.fillRect(ox, oy, eyeSize, eyeSize);

        if (isTransparentBg) {
          tempCtx.save();
          tempCtx.globalCompositeOperation = 'destination-out';
          tempCtx.fillRect(ox + cellSize, oy + cellSize, 5 * cellSize, 5 * cellSize);
          tempCtx.restore();
        } else {
          tempCtx.fillStyle = qrBg;
          tempCtx.fillRect(ox + cellSize, oy + cellSize, 5 * cellSize, 5 * cellSize);
        }

        tempCtx.fillStyle = fillStyle;
        tempCtx.fillRect(ox + 2 * cellSize, oy + 2 * cellSize, 3 * cellSize, 3 * cellSize);
      }
    });

    // 4. Draw Data Modules (skipping the corner eyes)
    tempCtx.fillStyle = fillStyle;
    for (let r = 0; r < moduleCount; r++) {
      for (let c = 0; c < moduleCount; c++) {
        if (isEyeModule(r, c, moduleCount)) continue;

        if (qrData.modules.get(r, c)) {
          const x = c * cellSize;
          const y = r * cellSize;

          if (moduleStyle === 'dots') {
            tempCtx.beginPath();
            tempCtx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.44, 0, Math.PI * 2);
            tempCtx.fill();
          } else if (moduleStyle === 'rounded') {
            drawRoundedRect(
              tempCtx,
              x + 0.5,
              y + 0.5,
              cellSize - 1,
              cellSize - 1,
              cellSize * 0.35,
              fillStyle
            );
          } else {
            tempCtx.fillRect(x, y, cellSize, cellSize);
          }
        }
      }
    }

    // 5. Draw Center Logo (if chosen)
    if (logoSrc) {
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
        const bgPaddingSize = logoSize + Math.round(cellSize * 2);

        // Draw background patch to prevent collision with modules
        tempCtx.save();
        drawShapePath(tempCtx, logoShape, cx, cy, bgPaddingSize, 18);
        tempCtx.fillStyle = qrBg === 'transparent' ? '#FFFFFF' : qrBg;
        tempCtx.fill();
        tempCtx.lineWidth = 3;
        tempCtx.strokeStyle = qrColor + '25';
        tempCtx.stroke();
        tempCtx.restore();

        // Clip and draw image
        tempCtx.save();
        drawShapePath(tempCtx, logoShape, cx, cy, logoSize, 14);
        tempCtx.clip();
        tempCtx.drawImage(img, cx - logoSize / 2, cy - logoSize / 2, logoSize, logoSize);
        tempCtx.restore();

        // Draw border ring
        tempCtx.save();
        drawShapePath(tempCtx, logoShape, cx, cy, logoSize, 14);
        tempCtx.lineWidth = 2.5;
        tempCtx.strokeStyle = qrColor;
        tempCtx.stroke();
        tempCtx.restore();
      } catch (err) {
        console.error('Error drawing center logo: ', err);
      }
    }

    // 6. Draw Decorated Frames onto Canvas
    const qrX = qrPadding;
    const qrY = qrPadding + headerHeight;

    // A. "SCAN ME" Top Banner
    if (isScanMeTop) {
      const bannerHeight = Math.round(exportWidth * 0.1);
      const bannerY = qrPadding;
      drawRoundedRect(
        ctx,
        qrPadding,
        bannerY,
        exportWidth - qrPadding * 2,
        bannerHeight,
        16,
        frameColor
      );

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.round(exportWidth * 0.038)}px "Kantumruy Pro", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(frameText || 'SCAN WITH CAMERA', exportWidth / 2, bannerY + bannerHeight * 0.65);
    }

    // B. Card Style Header
    if (isCard) {
      ctx.fillStyle = qrColor;
      ctx.font = `bold ${Math.round(exportWidth * 0.042)}px "Kantumruy Pro", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(cardTitle || 'KhmerTools QR Code', exportWidth / 2, qrPadding + 36);

      ctx.fillStyle = qrColor + '99';
      ctx.font = `${Math.round(exportWidth * 0.024)}px sans-serif`;
      ctx.fillText('Point camera to scan instantly', exportWidth / 2, qrPadding + 62);
    }

    // C. Credentials Header
    if (isCredentials) {
      ctx.fillStyle = qrColor;
      ctx.font = `bold ${Math.round(exportWidth * 0.046)}px "Kantumruy Pro", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(cardTitle || 'Wi-Fi Network Access', exportWidth / 2, qrPadding + 44);

      ctx.fillStyle = qrColor + '99';
      ctx.font = `${Math.round(exportWidth * 0.024)}px sans-serif`;
      ctx.fillText('Scan with camera or enter credentials below', exportWidth / 2, qrPadding + 74);
    }

    // Draw the generated QR code onto the main canvas
    ctx.drawImage(tempQrCanvas, qrX, qrY, qrSize, qrSize);

    // D. "SCAN ME" Bottom Ribbon Banner
    if (isScanMeBottom) {
      const bannerHeight = Math.round(exportWidth * 0.12);
      const bannerY = qrY + qrSize + 12;
      drawRoundedRect(
        ctx,
        qrPadding,
        bannerY,
        exportWidth - qrPadding * 2,
        bannerHeight,
        18,
        frameColor
      );

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${Math.round(exportWidth * 0.042)}px "Kantumruy Pro", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(frameText || 'SCAN ME', exportWidth / 2, bannerY + bannerHeight * 0.66);
    }

    // E. Credentials Box Footer
    if (isCredentials) {
      const boxY = qrY + qrSize + 16;
      const boxWidth = exportWidth - qrPadding * 2;
      const boxHeight = footerHeight - 24;
      const boxX = qrPadding;

      // Container background
      ctx.save();
      ctx.fillStyle = qrColor + '0D';
      ctx.strokeStyle = qrColor + '30';
      ctx.lineWidth = 2;
      drawRoundedRect(ctx, boxX, boxY, boxWidth, boxHeight, 18);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Username row
      ctx.textAlign = 'left';
      ctx.fillStyle = qrColor + '99';
      ctx.font = `bold ${Math.round(exportWidth * 0.022)}px sans-serif`;
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
      ctx.font = `bold ${Math.round(exportWidth * 0.022)}px sans-serif`;
      ctx.fillText('PASSWORD:', boxX + 24, boxY + 116);

      ctx.fillStyle = qrColor;
      ctx.font = `bold ${Math.round(exportWidth * 0.034)}px monospace, sans-serif`;
      const pwdDisplay = showPasswordText ? cardPassword || '—' : '••••••••';
      ctx.fillText(pwdDisplay, boxX + 24, boxY + 146);

      // Subtle branding
      ctx.textAlign = 'center';
      ctx.fillStyle = qrColor + '55';
      ctx.font = `${Math.round(exportWidth * 0.018)}px sans-serif`;
      ctx.fillText('KhmerTools.com • Free & Private', exportWidth / 2, canvasHeight - 10);
    }

      return canvas;
    },
    [
      payload,
      moduleStyle,
      eyeStyle,
      qrColor,
      qrColor2,
      useGradient,
      gradientDir,
      qrBg,
      isTransparentBg,
      errorCorrection,
      frameStyle,
      frameText,
      frameColor,
      cardTitle,
      cardUsername,
      cardPassword,
      showPasswordText,
      logoSrc,
      logoShape,
      logoSizePercent,
      qrType,
    ]
  );

  // Re-render Live Preview when settings change
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
  }, [renderQrCanvas]);

  // Handle Logo File Upload
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

  // Download High-Res PNG
  const downloadPng = async () => {
    const canvas = await renderQrCanvas(exportResolution);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `khmertools-qr-${qrType}-${exportResolution}p-${Date.now()}.png`;
    a.click();
  };

  // Download SVG Vector (Infinite Scaling for Print)
  const downloadSvg = async () => {
    try {
      const svgString = await QRCode.toString(payload || 'https://khmertools.com', {
        type: 'svg',
        margin: qrMargin,
        color: {
          dark: qrColor,
          light: isTransparentBg ? '#00000000' : qrBg,
        },
        errorCorrectionLevel: logoSrc ? 'H' : errorCorrection,
      });

      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const urlBlob = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlBlob;
      a.download = `khmertools-qr-${qrType}-vector-${Date.now()}.svg`;
      a.click();
      URL.revokeObjectURL(urlBlob);
    } catch (err) {
      console.error('Failed to export SVG: ', err);
    }
  };

  // Download JPEG
  const downloadJpeg = async () => {
    const canvas = await renderQrCanvas(exportResolution);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/jpeg', 0.95);
    a.download = `khmertools-qr-${qrType}-${exportResolution}p-${Date.now()}.jpg`;
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

  // Print QR Code
  const printQr = () => {
    if (!qrDataUrl) return;
    const printWin = window.open('', '_blank');
    if (!printWin) return;
    printWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print QR Code - KhmerTools</title>
          <style>
            body { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; font-family: -apple-system, sans-serif; background: #fff; }
            img { max-width: 480px; width: 100%; height: auto; border-radius: 12px; }
            .title { font-size: 22px; font-weight: bold; margin-bottom: 12px; color: #0f172a; }
            .caption { font-size: 13px; color: #64748b; margin-top: 14px; }
          </style>
        </head>
        <body>
          <div class="title">${cardTitle || 'KhmerTools QR Code'}</div>
          <img src="${qrDataUrl}" onload="window.print();window.close();" />
          <div class="caption">Generated with KhmerTools.com • 100% Free & Private</div>
        </body>
      </html>
    `);
    printWin.document.close();
  };

  const copyCredentialsText = () => {
    const textToCopy = `Title: ${cardTitle}\nUsername/SSID: ${cardUsername}\nPassword: ${cardPassword}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCreds(true);
    setTimeout(() => setCopiedCreds(false), 2500);
  };

  // Curated Color Theme Presets
  const colorPresets = [
    { label: 'Classic Black', fg: '#0F172A', fg2: '#1E293B', bg: '#FFFFFF', grad: false },
    { label: 'Khmer Indigo', fg: '#3730A3', fg2: '#6366F1', bg: '#EEF2FF', grad: true },
    { label: 'Angkor Gold', fg: '#B45309', fg2: '#F59E0B', bg: '#FFFBEB', grad: true },
    { label: 'Forest Emerald', fg: '#047857', fg2: '#10B981', bg: '#ECFDF5', grad: true },
    { label: 'Crimson Krama', fg: '#991B1B', fg2: '#EF4444', bg: '#FEF2F2', grad: true },
    { label: 'Ocean Blue', fg: '#1D4ED8', fg2: '#06B6D4', bg: '#EFF6FF', grad: true },
    { label: 'Royal Violet', fg: '#6D28D9', fg2: '#EC4899', bg: '#FAF5FF', grad: true },
    { label: 'Dark Mode', fg: '#F8FAFC', fg2: '#CBD5E1', bg: '#090D16', grad: false },
  ];

  return (
    <div className="space-y-8">
      {/* Type Selector Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex-wrap gap-1 max-w-full justify-center">
          {[
            { id: 'url', label: 'Website / URL', icon: Link2 },
            { id: 'wifi', label: 'Wi-Fi Network', icon: Wifi },
            { id: 'telegram', label: 'Telegram', icon: Send },
            { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
            { id: 'credentials', label: locale === 'km' ? 'គណនី & Password' : 'Login / Credentials', icon: KeyRound },
            { id: 'contact', label: locale === 'km' ? 'ទំនាក់ទំនង vCard' : 'vCard Contact', icon: User },
            { id: 'phone', label: locale === 'km' ? 'ទូរស័ព្ទ' : 'Phone Call', icon: Phone },
            { id: 'sms', label: 'SMS Message', icon: MessageSquare },
            { id: 'email', label: 'Email', icon: Mail },
            { id: 'location', label: locale === 'km' ? 'ទីតាំង / Maps' : 'Location / Maps', icon: MapPin },
            { id: 'text', label: locale === 'km' ? 'អត្ថបទ' : 'Plain Text', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = qrType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTypeChange(tab.id as QrType)}
                className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Grid: Controls on Left, Sticky Live Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Full Configuration Options (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: Content Inputs */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>
                {locale === 'km' ? '១. បញ្ចូលព័ត៌មាន QR Code' : '1. Enter QR Content & Data'}
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

            {/* Telegram */}
            {qrType === 'telegram' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Telegram Username or Link
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm">
                      t.me/
                    </span>
                    <input
                      type="text"
                      value={telegramUsername.replace(/^https?:\/\/t\.me\//, '').replace(/^@/, '')}
                      onChange={(e) => setTelegramUsername(e.target.value)}
                      placeholder="mychannel or username"
                      className="w-full text-sm pl-16 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Scanners will open Telegram directly to your profile, group, or channel.
                  </p>
                </div>
              </div>
            )}

            {/* WhatsApp */}
            {qrType === 'whatsapp' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    WhatsApp Phone Number (with Country Code)
                  </label>
                  <input
                    type="tel"
                    value={waPhone}
                    onChange={(e) => setWaPhone(e.target.value)}
                    placeholder="+85512345678"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Optional Pre-filled Message
                  </label>
                  <input
                    type="text"
                    value={waText}
                    onChange={(e) => setWaText(e.target.value)}
                    placeholder="Hello! I scanned your QR code."
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
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

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                      Security Type
                    </label>
                    <div className="flex gap-1.5 text-xs">
                      {['WPA', 'WEP', 'nopass'].map((tType) => (
                        <button
                          key={tType}
                          type="button"
                          onClick={() => setWifiType(tType as 'WPA' | 'WEP' | 'nopass')}
                          className={`px-3 py-1.5 rounded-lg border font-semibold cursor-pointer ${
                            wifiType === tType
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          {tType === 'nopass' ? 'Open / No Password' : tType}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer pt-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={wifiHidden}
                      onChange={(e) => setWifiHidden(e.target.checked)}
                      className="rounded accent-indigo-600"
                    />
                    <span>Hidden SSID</span>
                  </label>
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

            {/* Contact vCard */}
            {qrType === 'contact' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
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
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={contactOrg}
                      onChange={(e) => setContactOrg(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={contactTitle}
                      onChange={(e) => setContactTitle(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Website URL
                    </label>
                    <input
                      type="url"
                      value={contactUrl}
                      onChange={(e) => setContactUrl(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
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

            {/* SMS */}
            {qrType === 'sms' && (
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={smsPhone}
                    onChange={(e) => setSmsPhone(e.target.value)}
                    placeholder="+85512345678"
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Message Body
                  </label>
                  <textarea
                    rows={2}
                    value={smsBody}
                    onChange={(e) => setSmsBody(e.target.value)}
                    placeholder="Hello! Can we talk?"
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            {qrType === 'email' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      value={emailTo}
                      onChange={(e) => setEmailTo(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
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
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Email Body
                  </label>
                  <textarea
                    rows={2}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Location */}
            {qrType === 'location' && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Location or Google Maps Coordinates
                </label>
                <input
                  type="text"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  placeholder="e.g. 11.5564, 104.9282 or Phnom Penh"
                  className="w-full text-base px-4 py-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                />
              </div>
            )}
          </div>

          {/* Card 2: Frames & Presentation Styles */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>
                {locale === 'km' ? '២. ស៊ុម និងគំរូតាំង (Frame & Templates)' : '2. Frame & Banner Style'}
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { id: 'none', label: 'No Frame', desc: 'Raw QR' },
                { id: 'scan-me-bottom', label: 'Bottom Ribbon', desc: '"SCAN ME"' },
                { id: 'scan-me-top', label: 'Top Banner', desc: 'Header Badge' },
                { id: 'card', label: 'Card Badge', desc: 'Title & Subtitle' },
                { id: 'credentials', label: 'Credentials Card', desc: 'ID + Password' },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFrameStyle(f.id as FrameStyle)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col justify-between ${
                    frameStyle === f.id
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs ring-2 ring-indigo-500/20'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block">{f.label}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{f.desc}</span>
                </button>
              ))}
            </div>

            {/* Frame Customization Controls */}
            {(frameStyle === 'scan-me-bottom' || frameStyle === 'scan-me-top') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Frame Banner Text:
                  </label>
                  <input
                    type="text"
                    value={frameText}
                    onChange={(e) => setFrameText(e.target.value)}
                    placeholder="SCAN ME"
                    className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Frame Color:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={frameColor}
                      onChange={(e) => setFrameColor(e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                    />
                    <span className="font-mono text-xs font-bold">{frameColor.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            )}

            {frameStyle === 'card' && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Card Title Header:
                  </label>
                  <input
                    type="text"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    placeholder="e.g. My Website, Special Promo"
                    className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
              </div>
            )}

            {frameStyle === 'credentials' && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Card Title Header:
                  </label>
                  <input
                    type="text"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    placeholder="Wi-Fi Access, Guest Login"
                    className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Username / SSID:
                    </label>
                    <input
                      type="text"
                      value={cardUsername}
                      onChange={(e) => setCardUsername(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Password:
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowPasswordText(!showPasswordText)}
                        className="text-[10px] text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {showPasswordText ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        <span>{showPasswordText ? 'Hide' : 'Show'}</span>
                      </button>
                    </div>
                    <input
                      type={showPasswordText ? 'text' : 'password'}
                      value={cardPassword}
                      onChange={(e) => setCardPassword(e.target.value)}
                      className="w-full text-sm px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl font-mono"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Card 3: Colors, Gradients & Transparent Background */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Palette className="w-4 h-4 text-indigo-500" />
              <span>
                {locale === 'km' ? '៣. ពណ៌ Gradients និងផ្ទៃខាងក្រោយ' : '3. Colors, Gradients & Background'}
              </span>
            </h3>

            {/* Quick Themes */}
            <div>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Color Presets
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {colorPresets.map((p) => (
                  <button
                    key={p.label}
                    type="button"
                    onClick={() => {
                      setQrColor(p.fg);
                      setQrColor2(p.fg2);
                      setQrBg(p.bg);
                      setUseGradient(p.grad);
                    }}
                    className="flex items-center gap-2.5 p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-colors cursor-pointer text-left"
                  >
                    <div
                      className="w-7 h-7 rounded-lg shadow-2xs border flex items-center justify-center text-[10px] font-bold shrink-0"
                      style={{
                        background: p.grad
                          ? `linear-gradient(135deg, ${p.fg}, ${p.fg2})`
                          : p.fg,
                        color: p.bg,
                      }}
                    >
                      QR
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Gradient Mode Toggle */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  Enable Linear Gradient
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Blends two colors across the QR modules
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={useGradient}
                  onChange={(e) => setUseGradient(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600" />
              </label>
            </div>

            {/* Custom Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {useGradient ? 'Color 1 (Start):' : 'QR Color:'}
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

              {useGradient ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Color 2 (End):
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={qrColor2}
                      onChange={(e) => setQrColor2(e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                    />
                    <span className="font-mono text-xs font-bold">{qrColor2.toUpperCase()}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Background Color:
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      disabled={isTransparentBg}
                      value={qrBg}
                      onChange={(e) => setQrBg(e.target.value)}
                      className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 disabled:opacity-30"
                    />
                    <span className="font-mono text-xs font-bold">
                      {isTransparentBg ? 'TRANSPARENT' : qrBg.toUpperCase()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Gradient Direction Selector */}
            {useGradient && (
              <div className="pt-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Gradient Direction:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'diagonal', label: 'Diagonal ↘' },
                    { id: 'vertical', label: 'Vertical ↓' },
                    { id: 'horizontal', label: 'Horizontal →' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setGradientDir(d.id as GradientDirection)}
                      className={`py-1.5 px-2 rounded-lg border text-xs font-semibold cursor-pointer ${
                        gradientDir === d.id
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Transparent Background Option */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  Transparent Background
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Export PNG with transparent backdrop for posters & designers
                </span>
              </div>
              <input
                type="checkbox"
                checked={isTransparentBg}
                onChange={(e) => setIsTransparentBg(e.target.checked)}
                className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Card 4: Shapes, Modules & Corners Pattern */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-500" />
              <span>
                {locale === 'km' ? '៤. ទម្រង់ចំនុច និងជ្រុងកែង (Patterns & Corners)' : '4. Modules Pattern & Corner Eye Styles'}
              </span>
            </h3>

            {/* Module Dot Styles */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Module Body Pattern:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'square', label: 'Classic Square', desc: 'Standard sharp' },
                  { id: 'rounded', label: 'Rounded Rect', desc: 'Smooth modern' },
                  { id: 'dots', label: 'Circles (Dots)', desc: 'Organic dots' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setModuleStyle(item.id as ModuleStyle)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      moduleStyle === item.id
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs ring-2 ring-indigo-500/20'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.label}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Eye Style Corners */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Corner Eye Marker Style:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'square', label: 'Square Eyes', desc: 'Default corners' },
                  { id: 'rounded', label: 'Rounded Corners', desc: 'Soft curves' },
                  { id: 'circle', label: 'Circular Eyes', desc: 'Bullseye circles' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEyeStyle(item.id as EyeStyle)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      eyeStyle === item.id
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs ring-2 ring-indigo-500/20'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.label}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Error Correction & Margins */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Error Correction Level:
                  </label>
                  {logoSrc && (
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                      Auto-locked to High (30%) for Logo
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'L', label: 'L (7%)' },
                    { id: 'M', label: 'M (15%)' },
                    { id: 'Q', label: 'Q (25%)' },
                    { id: 'H', label: 'H (30%)' },
                  ].map((ec) => (
                    <button
                      key={ec.id}
                      type="button"
                      disabled={Boolean(logoSrc)}
                      onClick={() => setErrorCorrection(ec.id as 'L' | 'M' | 'Q' | 'H')}
                      className={`py-1.5 px-2 rounded-lg border text-xs font-semibold cursor-pointer disabled:opacity-50 ${
                        (logoSrc ? 'H' : errorCorrection) === ec.id
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                          : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {ec.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Margin / Quiet Zone:
                  </label>
                  <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {qrMargin} modules
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={4}
                  value={qrMargin}
                  onChange={(e) => setQrMargin(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Card 5: Center Logo & Shape Customization */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-500" />
                <span>
                  {locale === 'km' ? '៥. ឡូហ្គោ ឬរូបភាពកណ្តាល QR' : '5. Center Logo & Branding'}
                </span>
              </h3>
              {logoSrc && (
                <button
                  type="button"
                  onClick={removeLogo}
                  className="text-xs text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{locale === 'km' ? 'លុបឡូហ្គោ' : 'Remove Logo'}</span>
                </button>
              )}
            </div>

            {/* Shape Selector */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Logo Shape Frame:
              </label>
              <div className="grid grid-cols-4 gap-2.5">
                {[
                  { id: 'circle', label: 'Circle', icon: Circle },
                  { id: 'rounded', label: 'Rounded', icon: Square },
                  { id: 'square', label: 'Square', icon: Square },
                  { id: 'triangle', label: 'Triangle', icon: Triangle },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = logoShape === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setLogoShape(item.id as LogoShape)}
                      className={`py-2.5 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs ring-2 ring-indigo-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Logo Presets */}
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Quick Logo Presets:
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
                      className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                        isActive || isNone
                          ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-lg">{preset.icon}</span>
                      <span className="text-[10px] font-medium truncate w-full text-center">
                        {preset.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Logo Upload */}
            <div className="pt-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                Or Upload Custom Brand Logo:
              </label>
              <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-indigo-500 rounded-2xl p-4 text-center transition-colors bg-slate-50/50 dark:bg-slate-800/30">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/svg+xml, image/webp"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Upload className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {customLogoName ? `✓ ${customLogoName}` : 'Click or Drag & Drop image here'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    PNG, JPG, SVG, WebP (Square image recommended)
                  </span>
                </div>
              </div>
            </div>

            {/* Logo Scale Slider */}
            {logoSrc && (
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    Logo Scale Size:
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
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Super Prominent Live Preview & Action Hub (5 cols) */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 shadow-xs text-center space-y-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                <QrCode className="w-3.5 h-3.5" />
                <span>{locale === 'km' ? 'ការបង្ហាញរូបភាពផ្ទាល់' : 'Live Preview'}</span>
              </span>

              <div className="flex items-center gap-1.5">
                {useGradient && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                    Gradient
                  </span>
                )}
                {isTransparentBg && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                    Alpha PNG
                  </span>
                )}
              </div>
            </div>

            {/* Live QR Image Display Swatch */}
            <div
              className={`p-3 sm:p-4 rounded-2xl shadow-md inline-block max-w-full mx-auto transition-all duration-200 border border-slate-200/60 dark:border-slate-800 ${
                isTransparentBg
                  ? 'bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%),linear-gradient(-45deg,#f1f5f9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f1f5f9_75%),linear-gradient(-45deg,transparent_75%,#f1f5f9_75%)] bg-[size:16px_16px] dark:bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%),linear-gradient(-45deg,#1e293b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1e293b_75%),linear-gradient(-45deg,transparent_75%,#1e293b_75%)]'
                  : ''
              }`}
              style={{ backgroundColor: isTransparentBg ? undefined : qrBg }}
            >
              {qrDataUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={qrDataUrl}
                  alt="Generated QR Code Studio"
                  className="w-64 sm:w-72 object-contain mx-auto select-none rounded-xl"
                />
              ) : (
                <div className="w-64 h-64 sm:w-72 sm:h-72 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse" />
              )}
            </div>

            {/* Quick Copy Helper Bar for Credentials */}
            {frameStyle === 'credentials' && (
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

            {/* Export Resolution Picker */}
            <div className="flex items-center justify-between px-1 text-xs">
              <span className="font-bold text-slate-600 dark:text-slate-400">
                Resolution Quality:
              </span>
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono">
                {[
                  { res: 720, label: '720p' },
                  { res: 1200, label: 'HD 1200' },
                  { res: 2400, label: '4K Print' },
                ].map((item) => (
                  <button
                    key={item.res}
                    type="button"
                    onClick={() => setExportResolution(item.res)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      exportResolution === item.res
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons Hub */}
            <div className="space-y-2.5">
              {/* Primary Download Button */}
              <button
                type="button"
                onClick={downloadPng}
                className="w-full py-3.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>
                  {locale === 'km' ? 'ទាញយក PNG កម្រិតច្បាស់' : `Download High-Res PNG (${exportResolution}px)`}
                </span>
              </button>

              {/* Secondary Export Formats Grid */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={downloadSvg}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  title="Download SVG Vector for Illustrator / Print"
                >
                  <Download className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Download SVG</span>
                </button>

                <button
                  type="button"
                  onClick={downloadJpeg}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download JPG</span>
                </button>
              </div>

              {/* Copy Image & Print Row */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={copyImageToClipboard}
                  className="py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  title="Copy Image Directly to Clipboard"
                >
                  {copiedImage ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedImage ? 'Copied' : 'Copy Img'}</span>
                </button>

                <button
                  type="button"
                  onClick={printQr}
                  className="py-2.5 px-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  title="Print Directly"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <CopyButton
                  textToCopy={payload}
                  label={locale === 'km' ? 'ចម្លងតំណ' : 'Copy Text'}
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
