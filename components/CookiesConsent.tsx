"use client";
import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

const BRAND = {
    primary: '#8e082e',
    text: '#101113',
    bg: '#fff7fa',
    white: '#ffffff',
    border: '#efd3dc',
};

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [cookies, setCookies] = useState({
        essential: true,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage?.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        } else {
            try {
                setCookies(JSON.parse(consent));
            } catch (e) {
                setShowBanner(true);
            }
        }
    }, []);

    const handleAccept = () => {
        const allConsent = { essential: true, analytics: true, marketing: true };
        localStorage?.setItem('cookieConsent', JSON.stringify(allConsent));
        setCookies(allConsent);
        setShowBanner(false);
    };

    const handleDecline = () => {
        const minimalConsent = { essential: true, analytics: false, marketing: false };
        localStorage?.setItem('cookieConsent', JSON.stringify(minimalConsent));
        setCookies(minimalConsent);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: BRAND.primary }}>
            <div className="w-full md:max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-6">
                {/* Content */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                    <Shield size={24} style={{ color: BRAND.white, flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm" style={{ color: BRAND.white }}>
                            We use cookies to enhance your audit experience.{' '}
                            <a href="/privacy-policy" className="underline hover:opacity-80" style={{ color: BRAND.white }}>
                                Privacy Policy
                            </a>
                            {/* {' '}• {' '}
              <a href="/cookie-policy" className="underline hover:opacity-80" style={{ color: BRAND.white }}>
                Cookie Policy
              </a> */}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-1.5 rounded text-sm font-semibold transition-opacity hover:opacity-80"
                        style={{
                            backgroundColor: 'black',
                            color: BRAND.white,
                            border: `1.5px solid ${BRAND.text}`
                        }}
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-1.5 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: BRAND.primary, border: `1.5px solid ${BRAND.white}` }}
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="p-1 transition-opacity hover:opacity-60"
                        style={{ color: BRAND.white }}
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}