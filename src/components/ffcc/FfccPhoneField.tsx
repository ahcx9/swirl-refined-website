import React from 'react';

/**
 * Lightweight phone field for /ffcc — a dial-code select plus a tel input.
 * Replaces the heavy phone-metadata library so the route ships far less JS
 * while keeping +966 Saudi Arabia as the default and E.164 output.
 */
export const COUNTRY_CODES = [
  { code: 'SA', dial: '+966', label: 'Saudi Arabia', national: 9 },
  { code: 'AE', dial: '+971', label: 'United Arab Emirates', national: 9 },
  { code: 'KW', dial: '+965', label: 'Kuwait', national: 8 },
  { code: 'QA', dial: '+974', label: 'Qatar', national: 8 },
  { code: 'BH', dial: '+973', label: 'Bahrain', national: 8 },
  { code: 'OM', dial: '+968', label: 'Oman', national: 8 },
  { code: 'EG', dial: '+20', label: 'Egypt', national: 10 },
  { code: 'JO', dial: '+962', label: 'Jordan', national: 9 },
  { code: 'IN', dial: '+91', label: 'India', national: 10 },
  { code: 'PK', dial: '+92', label: 'Pakistan', national: 10 },
  { code: 'GB', dial: '+44', label: 'United Kingdom', national: 10 },
  { code: 'US', dial: '+1', label: 'United States', national: 10 },
];

export const toE164 = (dial: string, national: string) => `${dial}${national.replace(/\D/g, '')}`;

/** Accepts 6–15 national digits — enough to block typos without a metadata bundle. */
export const isValidLocalNumber = (national: string) => {
  const digits = national.replace(/\D/g, '');
  return digits.length >= 6 && digits.length <= 15;
};

interface Props {
  dial: string;
  onDialChange: (dial: string) => void;
  value: string;
  onValueChange: (value: string) => void;
  invalid?: boolean;
  describedBy?: string;
  onFocus?: () => void;
}

const FfccPhoneField: React.FC<Props> = ({
  dial, onDialChange, value, onValueChange, invalid, describedBy, onFocus,
}) => (
  <div
    className={`flex h-12 items-center gap-1 rounded-[14px] border bg-white pl-2 pr-3 transition-all duration-200 focus-within:ring-4 ${
      invalid
        ? 'border-destructive focus-within:ring-destructive/15'
        : 'border-border hover:border-primary/40 focus-within:border-primary focus-within:ring-primary/15'
    }`}
  >
    <label htmlFor="ffcc-dial" className="sr-only">Country dial code</label>
    <select
      id="ffcc-dial"
      value={dial}
      onChange={(e) => onDialChange(e.target.value)}
      className="h-9 rounded-[10px] bg-transparent px-2 text-[14px] font-semibold text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      {COUNTRY_CODES.map((c) => (
        <option key={c.code} value={c.dial}>
          {c.dial} {c.code}
        </option>
      ))}
    </select>
    <span aria-hidden="true" className="h-6 w-px bg-border" />
    <input
      id="ffcc-phone"
      name="phone"
      type="tel"
      inputMode="tel"
      autoComplete="tel-national"
      required
      placeholder="5X XXX XXXX"
      value={value}
      onFocus={onFocus}
      onChange={(e) => onValueChange(e.target.value)}
      aria-invalid={!!invalid}
      aria-describedby={describedBy}
      className="h-full w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground/60"
    />
  </div>
);

export default FfccPhoneField;
