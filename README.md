# ![Logo](https://cdn.jsdelivr.net/gh/intensed-dev/keyframecss@latest/website/images/logo_white.svg) KeyframeCSS

KeyframeCSS is a lightweight, utility-first CSS animation library designed to simplify how animations are applied in modern web interfaces. Instead of writing custom keyframes or maintaining large CSS files, animations are activated through predictable class names such as `anim kf-bounce`. The goal is to make animations reusable, composable, and consistent across projects without introducing runtime overhead or JavaScript dependencies.

Example usage:

```html
<div class="anim kf-bounce"></div>
```


## Release & Project Status

![Version](https://img.shields.io/github/v/release/intensed-dev/keyframecss-source?style=for-the-badge)
![License](https://img.shields.io/github/license/intensed-dev/keyframecss-source?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/intensed-dev/keyframecss-source?style=for-the-badge)


## Repository Activity

![Issues](https://img.shields.io/github/issues/intensed-dev/keyframecss-source?style=for-the-badge)
![Pull Requests](https://img.shields.io/github/issues-pr/intensed-dev/keyframecss-source?style=for-the-badge)


## Community Metrics

![Stars](https://img.shields.io/github/stars/intensed-dev/keyframecss-source?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/intensed-dev/keyframecss-source?style=for-the-badge)
![Watchers](https://img.shields.io/github/watchers/intensed-dev/keyframecss-source?style=for-the-badge)


## Installation

KeyframeCSS is distributed via CDN to ensure fast integration without build steps or package managers. You can include the library directly in your HTML and start using animations immediately.
Alternatively, you could also download KeyframeCSS.

### Stable Release (Recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/intensed-dev/keyframecss-source@latest/src/all.min.css">
```


### Versioned Release

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/intensed-dev/keyframecss-source@0.5.1/src/all.min.css">
```


### Development Release (Deprecated)

The development build was previously used for experimental features and early testing. However, it is now deprecated and will no longer receive updates. With version **v0.5.2**, development builds are officially removed from the distribution pipeline.

All users are strongly encouraged to migrate away from development builds before **June 21st, 2026**, as support and updates for these files have already been discontinued.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/intensed-dev/keyframecss-source@0.5.1/src/development.min.css">
```


## Usage

KeyframeCSS works by applying animation classes directly to HTML elements. Each animation is defined as a reusable keyframe preset, while modifiers allow control over timing and behavior.

```html
<div class="anim kf-bounce"></div>
```

Animations can be further adjusted using modifier classes. These modifiers change runtime behavior without requiring additional CSS.

```html
<div class="anim kf-bounce fast infinite"></div>
```


## Animation System

The library includes a set of predefined animations that can be combined with utility modifiers. Each animation is designed to remain lightweight while maintaining smooth performance across modern browsers.

```html
<div class="anim kf-bounce"></div>
<div class="anim kf-fade-in"></div>
<div class="anim kf-slide-up"></div>
```


## Architecture

KeyframeCSS is built entirely on native CSS keyframes. The library maps semantic class names to predefined animation definitions, allowing developers to apply motion without writing custom CSS logic. No JavaScript runtime is required, and all animations execute natively within the browser rendering engine.


## MotionJS Integration

> Please note: MotionJS is still in early development.

For dynamic behavior, KeyframeCSS can be combined with MotionJS. This allows developers to create custom animations in a custom Syntax called **MotionCode**, which gets then translated to real animations. For this, the MotionJS CDN is needed.

```html
<div data-anim="KF|T1400|E:sine|Y:0=0,0.5=-30,1=0|SX:0=1,0.5=1.3,1=1|SY:0=1,0.5=0.7,1=1|R:0=0,1=8|O:0=1,0.5=0.85,1=1"></div>

<script src="https://cdn.jsdelivr.net/gh/intensed-dev/keyframecss-source@latest/motion/development.min.js"></script>
```


## Repository Structure

```text
keyframecss-source/
 ├── src/
 ├── motion/
 ├── README.md
```


## Contribution Workflow

Contributions are handled through a fork-based workflow. Every change must be submitted via pull request and undergo review before being merged into the main branch. This ensures consistency, stability, and long-term maintainability of the animation system.

Refer to CONTRIBUTING.md for detailed guidelines.


## Security Policy

Security-related issues must not be reported through public issues. Instead, they should follow the reporting process defined in SECURITY.md to ensure responsible disclosure and proper handling.


## Roadmap

Future development focuses on expanding the animation set, improving performance optimizations, introducing CSS variable-based configuration, and deepening integration with MotionJS.


## Browser Support

KeyframeCSS is designed for modern browsers and is tested on the latest stable versions of Chrome, Firefox, Edge, and Safari.


## License

This project is distributed under the MIT License unless otherwise specified.
