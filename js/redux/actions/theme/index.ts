export const THEME_CHANGE = 'THEME_CHANGE';

export function onThemeChange(theme: String) {
  return {type: THEME_CHANGE, theme: theme};
}
