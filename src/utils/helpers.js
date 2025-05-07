/**
 * Format date to readable string
 * @param {Date|string} date - Date object or date string
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  };
  return new Intl.DateTimeFormat('en-IN', defaultOptions).format(new Date(date));
};

/**
 * Format currency (INR)
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Calculate GST
 * @param {number} amount - Base amount
 * @param {number} rate - GST rate (default: 18%)
 * @returns {Object} GST breakdown
 */
export const calculateGST = (amount, rate = 18) => {
  const baseAmount = amount / (1 + rate / 100);
  const gstAmount = amount - baseAmount;
  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  return {
    baseAmount: Math.round(baseAmount),
    cgst: Math.round(cgst),
    sgst: Math.round(sgst),
    totalGst: Math.round(gstAmount),
    totalAmount: Math.round(amount)
  };
};

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text || text.length <= length) return text;
  return text.slice(0, length) + '...';
};

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} Initials
 */
export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

/**
 * Generate a random color based on a string
 * @param {string} str - Input string
 * @returns {string} Hex color code
 */
export const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

/**
 * Combines multiple class names into a single string, filtering out falsy values
 * @param {string[]} classes - Array of class names
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}