import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function hexToRgb(hex: string) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
}

export function hexToHsl(hex: string): [number, number, number] {
    // Remove the leading hash symbol if it exists
    hex = hex.replace(/^#/, '');

    // Parse the r, g, b values
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    // Find the min and max values of r, g and b
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: number, s: number
    const l: number = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: h = 0;
        }

        h *= 60;
    }

    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}


export function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r: number, g: number, b: number;

    if (0 <= h && h < 60) {
        r = c, g = x, b = 0;
    } else if (60 <= h && h < 120) {
        r = x, g = c, b = 0;
    } else if (120 <= h && h < 180) {
        r = 0, g = c, b = x;
    } else if (180 <= h && h < 240) {
        r = 0, g = x, b = c;
    } else if (240 <= h && h < 300) {
        r = x, g = 0, b = c;
    } else if (300 <= h && h < 360) {
        r = c, g = 0, b = x;
    } else {
        r = 0, g = 0, b = 0;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${(r.toString(16).padStart(2, '0'))}${(g.toString(16).padStart(2, '0'))}${(b.toString(16).padStart(2, '0'))}`;
}
