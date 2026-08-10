import { ImageResponse } from 'next/og'

export const alt = 'AI Confidence — Future-proof your business through confident AI adoption.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#111111',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Subtle top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '32px 56px',
            marginBottom: '52px',
          }}
        >
          <span
            style={{
              fontFamily: 'serif',
              fontWeight: 700,
              fontSize: '128px',
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-3px',
            }}
          >
            AI
          </span>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 300,
              fontSize: '17px',
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              marginTop: '10px',
            }}
          >
            CONFIDENCE
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 300,
            fontSize: '26px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.02em',
            textAlign: 'center',
            maxWidth: '680px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Future-proof your business through confident AI adoption.
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontFamily: 'sans-serif',
            fontWeight: 300,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.28)',
            letterSpacing: '0.1em',
            display: 'flex',
          }}
        >
          aiconfidence.co
        </div>
      </div>
    ),
    size
  )
}
