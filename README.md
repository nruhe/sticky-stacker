# Sticky Stacker [![Project Status: WIP - Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](http://www.repostatus.org/badges/latest/wip.svg)](http://www.repostatus.org/#wip)

**Warning: Early alpha draft!*** *A library for stacking sticky things.*

## Introduction
> **Use Case**: You need to build a multi-column webpage with several elements scattered throughout that need to stick to the viewport without overlapping as the user scrolls past them.

Sticky Stacker is a library designed to trivialize sticky element stacking in an intuitive way. Rather than caring about the page layout, Sticky Stacker simply uses 2d collision detection to determine whether an element has collided with either a sticking element or the edge of the viewport. You simply need to wrap your element with the react component provided and let the library take care of the rest!

## Notes

**Do not use this library in any production code!** The version available here is nothing more than an initial draft to flesh out the library. Code lacks unit testing, is brittle and inneficient, and has not been run in any browser besides Chrome. Furthermore, there are likely to be massive revisions to the interfacing components before the production-ready release. That being said, please feel free to play with the library as you like!

### Goals
* Refactor code to address glaring issues.
* Allow elements to stick to other edges besides the top.
* Let scrollable page elements stack sticky things (not just window).
* Enable configuration of sticky elements.
* Create plugin interface and life-cycle hooks.
* Support other popular frameworks besides react.

## License

The ISC License

Copyright (c) 2017, Natalie Ruhe

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
