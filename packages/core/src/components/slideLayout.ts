/**
 * Defines possible slide layouts.
 *
 * Slide laid out using CSS grid. Possible values are:
 *
 * - `"1"` - 1x1 grid, items are centered in both directions
 * - `"2x2"` - 2x2 grid with equal columns and rows
 * - `"3x3"` - 3x3 grid with equal columns and rows
 * - `"3x4"` - 3x4 grid with equal columns and rows
 * - `"4x4"` - 4x4 grid with equal columns and rows
 * - `"5x4"` - 5x4 grid with equal columns and rows
 * - `"5x5"` - 5x5 grid with equal columns and rows
 * - `"h+1x1"` - header and 1-column content. Content takes free space, the header takes minimum space
 * - `"h+2x1"` - header and 2-column content. Content takes free space, the header takes minimum space
 * - `"h+3x1"` - header and 3-column content. Content takes free space, the header takes minimum space
 * - `"h+4x1"` - header and 4-column content. Content takes free space, the header takes minimum space
 * - `"h+5x1"` - header and 5-column content. Content takes free space, the header takes minimum space
 * - `"h+5x3"` - header and 5x3 content. Content takes free space, the header takes
 *      minimum space (this is much like HP presentation template)
 * - `"fib4"` - 4x4 Fibonacci grid
 * - `"fib5"` - 5x5 Fibonacci grid
 */
export type SlideLayout =
  | "1"
  | "2x2"
  | "3x3"
  | "3x4"
  | "4x4"
  | "5x4"
  | "5x5"
  | "h+1x1"
  | "h+2x1"
  | "h+3x1"
  | "h+4x1"
  | "h+5x1"
  | "h+5x3"
  | "fib4"
  | "fib5";
