import Script from 'next/script';

// Renders nothing until Sonny's own Tawk.to Property ID / Widget ID are set — see .env.example.
const PROPERTY_ID = process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID;
const WIDGET_ID = process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID;

export default function TawkToWidget() {
  if (!PROPERTY_ID || !WIDGET_ID) return null;

  return (
    <Script
      src={`https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
}
