# Changelog

Every change bumps `version` in `package.json` and adds an entry here, newest first. The version shows in the site footer and links to the changelog page.

- **Major**: breaking changes to URLs.
- **Minor**: new features and visible behavior changes.
- **Patch**: fixes, refactors, docs and tooling.

Visible changes also get a picture on the changelog page: add the version to `previews` in `src/components/changelog/previews.tsx`.

## [0.3.0] - 2026-11-18

### Added

- A changelog page at /changelog, opened from the version number in the footer.
- The site is available in French, with a language menu in the header (in the footer on phones).

### Changed

- The header and footer match the other puuid.com sites: the site's mark and name up top, and the copyright, a link to the source code and the version at the bottom.
- The background grid behind the site list is gone.
- The theme follows your system setting before the page first paints, so dark mode no longer flashes light.

## [0.2.0] - 2026-11-18

### Changed

- Coding agent instructions moved out of this repo into the shared workspace instructions.

## [0.1.0] - 2026-11-18

### Added

- url.puuid.com, a URL decoder, is listed.
- Sites with a public repo link to their source code.

### Changed

- The XML editor is now listed as editor.puuid.com and handles XML, JSON, TXT, SQL and ZPL.
