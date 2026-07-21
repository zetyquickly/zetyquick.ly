# Blog conventions

## Slug
Kebab-case, no dates in the filename, descriptive. Once pushed, it's frozen forever; the file name is the URL.

## Files
Post at `app/blog/posts/<slug>.mdx`, assets at `public/blog/<slug>/`. One folder per post, always, even for a single image. Deleting a post means deleting exactly two paths.

## Images
WebP for anything screenshot- or diagram-shaped, JPG for photos already under ~600KB. Max 1600px wide. Never commit an original alongside its converted version. Descriptive filenames (`ghosting_taa`, not `screenshot_6`) — you'll thank yourself when editing a year-old post.

## Frontmatter
Fixed set, in fixed order: `title`, `publishedAt`, `summary`, `coverImage?`, `coverAlt?`, `tags?`. New fields are optional with a fallback, or you backfill every existing post in the same commit. No exceptions; that's the rule that keeps old posts alive.

## Body
No H1 (the template renders the title). Start at H2. Every image gets alt text. Absolute paths from `/blog/<slug>/…`.

## Before pushing
`npm run build` locally, open the post, click every link.

## Future ideas (premature today)
- Zod validation of frontmatter at build time
- A kitchen-sink MDX file exercising every supported construct, kept unpublished, opened after any CSS or plugin change
