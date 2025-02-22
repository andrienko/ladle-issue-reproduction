# Ladle tailwind 4 issue

I am using tw4 in my vite project, with vite plugin. In the project itself it works as expected. In ladle it used to work before, but all of a sudden it stopped (still works in main app tho). There is nothing specific in ladle's config, it uses the same configs and styles as the main app.

Not sure if it is a ladle issue - or rather a tailwind issue, but as it works with main app - I suppose there is something specific at work with ladle.

Tailwind is working fine in `ladle-styles.css`, but does not in components inside of ladle (as well as in stories) - the CSS is simply not generated for the classes.

**Reverting `tailwindcss` and `@tailwindcss/vite` from `4.0.8` back to `4.0.6` helps.**

OS/browsers are irrelevant (reproduces on windows/macos/linux, and in chrome/firefox as well)

## Steps to reproduce

- `pnpm install` everything. `npm install` might work as well...
- Run `pnpm dev` to see the "main app" working with TW just fine
- Run `pnpm ladle` to see the ladle working with TW just fine
- Run `pnpm update` to update `tailwindcss` and `@tailwindcss/vite` to latest
  versions (which is 4.0.8) at this moment.
- Run `pnpm dev` to see "main app" still working with TW just fine
- Run `pnpm ladle` to see styles disappeared in ladle.
