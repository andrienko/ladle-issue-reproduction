# Ladle tailwind 4 issue

(as reported in https://github.com/tajo/ladle/issues/603)

I am using tw4 in my vite project, with vite plugin. In the project itself it works as expected. In
ladle it used to work before, but all of a sudden it stopped (still works in main app tho) after I
updated my deps - tailwind just does not generate the styles needed by components, but generates
ones used by ladle (added via `.ladle/components.tsx`.

There is nothing specific about ladle's config, it uses the same configs and roughly same styles as
the main app.

Not sure if it is a ladle issue - or rather a tailwind issue, but as main app works and ladle
doesn't - I suppose there is something specific either with ladle or how I am using it.

**Reverting `tailwindcss` and `@tailwindcss/vite` from `4.0.8` back to `4.0.6` and locking versions
helps.**

Reproduces on windows 11 / macos ventura / arch 2025.02.01, and in latest chrome/firefox - therefore
I doubt the environment is relevant

## Steps to reproduce

- `pnpm install` everything. `npm install` might work as well...
(make sure versions 4.0.6 are installed)
- Run `pnpm dev` to see the "main app" working with TW just fine
- Run `pnpm ladle` to see the ladle working with TW just fine
- Run `pnpm update` to update `tailwindcss` and `@tailwindcss/vite` to latest versions (which is
  4.0.8) at this moment.
- Run `pnpm dev` to see "main app" still working with TW just fine
- Run `pnpm ladle` to see styles disappeared in ladle.
