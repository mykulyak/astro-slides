/**
 * Defines possible slide layouts.
 *
 * Slide laid out using CSS grid. Possible values are:
 *
 * - `"1"` - 1x1 grid, items are centered in both directions
 * - `"1x1"` - 1x1 grid
 * - `"1x2"` - 1x2 grid with equal columns and rows
 * - `"1x2asym"` - 1x2 grid with 60% and 40% row heights
 * - `"2x2"` - 2x2 grid with equal columns and rows
 * - `"3x3"` - 3x3 grid with equal columns and rows
 * - `"3x4"` - 3x4 grid with equal columns and rows
 * - `"4x4"` - 4x4 grid with equal columns and rows
 * - `"5x4"` - 5x4 grid with equal columns and rows
 * - `"5x5"` - 5x5 grid with equal columns and rows
 * - `"6x6"` - 6x6 grid with equal columns and rows
 * - `"h+1x1"` - header and 1-column content. Content takes free space, the header takes minimum space
 * - `"h+2x1"` - header and 2-column content. Content takes free space, the header takes minimum space
 * - `"h+2x1al"` - header and 2-column content. Content takes free space, the header
 *      takes minimum space. The right column is twice as wide as the left one.
 * - `"h+2x1ar"` - header and 2-column content. Content takes free space, the header
 *      takes minimum space. The left column is twice as wide as the right one.
 * - `"h+3x1"` - header and 3-column content. Content takes free space, the header takes minimum space
 * - `"h+4x1"` - header and 4-column content. Content takes free space, the header takes minimum space
 * - `"h+5x1"` - header and 5-column content. Content takes free space, the header takes minimum space
 * - `"h+5x3"` - header and 5x3 content. Content takes free space, the header takes
 *      minimum space (this is much like HP presentation template)
 * - `"fib4"` - 4x4 Fibonacci grid
 * - `"fib5"` - 5x5 Fibonacci grid
 *
 * FIXME more semantic, less cryptic names
 */
export type SlideLayout =
  | "1"
  | "1x1"
  | "1x2"
  | "1x2asym"
  | "2x2"
  | "3x3"
  | "3x4"
  | "4x4"
  | "5x4"
  | "5x5"
  | "6x6"
  | "h+1x1"
  | "h+1x1l"
  | "h+1x1r"
  | "h+2x1"
  | "h+2x1al"
  | "h+2x1ar"
  | "h+3x1"
  | "h+4x1"
  | "h+5x1"
  | "h+5x3"
  | "fib4"
  | "fib5";

/**
 * Defines possible grid spacing.
 *
 * Possible values are:
 *
 * - `"60x20"` - 60px column, 20px row
 * - `"90x20"` - 90px column, 20px row
 * - `"50x50"` - 50px column, 50px row
 * - `"75x25"` - 75px column, 25px row
 */
export type SlideSpacing = "60x20" | "90x20" | "50x50" | "75x25";
