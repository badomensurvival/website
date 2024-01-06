import toast from 'react-hot-toast';

export function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(' ');
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  toast('Copiado!', {
    icon: '📋',
  });
}

export function formatTime(currentTime: number): string {
  const hours = Math.floor(currentTime / 3600);
  const minutes = Math.floor((currentTime % 3600) / 60);
  const seconds = Math.floor(currentTime % 60);
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  if (hours > 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export function generateID(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function objectFormData(obj: any): FormData {
  const formData = new FormData();

  Object.keys(obj).forEach((key) => {
    formData.append(key, obj[key]);
  });

  return formData;
}

export function clearDisplayName(displayName: string): string {
  return displayName.replace(/§./g, '');
}
