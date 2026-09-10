import { ImageResponse } from 'next/og';

export const alt = 'KhmerTools 🇰🇭 | Free Online Utilities for Cambodia & Developers';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '40px 60px',
          position: 'relative',
        }}
      >
        {/* Glow accent */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(0,0,0,0) 70%)',
            top: '15px',
            left: '300px',
          }}
        />

        {/* Brand & Flag Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 24px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '28px',
            fontSize: '22px',
            fontWeight: 600,
            color: '#e0e7ff',
          }}
        >
          <span>🇰🇭</span>
          <span>គេហទំព័រឧបករណ៍អនឡាញឥតគិតថ្លៃ</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            letterSpacing: '-1px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <span>KhmerTools</span>
          <span style={{ color: '#818cf8' }}>🇰🇭</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            marginBottom: '36px',
          }}
        >
          Free, Fast & 100% Client-Side Online Utilities for Cambodians & Developers
        </div>

        {/* Feature Pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            'QR Code Generator',
            'Color Converter',
            'Khmer Number Converter',
            'Buddhist Era Date',
            'Loan & Age Calculator',
            'JSON Formatter',
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                color: '#c7d2fe',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom footer note */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '16px',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>🔒 100% Private</span>
          <span>•</span>
          <span>⚡ Zero Server Lag</span>
          <span>•</span>
          <span>🌐 khmer-tools-self.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
